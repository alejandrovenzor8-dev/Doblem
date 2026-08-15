"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredPortfolioItems } from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          >
            Proyectos reales
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)]"
          >
            Nuestro Portafolio
          </motion.h2>
          <p className="mt-4 text-white/55 max-w-2xl mx-auto">
            Arquitectura, interiores y detalles construidos por Doble M.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPortfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                href={item.href ?? "/portafolio"}
                className="relative group block rounded-xl overflow-hidden aspect-[4/3] bg-[#151515]"
              >
                <Image
                  src={item.image}
                  alt={`${item.name}: ${item.detail}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[#c9a96e] text-[11px] tracking-[0.2em] uppercase">
                    {item.category}
                  </p>
                  <h3 className="text-white text-lg font-semibold mt-1">{item.name}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.detail}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portafolio"
            className="inline-flex px-7 py-3 rounded-full bg-[#c9a96e] text-[#111] font-semibold hover:bg-[#d8ba82] transition-colors"
          >
            Ver portafolio completo
          </Link>
        </div>
      </div>
    </section>
  );
}
