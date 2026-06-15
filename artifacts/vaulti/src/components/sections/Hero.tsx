import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 flex flex-col items-center justify-center relative overflow-hidden px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(219,234,254,0.6),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-gentle-pulse" />
          Powered by open-source Nextcloud — verifiable privacy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
        >
          Reclaim Your Photos.{" "}
          <span className="text-blue-600">Own Your Memories.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Automated, full-resolution background backup for your phone's photos and videos. Powered by the globally trusted, open-source Nextcloud engine, your vault is completely private.{" "}
          <span className="font-semibold text-slate-800">Not even the system administrator can ever view your files.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a
            href="https://m.me/your_fb_username"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-200"
          >
            Set Up Your Private Vault
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-slate-600 px-6 py-4 rounded-xl font-medium hover:text-slate-900 transition-colors duration-200"
          >
            See how it works
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
        >
          {[
            "AES-256 Encrypted",
            "No Data Profiling",
            "Open-Source Verified",
            "Zero Admin Access",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
