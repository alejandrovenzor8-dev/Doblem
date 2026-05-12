"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Conversamos sobre tus necesidades, presupuesto y visión del proyecto para entender exactamente qué estás buscando.",
  },
  {
    number: "02",
    title: "Diseño y Planificación",
    description:
      "Nuestro equipo de arquitectos y diseñadores crea el proyecto detallado con renders 3D y presupuesto final.",
  },
  {
    number: "03",
    title: "Construcción",
    description:
      "Ejecutamos el proyecto con los más altos estándares, informándote del avance en cada etapa con total transparencia.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Hacemos entrega formal de tu proyecto terminado, con garantía y servicio post-venta para tu total satisfacción.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          >
            Cómo Trabajamos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1a1a1a] text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Nuestro Proceso
          </motion.h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-[#ede8dc] mx-16" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 bg-[#c9a96e] rounded-full flex flex-col items-center justify-center mx-auto mb-6">
                    <span className="text-white text-xs font-bold tracking-widest">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#c9a96e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[#ede8dc] mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-[#1a1a1a] mb-1">{step.title}</h3>
                <p className="text-[#8a8a8a] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
