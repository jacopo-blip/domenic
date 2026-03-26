"use client";

import { ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c2833] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2980b9]">
                <span className="text-sm font-bold text-white tracking-tight">DH</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Domenic Hacker
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Diplomierter Heilmasseur in Wien 1080. Therapeutische Behandlungen
              für Ihr körperliches Wohlbefinden.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Feldgasse 3/20</li>
              <li>1080 Wien</li>
              <li className="pt-1">
                <a
                  href="tel:+436701895256"
                  className="hover:text-white transition-colors"
                >
                  +43 670 189 52 56
                </a>
              </li>
              <li>
                <a
                  href="mailto:praxis@heilmasseur-domenic.at"
                  className="hover:text-white transition-colors"
                >
                  praxis@heilmasseur-domenic.at
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>&copy; 2026 Domenic Hacker. Alle Rechte vorbehalten.</span>
            <a
              href="/impressum"
              className="hover:text-white/70 transition-colors"
            >
              Impressum
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 transition-all hover:bg-white/10 hover:text-white"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
