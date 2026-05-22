"use client";

import { useState } from "react";
import type { InfoItem, LeadData } from "@/types/assistant";
import { COMPANY } from "@/data/assistantConstants";
import { buildWhatsAppUrl } from "@/lib/whatsappBuilder";

interface Props {
  items: InfoItem[];
  faqItems?: InfoItem[];
  onRestart: () => void;
  answers: LeadData;
}

/** Resolves ctaAction to the appropriate handler */
function useCtaHandler(answers: LeadData, onRestart: () => void) {
  return function handleCta(action?: InfoItem["ctaAction"]) {
    if (!action) return;
    switch (action) {
      case "whatsapp":
        window.open(buildWhatsAppUrl(answers), "_blank", "noopener,noreferrer");
        break;
      case "social":
        window.open(COMPANY.instagramUrl, "_blank", "noopener,noreferrer");
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
  };
}

/** A single expandable info card */
function InfoCard({
  item,
  onCta,
}: {
  item: InfoItem;
  onCta: (action?: InfoItem["ctaAction"]) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/8 rounded-xl overflow-hidden bg-[#161616]">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 font-medium">
          <span aria-hidden="true">{item.emoji}</span>
          {item.label}
        </span>
        <span
          className="text-[#c9a96e] transition-transform duration-200 text-xs"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 border-t border-white/5">
          <p className="text-sm text-gray-400 whitespace-pre-wrap mt-3 leading-relaxed">
            {item.content}
          </p>
          {item.ctaLabel && (
            <button
              onClick={() => onCta(item.ctaAction)}
              className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c9a96e]/15 text-[#c9a96e] text-xs font-semibold border border-[#c9a96e]/30 hover:bg-[#c9a96e]/25 transition-colors focus:outline-none"
            >
              {item.ctaLabel} →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/** Quick-action button (no expand — fires directly) */
function DirectActionButton({
  item,
  onCta,
}: {
  item: InfoItem;
  onCta: (action?: InfoItem["ctaAction"]) => void;
}) {
  return (
    <button
      onClick={() => onCta(item.ctaAction)}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-[#c9a96e]/30 text-gray-200 bg-[#1a1a1a] hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 hover:text-[#c9a96e] transition-all duration-150 active:scale-95 focus:outline-none"
    >
      <span aria-hidden="true">{item.emoji}</span>
      {item.label}
    </button>
  );
}

/** Info cards + optional FAQ accordion for the Solicitar información flow */
export default function InfoPanel({ items, faqItems, onRestart, answers }: Props) {
  const handleCta = useCtaHandler(answers, onRestart);

  const directItems = items.filter((i) => i.isDirectAction);
  const expandableItems = items.filter((i) => !i.isDirectAction);
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 pt-1">
      {/* ── Acciones directas (Ver propiedades, WhatsApp, Redes sociales) ─── */}
      {directItems.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {directItems.map((item) => (
            <DirectActionButton key={item.id} item={item} onCta={handleCta} />
          ))}
        </div>
      )}

      {/* ── Tarjetas expandibles (Servicios, Ubicación, Horarios) ─────────── */}
      {expandableItems.map((item) => (
        <InfoCard key={item.id} item={item} onCta={handleCta} />
      ))}

      {/* ── Sección FAQ ────────────────────────────────────────────────────── */}
      {faqItems && faqItems.length > 0 && (
        <div className="mt-1">
          <button
            onClick={() => setFaqOpen((p) => !p)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#8a8a8a] hover:text-[#c9a96e] transition-colors focus:outline-none"
          >
            <span>Preguntas frecuentes</span>
            <span
              className="transition-transform duration-200 text-[10px]"
              style={{ transform: faqOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {faqOpen && (
            <div className="flex flex-col gap-1.5 mt-1">
              {faqItems.map((item) => (
                <InfoCard key={item.id} item={item} onCta={handleCta} />
              ))}
            </div>
          )}
        </div>
      )}

      <button
        onClick={onRestart}
        className="mt-1 w-full py-2.5 rounded-xl text-sm font-semibold text-[#c9a96e] border border-[#c9a96e]/30 hover:bg-[#c9a96e]/10 transition-colors focus:outline-none"
      >
        ← Volver al inicio
      </button>
    </div>
  );
}



