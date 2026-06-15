import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Shield className="w-7 h-7 text-blue-400" />
            <span className="text-2xl font-bold tracking-tight">Vaulti</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-slate-400 mb-8 max-w-md"
          >
            Your photos, your memories, your privacy. A secure open-source personal cloud built for everyday people who believe their data is their own.
          </motion.p>

          <motion.a
            href="https://m.me/your_fb_username"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/40"
          >
            Set Up Your Private Vault
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold">Vaulti</span>
            </div>
            <span className="text-sm text-slate-500">&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
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
