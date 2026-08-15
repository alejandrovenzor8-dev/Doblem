"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/data/portfolio";

export default function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<PortfolioCategory>("Todos");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const filtered =
    active === "Todos" ? items : items.filter((item) => item.category === active);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              active === category
                ? "bg-[#c9a96e] text-[#111]"
                : "border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className={`relative group overflow-hidden rounded-xl bg-[#151515] text-left ${
              index % 7 === 0 ? "sm:row-span-2 aspect-[4/5]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={item.image}
              alt={`${item.name}: ${item.detail}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[#c9a96e] text-[11px] tracking-[0.2em] uppercase mb-1">
                {item.category}
              </p>
              <h2 className="text-white font-semibold text-lg">{item.name}</h2>
              <p className="text-white/65 text-sm mt-1">{item.detail}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Cerrar imagen"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full h-[78vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selected.image}
              alt={`${selected.name}: ${selected.detail}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-5 left-5 right-16 text-white">
            <p className="font-semibold">{selected.name}</p>
            <p className="text-white/60 text-sm">{selected.detail} · {selected.location}</p>
            {selected.href && (
              <Link
                href={selected.href}
                className="inline-block mt-2 text-[#c9a96e] text-sm font-semibold"
                onClick={(event) => event.stopPropagation()}
              >
                Ver propiedad →
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
