import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass-nav py-3 px-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-blue-600" />
        <span className="text-lg font-bold tracking-tight text-slate-900">Vaulti</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
        <a href="#features" className="hover:text-blue-600 transition-colors duration-200">Features</a>
        <a href="#how-it-works" className="hover:text-blue-600 transition-colors duration-200">How It Works</a>
        <a href="#pricing" className="hover:text-blue-600 transition-colors duration-200">Pricing</a>
        <a href="#faq" className="hover:text-blue-600 transition-colors duration-200">FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-gentle-pulse" />
          <span className="text-xs text-slate-500 font-medium">
            Vaulti Security Network: Online &amp; Fully Protected
          </span>
        </div>
        <a
          href="https://m.me/your_fb_username"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-sm"
        >
          Set Up Your Vault
        </a>
      </div>
    </motion.nav>
  );
}
