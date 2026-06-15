import { motion } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 overflow-hidden">
      {/* Scan-line texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,1) 2px, rgba(6,182,212,1) 3px)",
          backgroundSize: "100% 4px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <Shield className="w-8 h-8 text-primary glow-text" />
            <span className="text-3xl font-bold tracking-widest text-white glow-text uppercase">VAULTI</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-muted-foreground/70 uppercase tracking-widest mb-10"
          >
            Data Sovereignty. Absolute Encryption. Yours.
          </motion.p>

          <motion.a
            href="https://m.me/your_fb_username"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary text-primary px-8 py-4 rounded-sm font-mono font-bold uppercase tracking-widest text-sm hover:bg-primary/20 transition-all duration-300 glow-border"
          >
            Initialize Your Vault
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Vaulti. All cipher rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Protocol", "Terms of Operation", "Secure Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs text-muted-foreground/50 hover:text-primary transition-colors uppercase tracking-wider"
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
