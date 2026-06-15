import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#080c14] border-t border-[#06b6d4]/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <Shield className="w-8 h-8 text-[#06b6d4]" />
            <span className="text-2xl font-bold tracking-tight font-mono text-white uppercase">VAULTI</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-slate-500 mb-8 uppercase tracking-widest"
          >
            Private. Open. Yours.
          </motion.p>

          <motion.a
            href="https://m.me/your_fb_username"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/40 px-8 py-4 rounded-sm font-mono font-bold hover:bg-[#06b6d4]/20 transition-all duration-300 uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            Initialize Your Vault
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="border-t border-[#06b6d4]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-slate-600">
            &copy; {new Date().getFullYear()} VAULTI. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs text-slate-600 hover:text-[#06b6d4] transition-colors duration-300 uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
