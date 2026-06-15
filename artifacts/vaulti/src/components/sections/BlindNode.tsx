import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";

const HEX_CHARS = "0123456789ABCDEF";

function randomHex(len: number) {
  return Array.from({ length: len }, () => HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)]).join("");
}

function CipherBlock({ delay, x, y }: { delay: number; x: number; y: number }) {
  const [text, setText] = useState(randomHex(8));
  useEffect(() => {
    const interval = setInterval(() => setText(randomHex(8)), 300 + Math.random() * 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, x, y }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 150 }}
      className="absolute font-mono text-xs text-[#06b6d4]/70 bg-[#06b6d4]/10 border border-[#06b6d4]/30 px-2 py-1 rounded-sm whitespace-nowrap"
    >
      {text}
    </motion.div>
  );
}

export function BlindNode() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<"idle" | "entering" | "shattering" | "encrypted" | "locked">("idle");

  useEffect(() => {
    if (!isInView) return;
    const run = () => {
      setPhase("idle");
      setTimeout(() => setPhase("entering"), 600);
      setTimeout(() => setPhase("shattering"), 1600);
      setTimeout(() => setPhase("encrypted"), 2400);
      setTimeout(() => setPhase("locked"), 3400);
      setTimeout(run, 6500);
    };
    run();
    return () => {};
  }, [isInView]);

  const shatterBlocks = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 120,
    delay: i * 0.03,
  }));

  return (
    <section id="features" ref={ref} className="py-32 px-4 relative bg-[#080c14] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06b6d4]/70 uppercase tracking-widest border border-[#06b6d4]/30 px-4 py-2 rounded-sm mb-6 bg-[#06b6d4]/5">
            <Lock className="w-3 h-3" />
            Cryptographic Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Blind-Node Architecture</h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl mx-auto">
            What the server infrastructure actually receives. Zero visual data. Zero metadata. Zero access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: User side - The dramatic shattering effect */}
          <div className="border border-[#06b6d4]/20 bg-[#0a0f1c]/80 backdrop-blur-sm rounded-sm p-8 min-h-[320px] flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="w-4 h-4 text-[#06b6d4]" />
              <span className="font-mono text-sm text-[#06b6d4] uppercase tracking-widest">User View</span>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                {phase === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-28 h-28 border-2 border-[#06b6d4]/30 rounded-sm flex items-center justify-center bg-[#06b6d4]/5">
                      <div className="w-20 h-14 bg-gradient-to-br from-blue-400/50 to-[#06b6d4]/50 rounded-sm relative overflow-hidden">
                        <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-yellow-400/70" />
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-green-400/40 rounded-b-sm" />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500">Original 4K Photo</span>
                  </motion.div>
                )}

                {phase === "entering" && (
                  <motion.div
                    key="entering"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-28 h-28 border-2 border-[#06b6d4] rounded-sm flex items-center justify-center bg-[#06b6d4]/10 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                      <div className="w-20 h-14 bg-gradient-to-br from-blue-400/70 to-[#06b6d4]/70 rounded-sm relative overflow-hidden">
                        <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-yellow-400/80" />
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-green-400/50 rounded-b-sm" />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#06b6d4] animate-pulse">Encrypting locally...</span>
                  </motion.div>
                )}

                {phase === "shattering" && (
                  <motion.div key="shattering" className="relative w-48 h-40 flex items-center justify-center">
                    {shatterBlocks.map((block) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        animate={{
                          x: block.x,
                          y: block.y,
                          opacity: 0,
                          scale: 0.3,
                          rotate: Math.random() * 360,
                        }}
                        transition={{ duration: 0.7, delay: block.delay, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 w-7 h-7 bg-[#06b6d4]/20 border border-[#06b6d4]/40 font-mono text-[10px] flex items-center justify-center text-[#06b6d4]"
                      >
                        {randomHex(2)}
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute font-mono text-xs text-[#06b6d4]"
                    >
                      SHATTERING...
                    </motion.div>
                  </motion.div>
                )}

                {phase === "encrypted" && (
                  <motion.div
                    key="encrypted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-48 h-40"
                  >
                    {shatterBlocks.map((block) => (
                      <CipherBlock
                        key={block.id}
                        delay={block.delay}
                        x={block.x}
                        y={block.y}
                      />
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 text-center">
                      <span className="font-mono text-xs text-[#06b6d4]/60">AES-256 Cipher Blocks</span>
                    </div>
                  </motion.div>
                )}

                {phase === "locked" && (
                  <motion.div
                    key="locked"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <motion.div
                      animate={{ boxShadow: ["0_0_20px_rgba(6,182,212,0.2)", "0_0_40px_rgba(6,182,212,0.4)", "0_0_20px_rgba(6,182,212,0.2)"] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-28 h-28 border-2 border-[#06b6d4] rounded-sm flex items-center justify-center bg-[#06b6d4]/10"
                    >
                      <Lock className="w-12 h-12 text-[#06b6d4]" />
                    </motion.div>
                    <span className="font-mono text-xs text-[#06b6d4]">Encrypted &amp; Locked</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Admin view - Shows what server sees */}
          <div className="border border-red-900/40 bg-[#0a0f1c]/80 backdrop-blur-sm rounded-sm p-8 min-h-[320px] flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <EyeOff className="w-4 h-4 text-red-500/60" />
              <span className="font-mono text-sm text-red-500/60 uppercase tracking-widest">Admin Infrastructure View</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <AnimatePresence>
                {(phase === "idle" || phase === "entering") && (
                  <motion.div
                    key="waiting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-xs text-slate-700"
                  >
                    Awaiting transmission...
                  </motion.div>
                )}
                {(phase === "shattering" || phase === "encrypted" || phase === "locked") && (
                  <motion.div
                    key="scrambled"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full space-y-1.5"
                  >
                    {Array.from({ length: 8 }, (_, i) => (
                      <div key={i} className="font-mono text-xs text-red-900/50 flex items-center gap-2">
                        <span className="text-red-900/30 w-8 shrink-0">{String(i).padStart(3, "0")}:</span>
                        <span className="tracking-wider">{randomHex(32)}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-4 border border-red-900/30 bg-red-950/20 px-4 py-2 rounded-sm">
                <span className="font-mono text-xs text-red-500/60 uppercase tracking-wider">
                  Structurally Unreadable — Zero Access
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
