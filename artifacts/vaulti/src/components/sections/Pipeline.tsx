import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare, UserCheck, Smartphone, Shield, Cloud,
  Camera, CheckCircle2, Lock, Wifi, RefreshCw, HardDrive, Zap
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    color: "blue",
    title: "Secure Your Plan",
    description:
      "Start a quick conversation with us via our secure chat link. We'll walk you through your options and allocate your vault space limits — no technical knowledge needed at all.",
  },
  {
    number: "02",
    icon: UserCheck,
    color: "blue",
    title: "Account Verification",
    description:
      "Receive your unique system registration link, create your account, and download the free Nextcloud application from your device's app store. Setup takes less than five minutes.",
  },
  {
    number: "03",
    icon: Smartphone,
    color: "emerald",
    title: "Continuous Protection",
    description:
      "Toggle Auto-Backup on your phone. Your photos seamlessly stream to your isolated, server-encrypted storage array in full original quality — automatically, every single day.",
  },
];

/* ── Animated data packet that travels from phone → server ── */
function DataPacket({ delay, yOffset }: { delay: number; yOffset: number }) {
  return (
    <motion.div
      className="absolute left-[22%] w-3 h-3 rounded-full bg-blue-400 shadow-md shadow-blue-300"
      style={{ top: `calc(50% + ${yOffset}px)` }}
      animate={{
        x: ["0%", "820%"],
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1, 1, 0.6],
      }}
      transition={{
        duration: 2.2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.1, 0.85, 1],
      }}
    />
  );
}

/* ── Encrypted packet that travels from server → vault ── */
function EncPacket({ delay, yOffset }: { delay: number; yOffset: number }) {
  return (
    <motion.div
      className="absolute left-[55%] w-2.5 h-2.5 rounded-sm bg-emerald-400 shadow-md shadow-emerald-300 rotate-45"
      style={{ top: `calc(50% + ${yOffset}px)` }}
      animate={{
        x: ["0%", "500%"],
        opacity: [0, 1, 1, 0],
        rotate: [45, 90, 135],
      }}
      transition={{
        duration: 1.8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.1, 0.85, 1],
      }}
    />
  );
}

function LiveProcessDiagram() {
  return (
    <div className="relative w-full h-52 md:h-44 overflow-hidden select-none">

      {/* ── Phone node ── */}
      <motion.div
        className="absolute left-[4%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl">
          <Camera className="w-6 h-6 text-white" />
          {/* Wifi ripple */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center"
            animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <Wifi className="w-2.5 h-2.5 text-white" />
          </motion.div>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Your Phone</span>
        {/* Photo count ticker */}
        <motion.div
          className="bg-blue-100 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded-full"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Auto-sync ON
        </motion.div>
      </motion.div>

      {/* ── Nextcloud server node ── */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <div className="relative w-16 h-16 bg-white border-2 border-blue-200 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100">
          <Cloud className="w-7 h-7 text-blue-600" />
          {/* Spinning sync ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-dashed border-blue-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          {/* Processing pulse */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <RefreshCw className="w-3 h-3 text-white" />
          </motion.div>
        </div>
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Nextcloud</span>
        {/* Status badge */}
        <motion.div
          className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded-full"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          Processing
        </motion.div>
      </motion.div>

      {/* ── Encrypted vault node ── */}
      <motion.div
        className="absolute right-[4%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <div className="relative w-14 h-14 bg-emerald-700 rounded-2xl flex items-center justify-center shadow-xl">
          <HardDrive className="w-6 h-6 text-white" />
          {/* Lock badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center shadow"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          >
            <Lock className="w-2.5 h-2.5 text-amber-900" />
          </motion.div>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Your Vault</span>
        {/* Encrypted badge */}
        <motion.div
          className="bg-amber-50 border border-amber-200 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
        >
          Encrypted
        </motion.div>
      </motion.div>

      {/* ── Data packets: phone → nextcloud ── */}
      <DataPacket delay={0}    yOffset={-8} />
      <DataPacket delay={0.7}  yOffset={4} />
      <DataPacket delay={1.4}  yOffset={-3} />
      <DataPacket delay={2.1}  yOffset={8} />

      {/* ── Encrypted packets: nextcloud → vault ── */}
      <EncPacket delay={0.4}   yOffset={-6} />
      <EncPacket delay={1.1}   yOffset={5} />
      <EncPacket delay={1.9}   yOffset={-2} />

      {/* ── Connection lines (dashed static background) ── */}
      <div className="absolute left-[20%] right-[20%] top-1/2 -translate-y-1/2 h-px border-t-2 border-dashed border-slate-200 pointer-events-none" />

      {/* ── Live stats strip ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6">
        {[
          { label: "Syncing", value: "Live", color: "text-blue-600", icon: Zap },
          { label: "Encrypted", value: "AES-256", color: "text-emerald-600", icon: Shield },
          { label: "Quality", value: "Original", color: "text-amber-600", icon: CheckCircle2 },
        ].map(({ label, value, color, icon: Icon }, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            <Icon className={`w-3 h-3 ${color}`} />
            <span className="text-[10px] font-semibold text-slate-400">{label}</span>
            <span className={`text-[10px] font-black ${color}`}>{value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
            Simple 3-Step Setup
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            No technical knowledge required. Your private vault is ready faster than you'd expect.
          </p>
        </motion.div>

        {/* ── Live Nextcloud process animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-slate-50 border border-slate-100 rounded-3xl px-6 pt-8 pb-4 mb-10 shadow-sm overflow-hidden relative"
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-emerald-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Nextcloud Sync Process</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-amber-300" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
          </div>

          <LiveProcessDiagram />
        </motion.div>

        {/* ── Step cards ── */}
        <div className="relative">
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-emerald-200" />

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEmerald = step.color === "emerald";
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm card-hover text-center"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5 ${isEmerald ? "bg-emerald-100" : "bg-blue-100"}`}>
                    <Icon className={`w-7 h-7 ${isEmerald ? "text-emerald-600" : "text-blue-600"}`} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${isEmerald ? "text-emerald-600" : "text-blue-600"}`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
