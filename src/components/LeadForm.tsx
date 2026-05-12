"use client";

import { useState } from "react";

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  interes: string;
  mensaje: string;
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    correo: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#111111]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Contáctanos
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            ¿Listo para comenzar?
          </h2>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-[#c9a96e] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">
              ¡Mensaje enviado!
            </h3>
            <p className="text-[#8a8a8a]">
              Nos pondremos en contacto contigo en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#d4d4d4] text-sm mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-[#c9a96e] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-[#d4d4d4] text-sm mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="correo"
                  required
                  value={form.correo}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-[#c9a96e] transition-colors"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#d4d4d4] text-sm mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-[#c9a96e] transition-colors"
                  placeholder="+52 614 000 0000"
                />
              </div>
              <div>
                <label className="block text-[#d4d4d4] text-sm mb-2">
                  Tipo de interés
                </label>
                <select
                  name="interes"
                  value={form.interes}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-[#c9a96e] transition-colors"
                >
                  <option value="">Seleccionar...</option>
                  <option value="comprar">Comprar</option>
                  <option value="construir">Construir</option>
                  <option value="diseno">Diseño</option>
                  <option value="inversion">Inversión</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#d4d4d4] text-sm mb-2">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors duration-200"
              >
                Enviar Consulta
              </button>
              <p className="text-[#4a4a4a] text-xs text-center">
                Respuesta en menos de 24 horas • Sin compromiso • 100%
                Confidencial
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
