"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "DobleM construyó nuestra casa de ensueño. Desde el primer día, el equipo fue profesional, puntual y transparente. Cada detalle fue exactamente como lo planeamos.",
    name: "Carlos Mendoza",
    role: "Empresario · Chihuahua",
  },
  {
    quote:
      "Compramos nuestro departamento a través de DobleM y fue la mejor decisión. Nos asesoraron en todo el proceso legal y financiero sin ninguna complicación.",
    name: "María González",
    role: "Médico · Chihuahua",
  },
  {
    quote:
      "El diseño de interiores que hicieron para nuestra oficina corporativa superó todas nuestras expectativas. Un equipo creativo y muy comprometido.",
    name: "Roberto Sáenz",
    role: "Director General · Grupo Sáenz",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          >
            Testimonios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1a1a1a] text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 border-l-4 border-[#c9a96e] shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#c9a96e] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-[#1a1a1a]">{t.name}</div>
                <div className="text-[#8a8a8a] text-xs mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
