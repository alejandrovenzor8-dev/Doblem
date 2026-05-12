import { Award, TrendingUp, Shield, Heart } from "lucide-react";

const team = [
  {
    name: "Miguel Martínez",
    role: "Director General",
    gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 100%)",
  },
  {
    name: "Ana Rodríguez",
    role: "Directora de Diseño",
    gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 100%)",
  },
  {
    name: "Carlos Vega",
    role: "Gerente de Construcción",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)",
  },
];

const milestones = [
  { year: "2009", event: "Fundación de DobleM en Chihuahua" },
  { year: "2013", event: "Expansión al mercado residencial premium" },
  { year: "2017", event: "50 proyectos completados en Chihuahua" },
  { year: "2020", event: "Lanzamiento del servicio de diseño personalizado" },
  { year: "2023", event: "200+ clientes satisfechos, referente local" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Quiénes Somos
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Nosotros
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Nuestra Historia
            </p>
            <h2
              className="text-4xl font-bold text-[#1a1a1a] mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              15 Años Construyendo Sueños
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Fundada en 2009 en la ciudad de Chihuahua, DobleM nació con la
              misión de transformar el mercado inmobiliario local ofreciendo
              propiedades y servicios de construcción de la más alta calidad.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              A lo largo de 15 años, hemos completado más de 50 proyectos
              residenciales y comerciales, ganando la confianza de más de 200
              familias y empresas en Chihuahua.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed">
              Nuestro compromiso con la excelencia, la transparencia y la
              atención personalizada nos posiciona como el referente en diseño
              y construcción premium en la región.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              height: "400px",
              background: "linear-gradient(135deg, #1a2744 0%, #c9a96e 100%)",
            }}
          />
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Misión, Visión y Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Misión",
                text: "Ofrecer soluciones inmobiliarias y de construcción de excelencia que superen las expectativas de nuestros clientes, creando espacios que mejoren su calidad de vida.",
              },
              {
                icon: TrendingUp,
                title: "Visión",
                text: "Ser la empresa líder en diseño y construcción premium en el norte de México, reconocida por nuestra innovación, calidad y compromiso con el cliente.",
              },
              {
                icon: Shield,
                title: "Valores",
                text: "Integridad, excelencia, innovación, compromiso y responsabilidad social son los pilares sobre los que construimos cada proyecto.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-8 shadow-sm border border-[#ede8dc]"
                >
                  <div className="w-14 h-14 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#c9a96e]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1a1a1a] mb-3"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              El Equipo
            </p>
            <h2
              className="text-4xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Nuestro Equipo Directivo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  style={{ background: member.gradient }}
                />
                <h3 className="font-bold text-[#1a1a1a] text-lg">
                  {member.name}
                </h3>
                <p className="text-[#c9a96e] text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Nuestra Trayectoria
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2a2a2a]" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-[#c9a96e] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-white font-bold text-xs text-center leading-tight">
                      {m.year}
                    </span>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl p-5 flex-1 border border-[#2a2a2a]">
                    <p className="text-white font-medium">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
