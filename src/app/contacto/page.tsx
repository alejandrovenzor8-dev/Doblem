"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Estamos aquí para ti
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Contacto
          </h1>
        </div>
      </section>

      {/* Two columns */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2
              className="text-3xl font-bold text-[#1a1a1a] mb-8"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Envíanos un mensaje
            </h2>
            {sent ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 bg-[#c9a96e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#8a8a8a]">Te contactaremos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Nombre *</label>
                    <input type="text" name="nombre" required value={form.nombre} onChange={handleChange}
                      className="w-full border border-[#d4d4d4] rounded px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                      placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Correo *</label>
                    <input type="email" name="correo" required value={form.correo} onChange={handleChange}
                      className="w-full border border-[#d4d4d4] rounded px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                      placeholder="tu@correo.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Teléfono</label>
                  <input type="tel" name="telefono" value={form.telefono} onChange={handleChange}
                    className="w-full border border-[#d4d4d4] rounded px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                    placeholder="+52 614 000 0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Mensaje *</label>
                  <textarea name="mensaje" required value={form.mensaje} onChange={handleChange} rows={5}
                    className="w-full border border-[#d4d4d4] rounded px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e] resize-none"
                    placeholder="¿En qué podemos ayudarte?" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2
              className="text-3xl font-bold text-[#1a1a1a] mb-8"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Información de contacto
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Dirección", text: "Chihuahua, Chihuahua, México" },
                { icon: Phone, label: "Teléfono", text: "+52 614 000 0000" },
                { icon: Mail, label: "Correo", text: "info@doblem.mx" },
                { icon: Clock, label: "Horario", text: "Lun – Vie: 9:00 – 18:00 | Sáb: 9:00 – 14:00" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#f5f0e8] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#c9a96e]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1a1a1a]">{item.label}</div>
                      <div className="text-[#8a8a8a] text-sm mt-0.5">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                height: "250px",
                background: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 50%, #c9a96e 100%)",
              }}
            >
              <div className="text-center text-white">
                <MapPin size={32} className="mx-auto mb-2 opacity-80" />
                <p className="font-semibold">Chihuahua, México</p>
                <p className="text-white/60 text-sm">Ver en Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
