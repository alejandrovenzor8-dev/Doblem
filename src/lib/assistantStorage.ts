// ─────────────────────────────────────────────────────────────────────────────
// Assistant localStorage Persistence
// ─────────────────────────────────────────────────────────────────────────────

import type { PersistedFlowState } from "@/types/assistant";

const STORAGE_KEY = "doblem_assistant_v1";
const ADVISOR_ROTATION_KEY = "doblem_advisor_rotation";

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

// ─────────────────────────────────────────────────────────────────────────────
// Advisor Rotation — alternates between two advisors
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns which advisor should receive the next lead: 0 (Carolina) or 1 (Iveth)
 * Automatically increments the counter for next time.
 */
export function getNextAdvisor(): 0 | 1 {
  try {
    const raw = localStorage.getItem(ADVISOR_ROTATION_KEY);
    const current = raw ? parseInt(raw, 10) : 0;
    const next = current === 0 ? 0 : 1;
    
    // Increment for next lead (toggle between 0 and 1)
    const nextRotation = next === 0 ? 1 : 0;
    localStorage.setItem(ADVISOR_ROTATION_KEY, nextRotation.toString());
    
    return next as 0 | 1;
  } catch {
    return 0; // Default to Carolina if localStorage fails
  }
}

/**
 * Resets the advisor rotation counter (for testing/admin purposes)
 */
export function resetAdvisorRotation(): void {
  try {
    localStorage.removeItem(ADVISOR_ROTATION_KEY);
  } catch {
    // ignore
  }
}
