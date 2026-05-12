"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos", "Residencial", "Comercial", "Diseño"] as const;
type Category = (typeof categories)[number];

const portfolioItems = [
  {
    id: 1,
    name: "Residencia Norte Premium",
    category: "Residencial" as Category,
    gradient:
      "linear-gradient(135deg, #1a2744 0%, #2d4a7a 60%, #c9a96e 100%)",
    year: "2023",
  },
  {
    id: 2,
    name: "Oficinas Corporativas Cima",
    category: "Comercial" as Category,
    gradient: "linear-gradient(135deg, #111111 0%, #2a2a2a 60%, #c9a96e 100%)",
    year: "2023",
  },
  {
    id: 3,
    name: "Interior Loft San Felipe",
    category: "Diseño" as Category,
    gradient:
      "linear-gradient(135deg, #2e1a1a 0%, #5a2d2d 60%, #c9a96e 100%)",
    year: "2022",
  },
  {
    id: 4,
    name: "Casa Campestre Las Palmas",
    category: "Residencial" as Category,
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 60%, #8bc34a 100%)",
    year: "2022",
  },
  {
    id: 5,
    name: "Boutique Hotel Centro",
    category: "Comercial" as Category,
    gradient:
      "linear-gradient(135deg, #0d1b3e 0%, #1a2744 60%, #c9a96e 100%)",
    year: "2021",
  },
  {
    id: 6,
    name: "Diseño Penthouse Cumbres",
    category: "Diseño" as Category,
    gradient:
      "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 60%, #c9a96e 100%)",
    year: "2021",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState<Category>("Todos");

  const filtered =
    active === "Todos"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          >
            Nuestros Proyectos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Nuestro Portafolio
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-[#c9a96e] text-white"
                  : "border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-xl overflow-hidden cursor-pointer"
                style={{ height: "260px" }}
              >
                <div
                  className="w-full h-full"
                  style={{ background: item.gradient }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-[#c9a96e] text-xs tracking-widest uppercase mb-2">
                    {item.category} · {item.year}
                  </span>
                  <h3
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    {item.name}
                  </h3>
                </div>
                {/* Default label */}
                <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-white/80 text-sm font-medium">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
