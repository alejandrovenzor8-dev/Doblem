"use client";

import type { FinalVariant, LeadData } from "@/types/assistant";
import { COMPANY } from "@/data/assistantConstants";
import { buildWhatsAppUrl } from "@/lib/whatsappBuilder";

interface Props {
  variant?: FinalVariant;
  answers: LeadData;
  onRestart: () => void;
}

const CTA_SETS: Record<
  NonNullable<FinalVariant>,
  Array<{
    label: string;
    emoji: string;
    action: "whatsapp" | "properties" | "schedule" | "restart";
    primary?: boolean;
  }>
> = {
  buy: [
    { label: "Continuar por WhatsApp", emoji: "💬", action: "whatsapp", primary: true },
    { label: "Ver propiedades", emoji: "🏘️", action: "properties" },
    { label: "Agendar una cita", emoji: "📅", action: "schedule" },
  ],
  build: [
    { label: "Continuar por WhatsApp", emoji: "💬", action: "whatsapp", primary: true },
    { label: "Agendar una reunión", emoji: "📅", action: "schedule" },
    { label: "Iniciar nueva consulta", emoji: "🔄", action: "restart" },
  ],
  invest: [
    { label: "Continuar por WhatsApp", emoji: "💬", action: "whatsapp", primary: true },
    { label: "Ver propiedades de inversión", emoji: "🏘️", action: "properties" },
    { label: "Agendar asesoría", emoji: "📅", action: "schedule" },
  ],
  schedule: [
    { label: "Confirmar por WhatsApp", emoji: "💬", action: "whatsapp", primary: true },
    { label: "Nueva consulta", emoji: "🔄", action: "restart" },
  ],
  info: [
    { label: "Hablar por WhatsApp", emoji: "💬", action: "whatsapp", primary: true },
    { label: "Iniciar consulta", emoji: "🚀", action: "restart" },
  ],
};

export default function FinalScreen({ variant = "buy", answers, onRestart }: Props) {
  const ctas = CTA_SETS[variant];

  function handleCta(action: string) {
    switch (action) {
      case "whatsapp":
        window.open(buildWhatsAppUrl(answers), "_blank", "noopener,noreferrer");
        break;
      case "properties":
        window.open(COMPANY.propertiesUrl, "_blank");
        break;
      case "schedule":
        window.open(COMPANY.scheduleUrl, "_blank");
        break;
      case "restart":
        onRestart();
        break;
    }
  }

  // Lead summary chip
  const summaryFields = [
    answers.tipoPropiedad,
    answers.zonaInteres,
    answers.presupuesto,
    answers.tipoCita,
    answers.tipoProyecto,
    answers.tipoInversion,
  ].filter(Boolean);

  return (
    <div className="flex flex-col gap-3 pt-2">
      {/* Summary chips */}
      {summaryFields.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {summaryFields.map((val) => (
            <span
              key={val}
              className="px-2.5 py-1 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] text-[11px] font-medium border border-[#c9a96e]/20"
            >
              {val}
            </span>
          ))}
        </div>
      )}

      {/* Score badge */}
      {answers.leadTemperature && (
        <div className="flex items-center gap-2">
          <span
            className={[
              "px-3 py-1 rounded-full text-xs font-semibold",
              answers.leadTemperature === "caliente"
                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                : answers.leadTemperature === "tibio"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "bg-blue-500/20 text-blue-300 border border-blue-500/30",
            ].join(" ")}
          >
            Lead {answers.leadTemperature}
          </span>
          {answers.leadScore !== undefined && (
            <span className="text-xs text-[#555]">
              Score: {answers.leadScore}/100
            </span>
          )}
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-2">
        {ctas.map((cta) => (
          <button
            key={cta.action}
            onClick={() => handleCta(cta.action)}
            className={[
              "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold",
              "transition-all duration-150 active:scale-95 focus:outline-none",
              "focus-visible:ring-2 focus-visible:ring-[#c9a96e]",
              cta.primary
                ? "bg-gradient-to-r from-[#c9a96e] to-[#b8914a] text-black hover:opacity-90"
                : "border border-[#c9a96e]/30 text-[#c9a96e] hover:bg-[#c9a96e]/10",
            ].join(" ")}
          >
            <span aria-hidden="true">{cta.emoji}</span>
            {cta.label}
          </button>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="text-xs text-[#555] hover:text-[#8a8a8a] transition-colors pt-1 focus:outline-none"
      >
        Iniciar nueva consulta
      </button>
    </div>
  );
}
