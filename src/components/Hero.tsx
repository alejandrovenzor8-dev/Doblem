"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stats = [
  { value: "50+", label: "Proyectos" },
  { value: "15", label: "Años de Experiencia" },
  { value: "200+", label: "Clientes Satisfechos" },
  { value: "Chihuahua", label: "México" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a2744 50%, #0a0a0a 100%)",
        }}
      />
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-40"
      >
        <motion.p
          variants={item}
          className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Chihuahua, México · Desde 2009
        </motion.p>

        <motion.h1
          variants={item}
          className="text-white font-bold leading-tight mb-6"
          style={{
            fontFamily: "var(--font-playfair, serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            maxWidth: "800px",
          }}
        >
          Construimos el{" "}
          <em className="text-[#c9a96e] not-italic">Hogar</em>
          <br />
          de tus Sueños
        </motion.h1>

        <motion.p
          variants={item}
          className="text-white/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          style={{ fontStyle: "italic" }}
        >
          Inmuebles premium, construcción residencial y diseño personalizado con
          15 años de excelencia en Chihuahua.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Link
            href="/propiedades"
            className="px-8 py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a96e]/30"
          >
            Ver Propiedades
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-200"
          >
            Contactar Asesor
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="py-5 px-6 text-center">
                <div
                  className="text-[#c9a96e] text-2xl font-bold"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {s.value}
                </div>
                <div className="text-white/60 text-xs tracking-wide mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
