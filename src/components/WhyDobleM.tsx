"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Heart } from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description:
      "15 años en el mercado inmobiliario de Chihuahua avalan nuestra trayectoria y conocimiento del sector.",
  },
  {
    icon: Shield,
    title: "Calidad Premium",
    description:
      "Utilizamos materiales de primera clase y trabajamos con los mejores proveedores para garantizar resultados excepcionales.",
  },
  {
    icon: CheckCircle,
    title: "Proceso Transparente",
    description:
      "Sin sorpresas ni costos ocultos. Te acompañamos en cada etapa con total claridad y comunicación abierta.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description:
      "Cada cliente es único. Te ofrecemos asesoría dedicada para encontrar la solución perfecta a tus necesidades.",
  },
];

const stats = [
  { value: "50+", label: "Proyectos Completados" },
  { value: "15", label: "Años de Experiencia" },
  { value: "200+", label: "Clientes Satisfechos" },
  { value: "98%", label: "Tasa de Satisfacción" },
];

export default function WhyDobleM() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            >
              Nuestra Diferencia
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#1a1a1a] text-4xl font-bold mb-10"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              ¿Por qué elegir{" "}
              <span className="text-[#c9a96e]">DobleM</span>?
            </motion.h2>

            <div className="space-y-8">
              {differentiators.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#f5f0e8] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={22} className="text-[#c9a96e]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-1">
                        {d.title}
                      </h3>
                      <p className="text-[#8a8a8a] text-sm leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right – Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#f5f0e8] rounded-2xl p-8 text-center hover:bg-[#ede8dc] transition-colors duration-200"
              >
                <div
                  className="text-5xl font-bold text-[#c9a96e] mb-2"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {s.value}
                </div>
                <div className="text-[#4a4a4a] text-sm font-medium leading-snug">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
