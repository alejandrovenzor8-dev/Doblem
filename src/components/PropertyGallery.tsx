"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
  gradient: string;
}

export default function PropertyGallery({
  images,
  title,
  gradient,
}: PropertyGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  if (!images || images.length === 0) {
    return (
      <div
        className="w-full"
        style={{ height: "400px", background: gradient, marginTop: "80px" }}
      />
    );
  }

  return (
    <>
      {/* Main slider */}
      <div
        className="relative w-full overflow-hidden group"
        style={{ height: "420px", marginTop: "80px" }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} - imagen ${i + 1}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full z-10">
          {current + 1} / {images.length}
        </div>

        {/* Zoom button */}
        <button
          onClick={() => setLightbox(true)}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Ampliar imagen"
        >
          <ZoomIn size={18} />
        </button>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Anterior"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Siguiente"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="bg-[#111] px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 max-w-5xl mx-auto">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              className={`shrink-0 rounded overflow-hidden transition-all duration-200 ${
                i === current
                  ? "ring-2 ring-[#c9a96e] opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
              style={{ width: 64, height: 44 }}
              aria-label={`Ver imagen ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} miniatura ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-white/10 rounded-full p-3"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <div
            className="flex items-center justify-center"
            style={{ width: "min(90vw, 1000px)", height: "min(80vh, 700px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[current]}
              alt={`${title} - imagen ${current + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-white/10 rounded-full p-3"
            aria-label="Siguiente"
          >
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

