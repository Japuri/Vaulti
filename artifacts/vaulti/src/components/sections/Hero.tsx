import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[100dvh] pt-32 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Your Memories Are Not <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 glow-text">Public Property.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-mono leading-relaxed"
        >
          True zero-knowledge cloud storage. Automatically back up your phone's full-resolution 4K media with absolute cryptographic isolation. Not even the server infrastructure administrator can view your files.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="https://m.me/your_fb_username" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-white transition-all duration-200 bg-primary/10 border border-primary rounded-sm overflow-hidden hover:bg-primary/20 glow-border uppercase tracking-widest"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Your Vault via Secure Chat
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
