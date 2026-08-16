import Link from "next/link";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Diseño y Construcción Llave en Mano",
    description:
      "Desarrollamos tu proyecto integral desde el diseño arquitectónico hasta la entrega final. Nos encargamos de todo: planeación, construcción, supervisión y acabados, garantizando altos estándares de calidad constructiva y cumplimiento en tiempos y costos.",
    gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 100%)",
    features: [
      "Diseño arquitectónico personalizado",
      "Tramitología y gestión de permisos",
      "Construcción residencial y residencial premium",
      "Supervisión profesional constante",
      "Cumplimiento de tiempos y presupuestos",
      "Acabados de primera calidad",
      "Control de calidad en materiales y ejecución",
    ],
    cta: "/cotizacion",
    ctaText: "Solicitar Cotización",
    reverse: false,
  },
  {
    title: "Obra Pública y Privada",
    description:
      "Ejecutamos proyectos de obra pública y privada con capacidad técnica, operativa y administrativa. Coordinamos personal especializado, proveedores y subcontratistas para garantizar excelencia en cada etapa de ejecución y cumplimiento operativo.",
    gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 100%)",
    features: [
      "Capacidad técnica y operativa comprobada",
      "Cumplimiento técnico y contractual",
      "Coordinación eficiente de recursos",
      "Seguridad y responsabilidad en obra",
      "Documentación técnica completa",
      "Gestión de permisos y licencias",
    ],
    cta: "/cotizacion",
    ctaText: "Solicitar Información",
    reverse: true,
  },
  {
    title: "Remodelaciones y Mantenimiento",
    description:
      "Ofrecemos servicios de remodelación, ampliaciones, adecuaciones arquitectónicas y mantenimiento preventivo y correctivo. Transformamos espacios existentes con diseño funcional, acabados premium y procesos constructivos eficientes.",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)",
    features: [
      "Remodelaciones integrales",
      "Ampliaciones arquitectónicas",
      "Mantenimiento preventivo y correctivo",
      "Adecuaciones funcionales",
      "Respeto por la estructura existente",
      "Mínima interrupción de actividades",
    ],
    cta: "/contacto",
    ctaText: "Consultar",
    reverse: false,
  },
  {
    title: "Desarrollo de Inmuebles Propios",
    description:
      "Desarrollamos y comercializamos inmuebles propios, diseñados y construidos bajo los estándares de calidad, funcionalidad y excelencia constructiva de la compañía. Proyectos residenciales premium enfocados en plusvalía y diseño contemporáneo.",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    features: [
      "Diseño contemporáneo exclusivo",
      "Ubicaciones estratégicas con plusvalía",
      "Acabados premium en cada detalle",
      "Funcionalidad y espacios optimizados",
      "Documentación legal completa",
      "Garantía de calidad constructiva",
    ],
    cta: "/propiedades",
    ctaText: "Ver Propiedades",
    reverse: true,
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
