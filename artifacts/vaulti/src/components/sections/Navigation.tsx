import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass-dark py-4 px-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-[#06b6d4]" />
        <span className="text-xl font-bold tracking-tight text-white font-mono">VAULTI</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-400 font-medium">
        <a href="#features" className="hover:text-[#06b6d4] transition-colors duration-300">Features</a>
        <a href="#pipeline" className="hover:text-[#06b6d4] transition-colors duration-300">How It Works</a>
        <a href="#pricing" className="hover:text-[#06b6d4] transition-colors duration-300">Pricing</a>
        <a href="#faq" className="hover:text-[#06b6d4] transition-colors duration-300">FAQ</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-gentle-pulse" />
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Network: Active
          </span>
        </div>
        <a
          href="https://m.me/your_fb_username"
          className="bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/40 px-4 py-2 rounded-sm text-sm font-mono font-medium hover:bg-[#06b6d4]/20 transition-all duration-300 uppercase tracking-wider"
        >
          Set Up Your Vault
        </a>
      </div>
    </motion.nav>
  );
}
