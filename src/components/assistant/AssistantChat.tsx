"use client";

import { useEffect, useRef } from "react";
import type { useAssistantFlow } from "@/hooks/useAssistantFlow";
import MessageBubble from "./MessageBubble";
import OptionGrid from "./OptionGrid";
import ContactForm from "./ContactForm";
import DatePickerStep from "./DatePickerStep";
import TimePickerStep from "./TimePickerStep";
import FinalScreen from "./FinalScreen";
import InfoPanel from "./InfoPanel";
import TypingIndicator from "./TypingIndicator";
import ProgressBar from "./ProgressBar";

type AssistantHook = ReturnType<typeof useAssistantFlow>;

interface Props {
  hook: AssistantHook;
  onClose: () => void;
}

/** The full chat UI rendered inside the panel */
export default function AssistantChat({ hook, onClose }: Props) {
  const {
    isTyping,
    isSubmitting,
    submitError,
    flowState,
    currentStep,
    selectOption,
    submitContactForm,
    goBack,
    restart,
  } = hook;

  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages or typing indicator
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [flowState.messages, isTyping]);

  const canGoBack =
    !flowState.isComplete &&
    flowState.history.length > 0 &&
    currentStep?.allowBack;

  return (
    <div className="flex flex-col h-full bg-[#111111]">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/5 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#b8914a] flex items-center justify-center text-black text-xs font-bold select-none">
            D
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">
              Asistente DobleM
            </p>
            <p className="text-[10px] text-[#c9a96e] font-medium">
              {isTyping ? "Escribiendo..." : "En línea"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {canGoBack && (
            <button
              onClick={goBack}
              aria-label="Volver al paso anterior"
              className="p-2 text-[#8a8a8a] hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none"
              title="Volver"
            >
              ←
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Cerrar asistente"
            className="p-2 text-[#8a8a8a] hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none"
          >
            ✕
          </button>
        </div>
      </header>

      {/* ── Progress ───────────────────────────────────────────────────── */}
      {currentStep && (
        <div className="flex-shrink-0">
          <ProgressBar
            stage={currentStep.stage}
            stageLabel={currentStep.stageLabel}
          />
        </div>
      )}

      {/* ── Messages ───────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
        {flowState.messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#b8914a] flex-shrink-0 flex items-center justify-center text-xs font-bold text-black select-none">
              D
            </div>
            <TypingIndicator />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── Error banner ───────────────────────────────────────────────── */}
      {submitError && (
        <div
          role="alert"
          className="mx-4 mb-2 px-3 py-2 rounded-lg bg-red-900/30 border border-red-500/30 text-xs text-red-300"
        >
          {submitError}
        </div>
      )}

      {/* ── Input area (step-specific) ─────────────────────────────────── */}
      {currentStep && !isTyping && (
        <div className="flex-shrink-0 border-t border-white/5 px-4 pt-3 pb-4 max-h-[55%] overflow-y-auto">
          {/* Sub-message hint */}
          {currentStep.subMessage && (
            <p className="text-xs text-[#8a8a8a] mb-2 leading-relaxed">
              {currentStep.subMessage}
            </p>
          )}

          {currentStep.type === "options" && currentStep.options && (
            <OptionGrid
              options={currentStep.options}
              onSelect={selectOption}
              disabled={isSubmitting}
            />
          )}

          {currentStep.type === "contact-form" &&
            currentStep.contactFields && (
              <ContactForm
                fields={currentStep.contactFields}
                onSubmit={submitContactForm}
                isSubmitting={isSubmitting}
              />
            )}

          {currentStep.type === "date-picker" && (
            <DatePickerStep onSelect={selectOption} />
          )}

          {currentStep.type === "time-picker" && currentStep.timeSlots && (
            <TimePickerStep
              slots={currentStep.timeSlots}
              onSelect={selectOption}
              disabled={isSubmitting}
            />
          )}

          {currentStep.type === "final" && (
            <FinalScreen
              variant={currentStep.finalVariant}
              answers={flowState.answers}
              onRestart={restart}
            />
          )}

          {currentStep.type === "info-panel" && currentStep.infoItems && (
            <InfoPanel
              items={currentStep.infoItems}
              faqItems={currentStep.faqItems}
              answers={flowState.answers}
              onRestart={restart}
            />
          )}
        </div>
      )}

      {/* ── Footer reset link ──────────────────────────────────────────── */}
      {!flowState.isComplete && flowState.messages.length > 1 && (
        <div className="text-center pb-2 flex-shrink-0">
          <button
            onClick={restart}
            className="text-[10px] text-[#444] hover:text-[#8a8a8a] transition-colors focus:outline-none"
          >
            Reiniciar conversación
          </button>
        </div>
      )}
    </div>
  );
}
