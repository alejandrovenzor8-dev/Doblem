"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";

export default function PropertiesSection() {
  const featured = properties.slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
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
            Selección Exclusiva
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#1a1a1a] text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Propiedades Destacadas
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image placeholder */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{ background: property.gradient }}
                />
                {/* Price overlay */}
                <div className="absolute bottom-3 left-3 bg-[#c9a96e] text-white text-sm font-bold px-3 py-1 rounded">
                  {property.price}
                </div>
                {/* Status badge */}
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

              {/* Content */}
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded hover:bg-[#c9a96e] transition-colors duration-200"
          >
            Ver todas las propiedades
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
