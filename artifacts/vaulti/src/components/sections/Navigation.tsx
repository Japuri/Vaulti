import { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Close sidebar on route change
  useEffect(() => { setOpen(false); }, [location]);

  function handleNav(href: string) {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location !== "/") {
        window.location.href = href;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        className={`fixed top-0 w-full z-50 py-3 px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "glass-nav shadow-sm" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Shield className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-bold tracking-tight text-slate-900">Vaulti</span>
        </Link>

        {/* Desktop links */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-slate-700" />
        </button>
      </motion.nav>

      {/* ── Mobile sidebar ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-900">Vaulti</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Status pill */}
              <div className="mx-6 mt-5 flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-gentle-pulse" />
                <span className="text-xs text-emerald-700 font-medium">Online &amp; Fully Protected</span>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 mt-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isRoute = !link.href.startsWith("/#");
                  const isActive = isRoute && location === link.href;

                  const cls = `flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`;

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      {isRoute ? (
                        <Link href={link.href} className={cls}>
                          {link.label}
                          <ChevronRight className="w-4 h-4 opacity-40" />
                        </Link>
                      ) : (
                        <button onClick={() => handleNav(link.href)} className={cls}>
                          {link.label}
                          <ChevronRight className="w-4 h-4 opacity-40" />
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="px-6 py-6 border-t border-slate-100">
                <a
                  href="mailto:japuri0318@gmail.com"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  Set Up Your Vault
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
