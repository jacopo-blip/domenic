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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(26,82,118,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a5276]">
              <span className="text-sm font-bold text-white tracking-tight">DH</span>
            </div>
            <div className="hidden sm:block">
              <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${scrolled ? "text-[#1c2833]" : "text-white"}`}>
                Domenic Hacker
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-[#566573] hover:text-[#1a5276] hover:bg-[#f0f4f8]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+436701895256"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-[#2980b9] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1a5276] hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              Termin buchen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1c2833] hover:bg-[#f0f4f8]" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#e8eef3]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block px-4 py-3 text-[#1c2833] font-medium rounded-lg hover:bg-[#f0f4f8] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+436701895256"
                className="flex items-center justify-center gap-2 mt-3 rounded-lg bg-[#2980b9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a5276]"
              >
                <Phone className="h-4 w-4" />
                Termin buchen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
