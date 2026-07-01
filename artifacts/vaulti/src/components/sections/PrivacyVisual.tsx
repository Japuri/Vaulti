import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Shield, Lock, CheckCircle, Image, Server, Wifi, Database } from "lucide-react";

type Phase = "device" | "uploading" | "received" | "scrambling" | "stored";

const PHASE_LABELS: Record<Phase, string> = {
  device: "On Your Device",
  uploading: "Uploading to Vaulti",
  received: "Reaching Our Hardware",
  scrambling: "Server Encrypting",
  stored: "Isolated & Secured",
};

const PHASES: Phase[] = ["device", "uploading", "received", "scrambling", "stored"];

const PHASE_DURATIONS: Record<Phase, number> = {
  device: 2500,
  uploading: 3000,
  received: 2500,
  scrambling: 3500,
  stored: 4000,
};

function PhaseIndicator({ current }: { current: Phase }) {
  return (
    <div className="flex items-center gap-1 mt-6">
      {PHASES.map((p, i) => (
        <div key={p} className="flex items-center gap-1">
          <div
            className={`h-1.5 rounded-full transition-all duration-700 ${
              p === current
                ? "w-8 bg-blue-500"
                : PHASES.indexOf(current) > i
                ? "w-3 bg-emerald-400"
                : "w-3 bg-slate-200"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function CipherChar({ delay }: { delay: number }) {
  const chars = "ABCDEFabcdef0123456789";
  const [ch, setCh] = useState(chars[Math.floor(Math.random() * chars.length)]);
  useEffect(() => {
    const t = setInterval(() => setCh(chars[Math.floor(Math.random() * chars.length)]), 120 + Math.random() * 180);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="text-emerald-600 font-mono text-[11px] leading-none select-none"
    >
      {ch}
    </motion.span>
  );
}

export function PrivacyVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<Phase>("device");

  useEffect(() => {
    if (!isInView) return;
    let cancelled = false;
    const run = async () => {
      for (const p of PHASES) {
        if (cancelled) return;
        setPhase(p);
        await new Promise((r) => setTimeout(r, PHASE_DURATIONS[p]));
      }
      if (!cancelled) setTimeout(run, 1200);
    };
    run();
    return () => { cancelled = true; };
  }, [isInView]);

  return (
    <section id="features" ref={ref} className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Secure Private Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Files. Privately Stored.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Your files are protected by industry-standard TLS encryption during transfer and stored within a secure private cloud infrastructure designed for privacy, reliability, and controlled access.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Step-by-step animation ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100 min-h-[420px] flex flex-col"
          >
            {/* Stage label */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Process</span>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                {PHASE_LABELS[phase]}
              </span>
            </div>

            {/* Central scene */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">

                {/* 1 — Device */}
                {phase === "device" && (
                  <motion.div
                    key="device"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-5"
                  >
                    <div className="relative">
                      {/* Phone outline */}
                      <div className="w-24 h-40 bg-white rounded-2xl border-2 border-slate-200 shadow-lg flex flex-col overflow-hidden">
                        <div className="h-3 bg-slate-100 flex justify-center items-center">
                          <div className="w-8 h-1 rounded-full bg-slate-300" />
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-sky-200 via-blue-100 to-emerald-100 relative overflow-hidden m-1 rounded-lg">
                          <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-yellow-300 shadow" />
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-emerald-400/40 rounded-b-lg" />
                          <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-white/70" />
                        </div>
                        <div className="h-3 bg-slate-100 flex justify-center items-center">
                          <div className="w-5 h-3 rounded-sm bg-slate-300" />
                        </div>
                      </div>
                      {/* "Original" badge */}
                      <div className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        ORIGINAL
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium text-center">Your photo lives on your device,<br />full-resolution &amp; uncompressed.</p>
                  </motion.div>
                )}

                {/* 2 — Uploading */}
                {phase === "uploading" && (
                  <motion.div
                    key="uploading"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-4 w-full max-w-xs"
                  >
                    <div className="flex items-center justify-between w-full">
                      {/* Phone */}
                      <div className="w-14 h-22 bg-white rounded-xl border-2 border-slate-200 shadow flex flex-col overflow-hidden p-1">
                        <div className="flex-1 bg-gradient-to-br from-sky-200 to-blue-100 rounded-lg flex items-center justify-center">
                          <Image className="w-5 h-5 text-white/70" />
                        </div>
                      </div>

                      {/* Animated dots */}
                      <div className="flex-1 mx-3 flex flex-col gap-1.5 items-center relative">
                        <div className="w-full h-px bg-blue-200 absolute top-1/2" />
                        {[0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-500 absolute top-1/2 -translate-y-1/2"
                            initial={{ left: "0%" }}
                            animate={{ left: "100%", opacity: [1, 1, 0] }}
                            transition={{
                              duration: 1.4,
                              delay: i * 0.35,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                        <Wifi className="w-5 h-5 text-blue-400 mt-5" />
                      </div>

                      {/* Server */}
                      <div className="w-14 h-22 bg-white rounded-xl border-2 border-blue-200 shadow flex flex-col overflow-hidden p-1 items-center justify-center gap-1">
                        <Server className="w-5 h-5 text-blue-400" />
                        <div className="flex gap-0.5">
                          {[0, 1, 2].map((j) => (
                            <motion.div
                              key={j}
                              className="w-1.5 h-1.5 rounded-full bg-blue-300"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.8, delay: j * 0.25, repeat: Infinity }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium text-center">Securely transferring your photo<br />to the Vaulti server over encrypted channel.</p>
                  </motion.div>
                )}

                {/* 3 — Received */}
                {phase === "received" && (
                  <motion.div
                    key="received"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-5"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="w-24 h-24 bg-blue-100 rounded-2xl border-2 border-blue-200 shadow-lg flex flex-col items-center justify-center gap-1.5"
                      >
                        <Server className="w-9 h-9 text-blue-600" />
                        <div className="flex gap-1">
                          {[0, 1, 2].map((j) => (
                            <motion.div
                              key={j}
                              className="w-1.5 h-1.5 rounded-full bg-blue-500"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.7, delay: j * 0.2, repeat: Infinity }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shadow">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium text-center">Photo received at our hardware arrays.<br />Isolation protocol initiating…</p>
                  </motion.div>
                )}

                {/* 4 — Scrambling */}
                {phase === "scrambling" && (
                  <motion.div
                    key="scrambling"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-5"
                  >
                    <div className="relative w-40 h-32 flex items-center justify-center">
                      {/* Photo fading out */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-24 h-16 bg-gradient-to-br from-sky-200 to-blue-100 rounded-lg flex items-center justify-center shadow">
                          <Image className="w-7 h-7 text-white/70" />
                        </div>
                      </motion.div>
                      {/* Cipher grid appearing */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="grid grid-cols-8 gap-[3px] p-2 bg-slate-900/5 rounded-lg border border-emerald-200">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <CipherChar key={i} delay={i * 0.02} />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium text-center">Data travels over TLS-encrypted connections.<br />Protected in transit from device to server.</p>
                  </motion.div>
                )}

                {/* 5 — Stored */}
                {phase === "stored" && (
                  <motion.div
                    key="stored"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
                    className="flex flex-col items-center gap-5"
                  >
                    <div className="relative">
                      <div className="w-28 h-28 bg-emerald-100 rounded-2xl border-2 border-emerald-300 flex flex-col items-center justify-center gap-2 shadow-md shadow-emerald-100">
                        <Database className="w-8 h-8 text-emerald-600" />
                        <Lock className="w-6 h-6 text-emerald-700" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="absolute -top-2 -right-2 w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </motion.div>
                      {/* Isolated badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow"
                      >
                        PRIVATELY STORED
                      </motion.div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium text-center pt-4">
                      Stored safely in your private vault.<br />
                      <span className="text-emerald-700 font-semibold">Authenticated access only — controlled by you.</span>
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center">
              <PhaseIndicator current={phase} />
            </div>
          </motion.div>

          {/* ── Right: Feature list ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: Image,
                color: "blue",
                title: "Full-Resolution Originals",
                desc: "Unlike typical cloud photo services, we never compress or re-encode your memories. Every pixel is preserved exactly as your camera captured it.",
              },
              {
                icon: Shield,
                color: "blue",
                title: "Secure Private Cloud Infrastructure",
                desc: "Your files are stored within a private Nextcloud server protected by Cloudflare Tunnel and authenticated access. Only you can log in to your vault — no third parties involved.",
              },
              {
                icon: Lock,
                color: "emerald",
                title: "No Data Profiling or AI Scanning",
                desc: "Your media is never analysed, sold, or fed into AI training pipelines. We store it. That's it. No corporate surveillance, no hidden scanning.",
              },
              {
                icon: CheckCircle,
                color: "emerald",
                title: "Open-Source & Globally Audited",
                desc: "We use the Nextcloud core — not custom, unproven code. Its security architecture is publicly audited by independent researchers worldwide, so you never have to take our word for it.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const isBlue = item.color === "blue";
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isBlue ? "bg-blue-100" : "bg-emerald-100"}`}>
                    <Icon className={`w-5 h-5 ${isBlue ? "text-blue-600" : "text-emerald-600"}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
