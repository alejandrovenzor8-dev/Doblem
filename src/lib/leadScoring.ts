// ─────────────────────────────────────────────────────────────────────────────
// Lead Scoring Engine
// All rules are imported from assistantConstants — edit there to tune scoring.
// ─────────────────────────────────────────────────────────────────────────────

import type { LeadData, LeadTemperature } from "@/types/assistant";
import {
  COLD_TIMELINE_KEYWORDS,
  HIGH_BUDGET_KEYWORDS,
  HOT_TIMELINE_KEYWORDS,
  MEDIUM_BUDGET_KEYWORDS,
  SCORE_THRESHOLDS,
  SCORING_RULES,
} from "@/data/assistantConstants";

function matchesAny(value: string, keywords: string[]): boolean {
  const lower = value.toLowerCase();
  return keywords.some((kw) => lower.includes(kw.toLowerCase()));
}

/**
 * Calculates a 0–100 score for a lead based on the captured answers.
 * Each rule is isolated — add/remove rules without side effects.
 */
export function calculateLeadScore(data: LeadData): number {
  let score = 0;

  // Contact quality
  if (data.telefono?.trim()) score += SCORING_RULES.telefono;
  if (data.correo?.trim()) score += SCORING_RULES.correo;

  // Appointment booked is a strong signal
  if (data.tipoCita) score += SCORING_RULES.agendaCita;

  // Budget signals
  if (data.presupuesto) {
    if (matchesAny(data.presupuesto, HIGH_BUDGET_KEYWORDS)) {
      score += SCORING_RULES.presupuestoAlto;
    } else if (matchesAny(data.presupuesto, MEDIUM_BUDGET_KEYWORDS)) {
      score += SCORING_RULES.presupuestoMedio;
    }
  }

  // Timeline / urgency signals
  const timeline = [
    data.plazoCompra,
    data.etapaProyecto,
    data.plazoInversion,
  ]
    .filter(Boolean)
    .join(" ");

  if (timeline) {
    if (matchesAny(timeline, HOT_TIMELINE_KEYWORDS)) {
      score += SCORING_RULES.compraInmediata;
    } else if (matchesAny(timeline, COLD_TIMELINE_KEYWORDS)) {
      score += SCORING_RULES.soloExplorando;
    }
  }

  return Math.min(score, 100);
}

/**
 * Maps a numeric score to a human-readable temperature label.
 */
export function getLeadTemperature(score: number): LeadTemperature {
  if (score >= SCORE_THRESHOLDS.caliente) return "caliente";
  if (score >= SCORE_THRESHOLDS.tibio) return "tibio";
  return "frío";
}

/**
 * Returns a complete scoring breakdown — useful for debugging and CRM notes.
 */
export function getLeadScoreBreakdown(data: LeadData): {
  score: number;
  temperature: LeadTemperature;
  reasons: string[];
} {
  const reasons: string[] = [];
  let score = 0;

  if (data.telefono?.trim()) {
    score += SCORING_RULES.telefono;
    reasons.push(`+${SCORING_RULES.telefono} — teléfono proporcionado`);
  }
  if (data.correo?.trim()) {
    score += SCORING_RULES.correo;
    reasons.push(`+${SCORING_RULES.correo} — correo proporcionado`);
  }
  if (data.tipoCita) {
    score += SCORING_RULES.agendaCita;
    reasons.push(`+${SCORING_RULES.agendaCita} — agenda cita`);
  }
  if (data.presupuesto) {
    if (matchesAny(data.presupuesto, HIGH_BUDGET_KEYWORDS)) {
      score += SCORING_RULES.presupuestoAlto;
      reasons.push(`+${SCORING_RULES.presupuestoAlto} — presupuesto alto`);
    } else if (matchesAny(data.presupuesto, MEDIUM_BUDGET_KEYWORDS)) {
      score += SCORING_RULES.presupuestoMedio;
      reasons.push(`+${SCORING_RULES.presupuestoMedio} — presupuesto medio`);
    }
  }

  const timeline = [data.plazoCompra, data.etapaProyecto, data.plazoInversion]
    .filter(Boolean)
    .join(" ");
  if (timeline) {
    if (matchesAny(timeline, HOT_TIMELINE_KEYWORDS)) {
      score += SCORING_RULES.compraInmediata;
      reasons.push(`+${SCORING_RULES.compraInmediata} — compra/inicio inmediato`);
    } else if (matchesAny(timeline, COLD_TIMELINE_KEYWORDS)) {
      score += SCORING_RULES.soloExplorando;
      reasons.push(`+${SCORING_RULES.soloExplorando} — solo explorando`);
    }
  }

  score = Math.min(score, 100);
  return { score, temperature: getLeadTemperature(score), reasons };
}
