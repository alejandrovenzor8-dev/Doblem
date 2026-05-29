import { Award, TrendingUp, Shield, Heart } from "lucide-react";

const team = [
  {
    name: "Jaime Mendoza",
    role: "Director General",
    gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 100%)",
  },
  {
    name: "Carolina Morales",
    role: "Asesora de Ventas",
    gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 100%)",
  },
  {
    name: "Blanca Simental",
    role: "Coordinadora de Proyectos",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)",
  },
  {
    name: "Iveth Ramos",
    role: "Asesora de Ventas",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
  },
  {
    name: "Monica Maynez",
    role: "Gerente de Operaciones",
    gradient: "linear-gradient(135deg, #2d1a2d 0%, #5a2d5a 100%)",
  },
];

const milestones = [
  { year: "2017", event: "Fundación de Doble M. Diseño y Construcción en Chihuahua" },
  { year: "2019", event: "Primeros proyectos residenciales premium" },
  { year: "2021", event: "Expansión a obra pública" },
  { year: "2023", event: "Consolidación como referente en diseño arquitectónico" },
  { year: "2024", event: "Desarrollo y comercialización de inmuebles propios" },
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Quiénes Somos
            </p>
            <h2
              className="text-4xl font-bold text-[#1a1a1a] mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Diseño y Construcción de Excelencia
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Doble M. Diseño y Construcción es una empresa mexicana con presencia en Chihuahua desde 2017, especializada en diseño arquitectónico, construcción, remodelación y mantenimiento integral de inmuebles.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Desarrollamos proyectos residenciales, residencial premium y obra pública, ofreciendo soluciones integrales con altos estándares de calidad, funcionalidad y eficiencia.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed">
              Contamos con la capacidad técnica, operativa y administrativa para desarrollar proyectos de construcción y arquitectura de distinta escala, garantizando calidad constructiva, cumplimiento operativo y excelencia en cada etapa de ejecución.
            </p>
          </div>
          <div
            className="rounded-2xl border border-[#ede8dc] p-6 lg:p-8 bg-[#f5f0e8]"
          >
            <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Capacidad Operativa
            </p>
            <h2
              className="text-3xl font-bold text-[#1a1a1a] mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Experiencia y Profesionalismo
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Contamos con la capacidad técnica, operativa y administrativa para desarrollar proyectos de construcción y arquitectura de distinta escala.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed">
              Coordinamos de manera eficiente personal especializado, proveedores y subcontratistas para garantizar altos estándares de calidad constructiva, cumplimiento operativo y excelencia en cada etapa de ejecución.
            </p>
          </div>
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
                text: "Diseñar y ejecutar proyectos de construcción y arquitectura que integren innovación, calidad y solidez constructiva, garantizando el cumplimiento de tiempos, costos y especificaciones técnicas para crear espacios funcionales, estéticos y de alto valor para nuestros clientes.",
              },
              {
                icon: TrendingUp,
                title: "Visión",
                text: "Consolidarnos como una empresa referente dentro del sector de la construcción y el diseño arquitectónico, reconocida por nuestra excelencia, capacidad técnica, cumplimiento e innovación en proyectos residenciales y de obra pública.",
              },
              {
                icon: Shield,
                title: "Valores",
                text: "Compromiso, calidad, innovación, responsabilidad, transparencia y excelencia constructiva son los pilares sobre los que construimos cada proyecto.",
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
              Nuestro Equipo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
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
