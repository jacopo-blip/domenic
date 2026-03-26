"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Impressum", href: "/impressum" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-16 pb-8">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0d4f4f] text-white font-extrabold text-sm">
                DH
              </span>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Domenic Hacker
              </span>
            </div>
            <p className="mt-3 text-sm text-white/40 max-w-xs leading-relaxed">
              Diplomierter Heilmasseur in Wien 1080. Therapeutische Behandlungen
              für Ihr Wohlbefinden.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/40 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/5" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Domenic Hacker. Alle Rechte vorbehalten.</p>
          <p className="inline-flex items-center gap-1">
            Crafted with <Heart size={12} className="text-[#e8654a]" /> in Wien
          </p>
        </div>
      </div>
    </footer>
  );
}
