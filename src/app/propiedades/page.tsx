import { properties } from "@/data/properties";
import { getAllPropertyImages } from "@/lib/getPropertyImages";
import PropiedadesClient from "./PropiedadesClient";

export default function PropiedadesPage() {
  const imagesMap = getAllPropertyImages(properties);

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

      <PropiedadesClient imagesMap={imagesMap} />
    </>
  );
}
