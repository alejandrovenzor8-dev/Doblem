"use client";

import { useState } from "react";

const categories = ["Todos", "Residencial", "Comercial", "Diseño"] as const;
type Category = (typeof categories)[number];

const items = [
  { id: 1, name: "Residencia Norte Premium", category: "Residencial" as Category, year: "2023", m2: "450", location: "Las Palmas", gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 100%)" },
  { id: 2, name: "Oficinas Corporativas Cima", category: "Comercial" as Category, year: "2023", m2: "800", location: "Cumbres", gradient: "linear-gradient(135deg, #111111 0%, #2a2a2a 70%, #c9a96e 100%)" },
  { id: 3, name: "Interior Loft San Felipe", category: "Diseño" as Category, year: "2022", m2: "130", location: "San Felipe", gradient: "linear-gradient(135deg, #2e1a1a 0%, #5a2d2d 100%)" },
  { id: 4, name: "Casa Campestre Las Palmas", category: "Residencial" as Category, year: "2022", m2: "320", location: "Las Palmas", gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)" },
  { id: 5, name: "Boutique Hotel Centro", category: "Comercial" as Category, year: "2021", m2: "1200", location: "Centro", gradient: "linear-gradient(135deg, #0d1b3e 0%, #1a2744 70%, #c9a96e 100%)" },
  { id: 6, name: "Diseño Penthouse Cumbres", category: "Diseño" as Category, year: "2021", m2: "210", location: "Cumbres", gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 100%)" },
  { id: 7, name: "Conjunto Residencial El Prado", category: "Residencial" as Category, year: "2020", m2: "2400", location: "El Prado", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 70%, #c9a96e 100%)" },
  { id: 8, name: "Restaurante Gourmet Centro", category: "Comercial" as Category, year: "2020", m2: "350", location: "Centro", gradient: "linear-gradient(135deg, #2e2e1a 0%, #5a5a2d 100%)" },
  { id: 9, name: "Diseño Villa Campestre", category: "Diseño" as Category, year: "2019", m2: "480", location: "Las Palmas", gradient: "linear-gradient(135deg, #1a2e2e 0%, #2d5a5a 100%)" },
];

export default function PortafolioPage() {
  const [active, setActive] = useState<Category>("Todos");

  const filtered = active === "Todos" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Nuestros Proyectos
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Portafolio
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
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
            {filtered.map((item) => (
              <div
                key={item.id}
                className="relative group rounded-xl overflow-hidden cursor-pointer"
                style={{ height: "300px" }}
              >
                <div className="w-full h-full" style={{ background: item.gradient }} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-[#c9a96e] text-xs tracking-widest uppercase mb-2">
                    {item.category} · {item.year}
                  </span>
                  <h3
                    className="text-white text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {item.m2} m² · {item.location}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-[#c9a96e] text-xs mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
