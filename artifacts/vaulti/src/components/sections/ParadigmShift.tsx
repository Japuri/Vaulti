import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  {
    label: "Privacy Model",
    bad: "Data Tracking & Profiling",
    good: "100% Zero-Knowledge Node",
  },
  {
    label: "Media Quality",
    bad: "Compressed, Lossy Uploads",
    good: "Absolute Original Fidelity",
  },
  {
    label: "Pricing",
    bad: "Mandatory Monthly Rent",
    good: "Fixed Cost Allocation",
  },
  {
    label: "Open Source",
    bad: "Closed, Proprietary Black Box",
    good: "Auditable Nextcloud Engine",
  },
  {
    label: "Admin Access",
    bad: "Can Access Your Files",
    good: "Zero Visibility — Ever",
  },
];

export function ParadigmShift() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-[#080c14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06b6d4]/70 uppercase tracking-widest border border-[#06b6d4]/30 px-4 py-2 rounded-sm mb-6 bg-[#06b6d4]/5">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
            Protocol Comparison
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Paradigm Shift
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl mx-auto">
            How centralized corporate storage compares to zero-knowledge architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="cyber-card overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-[#06b6d4]/20 bg-[#06b6d4]/5">
            <div className="p-4" />
            <div className="p-4 border-l border-[#06b6d4]/20">
              <span className="font-mono text-sm font-semibold text-red-500/60 uppercase tracking-wider">Corporate Cloud</span>
            </div>
            <div className="p-4 border-l border-[#06b6d4]/20">
              <span className="font-mono text-sm font-semibold text-[#06b6d4] uppercase tracking-wider">VAULTI</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-[#06b6d4]/10 last:border-b-0"
            >
              <div className="p-4 flex items-center">
                <span className="font-mono text-sm font-medium text-slate-400">{row.label}</span>
              </div>
              <div className="p-4 border-l border-[#06b6d4]/10 flex items-center gap-3 bg-red-950/10">
                <X className="w-4 h-4 text-red-500/60 shrink-0" />
                <span className="font-mono text-sm text-slate-500">{row.bad}</span>
              </div>
              <div className="p-4 border-l border-[#06b6d4]/10 bg-[#06b6d4]/5 flex items-center gap-3">
                <Check className="w-4 h-4 text-[#06b6d4] shrink-0" />
                <span className="font-mono text-sm font-medium text-slate-300">{row.good}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
