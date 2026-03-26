export function Footer() {
  return (
    <footer className="bg-[#1e3020] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-sm">Domenic Hacker</p>
          <p className="text-white/50 text-xs mt-1">Diplomierter Heilmasseur · Wien 1080</p>
        </div>
        <div className="flex gap-6 text-xs text-white/50">
          <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
          <a href="#preise" className="hover:text-white transition-colors">Preise</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
        </div>
        <p className="text-white/30 text-xs">© 2026 Domenic Hacker</p>
      </div>
    </footer>
  );
}
