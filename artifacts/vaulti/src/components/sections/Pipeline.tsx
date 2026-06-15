import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Key, Smartphone, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Secure Provisioning",
    description:
      "Select a fixed-tier vault space and receive clear allocation details through our verified secure direct chat interface. No contracts. No ambiguity. Flat-rate sovereignty.",
  },
  {
    number: "02",
    icon: Key,
    title: "Cryptographic Onboarding",
    description:
      "Instantly receive a randomized, unindexed system token gateway link to configure your custom credentials. Your access parameters are generated client-side and never transmitted.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Client-Side Deployment",
    description:
      "Initialize your preferred native application and toggle Automated Background Sync. Your phone encrypts data locally before it ever crosses the wire. The network sees only cipher.",
  },
];

function GlowCard({ step, index, isInView }: { step: typeof steps[0]; index: number; isInView: boolean }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      className="group relative glass-panel rounded-sm p-8 overflow-hidden cursor-default"
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated border tracer on hover */}
      <motion.div
        className="absolute inset-0 rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent) border-box",
          boxShadow: "inset 0 0 0 1px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.2)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-5xl font-bold text-primary/10 leading-none">{step.number}</span>
          <div className="w-10 h-10 border border-primary/30 rounded-sm flex items-center justify-center bg-primary/5 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{step.title}</h3>
        <p className="font-mono text-sm text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pipeline" ref={ref} className="py-32 px-4 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary/70 uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-sm mb-6 bg-primary/5">
            <Activity className="w-3 h-3" />
            Deployment Protocol
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Operational Pipeline</h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            From initialization to encrypted sync — three frictionless steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <GlowCard key={step.number} step={step} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
