"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-domenic", label: "Über mich" },
    { href: "#preise", label: "Preise" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#e8ede4]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[#1e3020] font-semibold text-sm tracking-wide">
          Domenic Hacker
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#4a5945] hover:text-[#1e3020] text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-[#4a7c59] hover:bg-[#3a6347] text-white text-sm px-5 py-2 rounded-full transition-colors"
          >
            Termin buchen
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1e3020]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#e8ede4] border-t border-[#c8d9bf] px-6 pb-6 pt-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#4a5945] text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-[#4a7c59] text-white text-sm px-5 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Termin buchen
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
