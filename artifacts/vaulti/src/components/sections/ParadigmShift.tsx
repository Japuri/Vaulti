import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  {
    label: "Privacy Model",
    bad: "Data profiling & behavioral tracking",
    good: "No tracking — ever",
  },
  {
    label: "AI Scanning",
    bad: "Hidden AI library scanning of your files",
    good: "Zero scanning or analysis",
  },
  {
    label: "Photo Quality",
    bad: "Compressed, lossy uploads",
    good: "Absolute original quality preserved",
  },
  {
    label: "Pricing",
    bad: "Perpetual monthly billing — forever",
    good: "Fixed windows, pay when ready",
  },
  {
    label: "File Encryption",
    bad: "Accessible to corporate & third-party teams",
    good: "Isolated server-side encryption",
  },
  {
    label: "Code Transparency",
    bad: "Closed, proprietary black box",
    good: "Publicly audited open-source core",
  },
];

export function ParadigmShift() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
            The honest comparison
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Standard Cloud vs. Vaulti
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See exactly what you're giving up with typical big-name providers — and what you get back when you own your storage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          <div className="grid grid-cols-[1fr_1.4fr_1.4fr]">
            <div className="p-4 bg-slate-50 border-b border-slate-100" />
            <div className="p-4 bg-red-50/50 border-b border-l border-slate-100">
              <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Typical Cloud Services</span>
            </div>
            <div className="p-4 bg-emerald-50/50 border-b border-l border-slate-100">
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">Vaulti Open Architecture</span>
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
              className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-slate-100 last:border-b-0"
            >
              <div className="p-4 flex items-center bg-slate-50/50">
                <span className="text-sm font-semibold text-slate-700">{row.label}</span>
              </div>
              <div className="p-4 border-l border-slate-100 flex items-center gap-3">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-sm text-slate-500">{row.bad}</span>
              </div>
              <div className="p-4 border-l border-slate-100 flex items-center gap-3 bg-emerald-50/30">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium text-slate-800">{row.good}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
