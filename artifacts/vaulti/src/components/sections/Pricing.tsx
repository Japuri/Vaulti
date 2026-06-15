import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Zap, Camera, Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Clock,
    name: "Lite Backup Pack",
    storage: "50 GB",
    duration: "6-Month Active Vault",
    pricing: "Fixed One-Time Payment",
    tagline: "Great for getting started",
    featured: false,
    features: [
      "Full-resolution photo backup",
      "Auto-sync enabled",
      "AES-256 encryption",
      "6 months of secure storage",
      "Nextcloud app access",
    ],
  },
  {
    icon: Zap,
    name: "Extended Media Vault",
    storage: "200 GB",
    duration: "1-Year Active Vault",
    pricing: "Fixed One-Time Payment",
    tagline: "Most popular choice",
    featured: true,
    badge: "Best Value",
    features: [
      "Full-resolution photo & video backup",
      "Auto-sync enabled",
      "AES-256 encryption",
      "12 months of secure storage",
      "Nextcloud app access",
      "Priority support",
      "Migration assistance",
    ],
  },
  {
    icon: Camera,
    name: "Event & Trip Capsule",
    storage: "100 GB",
    duration: "30-Day Automated Vault",
    pricing: "Fixed One-Time Payment",
    tagline: "Perfect for events & travel",
    featured: false,
    features: [
      "Full-resolution photo & video backup",
      "Auto-sync enabled",
      "AES-256 encryption",
      "30-day vault archive",
      "Nextcloud app access",
    ],
  },
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
            Simple, transparent pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            No Subscriptions. No Surprises.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            One fixed payment. Your vault runs for the full period. Renew when you're ready — on your terms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className={`relative bg-white rounded-2xl overflow-hidden card-hover ${
                  tier.featured
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-100"
                    : "border border-slate-100 shadow-sm"
                }`}
              >
                {tier.badge && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-4 py-2 text-center uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}

                <div className="p-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${tier.featured ? "bg-blue-100" : "bg-slate-100"}`}>
                    <Icon className={`w-6 h-6 ${tier.featured ? "text-blue-600" : "text-slate-500"}`} />
                  </div>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{tier.tagline}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{tier.name}</h3>

                  <div className="mb-1">
                    <span className={`text-4xl font-extrabold ${tier.featured ? "text-blue-600" : "text-slate-900"}`}>{tier.storage}</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-1">{tier.duration}</div>
                  <div className="text-xs font-semibold text-emerald-600 mb-6">{tier.pricing}</div>

                  <div className="space-y-2.5 mb-8">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://m.me/your_fb_username"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      tier.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-blue-200 hover:shadow-lg"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
