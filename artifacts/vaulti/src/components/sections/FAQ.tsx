import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How is the Admin prevented from structural browsing?",
    a: "Every file is encrypted client-side using AES-256 before transmission. Our servers receive only opaque cipher blocks with no metadata, filenames, or structure. The administrator infrastructure operates with zero decryption capability — possession of the encrypted data confers no access whatsoever. Our node architecture is cryptographically blinded by design, not policy.",
  },
  {
    q: "What happens to encrypted blocks upon cycle expiration?",
    a: "Upon allocation cycle termination, all associated cipher blocks are permanently purged from the node matrix using cryptographic erasure protocols. Storage sectors are overwritten with randomized data before deallocation. No residual data fragments are recoverable by any party, including Vaulti infrastructure administrators.",
  },
  {
    q: "Can I securely migrate my existing libraries?",
    a: "Yes. Our client-side migration toolkit re-encrypts your existing media locally before transmission. Your plaintext files never touch our infrastructure during the migration process — only their AES-256 encrypted counterparts are transferred. The migration tool supports batch processing of full photo and video libraries from all major platforms.",
  },
  {
    q: "Which devices and operating systems are supported?",
    a: "Vaulti provides native applications for iOS, Android, macOS, Windows, and Linux. All platforms perform local encryption before any data leaves the device. The mobile applications support background sync, maintaining continuous encrypted backup without user intervention.",
  },
  {
    q: "Is my encryption key ever transmitted to Vaulti servers?",
    a: "Never. Your encryption keys are generated and permanently stored on your device. Vaulti servers have no technical mechanism for receiving, storing, or recovering your keys. If you lose your credentials, recovery is impossible — this is a feature, not a limitation. Absolute security requires absolute key control.",
  },
];

function FAQItem({ item, index, isInView }: { item: typeof faqs[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="border border-border rounded-sm overflow-hidden group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-card/20 hover:bg-primary/5 transition-colors duration-200 group"
      >
        <span className="font-mono text-sm text-foreground/90 pr-4 group-hover:text-white transition-colors">{item.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-4 h-4 transition-colors duration-200 ${open ? "text-primary" : "text-muted-foreground"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 border-t border-primary/20 bg-primary/5">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed pt-4">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-32 px-4 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary/70 uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-sm mb-6 bg-primary/5">
            <HelpCircle className="w-3 h-3" />
            Protocol Transparency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Protocol Transparency</h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Technical objections resolved. Zero ambiguity.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
