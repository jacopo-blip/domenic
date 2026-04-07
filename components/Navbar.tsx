"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Check } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Leistungen", href: "#leistungen", sectionId: "leistungen" },
  { label: "Über mich", href: "/ueber-mich", sectionId: "ueber-mich" },
  { label: "Preise", href: "#preise", sectionId: "preise" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
  { label: "Kontakt", href: "#kontakt", sectionId: "kontakt" },
  { label: "Heilmassage Wien", href: "/heilmassage-wien-1080", sectionId: "heilmassage-wien-1080" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBookingPage = pathname === "/buchen";
  const getHref = (href: string) =>
    !isHomePage && href.startsWith("#") ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isBookingPage]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const getLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    if (scrolled) {
      return isActive
        ? "text-[#0d4f4f] bg-[#0d4f4f]/8"
        : "text-[#333] hover:text-[#0d4f4f] hover:bg-[#0d4f4f]/8";
    }
    return isActive
      ? "text-white bg-white/15"
      : "text-white/90 hover:text-white hover:bg-white/15";
  };

  const getMobileLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return isActive
      ? "text-[#0d4f4f]"
      : "text-[#111] hover:text-[#0d4f4f]";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <a
              href="/"
              className="relative z-10 flex items-center gap-2.5"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/images/logo-icon.svg"
                alt="Heilmasseur Domenic Hacker Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span
                className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#111]" : "text-white"
                }`}
              >
                Domenic Hacker
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
<<<<<<< HEAD
                  href={getHref(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${getLinkClass(link.sectionId)}`}
                >
                  {link.label}
                </a>
              ))}
              {isBookingPage ? (
                <span className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#0d4f4f] px-5 py-2.5 text-sm font-bold text-white">
                  <Check size={16} strokeWidth={3} />
                  Termin buchen
                </span>
              ) : (
                <a
                  href="/buchen"
                  className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#e8654a]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#e8654a]/30 hover:scale-105"
                >
                  Termin buchen
                </a>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative z-10 md:hidden p-2 rounded-xl transition-colors ${
                scrolled || mobileOpen
                  ? "text-[#111] hover:bg-black/5"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
<<<<<<< HEAD
                  href={getHref(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-extrabold transition-colors ${getMobileLinkClass(link.sectionId)}`}
                >
                  {link.label}
                </motion.a>
              ))}
              {isBookingPage ? (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0d4f4f] px-8 py-3.5 text-lg font-bold text-white"
                >
                  <Check size={20} strokeWidth={3} />
                  Termin buchen
                </motion.span>
              ) : (
                <motion.a
                  href="/buchen"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-8 py-3.5 text-lg font-bold text-white shadow-lg"
                >
                  Termin buchen
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
