"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#preise", label: "Preise" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fafaf8]/90 backdrop-blur-md border-b border-[#e5e5e0]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/2" className="flex items-center gap-2.5 group">
            <span className="block w-2 h-2 rounded-full bg-[#c23b22] transition-transform duration-300 group-hover:scale-125" />
            <span className="text-[#1a1a1a] text-sm font-light tracking-[0.2em] uppercase">
              Domenic Hacker
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6b6b6b] text-xs font-light tracking-[0.15em] uppercase hover:text-[#1a1a1a] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 px-5 py-2 text-xs font-light tracking-[0.15em] uppercase border border-[#c23b22] text-[#c23b22] hover:bg-[#c23b22] hover:text-white transition-all duration-300"
            >
              Termin buchen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#1a1a1a] p-2"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-[#fafaf8] z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1a1a1a] text-sm font-light tracking-[0.25em] uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 text-xs font-light tracking-[0.15em] uppercase border border-[#c23b22] text-[#c23b22]"
              >
                Termin buchen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
