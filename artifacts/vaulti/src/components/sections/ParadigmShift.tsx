import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  {
    label: "Privacy Model",
    bad: "Data tracking & profiling",
    good: "100% zero-knowledge node",
  },
  {
    label: "Photo Quality",
    bad: "Compressed, lossy uploads",
    good: "Absolute original quality",
  },
  {
    label: "Pricing",
    bad: "Mandatory monthly rent",
    good: "Fixed cost, no surprise bills",
  },
  {
    label: "Code",
    bad: "Closed, proprietary black box",
    good: "Auditable Nextcloud engine",
  },
  {
    label: "Admin Access",
    bad: "Can view your personal files",
    good: "Zero visibility — ever",
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
            Corporate Cloud vs. Vaulti
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See exactly what you're giving up with the big providers — and what you gain back with Vaulti.
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
              <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Corporate Cloud</span>
            </div>
            <div className="p-4 bg-emerald-50/50 border-b border-l border-slate-100">
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">Vaulti Open Cloud</span>
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
