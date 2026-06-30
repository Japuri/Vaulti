import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Server, Code2, Lightbulb, Network, ShieldCheck,
  Mail, ArrowRight, Upload, Heart, Target, Zap
} from "lucide-react";

const experiences = [
  {
    icon: Server,
    title: "Server & Infrastructure Management",
    period: "Ongoing",
    desc: "Provisioning, configuring, and maintaining private servers, VPS environments, and cloud infrastructure. Keeping systems online, patched, and performing under real-world conditions.",
  },
  {
    icon: Code2,
    title: "Web Development & Application Hosting",
    period: "Ongoing",
    desc: "Building and deploying full-stack websites and web applications — from clean landing pages to custom platforms — with a focus on reliability, performance, and maintainable architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Open-Source Deployment & Security",
    period: "Ongoing",
    desc: "Deep hands-on experience deploying, hardening, and customising open-source server platforms for production environments, including the secure storage architecture powering Vaulti.",
  },
  {
    icon: Lightbulb,
    title: "Business Automation & Systems Design",
    period: "Ongoing",
    desc: "Mapping business workflows, identifying manual bottlenecks, and building automated systems that eliminate repetitive work — connecting tools and creating pipelines that just run.",
  },
  {
    icon: Network,
    title: "Managed IT Infrastructure",
    period: "Ongoing",
    desc: "End-to-end IT management for small and growing businesses — monitoring, backups, networking, and proactive maintenance so operations never stop due to infrastructure failures.",
  },
];

const whyPoints = [
  {
    icon: Heart,
    title: "Privacy felt like a luxury — it shouldn't be.",
    desc: "Every mainstream platform asked users to silently trade their privacy for convenience. I wanted to prove that private, secure storage could be just as easy to use as any big-name app — without the data harvesting.",
  },
  {
    icon: Target,
    title: "People deserved real ownership.",
    desc: "Your photos are your memories. Your files are your work. They shouldn't live on someone else's terms, in someone else's database, feeding someone else's business model. Vaulti exists to give that ownership back.",
  },
  {
    icon: Zap,
    title: "The technology existed — it just wasn't accessible.",
    desc: "Private cloud infrastructure has been available for years. But setting it up required serious technical knowledge. I built Vaulti to bridge that gap: professional-grade privacy, managed for people who just want it to work.",
  },
];

export function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const expInView = useInView(expRef, { once: true, margin: "-80px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  const [photoSrc, setPhotoSrc] = useState<string | null>(null);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div className="min-h-screen bg-white pt-24">

      {/* ── Page hero ── */}
      <div ref={heroRef} className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            The person behind Vaulti
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Built by Someone Who{" "}
            <span className="text-blue-600">Actually Cares.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Vaulti isn't a faceless product from a nameless company. It's built, run, and supported by one person — with genuine technical depth, a clear mission, and a commitment to every customer.
          </p>
        </motion.div>
      </div>

      {/* ── Founder section ── */}
      <section ref={storyRef} className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: photo + identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            {/* Profile photo */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                {photoSrc ? (
                  <img src={photoSrc} alt="Founder" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-400">
                    <Upload className="w-10 h-10" />
                    <span className="text-xs font-medium text-center px-4">Click to add your photo</span>
                  </div>
                )}
              </div>
              {/* Upload overlay */}
              <label className="absolute inset-0 rounded-3xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900/30 flex items-center justify-center">
                <span className="text-white text-xs font-semibold bg-slate-900/70 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5" /> Change photo
                </span>
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
              </label>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-1">Jakob Edhel A Puri</h2>
              <p className="text-blue-600 font-semibold text-sm mb-4">Founder & Technical Lead, Vaulti</p>

              <div className="flex flex-wrap gap-2">
                {["Server Admin", "Web Developer", "Privacy Advocate", "Systems Thinker"].map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:japuri0318@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              <Mail className="w-4 h-4" />
              Talk to me directly
            </a>
          </motion.div>

          {/* Right: story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center h-full"
          >
            {/* Pull quote */}
            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <p className="text-2xl md:text-3xl font-bold italic text-slate-900 leading-snug">
                "Most platforms profit from your data. I built the alternative."
              </p>
            </div>

            <div className="space-y-4 italic text-slate-500 text-base leading-relaxed">
              <p>
                I started Vaulti after realising that private, secure storage was well within reach technically — but completely inaccessible to everyday people. The tools existed. The knowledge didn't.
              </p>
              <p>
                So I closed that gap. Vaulti is what happens when you stop accepting the trade-off between convenience and privacy.
              </p>
              <p>
                I run everything personally. Infrastructure, support, security — all of it. When you reach out, you get me. That's not a limitation. That's the point.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Jakob Edhel A Puri</p>
              <p className="text-sm text-slate-500">Founder & Technical Lead — Vaulti</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why it was founded ── */}
      <section ref={whyRef} className="bg-slate-50 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
              The Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Vaulti Exists
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Three core beliefs drove the founding — and every decision made since.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                  className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 leading-snug">{point.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section ref={expRef} className="max-w-5xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={expInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-5">
            Experience & Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real hands-on experience across the full stack of what it takes to build and run reliable digital infrastructure.
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 18 }}
                animate={expInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                className="flex gap-5 items-start bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <h3 className="font-bold text-slate-900">{exp.title}</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="bg-slate-900 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Whether you need secure cloud storage, website hosting, or IT infrastructure — I'm a message away.
          </p>
          <a
            href="mailto:japuri0318@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            japuri0318@gmail.com
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
