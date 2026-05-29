"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="py-24 px-4 md:px-8 lg:px-16 text-center"
      style={{
        background: "linear-gradient(135deg, #1a2744 0%, #0a0a0a 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Da el Siguiente Paso
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-5"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Construyamos Juntos tu Próximo Proyecto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg mb-10"
        >
          Agenda una asesoría y conoce cómo podemos transformar tus ideas en 
          espacios funcionales, modernos y de alto valor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/propiedades"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-200"
          >
            Ver Propiedades
          </Link>
          <Link
            href="/agenda"
            className="px-8 py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors duration-200"
          >
            Agendar Cita
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
