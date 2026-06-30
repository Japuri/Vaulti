import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code2, Server, Lightbulb, Mail, ArrowRight } from "lucide-react";

const experiences = [
  {
    icon: Server,
    title: "Server & Infrastructure Management",
    desc: "Hands-on experience provisioning, configuring, and maintaining private servers, VPS environments, and cloud infrastructure — keeping systems online, secure, and performant.",
  },
  {
    icon: Code2,
    title: "Web Development & Application Hosting",
    desc: "Building and deploying full-stack websites and applications — from landing pages to custom web platforms — with a focus on clean architecture and real-world reliability.",
  },
  {
    icon: Server,
    title: "Open-Source Deployment & Customisation",
    desc: "Deep experience deploying, configuring, and tailoring open-source platforms for real-world use — including the server framework that powers Vaulti's secure storage architecture.",
  },
  {
    icon: Lightbulb,
    title: "Business Automation & Systems Thinking",
    desc: "Identifying inefficiencies in business operations and building automated systems that eliminate manual work, reduce errors, and help teams focus on what matters.",
  },
];

export function AboutUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            The Person Behind Vaulti
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Built by Someone Who{" "}
            <span className="text-blue-600">Actually Cares.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Vaulti isn't a faceless product. It's built and operated by one person — with real technical depth, genuine care for privacy, and a commitment to treating every customer like they matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100"
          >
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-2xl bg-blue-100 border-2 border-blue-200 flex items-center justify-center mb-6 shadow-sm">
              <User className="w-12 h-12 text-blue-400" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">Japuri</h3>
            <p className="text-sm font-semibold text-blue-600 mb-4">Founder & Technical Lead, Vaulti</p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                I built Vaulti because I was tired of trading privacy for convenience. Every mainstream cloud service came with fine print — data scanning, compression, perpetual billing, and the quiet assumption that your files were fair game.
              </p>
              <p>
                So I built an alternative: a private, open-source server vault that gives people real ownership over their digital lives — without requiring them to be a tech expert to use it.
              </p>
              <p>
                I handle everything myself — infrastructure setup, security, customer support, and ongoing maintenance. When you message me, you're talking to the person who actually built and runs the system. That matters.
              </p>
            </div>

            <a
              href="mailto:japuri0318@gmail.com"
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </motion.div>

          {/* Right — Experience grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Areas of Expertise</p>

            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-start bg-slate-50 border border-slate-100 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">{exp.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5"
            >
              <p className="text-sm text-emerald-800 font-medium leading-relaxed">
                💡 <strong>You don't need to be technical</strong> to work with me. Whether you're a first-time cloud user or a developer looking for infrastructure support — I'll speak your language and get things done.
              </p>
              <a href="mailto:japuri0318@gmail.com" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">
                Start a conversation <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
