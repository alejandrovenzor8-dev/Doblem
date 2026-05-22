// ─────────────────────────────────────────────────────────────────────────────
// DobleM Virtual Assistant — Type Definitions
// ─────────────────────────────────────────────────────────────────────────────

export type StepType =
  | "options"
  | "contact-form"
  | "date-picker"
  | "time-picker"
  | "final"
  | "info-panel";

export type LeadTemperature = "caliente" | "tibio" | "frío";

export type LeadStatus = "nuevo" | "contactado" | "calificado" | "descartado";

export type FinalVariant = "buy" | "build" | "invest" | "schedule" | "info";

/** All data captured through the assistant flow */
export interface LeadData {
  // ── Meta ────────────────────────────────────────────────────────────────
  flujoPrincipal?: string;
  timestamp?: string;
  source?: string;
  status?: LeadStatus;
  leadScore?: number;
  leadTemperature?: LeadTemperature;
  tipoCliente?: string;

  // ── Flujo A — Comprar propiedad ─────────────────────────────────────────
  tipoPropiedad?: string;
  zonaInteres?: string;
  presupuesto?: string;
  habitaciones?: string;
  plazoCompra?: string;

  // ── Flujo B — Construir ──────────────────────────────────────────────────
  tieneTerreno?: string;
  tipoProyecto?: string;
  tamanoProyecto?: string;
  etapaProyecto?: string;

  // ── Flujo C — Inversión ─────────────────────────────────────────────────
  tipoInversion?: string;
  retornoBuscado?: string;
  plazoInversion?: string;

  // ── Flujo D — Agendar cita ───────────────────────────────────────────────
  tipoCita?: string;
  fechaCita?: string;
  horarioCita?: string;

  // ── Contacto ────────────────────────────────────────────────────────────
  nombre?: string;
  telefono?: string;
  correo?: string;
}

/** A single quick-select button option */
export interface FlowOption {
  label: string;
  /** Value stored in LeadData — keep human-readable for CRM/WhatsApp export */
  value: string;
  emoji?: string;
}

/** Configuration for a single text / email / tel input field */
export interface ContactFieldConfig {
  key: keyof LeadData;
  label: string;
  placeholder: string;
  type: "text" | "tel" | "email";
  required: boolean;
  validationPattern?: RegExp;
  validationMessage?: string;
}

/** A card shown inside the info-panel step */
export interface InfoItem {
  id: string;
  label: string;
  emoji: string;
  /** Empty string = direct action item (no expand) */
  content: string;
  ctaLabel?: string;
  ctaAction?: "whatsapp" | "schedule" | "properties" | "restart" | "social";
  /** When true: clicking the item immediately fires ctaAction instead of expanding */
  isDirectAction?: boolean;
}

/** A single step in the conversational flow */
export interface FlowStep {
  id: string;
  type: StepType;
  /** Main assistant message — supports \n line breaks */
  message: string;
  /** Optional hint shown below the message */
  subMessage?: string;
  /** For type === "options" */
  options?: FlowOption[];
  /** Which field to persist the chosen value into */
  saveAs?: keyof LeadData;
  /** For type === "contact-form" */
  contactFields?: ContactFieldConfig[];
  /** For type === "time-picker" */
  timeSlots?: string[];
  /** For type === "info-panel" — quick options + expandable cards */
  infoItems?: InfoItem[];
  /** Frequently-asked questions shown below the info items */
  faqItems?: InfoItem[];
  /**
   * Navigation config:
   *   - string → always go to that step
   *   - Record<optionValue, stepId> → branch based on selected value
   */
  next: string | Record<string, string>;
  /** 1-based stage index used for the progress indicator */
  stage: number;
  stageLabel: string;
  allowBack?: boolean;
  /** Determines which CTA variant to show in the final screen */
  finalVariant?: FinalVariant;
}

/** A single message rendered in the chat UI */
export interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
}

/** A snapshot of the state before a navigation, enabling "go back" */
export interface HistoryEntry {
  /** The step we came FROM (so we can restore it on back) */
  fromStepId: string;
  savedAnswers: LeadData;
  /** Number of messages in the list before the user message was added */
  messageCount: number;
}

/** Persisted portion of the assistant state */
export interface PersistedFlowState {
  currentStepId: string;
  history: HistoryEntry[];
  answers: LeadData;
  messages: ChatMessage[];
  isComplete: boolean;
}
