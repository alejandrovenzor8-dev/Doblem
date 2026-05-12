import Link from "next/link";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Venta de Inmuebles Premium",
    description:
      "Contamos con un exclusivo catálogo de propiedades residenciales y comerciales en los mejores fraccionamientos de Chihuahua. Nuestros asesores te guían en todo el proceso: búsqueda, negociación, financiamiento y escrituración.",
    gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 100%)",
    features: [
      "Catálogo exclusivo actualizado",
      "Asesoría en financiamiento hipotecario",
      "Proceso legal completo",
      "Acompañamiento hasta la escrituración",
      "Valuación profesional",
      "Estrategias de inversión inmobiliaria",
    ],
    cta: "/propiedades",
    ctaText: "Ver Propiedades",
    reverse: false,
  },
  {
    title: "Construcción Residencial",
    description:
      "Construimos tu hogar desde cero con los más altos estándares de calidad. Nuestro equipo de ingenieros y arquitectos supervisa cada etapa del proceso, garantizando que tu proyecto se entregue en tiempo, forma y con los mejores acabados.",
    gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 100%)",
    features: [
      "Proyectos llave en mano",
      "Materiales de primera calidad",
      "Supervisión permanente en obra",
      "Cumplimiento de normativas",
      "Garantía post-entrega",
      "Informes de avance semanales",
    ],
    cta: "/cotizacion",
    ctaText: "Solicitar Cotización",
    reverse: true,
  },
  {
    title: "Diseño Personalizado",
    description:
      "Nuestro equipo de diseñadores y arquitectos crea espacios únicos que reflejan tu personalidad y estilo de vida. Desde el diseño arquitectónico hasta el interiorismo y paisajismo, cada detalle es pensado para ti.",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)",
    features: [
      "Diseño arquitectónico personalizado",
      "Renders fotorrealistas en 3D",
      "Diseño de interiores",
      "Paisajismo y jardines",
      "Selección de materiales y acabados",
      "Dirección artística del proyecto",
    ],
    cta: "/contacto",
    ctaText: "Consultar",
    reverse: false,
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Lo que Ofrecemos
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Servicios
          </h1>
        </div>
      </section>

      {/* Services */}
      {services.map((service) => (
        <section
          key={service.title}
          className={`py-20 px-4 md:px-8 lg:px-16 ${service.reverse ? "bg-[#f5f0e8]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                service.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={service.reverse ? "lg:order-2" : ""}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    height: "360px",
                    background: service.gradient,
                  }}
                />
              </div>
              <div className={service.reverse ? "lg:order-1" : ""}>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-5"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {service.title}
                </h2>
                <p className="text-[#4a4a4a] leading-relaxed mb-7">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#4a4a4a]">
                      <CheckCircle size={17} className="text-[#c9a96e] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.cta}
                  className="inline-block px-8 py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors"
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
