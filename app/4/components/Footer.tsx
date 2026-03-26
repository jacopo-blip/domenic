"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const footerLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[#2d2418] text-[#c9b99a]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Brand */}
          <div>
            <p
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Domenic Hacker
            </p>
            <p className="text-sm leading-relaxed text-[#a09078]">
              Diplomierter Heilmasseur in Wien 1080.
              <br />
              Ihr Raum f&uuml;r Entspannung und Heilung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a09078] hover:text-[#c2704e] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/impressum"
                  className="text-sm text-[#a09078] hover:text-[#c2704e] transition-colors"
                >
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70 mb-4">
              Kontakt
            </p>
            <div className="space-y-2.5 text-sm text-[#a09078]">
              <p>Feldgasse 3/20, 1080 Wien</p>
              <p>
                <a
                  href="tel:+436701895256"
                  className="hover:text-[#c2704e] transition-colors"
                >
                  +43 670 189 52 56
                </a>
              </p>
              <p>
                <a
                  href="mailto:praxis@heilmasseur-domenic.at"
                  className="hover:text-[#c2704e] transition-colors"
                >
                  praxis@heilmasseur-domenic.at
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider + copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#a09078]/70">
            &copy; 2026 Domenic Hacker. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-[#a09078]/50 flex items-center gap-1">
            Mit <Heart size={12} className="text-[#c2704e]" /> gestaltet
          </p>
        </div>
      </div>
    </footer>
  );
}
