import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[60vh] pt-24 pb-12 flex flex-col items-center relative overflow-hidden px-4 bg-[#080c14]">
      {/* Matrix grid background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(6,182,212,0.08),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-[#06b6d4]/10 text-[#06b6d4] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#06b6d4]/30"
        >
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
          Decentralized Zero-Knowledge Architecture
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Your Memories Are Not
          <br />
          <span className="text-[#06b6d4] drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">Public Property.</span>
        </motion.h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          True zero-knowledge cloud storage. Automatically back up your phone&apos;s full-resolution 4K media
          with absolute cryptographic isolation. Not even the server infrastructure administrator can view your files.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="https://m.me/your_fb_username"
            className="group relative inline-flex items-center gap-2 overflow-hidden bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/40 px-8 py-4 rounded-sm font-mono font-bold text-lg uppercase tracking-widest hover:bg-[#06b6d4]/20 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <span className="relative z-10">Initialize Your Vault via Secure Chat</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          </a>
        </div>
      </div>
    </section>
  );
}
