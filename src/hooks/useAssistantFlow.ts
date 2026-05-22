"use client";

// ─────────────────────────────────────────────────────────────────────────────
// useAssistantFlow — Central state machine for the virtual assistant
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from "react";
import { FLOW_STEPS, INITIAL_STEP_ID } from "@/data/assistantFlow";
import { calculateLeadScore, getLeadTemperature } from "@/lib/leadScoring";
import {
  clearFlowState,
  loadFlowState,
  saveFlowState,
} from "@/lib/assistantStorage";
import type {
  ChatMessage,
  HistoryEntry,
  LeadData,
  PersistedFlowState,
} from "@/types/assistant";

/** Milliseconds to simulate the assistant "typing" */
const TYPING_DELAY_MS = 850;

function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function getDefaultFlowState(): PersistedFlowState {
  return {
    currentStepId: INITIAL_STEP_ID,
    history: [],
    answers: {
      source: "web-assistant",
      timestamp: new Date().toISOString(),
      status: "nuevo",
    },
    messages: [],
    isComplete: false,
  };
}

export function useAssistantFlow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [flowState, setFlowState] = useState<PersistedFlowState>(
    getDefaultFlowState
  );

  // Track whether a pending assistant message needs to be shown (stepId)
  const [pendingStepId, setPendingStepId] = useState<string | null>(null);

  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hydrated = useRef(false);

  // ── Hydrate from localStorage on mount ───────────────────────────────────
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    const saved = loadFlowState();

    if (saved && saved.messages.length > 0) {
      setFlowState(saved);
      // If the conversation was not finished, re-show the current step's
      // question (it was already in the messages list, so no need to add it).
    } else {
      // First visit — show welcome message
      setPendingStepId(INITIAL_STEP_ID);
    }
  }, []);

  // ── Persist to localStorage on every state change ────────────────────────
  useEffect(() => {
    if (!hydrated.current) return;
    saveFlowState(flowState);
  }, [flowState]);

  // ── Show assistant message after typing delay ─────────────────────────────
  useEffect(() => {
    if (!pendingStepId) return;

    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setIsTyping(true);

    typingTimerRef.current = setTimeout(() => {
      const step = FLOW_STEPS[pendingStepId];
      if (!step) {
        setIsTyping(false);
        setPendingStepId(null);
        return;
      }

      setFlowState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            id: generateId(),
            role: "assistant",
            content: step.message,
          } satisfies ChatMessage,
        ],
      }));

      setIsTyping(false);
      setPendingStepId(null);
    }, TYPING_DELAY_MS);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [pendingStepId]);

  // ── Panel controls ────────────────────────────────────────────────────────
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((p) => !p), []);

  // ── Navigate when user picks an option (also handles date / time steps) ───
  const selectOption = useCallback(
    (optionLabel: string, optionValue: string) => {
      const currentStep = FLOW_STEPS[flowState.currentStepId];
      if (!currentStep) return;

      // Determine where to go next — computed from the PRE-update state
      const nextStepId =
        typeof currentStep.next === "string"
          ? currentStep.next
          : (currentStep.next as Record<string, string>)[optionValue] ??
            (currentStep.next as Record<string, string>)["default"] ??
            "";

      if (!nextStepId) return;

      const historyEntry: HistoryEntry = {
        fromStepId: flowState.currentStepId,
        savedAnswers: { ...flowState.answers },
        messageCount: flowState.messages.length,
      };

      const newAnswers: LeadData = currentStep.saveAs
        ? { ...flowState.answers, [currentStep.saveAs]: optionValue }
        : { ...flowState.answers };

      const userMsg: ChatMessage = {
        id: generateId(),
        role: "user",
        content: optionLabel,
      };

      const nextStep = FLOW_STEPS[nextStepId];
      const isNextFinal = nextStep?.type === "final";

      setFlowState({
        ...flowState,
        currentStepId: nextStepId,
        answers: newAnswers,
        messages: [...flowState.messages, userMsg],
        history: [...flowState.history, historyEntry],
        isComplete: isNextFinal,
      });

      // Schedule the assistant's reply for the correct next step
      setPendingStepId(nextStepId);
    },
    [flowState]
  );

  // ── Submit contact form (validates, scores, calls API) ────────────────────
  const submitContactForm = useCallback(
    async (contactData: Partial<LeadData>) => {
      setIsSubmitting(true);
      setSubmitError(null);

      let nextStepId = "";

      setFlowState((prev) => {
        const currentStep = FLOW_STEPS[prev.currentStepId];
        if (!currentStep) return prev;

        nextStepId =
          typeof currentStep.next === "string" ? currentStep.next : "";

        const mergedAnswers: LeadData = { ...prev.answers, ...contactData };
        const score = calculateLeadScore(mergedAnswers);
        const temperature = getLeadTemperature(score);

        const scoredAnswers: LeadData = {
          ...mergedAnswers,
          leadScore: score,
          leadTemperature: temperature,
          status: "nuevo",
        };

        const historyEntry: HistoryEntry = {
          fromStepId: prev.currentStepId,
          savedAnswers: { ...prev.answers },
          messageCount: prev.messages.length,
        };

        const userMsg: ChatMessage = {
          id: generateId(),
          role: "user",
          content: `${contactData.nombre ?? ""} · ${contactData.telefono ?? ""}`,
        };

        return {
          ...prev,
          currentStepId: nextStepId,
          answers: scoredAnswers,
          messages: [...prev.messages, userMsg],
          history: [...prev.history, historyEntry],
          isComplete: true,
        };
      });

      // Show final step message
      if (nextStepId) setPendingStepId(nextStepId);

      // Fire API call — non-blocking; we navigate regardless
      try {
        const snapshot = await new Promise<LeadData>((resolve) => {
          setFlowState((s) => {
            resolve(s.answers);
            return s;
          });
        });

        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(snapshot),
        });
      } catch {
        // Silent failure — lead data is persisted locally; admin can retrieve
        setSubmitError(
          "No pudimos enviar tus datos, pero los guardamos. Intenta de nuevo más tarde."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  // ── Go back one step ──────────────────────────────────────────────────────
  const goBack = useCallback(() => {
    setFlowState((prev) => {
      if (prev.history.length === 0) return prev;

      const newHistory = [...prev.history];
      const lastEntry = newHistory.pop()!;

      return {
        ...prev,
        currentStepId: lastEntry.fromStepId,
        answers: lastEntry.savedAnswers,
        messages: prev.messages.slice(0, lastEntry.messageCount),
        history: newHistory,
        isComplete: false,
      };
    });
    // Clear any pending typing animation on back navigation
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setIsTyping(false);
    setPendingStepId(null);
  }, []);

  // ── Restart the entire conversation ──────────────────────────────────────
  const restart = useCallback(() => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setIsTyping(false);
    setSubmitError(null);
    clearFlowState();

    const fresh = getDefaultFlowState();
    fresh.answers.timestamp = new Date().toISOString();
    setFlowState(fresh);

    // Delay slightly so the UI resets before the first message appears
    setTimeout(() => setPendingStepId(INITIAL_STEP_ID), 200);
  }, []);

  // ── Derived values ────────────────────────────────────────────────────────
  const currentStep = FLOW_STEPS[flowState.currentStepId];

  return {
    // State
    isOpen,
    isTyping,
    isSubmitting,
    submitError,
    flowState,
    currentStep,
    // Actions
    open,
    close,
    toggle,
    selectOption,
    submitContactForm,
    goBack,
    restart,
  };
}
