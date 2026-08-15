import Link from "next/link";

const testimonials = [
  { quote: "DobleM construyó nuestra casa de ensueño. Desde el primer día, el equipo fue profesional, puntual y transparente. Cada detalle fue exactamente como lo planeamos.", name: "Carlos Mendoza", role: "Empresario · Chihuahua" },
  { quote: "Compramos nuestro departamento a través de DobleM y fue la mejor decisión. Nos asesoraron en todo el proceso legal y financiero sin ninguna complicación.", name: "María González", role: "Médico · Chihuahua" },
  { quote: "El diseño de interiores que hicieron para nuestra oficina corporativa superó todas nuestras expectativas. Un equipo creativo y muy comprometido.", name: "Roberto Sáenz", role: "Director General · Grupo Sáenz" },
  { quote: "Increíble atención personalizada. Nunca me sentí solo en el proceso. DobleM realmente se preocupa por sus clientes.", name: "Laura Pérez", role: "Inversionista · Chihuahua" },
  { quote: "La calidad de la construcción es impecable. Utilizan materiales de primera y los acabados son de lujo. Totalmente recomendados.", name: "Andrés Torres", role: "Arquitecto · Chihuahua" },
  { quote: "Proceso totalmente transparente, sin sorpresas. Entregaron el proyecto exactamente en el tiempo acordado y dentro del presupuesto.", name: "Sofía Herrera", role: "Empresaria · Chihuahua" },
];

const stats = [
  { value: "200+", label: "Clientes Satisfechos" },
  { value: "98%", label: "Tasa de Satisfacción" },
  { value: "70", label: "Proyectos Realizados" },
  { value: "10", label: "Años de Experiencia" },
];

export default function TestimoniosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Voces de Nuestros Clientes
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Testimonios
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 md:px-8 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-5xl font-bold text-[#c9a96e] mb-2"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                {s.value}
              </div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 border-l-4 border-[#c9a96e] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#c9a96e] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-[#1a1a1a]">{t.name}</div>
                <div className="text-[#8a8a8a] text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #1a2744 0%, #0a0a0a 100%)" }}
      >
        <h2
          className="text-white text-4xl font-bold mb-5"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Sé el próximo cliente satisfecho
        </h2>
        <Link
          href="/contacto"
          className="inline-block px-8 py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors"
        >
          Contáctanos Hoy
        </Link>
      </section>
    </>
  );
}
