"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Termin buchen", href: "/buchen" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-icon.svg"
                alt="Logo"
                width={36}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="font-extrabold text-lg text-white tracking-tight">
                Domenic Hacker
              </span>
            </div>
            <p className="mt-3 text-sm text-white/40 max-w-xs leading-relaxed">
              Diplomierter Heilmasseur in Wien 1080. Heilmassage,
              Lymphdrainage & Klassische Massage. Feldgasse 3/20, 1080 Wien.
            </p>
          </div>

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

        <div className="mt-12 h-px bg-white/5" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Domenic Hacker. Alle Rechte
            vorbehalten.
          </p>
          <p className="inline-flex items-center gap-1">
            Crafted with <Heart size={12} className="text-[#e8654a]" /> in Wien
          </p>
        </div>
      </div>
    </footer>
  );
}
