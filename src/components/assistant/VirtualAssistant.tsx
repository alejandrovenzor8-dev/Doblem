"use client";

import { useEffect, useRef } from "react";
import { useAssistantFlow } from "@/hooks/useAssistantFlow";
import AssistantChat from "./AssistantChat";

/**
 * VirtualAssistant — floating launcher button + slide-in chat panel.
 * Drop this component once in your layout and it appears on every page.
 */
export default function VirtualAssistant() {
  const hook = useAssistantFlow();
  const { isOpen, open, close, toggle } = hook;

  // Trap focus inside the panel when open
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      panelRef.current?.focus();
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) close();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <>
      {/* ── Backdrop (mobile full-screen, desktop subtle) ─────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm sm:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* ── Chat panel ────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Asistente virtual DobleM"
        className={[
          // Position & size
          "fixed z-[999] overflow-hidden",
          // Mobile: full screen slide up
          "bottom-0 left-0 right-0 h-[92dvh] rounded-t-2xl",
          // Desktop: floating panel
          "sm:bottom-24 sm:right-6 sm:left-auto sm:w-[400px] sm:h-[620px] sm:rounded-2xl",
          // Style
          "bg-[#111111] shadow-2xl border border-white/8",
          "flex flex-col",
          // Transition
          "transition-all duration-300 ease-out",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-6 opacity-0 pointer-events-none",
        ].join(" ")}
        style={{
          boxShadow: isOpen
            ? "0 0 0 1px rgba(201,169,110,0.15), 0 24px 80px rgba(0,0,0,0.6)"
            : "none",
        }}
      >
        {isOpen && <AssistantChat hook={hook} onClose={close} />}
      </div>

      {/* ── Launcher button ───────────────────────────────────────────── */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente DobleM"}
        aria-expanded={isOpen}
        className={[
          "fixed bottom-6 right-24 z-[999]",
          "flex items-center gap-2.5 px-4 py-3 rounded-full",
          "bg-[#111111] border border-[#c9a96e]/40 text-white text-sm font-semibold",
          "shadow-lg hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]",
          "transition-all duration-200 hover:border-[#c9a96e] hover:scale-105",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]",
          // On mobile, hide the button while the panel is open (use header ✕ instead)
          isOpen ? "hidden sm:flex opacity-80" : "flex opacity-100",
        ].join(" ")}
        style={{
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Pulsing gold dot */}
        <span className="relative flex w-2.5 h-2.5">
          <span className="absolute inset-0 rounded-full bg-[#c9a96e] opacity-50 animate-ping" />
          <span className="relative block w-2.5 h-2.5 rounded-full bg-[#c9a96e]" />
        </span>
        {isOpen ? "Cerrar" : "¿En qué te ayudo?"}
      </button>
    </>
  );
}
