import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Shield, Lock, CheckCircle, Image } from "lucide-react";

type Phase = "photo" | "shielding" | "locked";

export function PrivacyVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<Phase>("photo");

  useEffect(() => {
    if (!isInView) return;
    const cycle = () => {
      setPhase("photo");
      setTimeout(() => setPhase("shielding"), 1800);
      setTimeout(() => setPhase("locked"), 3400);
      setTimeout(cycle, 6000);
    };
    cycle();
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
            How Your Privacy Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Files. Yours Alone.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Every photo is encrypted on your device before it ever travels to our servers. We only ever receive unreadable, locked data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-12 min-h-[320px] border border-slate-100"
          >
            <AnimatePresence mode="wait">
              {phase === "photo" && (
                <motion.div
                  key="photo"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-28 h-20 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sky-300 via-blue-200 to-emerald-200 relative">
                      <div className="absolute top-2 left-3 w-5 h-5 rounded-full bg-yellow-300 shadow-sm" />
                      <div className="absolute bottom-0 left-0 right-0 h-7 bg-emerald-400/50 rounded-b-xl" />
                      <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                    </div>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">Your original family photo</span>
                </motion.div>
              )}

              {phase === "shielding" && (
                <motion.div
                  key="shielding"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-lg shadow-blue-100 border-2 border-blue-200"
                  >
                    <Shield className="w-12 h-12 text-blue-600" />
                  </motion.div>
                  <span className="text-sm text-blue-600 font-semibold animate-pulse">Encrypting on your device…</span>
                </motion.div>
              )}

              {phase === "locked" && (
                <motion.div
                  key="locked"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center shadow-md shadow-emerald-100">
                      <Lock className="w-11 h-11 text-emerald-600" />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow"
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  <span className="text-sm text-emerald-700 font-semibold">Safely stored. Completely private.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Feature list */}
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
                desc: "Unlike Google Photos or iCloud, we never compress your memories. Every pixel is preserved exactly as your camera captured it.",
              },
              {
                icon: Shield,
                color: "blue",
                title: "Device-Side Encryption",
                desc: "Your files are encrypted using AES-256 on your own phone before they leave. Our servers never receive anything readable.",
              },
              {
                icon: Lock,
                color: "emerald",
                title: "Zero Admin Visibility",
                desc: "Not even our own infrastructure team can see your photos. The cryptographic architecture makes it structurally impossible.",
              },
              {
                icon: CheckCircle,
                color: "emerald",
                title: "Open-Source & Auditable",
                desc: 'We use the globally trusted Nextcloud core — because your privacy shouldn\'t be a corporate secret, it should be a verifiable guarantee.',
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
