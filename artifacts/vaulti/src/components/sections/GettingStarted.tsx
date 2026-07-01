import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CreditCard, Mail, LogIn, KeyRound, Settings, Smartphone, Sparkles, ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Choose Your Plan",
    desc: "Pick the storage tier that fits your life — from a free starter vault to 500 GB for everything you'll ever create.",
    color: "blue",
    accent: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    dot: "bg-blue-500",
    glow: "shadow-blue-200",
  },
  {
    number: "02",
    icon: Mail,
    title: "Get Your Secure Login",
    desc: "We'll send your secure credentials straight to your inbox — no form-filling, no verification loops. Just a clean email with everything you need.",
    color: "violet",
    accent: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    dot: "bg-violet-500",
    glow: "shadow-violet-200",
  },
  {
    number: "03",
    icon: LogIn,
    title: "Sign In at drive.cloudaeri.com",
    desc: "Head to drive.cloudaeri.com and log in with the temporary credentials from your email. Your vault is already waiting.",
    color: "cyan",
    accent: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    dot: "bg-cyan-500",
    glow: "shadow-cyan-200",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Change Your Temporary Password",
    desc: "First thing: set a strong password you own. Go to Profile → Personal settings → Security → Change password.",
    color: "amber",
    accent: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    dot: "bg-amber-500",
    glow: "shadow-amber-200",
  },
  {
    number: "05",
    icon: Settings,
    title: "Secure Your Account",
    desc: "While you're in settings, take a moment to review your profile, enable notifications, and confirm your recovery email.",
    color: "emerald",
    accent: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    dot: "bg-emerald-500",
    glow: "shadow-emerald-200",
  },
  {
    number: "06",
    icon: Smartphone,
    title: "Install the Nextcloud App",
    desc: "Download the official Nextcloud app on your phone. Sign in with your new credentials and enable auto-upload — your photos back up silently in the background.",
    color: "indigo",
    accent: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    dot: "bg-indigo-500",
    glow: "shadow-indigo-200",
  },
  {
    number: "07",
    icon: Sparkles,
    title: "Start Storing Memories!",
    desc: "That's it. Your vault is live, your photos are backing up, and your files are private — no tracking, no compression, no one else involved.",
    color: "pink",
    accent: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    dot: "bg-pink-500",
    glow: "shadow-pink-200",
  },
];

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.18, 1],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const orbitVariants = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 12, repeat: Infinity, ease: "linear" },
  },
};

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-8">
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        {/* Animated dot */}
        <motion.div
          className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg ${step.glow} z-10`}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 200 }}
        >
          {/* Pulsing ring */}
          <motion.div
            className={`absolute inset-0 rounded-2xl ${step.iconBg} opacity-50`}
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: `${index * 0.3}s` }}
          />
          <Icon className={`w-5 h-5 md:w-6 md:h-6 ${step.iconColor} relative z-10`} />
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
            style={{
              background: "linear-gradient(to bottom, #cbd5e1, transparent)",
              minHeight: "2rem",
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        className={`group relative mb-8 flex-1 ${step.bg} border ${step.border} rounded-2xl p-5 md:p-6 overflow-hidden cursor-default`}
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.08 + 0.1, ease: "easeOut" }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Ghost step number */}
        <span
          className="absolute right-4 top-2 text-6xl md:text-7xl font-black select-none pointer-events-none"
          style={{ color: "rgba(0,0,0,0.04)", lineHeight: 1 }}
        >
          {step.number}
        </span>

        {/* Shimmer on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${step.iconColor} opacity-60`}>
              Step {step.number}
            </span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 leading-snug">
            {step.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function GettingStarted() {
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* ── Looping ambient background orbs ── */}
      <motion.div
        className="absolute top-20 -left-32 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 -right-32 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        variants={orbitVariants}
        animate="animate"
      />

      {/* Floating decorative dots */}
      {[
        { top: "12%", left: "8%", size: 6, color: "#3b82f6", delay: 0 },
        { top: "30%", right: "6%", size: 4, color: "#8b5cf6", delay: 1 },
        { top: "55%", left: "4%", size: 5, color: "#06b6d4", delay: 0.7 },
        { top: "75%", right: "10%", size: 7, color: "#10b981", delay: 1.5 },
        { top: "88%", left: "15%", size: 4, color: "#f59e0b", delay: 0.4 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: dot.top,
            left: "left" in dot ? dot.left : undefined,
            right: "right" in dot ? (dot as { right: string }).right : undefined,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
            Zero learning curve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Up and running{" "}
            <span className="text-blue-600">in minutes.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No technical setup. No confusing dashboards. Just a handful of steps and your vault is live.
          </p>
        </motion.div>

        {/* ── Timeline steps ── */}
        <div>
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-4 text-center"
        >
          {/* Looping progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={`rounded-full ${step.dot}`}
                animate={{
                  width: ["8px", "24px", "8px"],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.35,
                }}
                style={{ height: 8 }}
              />
            ))}
          </div>

          <a
            href="mailto:japuri0318@gmail.com"
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </a>
          <p className="text-xs text-slate-400 mt-4">
            Reply to your welcome email or reach us at japuri0318@gmail.com — we respond fast.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
