"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, Palette } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Venta de Inmuebles Premium",
    description:
      "Accede a un catálogo exclusivo de propiedades residenciales y comerciales en los mejores fraccionamientos de Chihuahua. Asesoría integral en cada paso del proceso.",
    features: ["Propiedades exclusivas", "Asesoría legal", "Financiamiento"],
  },
  {
    icon: Hammer,
    title: "Construcción Residencial",
    description:
      "Construimos tu hogar con los más altos estándares de calidad, desde la cimentación hasta la entrega final. Materiales premium y mano de obra certificada.",
    features: ["Proyectos llave en mano", "Control de calidad", "Garantía"],
  },
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description:
      "Nuestro equipo de diseñadores transforma tus ideas en espacios únicos. Diseño arquitectónico, de interiores y paisajismo completamente a tu medida.",
    features: ["Diseño 3D", "Renders fotorrealistas", "Materiales a medida"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          >
            Lo que Hacemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Nuestros Servicios
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group p-8 bg-[#1a1a1a] rounded-xl border border-transparent hover:border-[#c9a96e] transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c9a96e]/20 transition-colors duration-300">
                  <Icon size={28} className="text-[#c9a96e]" />
                </div>
                <h3
                  className="text-white text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#8a8a8a] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#d4d4d4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
