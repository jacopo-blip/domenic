"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf6f1]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(45,36,24,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg sm:text-xl font-semibold tracking-tight text-[#2d2418] hover:text-[#c2704e] transition-colors"
          >
            Domenic Hacker
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#7a6e60] hover:text-[#c2704e] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+436701895256"
              className="inline-flex items-center gap-2 rounded-full bg-[#c2704e] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(194,112,78,0.35)] hover:bg-[#a85d3e] hover:shadow-[0_4px_20px_rgba(194,112,78,0.45)] transition-all"
            >
              <Phone size={15} strokeWidth={2.5} />
              Termin buchen
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-[#2d2418] hover:bg-[#f5efe6] transition-colors"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#faf6f1]/98 backdrop-blur-md border-t border-[#e8ddd0]"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[#2d2418] hover:bg-[#f5efe6] hover:text-[#c2704e] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+436701895256"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#c2704e] px-5 py-3 text-base font-semibold text-white shadow-[0_2px_12px_rgba(194,112,78,0.35)]"
              >
                <Phone size={16} strokeWidth={2.5} />
                Termin buchen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
