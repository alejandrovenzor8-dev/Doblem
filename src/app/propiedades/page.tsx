"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Bed, Bath, Search } from "lucide-react";
import { properties } from "@/data/properties";

export default function PropiedadesPage() {
  const [tipo, setTipo] = useState<string>("todos");
  const [habitaciones, setHabitaciones] = useState<string>("todos");
  const [precio, setPrecio] = useState<string>("todos");

  const filtered = properties.filter((p) => {
    if (tipo !== "todos" && p.type !== tipo) return false;
    if (habitaciones !== "todos" && p.bedrooms < parseInt(habitaciones))
      return false;
    if (precio === "bajo" && p.priceNum > 3000000) return false;
    if (precio === "medio" && (p.priceNum < 3000000 || p.priceNum > 5000000))
      return false;
    if (precio === "alto" && p.priceNum < 5000000) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Catálogo Exclusivo
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Propiedades
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-b border-[#ede8dc] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-[#8a8a8a]">
            <Search size={16} />
            <span className="text-sm font-medium">Filtros:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {["todos", "casa", "departamento", "terreno"].map((t) => (
              <button
                key={t}
                onClick={() => setTipo(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  tipo === t
                    ? "bg-[#c9a96e] text-white"
                    : "border border-[#d4d4d4] text-[#4a4a4a] hover:border-[#c9a96e]"
                }`}
              >
                {t === "todos" ? "Todos" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={habitaciones}
            onChange={(e) => setHabitaciones(e.target.value)}
            className="border border-[#d4d4d4] rounded px-3 py-2 text-sm text-[#4a4a4a] focus:outline-none focus:border-[#c9a96e]"
          >
            <option value="todos">Habitaciones: Todas</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

          <select
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="border border-[#d4d4d4] rounded px-3 py-2 text-sm text-[#4a4a4a] focus:outline-none focus:border-[#c9a96e]"
          >
            <option value="todos">Precio: Todos</option>
            <option value="bajo">Hasta $3M MXN</option>
            <option value="medio">$3M – $5M MXN</option>
            <option value="alto">Más de $5M MXN</option>
          </select>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#8a8a8a]">
              No se encontraron propiedades con esos filtros.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-52">
                    <div
                      className="w-full h-full"
                      style={{ background: property.gradient }}
                    />
                    <div className="absolute bottom-3 left-3 bg-[#c9a96e] text-white text-sm font-bold px-3 py-1 rounded">
                      {property.price}
                    </div>
                    <div
                      className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        property.status === "disponible"
                          ? "bg-green-500 text-white"
                          : property.status === "en_proceso"
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {property.status === "disponible"
                        ? "Disponible"
                        : property.status === "en_proceso"
                        ? "En Proceso"
                        : "Vendido"}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a1a] text-lg mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#8a8a8a] text-sm mb-4">
                      <MapPin size={14} className="text-[#c9a96e]" />
                      <span className="line-clamp-1">{property.location}</span>
                    </div>
                    <div className="flex items-center gap-5 text-[#4a4a4a] text-sm border-t border-[#ede8dc] pt-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bed size={15} className="text-[#c9a96e]" />
                          <span>{property.bedrooms} hab</span>
                        </div>
                      )}
                      {property.bathrooms > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bath size={15} className="text-[#c9a96e]" />
                          <span>{property.bathrooms} baños</span>
                        </div>
                      )}
                      <div className="ml-auto text-[#8a8a8a]">
                        {property.area} m²
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Link
                      href={`/propiedades/${property.id}`}
                      className="block w-full text-center py-2.5 border border-[#c9a96e] text-[#c9a96e] text-sm font-semibold rounded hover:bg-[#c9a96e] hover:text-white transition-colors duration-200"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
