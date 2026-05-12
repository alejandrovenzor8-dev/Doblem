"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function AgendaPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [contactForm, setContactForm] = useState({ nombre: "", correo: "", telefono: "" });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
  };

  const isDisabled = (day: number) => {
    const d = new Date(year, month, day);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return d < now || d.getDay() === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
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
            Reserva tu espacio
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Agendar Cita
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          {confirmed ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-md">
              <div className="w-16 h-16 bg-[#c9a96e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h2
                className="text-2xl font-bold text-[#1a1a1a] mb-2"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                ¡Cita confirmada!
              </h2>
              <p className="text-[#8a8a8a]">
                Tu cita está agendada para el{" "}
                <strong className="text-[#c9a96e]">
                  {selectedDay} de {monthNames[month]} {year}
                </strong>{" "}
                a las{" "}
                <strong className="text-[#c9a96e]">{selectedTime}</strong>
              </p>
              <p className="text-[#8a8a8a] mt-2 text-sm">
                Te enviaremos un recordatorio por correo electrónico.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <button onClick={prevMonth} className="p-2 hover:text-[#c9a96e] transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <h3 className="font-bold text-[#1a1a1a]">
                    {monthNames[month]} {year}
                  </h3>
                  <button onClick={nextMonth} className="p-2 hover:text-[#c9a96e] transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"].map((d) => (
                    <div key={d} className="text-center text-xs font-semibold text-[#8a8a8a] py-2">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const disabled = isDisabled(day);
                    const isSelected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() => setSelectedDay(day)}
                        className={`aspect-square rounded-full text-sm font-medium transition-all flex items-center justify-center ${
                          disabled
                            ? "text-[#d4d4d4] cursor-not-allowed"
                            : isSelected
                            ? "bg-[#c9a96e] text-white"
                            : "hover:bg-[#f5f0e8] text-[#1a1a1a]"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Time slots */}
                {selectedDay && (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#4a4a4a] mb-3">
                      <Clock size={16} className="text-[#c9a96e]" />
                      Horarios disponibles
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 text-sm rounded-lg border transition-all ${
                            selectedTime === t
                              ? "border-[#c9a96e] bg-[#c9a96e]/10 text-[#c9a96e] font-semibold"
                              : "border-[#d4d4d4] text-[#4a4a4a] hover:border-[#c9a96e]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirmation form */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3
                  className="text-xl font-bold text-[#1a1a1a] mb-2"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Confirmar Cita
                </h3>
                {selectedDay && selectedTime ? (
                  <div className="bg-[#f5f0e8] rounded-lg p-3 mb-5 text-sm">
                    <p className="text-[#c9a96e] font-semibold">
                      {selectedDay} de {monthNames[month]} {year} · {selectedTime}
                    </p>
                  </div>
                ) : (
                  <p className="text-[#8a8a8a] text-sm mb-5">
                    Selecciona una fecha y horario en el calendario.
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Nombre *</label>
                    <input type="text" required value={contactForm.nombre}
                      onChange={(e) => setContactForm({ ...contactForm, nombre: e.target.value })}
                      className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Correo *</label>
                    <input type="email" required value={contactForm.correo}
                      onChange={(e) => setContactForm({ ...contactForm, correo: e.target.value })}
                      className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="tu@correo.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Teléfono</label>
                    <input type="tel" value={contactForm.telefono}
                      onChange={(e) => setContactForm({ ...contactForm, telefono: e.target.value })}
                      className="w-full border border-[#d4d4d4] rounded px-4 py-3 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="+52 614 000 0000" />
                  </div>
                  <button
                    type="submit"
                    disabled={!selectedDay || !selectedTime}
                    className="w-full py-4 bg-[#c9a96e] text-white font-semibold rounded hover:bg-[#b8914a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Confirmar Cita
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
