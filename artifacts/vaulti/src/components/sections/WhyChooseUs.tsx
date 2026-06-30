import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Eye, Wrench, HeartHandshake, Globe, Lock } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    color: "blue",
    title: "Built on Proven, Audited Technology",
    body: "We don't build security from scratch and ask you to trust us. Our core is built on a globally vetted, open-source server framework that has been independently reviewed by security researchers across the world. The code is public. The trust is earned.",
  },
  {
    icon: Eye,
    color: "emerald",
    title: "Your Files Are Never Seen or Analysed",
    body: "From the moment your media reaches our servers, it's scrambled into encrypted blocks at the storage layer. No one on our team — or anywhere — can browse your photos or videos. This isn't a policy. It's how the architecture is designed.",
  },
  {
    icon: Lock,
    color: "blue",
    title: "No Monthly Billing Traps",
    body: "Every plan is a fixed, defined window. You pay once, you stay protected for that period, and you choose if and when you renew. There's no auto-charge waiting to surprise you at the end of the month — ever.",
  },
  {
    icon: Wrench,
    color: "emerald",
    title: "Managed So You Don't Have To",
    body: "You get all the benefits of a private server — without the headache of managing one. We handle the infrastructure, updates, and uptime. You just open the app and your memories back up automatically.",
  },
  {
    icon: Globe,
    color: "blue",
    title: "Full-Resolution. Always.",
    body: "We do not compress, re-encode, or downgrade your files to save on our costs. Every photo is stored exactly as your camera captured it — every pixel, every detail, forever intact.",
  },
  {
    icon: HeartHandshake,
    color: "emerald",
    title: "Real Human Support",
    body: "When you reach out, you talk to us directly — not a chatbot, not a ticket queue. We're a small, focused team and we take every customer's questions seriously. Fast, honest, personal.",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Why Vaulti
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Not Just Storage.{" "}
            <span className="text-blue-600">A Commitment.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            There are plenty of places to store your files. Here's why people choose Vaulti — and why they stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isBlue = r.color === "blue";
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7 card-hover"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${isBlue ? "bg-blue-100" : "bg-emerald-100"}`}>
                  <Icon className={`w-5 h-5 ${isBlue ? "text-blue-600" : "text-emerald-600"}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{r.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
