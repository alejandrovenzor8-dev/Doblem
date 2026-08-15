"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Blog", href: "/blog" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-[#d4d4d4]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Doble M Diseño y Construcción"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/logo-doblem-symbol.png"
              alt=""
              width={939}
              height={822}
              priority
              className="h-11 w-auto flex-shrink-0"
            />
            <Image
              src="/logo-doblem-wordmark.png"
              alt="Doble M Diseño y Construcción"
              width={1610}
              height={484}
              priority
              className={`h-auto w-[118px] sm:w-[138px] transition-[filter] duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#c9a96e] ${
                  scrolled ? "text-[#4a4a4a]" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agenda"
              className="ml-4 px-5 py-2.5 bg-[#c9a96e] text-white text-sm font-semibold rounded hover:bg-[#b8914a] transition-colors duration-200"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-200 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#d4d4d4] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 px-3 text-[#4a4a4a] font-medium hover:text-[#c9a96e] hover:bg-[#f5f0e8] rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/agenda"
                className="mt-3 py-3 text-center bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Agendar Cita
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
