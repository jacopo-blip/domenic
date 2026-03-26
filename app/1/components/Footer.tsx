"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Impressum", href: "/impressum" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a96e]/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <a
            href="#"
            className="mb-8 text-xl tracking-wide text-[#f5f5f0]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Domenic Hacker
          </a>

          {/* Gold divider */}
          <div className="mb-8 h-px w-12 bg-[#c9a96e]/40" />

          {/* Nav links */}
          <nav className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#a0a0a0] transition-colors hover:text-[#c9a96e]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs tracking-wide text-[#555]">
            &copy; {new Date().getFullYear()} Domenic Hacker — Heilmasseur in Wien. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
