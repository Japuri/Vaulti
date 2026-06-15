import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Zap, Clock, ChevronRight } from "lucide-react";

const tiers = [
  {
    icon: Clock,
    name: "Lite Capsule",
    storage: "50 GB",
    duration: "6-Month Autonomous Hosting",
    pricing: "Flat Allocation Rate",
    tagline: "Entry-level sovereignty",
    featured: false,
    features: ["AES-256 Client Encryption", "Background Auto-Sync", "Unindexed Token Access", "6-Month Node Lease"],
  },
  {
    icon: Zap,
    name: "Quantum Vault",
    storage: "200 GB",
    duration: "1-Year Autonomous Hosting",
    pricing: "Premium Allocation Rate",
    tagline: "Maximum sovereignty",
    featured: true,
    badge: "Most Sovereign",
    features: ["AES-256 Client Encryption", "Priority Node Allocation", "Background Auto-Sync", "Unindexed Token Access", "12-Month Node Lease", "Migration Toolkit"],
  },
  {
    icon: Database,
    name: "Ephemeral Capsule",
    storage: "100 GB",
    duration: "30-Day Auto-Purge Cycle",
    pricing: "Project Allocation Rate",
    tagline: "Zero-trace project isolation",
    featured: false,
    features: ["AES-256 Client Encryption", "30-Day Cryptographic Purge", "Background Auto-Sync", "Unindexed Token Access"],
  },
];

function PricingCard({ tier, index, isInView }: { tier: typeof tiers[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-sm overflow-hidden ${
        tier.featured
          ? "glass-panel border-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          : "glass-panel"
      }`}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {/* Animated border glow on hover */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : tier.featured ? 0.5 : 0,
          boxShadow: hovered
            ? "inset 0 0 0 1px rgba(6,182,212,0.8), 0 0 30px rgba(6,182,212,0.3)"
            : tier.featured
            ? "inset 0 0 0 1px rgba(6,182,212,0.4), 0 0 15px rgba(6,182,212,0.15)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-sm pointer-events-none"
      />

      {/* Featured badge */}
      {tier.badge && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="bg-primary text-background font-mono text-xs font-bold uppercase tracking-widest px-6 py-1">
            {tier.badge}
          </div>
        </div>
      )}

      <div className={`relative z-10 p-8 ${tier.badge ? "pt-10" : ""}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 border rounded-sm flex items-center justify-center transition-all duration-300 ${
            tier.featured || hovered ? "border-primary bg-primary/10" : "border-border bg-card/50"
          }`}>
            <Icon className={`w-5 h-5 transition-colors duration-300 ${
              tier.featured || hovered ? "text-primary" : "text-muted-foreground"
            }`} />
          </div>
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{tier.tagline}</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{tier.name}</h3>

        <div className="mb-6">
          <div className="text-5xl font-bold text-white mb-1">
            <span className={tier.featured ? "text-primary glow-text" : ""}>{tier.storage}</span>
          </div>
          <div className="font-mono text-sm text-muted-foreground">{tier.duration}</div>
          <div className="font-mono text-xs text-primary/70 mt-1 uppercase tracking-wider">{tier.pricing}</div>
        </div>

        <div className="space-y-2 mb-8">
          {tier.features.map((f) => (
            <div key={f} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <ChevronRight className="w-3 h-3 text-primary shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <a
          href="https://m.me/your_fb_username"
          className={`block w-full text-center font-mono text-sm font-bold uppercase tracking-widest py-3 rounded-sm transition-all duration-300 ${
            tier.featured
              ? "bg-primary text-background hover:bg-primary/90 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              : "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/70"
          }`}
        >
          Initialize Vault
        </a>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary/70 uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-sm mb-6 bg-primary/5">
            <Database className="w-3 h-3" />
            Allocation Tiers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sovereign Allocation Tiers</h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            No recurring subscriptions. No surveillance tax. Select your node allocation and own your encrypted space outright.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
