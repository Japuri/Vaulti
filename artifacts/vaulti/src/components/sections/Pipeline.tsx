import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Download, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initialize Protocol",
    description:
      "Start a secure chat to establish your cryptographic allocation. We configure your node parameters based on your storage requirements.",
  },
  {
    number: "02",
    icon: Download,
    title: "Generate Credentials",
    description:
      "Receive your private key pair via a secure, one-time link. Download the Nextcloud app and establish your encrypted connection.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Continuous Replication",
    description:
      "Enable auto-backup on your device. All 4K media is encrypted locally before transmission, ensuring your data never leaves your device unencrypted.",
  },
];

function StepCard({ step, index, isInView }: { step: typeof steps[0]; index: number; isInView: boolean }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      className="cyber-card cyber-card-hover p-8 relative"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-5xl font-bold text-[#06b6d4]/10 leading-none">{step.number}</span>
          <div className="w-12 h-12 bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-sm flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#06b6d4]" />
          </div>
        </div>

        <h3 className="font-mono text-lg font-bold text-white mb-3 uppercase tracking-wider">{step.title}</h3>
        <p className="font-mono text-sm text-slate-500 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pipeline" ref={ref} className="py-24 px-4 bg-[#0a0f1c]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06b6d4]/70 uppercase tracking-widest border border-[#06b6d4]/30 px-4 py-2 rounded-sm mb-6 bg-[#06b6d4]/5">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
            Deployment Protocol
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three Steps to Sovereignty
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl mx-auto">
            No technical knowledge required. Your cryptographic vault is configured in minutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#06b6d4]/20 via-[#06b6d4]/40 to-[#06b6d4]/20" />

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
