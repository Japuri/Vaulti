import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, ShieldAlert } from "lucide-react";

const rows = [
  {
    label: "Storage Model",
    bad: "Data Aggregation & Profiling",
    good: "Zero-Knowledge E2EE",
  },
  {
    label: "Media Quality",
    bad: "Compressed, Downscaled Media",
    good: "Bit-for-Bit Original Quality",
  },
  {
    label: "Pricing Structure",
    bad: "Perpetual Subscription Rent",
    good: "Flat Fixed Allocation Packs",
  },
  {
    label: "Admin Access",
    bad: "Full Server-Side Visibility",
    good: "Cryptographically Blind Nodes",
  },
  {
    label: "Data At Rest",
    bad: "Plaintext on Corporate Servers",
    good: "Client-Side Encrypted Always",
  },
];

export function ParadigmShift() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.03),transparent)]" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary/70 uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-sm mb-6 bg-primary/5">
            <ShieldAlert className="w-3 h-3" />
            Competitive Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Paradigm Shift</h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Monopolistic cloud infrastructure was never designed to protect you. Vaulti was.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel rounded-sm overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-border">
            <div className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-widest" />
            <div className="p-4 border-l border-border">
              <span className="font-mono text-xs text-red-400/70 uppercase tracking-widest">Monopolistic Clouds</span>
            </div>
            <div className="p-4 border-l border-primary/30 bg-primary/5">
              <span className="font-mono text-xs text-primary uppercase tracking-widest glow-text">Vaulti</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-border last:border-b-0 group"
            >
              <div className="p-4 flex items-center">
                <span className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">{row.label}</span>
              </div>
              <div className="p-4 border-l border-border flex items-center gap-3 bg-red-950/10">
                <X className="w-4 h-4 text-red-500/60 shrink-0" />
                <span className="font-mono text-xs text-foreground/40">{row.bad}</span>
              </div>
              <div className="p-4 border-l border-primary/20 bg-primary/5 flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0 drop-shadow-[0_0_4px_rgba(6,182,212,0.8)]" />
                <span className="font-mono text-xs text-foreground/90">{row.good}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
