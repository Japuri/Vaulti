import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, ArrowRight, Star } from "lucide-react";

const tiers = [
  {
    name: "Free Starter Vault",
    price: "Free",
    priceNote: "No credit card needed",
    storage: "10 GB",
    tagline: "See for yourself.",
    description: "Try Vaulti before you commit. Full-resolution backup, real private storage — at zero cost. When you see how it works, upgrading is easy.",
    featured: false,
    badge: null,
    cta: "Start free",
    features: [
      "10 GB private storage",
      "Full-resolution backup",
      "Auto-sync on any device",
      "TLS-encrypted transfers",
    ],
  },
  {
    name: "Event & Trip Capsule",
    price: "₱199",
    priceNote: "per month",
    storage: "50 GB",
    tagline: "For occasional backups.",
    description: "Travel memories. Birthday shoots. Holiday photos. Enough space for the moments that matter, without paying for what you don't need.",
    featured: false,
    badge: null,
    cta: "Get started",
    features: [
      "50 GB private storage",
      "Full-resolution backup",
      "Auto-sync on any device",
      "TLS-encrypted transfers",
      "Cancel anytime",
    ],
  },
  {
    name: "Lite Backup Pack",
    price: "₱399",
    priceNote: "per month",
    storage: "150 GB",
    tagline: "For everyday personal backup.",
    description: "Your daily life creates more than you think. 150 GB keeps years of photos and videos safe — automatically, silently, always.",
    featured: false,
    badge: null,
    cta: "Get started",
    features: [
      "150 GB private storage",
      "Full-resolution backup",
      "Auto-sync on any device",
      "TLS-encrypted transfers",
      "Priority support",
      "Cancel anytime",
    ],
  },
  {
    name: "Extended Media Vault",
    price: "₱799",
    priceNote: "per month",
    storage: "500 GB",
    tagline: "Best for families & creators.",
    description: "RAW files. 4K video. A whole family's worth of memories. 500 GB means you never have to choose what to keep — and neither does anyone else in the family.",
    featured: true,
    badge: "⭐ Recommended",
    cta: "Get the best plan",
    features: [
      "500 GB private storage",
      "Full-resolution backup",
      "Auto-sync on any device",
      "TLS-encrypted transfers",
      "Priority support",
      "Migration assistance",
      "Cancel anytime",
    ],
  },
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-28 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Start free. Scale when ready.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Monthly subscription. Cancel anytime. No surprise charges — ever.
          </p>
        </motion.div>

        {/* Billing note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          <Zap className="w-4 h-4 text-emerald-500" />
          <span className="text-sm text-slate-500 font-medium">
            Active Vault renews automatically each month — cancel anytime, no questions asked.
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl overflow-hidden ${
                tier.featured
                  ? "border-2 border-blue-600 shadow-2xl shadow-blue-100 bg-white scale-[1.03]"
                  : "border border-slate-200 shadow-sm bg-white"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="bg-blue-600 text-white text-xs font-bold px-4 py-2.5 text-center tracking-wide">
                  {tier.badge}
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan name */}
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{tier.tagline}</p>
                <h3 className={`text-base font-bold mb-5 leading-tight ${tier.featured ? "text-blue-700" : "text-slate-900"}`}>
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className={`text-4xl font-black ${tier.featured ? "text-blue-600" : "text-slate-900"}`}>
                    {tier.price}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-1">{tier.priceNote}</p>
                <p className={`text-2xl font-bold mb-5 ${tier.featured ? "text-blue-500" : "text-slate-600"}`}>
                  {tier.storage}
                  <span className="text-sm font-normal text-slate-400 ml-1">storage</span>
                </p>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.featured ? "bg-blue-100" : "bg-emerald-100"}`}>
                        <Check className={`w-2.5 h-2.5 ${tier.featured ? "text-blue-600" : "text-emerald-600"}`} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="mailto:japuri0318@gmail.com"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                    tier.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                      : tier.price === "Free"
                      ? "border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400"
        >
          {[
            "No auto-charge surprises",
            "Cancel before next billing cycle",
            "Full data export on request",
            "Real human support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
