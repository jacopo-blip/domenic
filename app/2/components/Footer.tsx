"use client";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#preise", label: "Preise" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[#fafaf8] border-t border-[#e5e5e0]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo / Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-2 h-2 rounded-full bg-[#c23b22]" />
              <span className="text-[#1a1a1a] text-sm font-light tracking-[0.2em] uppercase">
                Domenic Hacker
              </span>
            </div>
            <p className="text-[#6b6b6b] text-sm font-light leading-relaxed max-w-xs">
              Diplomierter Heilmasseur in Wien 1080.
              <br />
              Ihr Raum für Entspannung und Heilung.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase block mb-4">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#1a1a1a] text-sm font-light hover:text-[#c23b22] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase block mb-4">
              Kontakt
            </span>
            <ul className="space-y-3 text-[#1a1a1a] text-sm font-light">
              <li>Feldgasse 3/20, 1080 Wien</li>
              <li>
                <a
                  href="tel:+436701895256"
                  className="hover:text-[#c23b22] transition-colors duration-300"
                >
                  +43 670 189 52 56
                </a>
              </li>
              <li>
                <a
                  href="mailto:praxis@heilmasseur-domenic.at"
                  className="hover:text-[#c23b22] transition-colors duration-300"
                >
                  praxis@heilmasseur-domenic.at
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#e5e5e0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[#6b6b6b] text-xs font-light">
            &copy; 2026 Domenic Hacker. Alle Rechte vorbehalten.
          </span>
          <a
            href="/impressum"
            className="text-[#6b6b6b] text-xs font-light hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}
