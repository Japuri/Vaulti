import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, UserCheck, Smartphone } from "lucide-react";

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
      "Receive your unique system registration link, create your account, and download the free Nextcloud application from the App Store or Google Play. Setup takes less than five minutes.",
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
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
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
