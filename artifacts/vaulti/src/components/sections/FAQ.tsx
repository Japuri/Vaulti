import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Why is the architecture open-source?",
    a: "We use the globally trusted, open-source Nextcloud core because your privacy shouldn't be a corporate secret — it should be a verifiable guarantee. Open-source means anyone can audit the code, verify the encryption, and confirm there are no hidden backdoors. With closed-source systems, you simply have to trust the company's word. We believe trust should be earned through transparency, not demanded through obscurity.",
  },
  {
    q: "How am I guaranteed absolute visual privacy?",
    a: "Every photo and video you upload is encrypted on your device using industry-standard AES-256 encryption before it ever reaches our servers. We receive only encrypted data blocks — we cannot see, analyze, or display your files. Even if someone gained unauthorized access to our infrastructure, they would find only unreadable cipher data. Your encryption keys are generated and stored on your device, never on our servers.",
  },
  {
    q: "How does the allocation renewal process work?",
    a: "When your storage period approaches its end, you will receive a notification with the option to renew your allocation. There is no automatic billing or surprise charges. You choose whether to renew, upgrade, or let your data be securely purged. We believe in giving you full control over every aspect of your storage.",
  },
  {
    q: "Can I access my files from multiple devices?",
    a: "Yes. The Nextcloud app is available on iOS, Android, macOS, Windows, and Linux. Once you set up your vault, you can sync and access your encrypted files across all your devices. Each device receives the same encrypted data and decrypts it locally using your private credentials.",
  },
  {
    q: "What happens if I lose my encryption credentials?",
    a: "Your encryption credentials are generated and stored locally on your devices. We do not have access to them, which means we cannot recover them for you. This is a deliberate security choice — it ensures that no one, including us, can ever access your files. We strongly recommend keeping your credentials backed up in a secure password manager.",
  },
];

function FAQItem({ item, index, isInView }: { item: typeof faqs[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      className="cyber-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#06b6d4]/5 transition-colors duration-200"
      >
        <span className="font-mono text-sm font-medium text-slate-300 pr-4">{item.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-4 h-4 transition-colors duration-200 ${open ? "text-[#06b6d4]" : "text-slate-500"}`} />
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
            <div className="px-6 pb-6 pt-0 border-t border-[#06b6d4]/10">
              <p className="font-mono text-sm text-slate-500 leading-relaxed pt-4">{item.a}</p>
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
    <section id="faq" ref={ref} className="py-24 px-4 bg-[#0a0f1c]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06b6d4]/70 uppercase tracking-widest border border-[#06b6d4]/30 px-4 py-2 rounded-sm mb-6 bg-[#06b6d4]/5">
            <HelpCircle className="w-4 h-4" />
            Common Queries
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge Base
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl mx-auto">
            Technical answers to the questions that matter.
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
