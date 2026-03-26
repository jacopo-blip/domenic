"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold tracking-wide text-[#f5f5f0]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Domenic Hacker
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#a0a0a0] hover:text-[#c9a96e] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-4 inline-flex items-center rounded-none border border-[#c9a96e] bg-transparent px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#0a0a0a]"
            >
              Termin buchen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#f5f5f0] p-2"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            transition={{ duration: 0.25 }}
            className="md:hidden absolute inset-x-0 top-20 bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-[#c9a96e]/20"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.25em] text-[#a0a0a0] hover:text-[#c9a96e] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-2 border border-[#c9a96e] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-300"
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
