import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Globe, Server, Bot, Network, ArrowRight, Mail } from "lucide-react";

const solutions = [
  {
    icon: Cloud,
    number: "01",
    color: "blue",
    title: "Cloud Storage Solutions",
    subtitle: "For individuals, families & small teams",
    heroLine: "Your files. Your vault. Nobody else's business.",
    body: "Stop handing your personal memories over to platforms that profit from them. With Vaulti, your photos and videos are stored in your own private, encrypted server vault — full resolution, fully isolated, fully yours. Whether you're an everyday user wanting to protect your family photos or a professional archiving important documents, you get private cloud storage that actually respects you.",
    who: "Individuals, families, creators, and small teams who want privacy without the technical complexity.",
    tags: ["Full-Resolution Photo & Video Backup", "Auto-Sync in Background", "Server-Side Encryption", "Multi-Device Access", "Document Archiving"],
  },
  {
    icon: Globe,
    number: "02",
    color: "emerald",
    title: "Website & Application Hosting",
    subtitle: "For entrepreneurs, creators & businesses",
    heroLine: "Your product online. Reliable. Managed. Done.",
    body: "Whether you're launching a portfolio, a business website, or a full web application, you need hosting that's fast, secure, and doesn't go down. We handle server configuration, deployment, SSL setup, and ongoing maintenance — so you can focus on building your product and growing your business, not troubleshooting server errors at midnight.",
    who: "Entrepreneurs, freelancers, startups, and businesses that need reliable hosting without managing the infrastructure themselves.",
    tags: ["Managed Web Hosting", "Custom Domain Setup", "SSL & Security", "Performance Optimisation", "Ongoing Maintenance"],
  },
  {
    icon: Server,
    number: "03",
    color: "blue",
    title: "Virtual Private Server (VPS) Hosting",
    subtitle: "For developers, teams & growing businesses",
    heroLine: "Dedicated compute. Full control. Zero babysitting.",
    body: "A VPS gives you your own isolated slice of server resources — dedicated CPU, RAM, and storage that isn't shared with anyone else. We provision, harden, and manage your VPS environment so your development or production workloads run on a reliable, properly secured foundation. Whether it's a staging server, a database backend, or a containerised application — we set it up right.",
    who: "Developers, engineering teams, and businesses that need dedicated server resources and control without hiring a full-time sysadmin.",
    tags: ["Dedicated Server Resources", "Root-Level Access Available", "Scalable Compute & Storage", "99.9% Uptime Focus", "Security Hardening"],
  },
  {
    icon: Bot,
    number: "04",
    color: "emerald",
    title: "Business Automation Solutions",
    subtitle: "For businesses ready to work smarter, not harder",
    heroLine: "Stop doing manually what a system can do automatically.",
    body: "Every hour your team spends on repetitive, predictable tasks is an hour not spent on your actual business. We analyse your current workflows, identify what can be automated, and build systems that handle those processes reliably — customer onboarding, data collection, internal reporting, follow-up sequences, and more. If it happens the same way every time, it can be automated.",
    who: "Business owners, operations managers, and growing teams who are losing time to repetitive processes and want to reclaim it.",
    tags: ["Workflow Automation", "System & App Integrations", "Auto Reporting Pipelines", "Onboarding Flows", "Process Optimisation"],
  },
  {
    icon: Network,
    number: "05",
    color: "blue",
    title: "Managed IT Infrastructure Services",
    subtitle: "For organisations that need reliable IT backbone",
    heroLine: "Enterprise-grade IT reliability — without the enterprise price tag.",
    body: "Your business runs on its IT infrastructure. When that infrastructure fails, everything stops. We provide proactive managed IT services — monitoring your servers, networks, and systems around the clock, applying security patches before vulnerabilities are exploited, managing backups, and responding to issues before they become outages. Think of it as having a dedicated IT team, without the overhead of hiring one.",
    who: "SMEs, growing companies, and organisations that rely on their IT systems and need them managed professionally without a full in-house IT department.",
    tags: ["24/7 Infrastructure Monitoring", "Backup & Disaster Recovery", "Network Management", "Security Hardening & Patching", "Proactive Maintenance"],
  },
];

function SolutionCard({ sol, i }: { sol: typeof solutions[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = sol.icon;
  const isBlue = sol.color === "blue";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05 * i }}
      className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm"
    >
      {/* Card header */}
      <div className={`px-8 pt-8 pb-6 ${isBlue ? "bg-gradient-to-br from-blue-50 to-white" : "bg-gradient-to-br from-emerald-50 to-white"}`}>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${isBlue ? "bg-blue-100" : "bg-emerald-100"}`}>
            <Icon className={`w-7 h-7 ${isBlue ? "text-blue-600" : "text-emerald-600"}`} />
          </div>
          <span className={`text-5xl font-black opacity-10 ${isBlue ? "text-blue-600" : "text-emerald-600"}`}>{sol.number}</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{sol.title}</h2>
        <p className={`text-sm font-semibold mb-3 ${isBlue ? "text-blue-500" : "text-emerald-600"}`}>{sol.subtitle}</p>
        <p className="text-base font-semibold text-slate-700 italic">"{sol.heroLine}"</p>
      </div>

      {/* Card body */}
      <div className="px-8 py-6 space-y-6">
        <p className="text-sm text-slate-500 leading-relaxed">{sol.body}</p>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Best for</p>
          <p className="text-sm text-slate-600 leading-relaxed">{sol.who}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">What's included</p>
          <div className="flex flex-wrap gap-2">
            {sol.tags.map((tag) => (
              <span key={tag} className={`text-xs px-3 py-1.5 rounded-full font-medium ${isBlue ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href="mailto:japuri0318@gmail.com"
          className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 ${isBlue ? "text-blue-600 hover:text-blue-800" : "text-emerald-600 hover:text-emerald-800"}`}
        >
          Enquire about this solution
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export function SolutionsPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Page hero */}
      <div ref={heroRef} className="bg-white border-b border-slate-100 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Network className="w-4 h-4" />
            Everything We Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Solutions Built for{" "}
            <span className="text-blue-600">Real Needs</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            From personal cloud storage to full IT infrastructure management — every service is delivered personally, with no corporate middlemen and no fine print.
          </p>
          <a
            href="mailto:japuri0318@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Talk to us about your needs
          </a>
        </motion.div>
      </div>

      {/* Solutions grid */}
      <div className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-6">
        {solutions.map((sol, i) => (
          <SolutionCard key={sol.title} sol={sol} i={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not sure which solution fits you?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Send us a message describing what you need. We'll figure out the best approach together — no sales pressure, just honest guidance.
          </p>
          <a
            href="mailto:japuri0318@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
