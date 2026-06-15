import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Why do you use open-source Nextcloud?",
    a: "We use the globally trusted, open-source Nextcloud core architecture because your privacy shouldn't be a corporate secret — it should be a verifiable guarantee. Open-source means anyone can audit the code, verify the encryption, and confirm there are no hidden backdoors. With closed-source systems, you simply have to trust the company's word. We believe trust should be earned through transparency, not demanded through obscurity.",
  },
  {
    q: "How am I guaranteed absolute visual privacy?",
    a: "Every photo and video is encrypted on your device using AES-256 before it ever reaches our servers. We receive only encrypted data — we cannot see, analyze, or display your files. Even if someone gained unauthorized access to our infrastructure, they would find only unreadable encrypted data. Your encryption keys are generated and stored on your device, never on our servers.",
  },
  {
    q: "How does the subscription window renewal process work?",
    a: "When your storage period approaches its end, you'll receive a friendly notification with the option to renew. There is no automatic billing or surprise charges. You choose whether to renew, upgrade, or let your data be securely purged. You have full control over every aspect of your storage, always.",
  },
  {
    q: "Can I access my files from multiple devices?",
    a: "Yes! The Nextcloud app is available on iOS, Android, macOS, Windows, and Linux. Once your vault is set up, you can sync and access your encrypted files across all your devices. Each device decrypts files locally using your private credentials — seamlessly and securely.",
  },
  {
    q: "What happens if I need help setting up?",
    a: "We guide you every step of the way via our secure chat. Most people are fully set up and backing up their photos within 10 minutes. There's no technical knowledge required — if you can use a smartphone, you can set up Vaulti. We're here whenever you need us.",
  },
];

function FAQItem({ item, index, isInView }: { item: typeof faqs[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.07 }}
      className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/80 transition-colors duration-200"
      >
        <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${open ? "text-blue-600" : "text-slate-400"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-slate-100">
              <p className="text-slate-500 leading-relaxed pt-4 text-sm">{item.a}</p>
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
    <section id="faq" ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Good Questions Deserve Honest Answers
          </h2>
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
