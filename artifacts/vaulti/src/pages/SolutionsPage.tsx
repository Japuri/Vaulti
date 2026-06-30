import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Plane, Users, Clapperboard, FolderLock, Smile, ArrowRight, Mail } from "lucide-react";

const useCases = [
  {
    icon: Camera,
    color: "blue",
    eyebrow: "For everyday people",
    headline: "Every photo. Backed up. Always.",
    sub: "Your phone is full of moments you can't recreate. Vaulti silently backs them up — full resolution, no compression — so you never have to choose which ones to delete.",
    stat: "100%",
    statLabel: "Original quality",
    accent: "from-blue-50 to-white",
    border: "border-blue-100",
  },
  {
    icon: Plane,
    color: "emerald",
    eyebrow: "For travelers",
    headline: "Trip of a lifetime. Photos that last.",
    sub: "You travel once. The photos stay forever — or until your phone breaks, gets stolen, or runs out of space. Vaulti keeps every shot safe the moment it's taken.",
    stat: "30 days",
    statLabel: "Event Capsule window",
    accent: "from-emerald-50 to-white",
    border: "border-emerald-100",
  },
  {
    icon: Users,
    color: "blue",
    eyebrow: "For families",
    headline: "One vault. The whole family.",
    sub: "Kids grow up fast. Vaulti is the one place where every birthday, every first step, every ordinary Tuesday stays intact — private, full-resolution, and accessible on any device.",
    stat: "500 GB",
    statLabel: "Family-sized storage",
    accent: "from-blue-50 to-white",
    border: "border-blue-100",
  },
  {
    icon: Clapperboard,
    color: "emerald",
    eyebrow: "For creators",
    headline: "Your work deserves better than a free tier.",
    sub: "RAW files. 4K clips. Weeks of footage. Generic cloud compresses it or charges you a fortune. Vaulti stores it all — unaltered, unlimited uploads, no hidden fees.",
    stat: "No",
    statLabel: "Compression. Ever.",
    accent: "from-emerald-50 to-white",
    border: "border-emerald-100",
  },
  {
    icon: FolderLock,
    color: "blue",
    eyebrow: "For professionals",
    headline: "Documents that stay private.",
    sub: "Contracts, IDs, tax records, sensitive files. Not everything belongs in a platform that mines your data. Vaulti keeps professional files secure and accessible — only to you.",
    stat: "0",
    statLabel: "Third parties with access",
    accent: "from-blue-50 to-white",
    border: "border-blue-100",
  },
  {
    icon: Smile,
    color: "emerald",
    eyebrow: "For everyone else",
    headline: "Just… peace of mind.",
    sub: "You shouldn't have to think about backups. Set Vaulti once. It runs quietly in the background. Your memories are safe. That's the whole point.",
    stat: "Set once",
    statLabel: "Runs forever",
    accent: "from-emerald-50 to-white",
    border: "border-emerald-100",
  },
];

function UseCase({ uc, i }: { uc: typeof useCases[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = uc.icon;
  const isBlue = uc.color === "blue";
  const isEven = i % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl border ${uc.border} bg-gradient-to-br ${uc.accent} p-8 md:p-10`}
    >
      {/* Large background number */}
      <div className={`absolute -right-4 -top-6 text-[120px] font-black leading-none select-none pointer-events-none ${isBlue ? "text-blue-600/5" : "text-emerald-600/5"}`}>
        {String(i + 1).padStart(2, "0")}
      </div>

      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
        {/* Icon + stat */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <motion.div
            initial={{ scale: 0.8, rotate: -6 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 200 }}
            className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${isBlue ? "bg-blue-600" : "bg-emerald-600"}`}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center"
          >
            <div className={`text-3xl font-black ${isBlue ? "text-blue-600" : "text-emerald-600"}`}>{uc.stat}</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">{uc.statLabel}</div>
          </motion.div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-xs font-bold uppercase tracking-widest mb-2 ${isBlue ? "text-blue-500" : "text-emerald-600"}`}
          >
            {uc.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight"
          >
            {uc.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="text-slate-500 leading-relaxed"
          >
            {uc.sub}
          </motion.p>
          <motion.a
            href="mailto:japuri0318@gmail.com"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={`inline-flex items-center gap-1.5 mt-5 text-sm font-semibold ${isBlue ? "text-blue-600 hover:text-blue-800" : "text-emerald-600 hover:text-emerald-800"} transition-colors`}
          >
            Get started <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">

      {/* Hero */}
      <div className="bg-white py-20 px-4 text-center border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">What Vaulti is for</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Your life creates memories.<br />
            <span className="text-blue-600">Don't lose them.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Vaulti is private cloud storage built around one idea — your files belong to you, backed up automatically, forever.
          </p>
          <a
            href="mailto:japuri0318@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-200"
          >
            <Mail className="w-4 h-4" />
            Start for free
          </a>
        </motion.div>
      </div>

      {/* Use cases */}
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-6">
        {useCases.map((uc, i) => (
          <UseCase key={uc.eyebrow} uc={uc} i={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">Ready?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your next photo<br />deserves a safe home.
          </h2>
          <a
            href="mailto:japuri0318@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg"
          >
            Set up your vault <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
