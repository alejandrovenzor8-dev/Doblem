import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioItems } from "@/data/portfolio";

export default function PortafolioPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white bg-[linear-gradient(135deg,#0a0a0a_0%,#1a2744_100%)]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Proyectos reales
          </p>
          <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)]">
            Portafolio
          </h1>
          <p className="mt-5 max-w-2xl text-white/65 text-lg">
            Una selección de arquitectura, interiores y acabados ejecutados por Doble M.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <PortfolioGallery items={portfolioItems} />
        </div>
      </section>
    </>
  );
}
