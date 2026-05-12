"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

interface FormData {
  tipoProyecto: string;
  presupuesto: string;
  terreno: string;
  area: string;
  habitaciones: string;
  banos: string;
  extras: string;
  nombre: string;
  correo: string;
  telefono: string;
}

const stepTitles = [
  "Tipo de Proyecto",
  "Detalles del Proyecto",
  "Información de Contacto",
];

export default function CotizacionPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({
    tipoProyecto: "",
    presupuesto: "",
    terreno: "",
    area: "",
    habitaciones: "",
    banos: "",
    extras: "",
    nombre: "",
    correo: "",
    telefono: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const back = () => setStep((s) => Math.max(s - 1, 1) as Step);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-16 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Solicita tu Presupuesto
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Cotización
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-md">
              <div className="w-16 h-16 bg-[#c9a96e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h2
                className="text-2xl font-bold text-[#1a1a1a] mb-3"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                ¡Solicitud recibida!
              </h2>
              <p className="text-[#8a8a8a]">
                Nos pondremos en contacto contigo en menos de 24 horas con tu
                cotización personalizada.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Progress bar */}
              <div className="bg-[#111111] p-6">
                <div className="flex items-center justify-between mb-4">
                  {stepTitles.map((title, i) => (
                    <div key={title} className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                          i + 1 <= step
                            ? "bg-[#c9a96e] text-white"
                            : "bg-[#2a2a2a] text-[#4a4a4a]"
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < 2 && (
                        <div
                          className={`hidden sm:block h-0.5 w-16 transition-all ${
                            i + 1 < step ? "bg-[#c9a96e]" : "bg-[#2a2a2a]"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-[#c9a96e] text-sm font-semibold">
                  Paso {step} de 3: {stepTitles[step - 1]}
                </p>
              </div>

              <div className="p-8">
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">
                        Tipo de Proyecto *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Construcción nueva", "Remodelación", "Diseño interior", "Ampliación"].map(
                          (tipo) => (
                            <button
                              key={tipo}
                              type="button"
                              onClick={() => setForm({ ...form, tipoProyecto: tipo })}
                              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                                form.tipoProyecto === tipo
                                  ? "border-[#c9a96e] bg-[#c9a96e]/10 text-[#c9a96e]"
                                  : "border-[#d4d4d4] text-[#4a4a4a] hover:border-[#c9a96e]"
                              }`}
                            >
                              {tipo}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">
                        Presupuesto aproximado
                      </label>
                      <select
                        name="presupuesto"
                        value={form.presupuesto}
                        onChange={handleChange}
                        className="w-full border border-[#d4d4d4] rounded px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                      >
                        <option value="">Seleccionar...</option>
                        <option>Menos de $500,000 MXN</option>
                        <option>$500,000 – $1,500,000 MXN</option>
                        <option>$1,500,000 – $3,000,000 MXN</option>
                        <option>$3,000,000 – $6,000,000 MXN</option>
                        <option>Más de $6,000,000 MXN</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">Área m²</label>
                        <input type="number" name="area" value={form.area} onChange={handleChange}
                          className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                          placeholder="Ej: 200" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">Habitaciones</label>
                        <select name="habitaciones" value={form.habitaciones} onChange={handleChange}
                          className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]">
                          <option value="">Seleccionar</option>
                          {["1", "2", "3", "4", "5+"].map((n) => <option key={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">Baños</label>
                      <select name="banos" value={form.banos} onChange={handleChange}
                        className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]">
                        <option value="">Seleccionar</option>
                        {["1", "2", "3", "4+"].map((n) => <option key={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">
                        Extras o características especiales
                      </label>
                      <textarea name="extras" value={form.extras} onChange={handleChange} rows={3}
                        className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e] resize-none"
                        placeholder="Alberca, garage, estudio, terraza..." />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={submit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">Nombre completo *</label>
                      <input type="text" name="nombre" required value={form.nombre} onChange={handleChange}
                        className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                        placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">Correo electrónico *</label>
                      <input type="email" name="correo" required value={form.correo} onChange={handleChange}
                        className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                        placeholder="tu@correo.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">Teléfono</label>
                      <input type="tel" name="telefono" value={form.telefono} onChange={handleChange}
                        className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                        placeholder="+52 614 000 0000" />
                    </div>
                    <button type="submit"
                      className="w-full py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors">
                      Solicitar Cotización
                    </button>
                  </form>
                )}

                {/* Navigation buttons */}
                {step < 3 && (
                  <div className="flex justify-between mt-8">
                    {step > 1 ? (
                      <button onClick={back}
                        className="px-6 py-3 border border-[#d4d4d4] text-[#4a4a4a] rounded hover:border-[#c9a96e] transition-colors">
                        ← Anterior
                      </button>
                    ) : <div />}
                    <button onClick={next}
                      className="px-6 py-3 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors">
                      Siguiente →
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
