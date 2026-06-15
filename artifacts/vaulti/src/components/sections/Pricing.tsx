import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Zap, Database, Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Clock,
    name: "Lite Node",
    storage: "50 GB",
    duration: "6-Month Allocation",
    pricing: "Fixed Cost",
    tagline: "Entry protocol",
    featured: false,
    features: ["Full-Resolution Backup", "Auto-Sync Enabled", "Open-Source Encryption", "6-Month Storage"],
  },
  {
    icon: Zap,
    name: "Standard Node",
    storage: "200 GB",
    duration: "1-Year Allocation",
    pricing: "Fixed Cost",
    tagline: "Most Popular",
    featured: true,
    badge: "RECOMMENDED",
    features: [
      "Full-Resolution Backup",
      "Auto-Sync Enabled",
      "Open-Source Encryption",
      "12-Month Storage",
      "Priority Support",
      "Migration Assistance",
    ],
  },
  {
    icon: Database,
    name: "Event Capsule",
    storage: "100 GB",
    duration: "30-Day Allocation",
    pricing: "Fixed Cost",
    tagline: "Ephemeral protocol",
    featured: false,
    features: ["Full-Resolution Backup", "Auto-Sync Enabled", "Open-Source Encryption", "30-Day Archive"],
  },
];

function PricingCard({ tier, index, isInView }: { tier: typeof tiers[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 rounded-sm ${
        tier.featured
          ? "bg-[#0a0f1c] border-2 border-[#06b6d4] shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          : "bg-[#0a0f1c]/60 border border-[#06b6d4]/20"
      } ${hovered ? "shadow-[0_0_25px_rgba(6,182,212,0.2)]" : ""}`}
    >
      {/* Featured badge */}
      {tier.badge && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="bg-[#06b6d4] text-[#080c14] font-mono font-bold text-xs px-6 py-1.5 rounded-b-sm uppercase tracking-wider">
            {tier.badge}
          </div>
        </div>
      )}

      <div className={`p-8 ${tier.badge ? "pt-10" : ""}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 ${
            tier.featured || hovered ? "bg-[#06b6d4]/10 border border-[#06b6d4]/30" : "bg-[#06b6d4]/5 border border-[#06b6d4]/20"
          }`}>
            <Icon className={`w-5 h-5 transition-colors duration-300 ${
              tier.featured || hovered ? "text-[#06b6d4]" : "text-slate-500"
            }`} />
          </div>
          <div>
            <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">{tier.tagline}</div>
          </div>
        </div>

        <h3 className="font-mono text-xl font-bold text-white mb-2 uppercase tracking-wider">{tier.name}</h3>

        <div className="mb-6">
          <div className="text-4xl font-bold text-white mb-1">
            <span className={tier.featured ? "text-[#06b6d4]" : "text-white"}>{tier.storage}</span>
          </div>
          <div className="font-mono text-sm text-slate-500">{tier.duration}</div>
          <div className="font-mono text-xs text-[#06b6d4] mt-1 uppercase tracking-wider">{tier.pricing}</div>
        </div>

        <div className="space-y-2 mb-8">
          {tier.features.map((f) => (
            <div key={f} className="flex items-center gap-2 font-mono text-sm text-slate-400">
              <Check className="w-4 h-4 text-[#06b6d4] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <a
          href="https://m.me/your_fb_username"
          className={`block w-full text-center font-mono font-semibold text-sm py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider ${
            tier.featured
              ? "bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/40 hover:bg-[#06b6d4]/20"
              : "bg-[#06b6d4]/5 text-slate-400 hover:text-[#06b6d4] border border-[#06b6d4]/20 hover:border-[#06b6d4]/40"
          }`}
        >
          Initialize
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-24 px-4 bg-[#080c14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06b6d4]/70 uppercase tracking-widest border border-[#06b6d4]/30 px-4 py-2 rounded-sm mb-6 bg-[#06b6d4]/5">
            <Database className="w-4 h-4" />
            Allocation Protocols
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resource Allocation
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl mx-auto">
            No recurring subscriptions. No hidden fees. Fixed cost per allocation period.
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
