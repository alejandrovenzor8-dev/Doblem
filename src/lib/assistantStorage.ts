// ─────────────────────────────────────────────────────────────────────────────
// Assistant localStorage Persistence
// ─────────────────────────────────────────────────────────────────────────────

import type { PersistedFlowState } from "@/types/assistant";

const STORAGE_KEY = "doblem_assistant_v1";

export function saveFlowState(state: PersistedFlowState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage might be unavailable (SSR, private mode, quota exceeded)
  }
}

export function loadFlowState(): PersistedFlowState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedFlowState;
    // Basic sanity check
    if (!parsed.currentStepId || !Array.isArray(parsed.messages)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearFlowState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
