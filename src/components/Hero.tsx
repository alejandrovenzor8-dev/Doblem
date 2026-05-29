"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";

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
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">

      {/* Full-section background image — blurred 20% opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-poster.jpeg')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(3px)",
          opacity: 0.65,
        }}
      />

      {/* Single full-width gradient overlay — dark left, fades right */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.55) 0%, rgba(15,30,61,0.45) 35%, rgba(15,30,61,0.10) 55%, transparent 75%)",
        }}
      />

      {/* Main split layout */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen">

        {/* LEFT — Text content */}
        <div
          className="relative flex flex-col justify-center lg:w-1/2 px-8 md:px-14 lg:px-20 pt-32 pb-48 lg:pb-32 z-10"
        >
          {/* Gold grid texture */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div variants={container} initial="hidden" animate="show" className="relative">
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
                fontSize: "clamp(2.2rem, 4vw, 4.5rem)",
              }}
            >
              Construimos el{" "}
              <em className="text-[#c9a96e] not-italic">Hogar</em>
              <br />
              de tus Sueños
            </motion.h1>

            <motion.p
              variants={item}
              className="text-white/70 text-lg max-w-md mb-10 leading-relaxed"
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
        </div>

        {/* RIGHT — Video */}
        <div className="relative lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-contain"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Left-edge fade removed — handled by section overlay */}

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            className="absolute top-30 right-6 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm transition-all duration-200"
            aria-label={muted ? "Activar sonido" : "Silenciar"}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{muted ? "Activar sonido" : "Silenciar"}</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 left-1/4 -translate-x-1/2 flex-col items-center gap-2 text-white/50 z-10 hidden lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm border-t border-white/10">
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
