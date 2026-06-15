import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass-panel border-b border-primary/30 py-4 px-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-primary glow-text" />
        <span className="text-xl font-bold tracking-widest text-white glow-text uppercase">VAULTI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-mono">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#pipeline" className="hover:text-primary transition-colors">Pipeline</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2">
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
          />
          <span className="text-xs font-mono text-green-500/80 uppercase">Node Matrix: Operational</span>
        </div>
        <a href="https://m.me/your_fb_username" className="bg-primary/10 border border-primary text-primary px-4 py-2 rounded-sm text-sm font-mono hover:bg-primary/20 transition-all glow-border uppercase tracking-wide">
          Initialize Vault
        </a>
      </div>
    </motion.nav>
  );
}
