import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Globe, Server, Bot, Network, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Cloud,
    number: "01",
    color: "blue",
    title: "Cloud Storage Solutions",
    subtitle: "For individuals, families & small teams",
    body: "Your own private cloud vault — encrypted, full-resolution, and completely yours. No corporate entity scanning your files or profiling your content. Whether you're backing up personal memories or archiving important documents, we give you professional-grade private storage that's as easy to use as any mainstream app.",
    tags: ["Photo & Video Backup", "Document Archiving", "Private File Sync", "Multi-Device Access"],
  },
  {
    icon: Globe,
    number: "02",
    color: "emerald",
    title: "Website & Application Hosting",
    subtitle: "For entrepreneurs, creators & businesses",
    body: "Launch your website or web application on a managed private server — fast, reliable, and without the noise of shared hosting. We configure, deploy, and maintain your hosting environment so you can focus on building your product, not managing infrastructure. From simple landing pages to full-stack web apps.",
    tags: ["Managed Web Hosting", "Custom Domain Setup", "SSL & Security", "Performance Optimisation"],
  },
  {
    icon: Server,
    number: "03",
    color: "blue",
    title: "Virtual Private Server (VPS) Hosting",
    subtitle: "For developers, teams & growing businesses",
    body: "Dedicated virtual server resources — your own isolated compute environment with full control. Whether you need a staging environment, a production server, or a development sandbox, we provision and manage your VPS so your team gets the power of a private server without the complexity of running one.",
    tags: ["Dedicated Resources", "Root-Level Control", "Scalable Compute", "99.9% Uptime SLA"],
  },
  {
    icon: Bot,
    number: "04",
    color: "emerald",
    title: "Business Automation Solutions",
    subtitle: "For businesses ready to work smarter",
    body: "Stop spending hours on repetitive tasks. We design and implement workflow automation systems that connect your tools, eliminate manual steps, and free your team to focus on what actually moves the needle. From customer onboarding flows to internal reporting pipelines — if it's repeatable, it can be automated.",
    tags: ["Workflow Automation", "System Integrations", "Auto Reporting", "Process Optimisation"],
  },
  {
    icon: Network,
    number: "05",
    color: "blue",
    title: "Managed IT Infrastructure Services",
    subtitle: "For organisations that need reliable IT backbone",
    body: "Your entire technology infrastructure — servers, networking, backups, and security — professionally managed so your business never has to worry about it. We monitor, maintain, and evolve your IT systems proactively, catching problems before they become outages. Enterprise-level reliability, accessible for any business size.",
    tags: ["Infrastructure Monitoring", "Backup & Recovery", "Network Management", "Security Hardening"],
  },
];

export function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" ref={ref} className="py-28 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Network className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Solutions Built for{" "}
            <span className="text-blue-600">Real Needs</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Whether you're an individual protecting memories, a developer deploying an app, or a business streamlining operations — we have a solution designed around you.
          </p>
        </motion.div>

        <div className="space-y-6">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const isBlue = sol.color === "blue";
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm card-hover"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start gap-5 md:w-2/3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isBlue ? "bg-blue-100" : "bg-emerald-100"}`}>
                      <Icon className={`w-6 h-6 ${isBlue ? "text-blue-600" : "text-emerald-600"}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold uppercase tracking-widest ${isBlue ? "text-blue-400" : "text-emerald-500"}`}>
                          {sol.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{sol.title}</h3>
                      <p className={`text-xs font-semibold mb-3 ${isBlue ? "text-blue-500" : "text-emerald-600"}`}>{sol.subtitle}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{sol.body}</p>
                    </div>
                  </div>

                  <div className="md:w-1/3 flex flex-col justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {sol.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="mailto:japuri0318@gmail.com"
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${isBlue ? "text-blue-600 hover:text-blue-700" : "text-emerald-600 hover:text-emerald-700"}`}
                    >
                      Enquire about this solution
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
