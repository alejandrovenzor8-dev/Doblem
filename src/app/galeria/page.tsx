import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioItems } from "@/data/portfolio";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="bg-[linear-gradient(135deg,#0a0a0a_0%,#1a2744_100%)] px-4 pb-20 pt-40 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">
            Trabajos de Doble M
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Galería de <span className="text-[#c9a96e]">proyectos reales</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/65 md:text-xl">
            Arquitectura, construcción, interiores y acabados ejecutados por nuestro equipo en Chihuahua.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <PortfolioGallery items={portfolioItems} />
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#c9a96e_0%,#b8914a_100%)] px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            ¿Listo para crear tu proyecto?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Agenda una consulta y conoce cómo podemos desarrollar tu próximo espacio.
          </p>
          <Link
            href="/agenda"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#9a743d] shadow-lg transition-colors hover:bg-gray-100"
          >
            Agendar consulta
          </Link>
        </div>
      </section>
    </main>
  );
}
