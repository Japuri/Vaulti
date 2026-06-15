import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Lock } from "lucide-react";

const HEX_CHARS = "0123456789ABCDEF";
const CIPHER_CHARS = "█▓▒░▄▀■□▪▫◆◇○●";

function randomHex(len: number) {
  return Array.from({ length: len }, () => HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)]).join("");
}

function randomCipher(len: number) {
  return Array.from({ length: len }, () => CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)]).join("");
}

function CipherBlock({ delay }: { delay: number }) {
  const [text, setText] = useState(randomHex(8));
  useEffect(() => {
    const interval = setInterval(() => {
      setText(randomHex(8));
    }, 300 + Math.random() * 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 200 }}
      className="font-mono text-xs text-primary/60 bg-primary/5 border border-primary/20 px-2 py-1 rounded-sm"
    >
      {text}
    </motion.div>
  );
}

export function BlindNode() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<"idle" | "entering" | "shattering" | "encrypted">("idle");
  const [adminText, setAdminText] = useState<string[]>([]);

  useEffect(() => {
    if (!isInView) return;
    const run = () => {
      setPhase("idle");
      setAdminText([]);
      setTimeout(() => setPhase("entering"), 500);
      setTimeout(() => setPhase("shattering"), 1800);
      setTimeout(() => {
        setPhase("encrypted");
        setAdminText(Array.from({ length: 12 }, () => randomCipher(12)));
      }, 2800);
      setTimeout(run, 6000);
    };
    run();
    return () => {};
  }, [isInView]);

  useEffect(() => {
    if (phase !== "encrypted") return;
    const interval = setInterval(() => {
      setAdminText(Array.from({ length: 12 }, () => randomCipher(12)));
    }, 500);
    return () => clearInterval(interval);
  }, [phase]);

  const cipherBlocks = Array.from({ length: 16 }, (_, i) => i);

  return (
    <section id="features" ref={ref} className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary/70 uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-sm mb-6 bg-primary/5">
            <Lock className="w-3 h-3" />
            Cryptographic Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Blind-Node Architecture</h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            What the server infrastructure actually receives. Zero visual data. Zero metadata. Zero access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: User side */}
          <div className="glass-panel rounded-sm p-8">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-primary uppercase tracking-widest">User View</span>
            </div>
            <div className="relative h-64 flex items-center justify-center">
              {/* Photo icon entering */}
              <AnimatePresence>
                {phase === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-24 h-24 border-2 border-primary/40 rounded-sm flex items-center justify-center bg-primary/5">
                      <div className="w-16 h-12 bg-gradient-to-br from-blue-400/40 to-primary/40 rounded-sm relative">
                        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-yellow-400/60" />
                        <div className="absolute bottom-0 left-0 right-0 h-5 bg-green-400/30 rounded-b-sm" />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">Original 4K Photo</span>
                  </motion.div>
                )}

                {phase === "entering" && (
                  <motion.div
                    key="entering"
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 60, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-24 h-24 border-2 border-primary rounded-sm flex items-center justify-center bg-primary/10 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                      <div className="w-16 h-12 bg-gradient-to-br from-blue-400/60 to-primary/60 rounded-sm relative">
                        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-yellow-400/80" />
                        <div className="absolute bottom-0 left-0 right-0 h-5 bg-green-400/50 rounded-b-sm" />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-primary">Encrypting locally...</span>
                  </motion.div>
                )}

                {phase === "shattering" && (
                  <motion.div key="shattering" className="relative w-32 h-32">
                    {cipherBlocks.slice(0, 8).map((i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{
                          x: (Math.random() - 0.5) * 120,
                          y: (Math.random() - 0.5) * 120,
                          opacity: 0,
                          scale: 0.3,
                          rotate: Math.random() * 360,
                        }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary/30 border border-primary/50 font-mono text-xs flex items-center justify-center text-primary"
                      >
                        {randomHex(2)}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {phase === "encrypted" && (
                  <motion.div
                    key="encrypted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="grid grid-cols-4 gap-1">
                      {cipherBlocks.map((i) => (
                        <CipherBlock key={i} delay={i * 0.05} />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-primary/70">AES-256 cipher blocks</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Admin view */}
          <div className="glass-panel rounded-sm p-8 border-red-900/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-950/10" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <EyeOff className="w-4 h-4 text-red-400" />
                <span className="font-mono text-sm text-red-400 uppercase tracking-widest">Admin Infrastructure View</span>
              </div>
              <div className="h-64 flex flex-col items-center justify-center gap-3">
                <div className="w-full space-y-2">
                  {adminText.length > 0 ? adminText.map((line, i) => (
                    <div key={i} className="font-mono text-xs text-red-900/60 flex items-center gap-2">
                      <span className="text-red-900/40 w-8 shrink-0">{String(i).padStart(3, "0")}:</span>
                      <span className="text-red-700/50">{line}</span>
                    </div>
                  )) : (
                    <div className="text-center font-mono text-xs text-muted-foreground/40">
                      Awaiting transmission...
                    </div>
                  )}
                </div>
                <div className="mt-4 border border-red-900/40 bg-red-950/20 px-4 py-2 rounded-sm">
                  <span className="font-mono text-xs text-red-400/70 uppercase tracking-wider">
                    Structurally Unreadable — Zero Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
