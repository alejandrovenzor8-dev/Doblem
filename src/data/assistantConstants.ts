// ─────────────────────────────────────────────────────────────────────────────
// DobleM Virtual Assistant — Commercial Constants
// Edit this file to update texts, contact info, and scoring rules.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "DobleM Diseño y Construcción",
  whatsapp: "5216142460197",
  whatsappCarolina: "5216142460197",
  whatsappIveth: "5216142235153",
  phone: "+52 614 246 0197",
  phoneCarolina: "+52 614 246 0197",
  phoneIveth: "+52 614 223 5153",
  contactNamePrimary: "Carolina Morales",
  contactNameSecondary: "Iveth Ramos",
  email: "info@doblem.mx",
  address: "Chihuahua, Chihuahua, México",
  hours: "Lunes a Viernes: 9:00 AM – 7:00 PM\nSábados: 10:00 AM – 2:00 PM",
  propertiesUrl: "/propiedades",
  scheduleUrl: "/agenda",
  instagramUrl: "https://instagram.com/doblem",
  facebookUrl: "https://facebook.com/doblem",
} as const;

export const WHATSAPP_BASE_URL = `https://wa.me/${COMPANY.whatsapp}`;

/** Predefined time slots shown in the appointment flow */
export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Lead Scoring — edit points here to adjust qualification logic
// ─────────────────────────────────────────────────────────────────────────────

export const SCORING_RULES = {
  telefono: 30,
  correo: 10,
  presupuestoAlto: 25,   // e.g. $5M+, +$10M
  presupuestoMedio: 10,  // e.g. $3M–$5M
  compraInmediata: 25,   // "Quiero comprar ahora", "Listo para comenzar", "Quiero invertir ahora"
  agendaCita: 30,        // when tipoCita is filled
  soloExplorando: 5,     // "Solo estoy explorando", "Idea inicial"
} as const;

export const SCORE_THRESHOLDS = {
  caliente: 70,
  tibio: 40,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Keyword lists used by the scoring engine — edit to add/remove matches
// ─────────────────────────────────────────────────────────────────────────────

export const HOT_TIMELINE_KEYWORDS = [
  "inmediatamente",   // buy-timeline
  "inmediato",        // invest-timeline
  "listo para comenzar", // build-stage
];

export const HIGH_BUDGET_KEYWORDS = [
  "$5M+",
  "$5M - $10M",
  "+$10M",
  "$5M o más",
];

export const MEDIUM_BUDGET_KEYWORDS = ["$3M - $5M", "$3M – $5M MXN"];

export const COLD_TIMELINE_KEYWORDS = [
  "solo estoy explorando",
  "idea inicial",
  "aún no lo sé",
];
