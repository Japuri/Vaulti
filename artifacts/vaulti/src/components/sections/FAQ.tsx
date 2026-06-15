import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Why do you use the open-source Nextcloud core?",
    a: "Because your security shouldn't rest on our word alone. Nextcloud is a globally vetted, open-source server architecture whose code has been independently audited by security researchers worldwide. Using a proven, publicly inspectable foundation means you never have to trust unproven custom code — the safety guarantees are visible and verifiable by anyone.",
  },
  {
    q: "Can the administrator browse my raw photos?",
    a: "No. The Nextcloud server-side architecture automatically scrambles incoming media assets into cryptographic blocks the moment they hit our hardware storage arrays. While we manage the encrypted server shell framework so we can keep your account running and support you if needed, your raw photo content is structurally isolated — no one on our team can browse or view your personal files through the storage layer.",
  },
  {
    q: "What happens if I forget my password?",
    a: "Because we manage the encrypted server shell framework on your behalf, you can simply contact us via our secure chat to safely reset your account credentials. Unlike fully self-hosted systems where a forgotten password means permanent data loss, our model means we can restore your access securely — without compromising the privacy of your stored media.",
  },
  {
    q: "Can I access my files from multiple devices?",
    a: "Yes. The free Nextcloud app is available on iOS, Android, macOS, Windows, and Linux. Once your vault is set up, you can sync and access your files across all your devices — everything streams from your securely isolated server storage to whichever device you're using.",
  },
  {
    q: "How does the subscription window renewal work?",
    a: "When your storage period approaches its end, you'll receive a friendly notification with the option to renew. There is no automatic billing or surprise charges — ever. You choose whether to renew, upgrade your capacity, or let your data be securely purged. Full control, always on your terms.",
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
            Honest Answers to Real Questions
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We believe transparency builds more trust than marketing claims. Here's exactly how Vaulti works.
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
