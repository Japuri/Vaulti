import { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  // Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleNav(href: string) {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location !== "/") {
        window.location.href = href;
      } else {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }
    }
  }

  return (
    <>
      {/* ── Top bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 py-3 px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled || open ? "glass-nav shadow-sm" : "bg-white/80 backdrop-blur-md border-b border-slate-100"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Shield className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-bold tracking-tight text-slate-900">Vaulti</span>
        </Link>

        {/* Desktop links — hidden below lg */}
        <div className="hidden lg:flex items-center gap-7 text-sm text-slate-600 font-medium">
          {navLinks.map((link) => {
            const isRoute = !link.href.startsWith("/#");
            const isActive = isRoute && location === link.href;
            if (isRoute) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-blue-600 transition-colors duration-200 ${isActive ? "text-blue-600 font-semibold" : ""}`}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-gentle-pulse" />
            <span className="text-xs text-slate-500 font-medium">Online &amp; Fully Protected</span>
          </div>
          <a
            href="mailto:japuri0318@gmail.com"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Set Up Your Vault
          </a>
        </div>

        {/* Mobile: status + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-gentle-pulse" />
            <span className="text-xs text-slate-500 font-medium hidden sm:block">Online</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </motion.nav>

      {/* ── Sidebar overlay + drawer ── */}
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer — slides in from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[110] w-[280px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-slate-900">Vaulti</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Status */}
        <div className="mx-5 mt-4 flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-gentle-pulse shrink-0" />
          <span className="text-xs text-emerald-700 font-medium">Online &amp; Fully Protected</span>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 mt-5 space-y-1 overflow-y-auto">
          <p className="px-4 pb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">Pages</p>
          {navLinks.map((link) => {
            const isRoute = !link.href.startsWith("/#");
            const isActive = isRoute && location === link.href;
            const cls = `flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            }`;

            return isRoute ? (
              <Link key={link.label} href={link.href} className={cls}>
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            ) : (
              <button key={link.label} onClick={() => handleNav(link.href)} className={cls}>
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-5 pb-6 pt-4 border-t border-slate-100">
          <a
            href="mailto:japuri0318@gmail.com"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Set Up Your Vault
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
