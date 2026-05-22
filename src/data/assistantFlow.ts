// ─────────────────────────────────────────────────────────────────────────────
// DobleM Virtual Assistant — Declarative Flow Configuration
//
// To add a new branch: add new FlowStep objects here and wire them via `next`.
// To change text: edit the `message` / `subMessage` / `options` fields.
// To change routing: edit the `next` field.
// ─────────────────────────────────────────────────────────────────────────────

import type { FlowStep } from "@/types/assistant";

/** Entry point — always start here */
export const INITIAL_STEP_ID = "welcome";

/** Total stages used by the progress bar (same for all flows) */
export const TOTAL_STAGES = 4;

// Contact fields reused across all flows
const CONTACT_FIELDS: FlowStep["contactFields"] = [
  {
    key: "nombre",
    label: "Nombre completo",
    placeholder: "Ej. Juan Pérez",
    type: "text",
    required: true,
  },
  {
    key: "telefono",
    label: "Teléfono (WhatsApp)",
    placeholder: "Ej. 6141234567",
    type: "tel",
    required: true,
    validationPattern: /^\d{10}$/,
    validationMessage: "Ingresa 10 dígitos sin espacios ni guiones",
  },
  {
    key: "correo",
    label: "Correo electrónico (opcional)",
    placeholder: "Ej. juan@correo.com",
    type: "email",
    required: false,
    validationPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validationMessage: "Ingresa un correo válido",
  },
];

export const FLOW_STEPS: Record<string, FlowStep> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // BIENVENIDA — Paso inicial
  // ═══════════════════════════════════════════════════════════════════════════
  welcome: {
    id: "welcome",
    type: "options",
    message:
      "👋 Bienvenido a DobleM Diseño y Construcción.\n\nNos especializamos en:\n🏡 Venta de propiedades premium\n🏗️ Construcción residencial personalizada\n\nEstoy aquí para ayudarte a encontrar la mejor opción para ti.\n\n¿En qué podemos ayudarte hoy?",
    options: [
      { label: "Comprar propiedad", value: "Comprar propiedad", emoji: "🏡" },
      { label: "Construir una casa", value: "Construir una casa", emoji: "🏗️" },
      { label: "Invertir", value: "Invertir", emoji: "💰" },
      { label: "Solicitar información", value: "Solicitar información", emoji: "ℹ️" },
      { label: "Agendar cita", value: "Agendar cita", emoji: "📅" },
    ],
    saveAs: "flujoPrincipal",
    next: {
      "Comprar propiedad": "buy-type",
      "Construir una casa": "build-terrain",
      Invertir: "invest-type",
      "Solicitar información": "info-panel",
      "Agendar cita": "schedule-type",
    },
    stage: 1,
    stageLabel: "Bienvenida",
    allowBack: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FLUJO A — Comprar propiedad
  // ═══════════════════════════════════════════════════════════════════════════
  "buy-type": {
    id: "buy-type",
    type: "options",
    message: "¿Qué tipo de propiedad estás buscando?",
    options: [
      { label: "Casa", value: "Casa", emoji: "🏠" },
      { label: "Departamento", value: "Departamento", emoji: "🏢" },
      { label: "Terreno", value: "Terreno", emoji: "🌿" },
      { label: "Comercial", value: "Comercial", emoji: "🏪" },
      { label: "Otro", value: "Otro", emoji: "📋" },
    ],
    saveAs: "tipoPropiedad",
    next: "buy-zone",
    stage: 2,
    stageLabel: "Tu búsqueda",
    allowBack: true,
  },

  "buy-zone": {
    id: "buy-zone",
    type: "options",
    message: "¿En qué zona te interesa buscar?",
    options: [
      { label: "Norte", value: "Norte", emoji: "🧭" },
      { label: "Reliz", value: "Reliz", emoji: "🏔️" },
      { label: "Cantera", value: "Cantera", emoji: "🌳" },
      { label: "Centro", value: "Centro", emoji: "🏙️" },
      { label: "Alrededores", value: "Alrededores", emoji: "🗺️" },
      { label: "Otra zona", value: "Otra", emoji: "📍" },
    ],
    saveAs: "zonaInteres",
    next: "buy-budget",
    stage: 2,
    stageLabel: "Tu búsqueda",
    allowBack: true,
  },

  "buy-budget": {
    id: "buy-budget",
    type: "options",
    message: "¿Cuál es tu presupuesto aproximado?",
    subMessage:
      "Esta información nos ayuda a mostrarte opciones realmente compatibles con lo que buscas.",
    options: [
      { label: "$1M - $3M", value: "$1M - $3M", emoji: "💵" },
      { label: "$3M - $5M", value: "$3M - $5M", emoji: "💵" },
      { label: "$5M - $10M", value: "$5M - $10M", emoji: "💎" },
      { label: "+$10M", value: "+$10M", emoji: "💎" },
    ],
    saveAs: "presupuesto",
    next: "buy-rooms",
    stage: 3,
    stageLabel: "Detalles",
    allowBack: true,
  },

  "buy-rooms": {
    id: "buy-rooms",
    type: "options",
    message: "¿Cuántas habitaciones estás buscando?",
    options: [
      { label: "1-2", value: "1-2", emoji: "🛏️" },
      { label: "3", value: "3", emoji: "🛏️" },
      { label: "4+", value: "4+", emoji: "🛏️" },
      { label: "No definido", value: "No definido", emoji: "🤔" },
    ],
    saveAs: "habitaciones",
    next: "buy-timeline",
    stage: 3,
    stageLabel: "Detalles",
    allowBack: true,
  },

  "buy-timeline": {
    id: "buy-timeline",
    type: "options",
    message: "¿En qué plazo deseas comprar?",
    options: [
      { label: "Inmediatamente", value: "Inmediatamente", emoji: "⚡" },
      { label: "1-3 meses", value: "1-3 meses", emoji: "📅" },
      { label: "3-6 meses", value: "3-6 meses", emoji: "📅" },
      { label: "Solo estoy explorando", value: "Solo estoy explorando", emoji: "👀" },
    ],
    saveAs: "plazoCompra",
    next: "buy-contact",
    stage: 3,
    stageLabel: "Detalles",
    allowBack: true,
  },

  "buy-contact": {
    id: "buy-contact",
    type: "contact-form",
    message:
      "¿A nombre de quién registramos esta búsqueda?\n\nComparte tus datos y un asesor especializado te contactará con opciones a tu medida.",
    contactFields: CONTACT_FIELDS,
    next: "buy-final",
    stage: 4,
    stageLabel: "Tus datos",
    allowBack: true,
  },

  "buy-final": {
    id: "buy-final",
    type: "final",
    message:
      "Perfecto 👌\n\nYa tenemos tu información.\n\nUno de nuestros asesores especializados revisará opciones compatibles con lo que buscas y se pondrá en contacto contigo.",
    next: "",
    stage: 4,
    stageLabel: "Listo",
    finalVariant: "buy",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FLUJO B — Construir casa
  // ═══════════════════════════════════════════════════════════════════════════
  "build-terrain": {
    id: "build-terrain",
    type: "options",
    message: "¿Ya cuentas con un terreno?",
    options: [
      { label: "Sí", value: "Sí", emoji: "✅" },
      { label: "No", value: "No", emoji: "❌" },
      { label: "En proceso", value: "En proceso", emoji: "🔄" },
    ],
    saveAs: "tieneTerreno",
    next: "build-type",
    stage: 2,
    stageLabel: "Tu proyecto",
    allowBack: true,
  },

  "build-type": {
    id: "build-type",
    type: "options",
    message: "¿Qué tipo de proyecto deseas construir?",
    options: [
      { label: "Casa residencial", value: "Casa residencial", emoji: "🏠" },
      { label: "Casa premium", value: "Casa premium", emoji: "🏡" },
      { label: "Oficinas", value: "Oficinas", emoji: "🏢" },
      { label: "Remodelación", value: "Remodelación", emoji: "🔨" },
      { label: "Otro", value: "Otro", emoji: "📋" },
    ],
    saveAs: "tipoProyecto",
    next: "build-size",
    stage: 2,
    stageLabel: "Tu proyecto",
    allowBack: true,
  },

  "build-size": {
    id: "build-size",
    type: "options",
    message: "¿Cuál es el tamaño aproximado del proyecto?",
    options: [
      { label: "Menos de 150m²", value: "Menos de 150m²", emoji: "📐" },
      { label: "150m² - 300m²", value: "150m² - 300m²", emoji: "📐" },
      { label: "300m²+", value: "300m²+", emoji: "📐" },
      { label: "Aún no lo sé", value: "Aún no lo sé", emoji: "🤔" },
    ],
    saveAs: "tamanoProyecto",
    next: "build-budget",
    stage: 3,
    stageLabel: "Detalles",
    allowBack: true,
  },

  "build-budget": {
    id: "build-budget",
    type: "options",
    message: "¿Cuál es tu presupuesto aproximado para la construcción?",
    subMessage: "Nos ayuda a elaborar una propuesta realista y personalizada.",
    options: [
      { label: "$1M - $3M", value: "$1M - $3M", emoji: "💵" },
      { label: "$3M - $5M", value: "$3M - $5M", emoji: "💵" },
      { label: "$5M+", value: "$5M+", emoji: "💎" },
    ],
    saveAs: "presupuesto",
    next: "build-stage",
    stage: 3,
    stageLabel: "Detalles",
    allowBack: true,
  },

  "build-stage": {
    id: "build-stage",
    type: "options",
    message: "¿En qué etapa se encuentra tu proyecto?",
    options: [
      { label: "Idea inicial", value: "Idea inicial", emoji: "💡" },
      { label: "Diseño", value: "Diseño", emoji: "📐" },
      { label: "Cotización", value: "Cotización", emoji: "📋" },
      { label: "Listo para comenzar", value: "Listo para comenzar", emoji: "🚀" },
    ],
    saveAs: "etapaProyecto",
    next: "build-contact",
    stage: 3,
    stageLabel: "Detalles",
    allowBack: true,
  },

  "build-contact": {
    id: "build-contact",
    type: "contact-form",
    message:
      "Excelente. ¿A nombre de quién registramos este proyecto?\n\nNuestro equipo preparará una propuesta personalizada para ti.",
    contactFields: CONTACT_FIELDS,
    next: "build-final",
    stage: 4,
    stageLabel: "Tus datos",
    allowBack: true,
  },

  "build-final": {
    id: "build-final",
    type: "final",
    message:
      "Excelente 👌\n\nGracias por compartir la información de tu proyecto.\n\nNuestro equipo revisará tus necesidades y te brindará una propuesta personalizada acorde a tus objetivos y presupuesto.",
    next: "",
    stage: 4,
    stageLabel: "Listo",
    finalVariant: "build",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FLUJO C — Inversión
  // ═══════════════════════════════════════════════════════════════════════════
  "invest-type": {
    id: "invest-type",
    type: "options",
    message: "¿Buscas invertir en propiedades o construcción?",
    options: [
      { label: "Propiedades", value: "Propiedades", emoji: "🏘️" },
      { label: "Construcción", value: "Construcción", emoji: "🏗️" },
      { label: "Ambos", value: "Ambos", emoji: "🔀" },
    ],
    saveAs: "tipoInversion",
    next: "invest-budget",
    stage: 2,
    stageLabel: "Tu inversión",
    allowBack: true,
  },

  "invest-budget": {
    id: "invest-budget",
    type: "options",
    message: "¿Cuál es tu presupuesto?",
    subMessage:
      "Esto nos ayuda a orientarte hacia las mejores oportunidades disponibles.",
    options: [
      { label: "Menos de $1M", value: "Menos de $1M", emoji: "💵" },
      { label: "$1M - $3M", value: "$1M - $3M", emoji: "💵" },
      { label: "$3M - $5M", value: "$3M - $5M", emoji: "💎" },
      { label: "$5M+", value: "$5M+", emoji: "💎" },
    ],
    saveAs: "presupuesto",
    next: "invest-return",
    stage: 2,
    stageLabel: "Tu inversión",
    allowBack: true,
  },

  "invest-return": {
    id: "invest-return",
    type: "options",
    message: "¿Qué tipo de retorno estás buscando?",
    options: [
      { label: "Plusvalía", value: "Plusvalía", emoji: "📈" },
      { label: "Renta mensual", value: "Renta mensual", emoji: "🏦" },
      { label: "Venta a corto plazo", value: "Venta a corto plazo", emoji: "⚡" },
      { label: "Diversificación patrimonial", value: "Diversificación patrimonial", emoji: "🎯" },
      { label: "Aún no lo sé", value: "Aún no lo sé", emoji: "🤔" },
    ],
    saveAs: "retornoBuscado",
    next: "invest-timeline",
    stage: 3,
    stageLabel: "Estrategia",
    allowBack: true,
  },

  "invest-timeline": {
    id: "invest-timeline",
    type: "options",
    message: "¿Qué plazo manejas?",
    options: [
      { label: "Inmediato", value: "Inmediato", emoji: "⚡" },
      { label: "1-3 meses", value: "1-3 meses", emoji: "📅" },
      { label: "3-6 meses", value: "3-6 meses", emoji: "📅" },
      { label: "6+ meses", value: "6+ meses", emoji: "🗓️" },
    ],
    saveAs: "plazoInversion",
    next: "invest-contact",
    stage: 3,
    stageLabel: "Estrategia",
    allowBack: true,
  },

  "invest-contact": {
    id: "invest-contact",
    type: "contact-form",
    message:
      "¿A quién podemos contactar para presentar las mejores oportunidades de inversión?\n\nUn asesor especializado te dará seguimiento personalizado.",
    contactFields: CONTACT_FIELDS,
    next: "invest-final",
    stage: 4,
    stageLabel: "Tus datos",
    allowBack: true,
  },

  "invest-final": {
    id: "invest-final",
    type: "final",
    message:
      "Gracias 👌\n\nCon esta información podremos orientarte hacia opciones de inversión alineadas a tu perfil y objetivos.\n\nUno de nuestros asesores te contactará para darte seguimiento personalizado.",
    next: "",
    stage: 4,
    stageLabel: "Listo",
    finalVariant: "invest",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FLUJO D — Agendar cita
  // ═══════════════════════════════════════════════════════════════════════════
  "schedule-type": {
    id: "schedule-type",
    type: "options",
    message: "¿Qué tipo de cita prefieres?",
    options: [
      { label: "Visita presencial", value: "Visita presencial", emoji: "🏢" },
      { label: "Videollamada", value: "Videollamada", emoji: "💻" },
      { label: "Llamada telefónica", value: "Llamada telefónica", emoji: "📞" },
    ],
    saveAs: "tipoCita",
    next: "schedule-date",
    stage: 2,
    stageLabel: "Tu cita",
    allowBack: true,
  },

  "schedule-date": {
    id: "schedule-date",
    type: "date-picker",
    message: "¿Qué fecha te viene bien?",
    subMessage:
      "Selecciona tu fecha preferida y confirmaremos disponibilidad.",
    saveAs: "fechaCita",
    next: "schedule-time",
    stage: 2,
    stageLabel: "Tu cita",
    allowBack: true,
  },

  "schedule-time": {
    id: "schedule-time",
    type: "time-picker",
    message: "¿En qué horario prefieres?",
    timeSlots: [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
    ],
    saveAs: "horarioCita",
    next: "schedule-contact",
    stage: 3,
    stageLabel: "Horario",
    allowBack: true,
  },

  "schedule-contact": {
    id: "schedule-contact",
    type: "contact-form",
    message:
      "Perfecto. ¿Cuál es tu nombre y cómo te confirmamos la cita?",
    contactFields: CONTACT_FIELDS,
    next: "schedule-final",
    stage: 4,
    stageLabel: "Confirmación",
    allowBack: true,
  },

  "schedule-final": {
    id: "schedule-final",
    type: "final",
    message:
      "Perfecto 👌\n\nTu solicitud de cita ha sido registrada.\n\nEn breve confirmaremos disponibilidad contigo por el medio de contacto proporcionado.",
    next: "",
    stage: 4,
    stageLabel: "Listo",
    finalVariant: "schedule",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FLUJO E — Información general
  // Opciones rápidas + FAQ, según el flujo especificado
  // ═══════════════════════════════════════════════════════════════════════════
  "info-panel": {
    id: "info-panel",
    type: "info-panel",
    message: "¿Sobre qué te gustaría saber más?",
    subMessage: "Selecciona una opción.",
    infoItems: [
      // ── Acciones directas (sin expandir) ───────────────────────────────
      {
        id: "properties",
        label: "Ver propiedades",
        emoji: "🏘️",
        content: "",
        isDirectAction: true,
        ctaAction: "properties",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        emoji: "💬",
        content: "",
        isDirectAction: true,
        ctaAction: "whatsapp",
      },
      {
        id: "social",
        label: "Redes sociales",
        emoji: "📱",
        content: "",
        isDirectAction: true,
        ctaAction: "social",
      },
      // ── Tarjetas expandibles ────────────────────────────────────────────
      {
        id: "services",
        label: "Servicios",
        emoji: "🏗️",
        content:
          "Ofrecemos:\n\n• Venta de propiedades premium\n• Construcción residencial desde cero\n• Diseño arquitectónico personalizado\n• Remodelaciones y ampliaciones\n• Asesoría en inversión inmobiliaria\n• Gestión de trámites y permisos",
        ctaLabel: "Iniciar consulta",
        ctaAction: "restart",
      },
      {
        id: "location",
        label: "Ubicación",
        emoji: "📍",
        content:
          "Estamos en Chihuahua, Chihuahua, México. Atendemos proyectos en toda la ciudad y sus alrededores. Nos desplazamos al sitio de tu proyecto sin costo adicional.",
        ctaLabel: "Hablar por WhatsApp",
        ctaAction: "whatsapp",
      },
      {
        id: "hours",
        label: "Horarios",
        emoji: "🕐",
        content:
          "📅 Lunes a Viernes: 9:00 AM – 7:00 PM\n📅 Sábados: 10:00 AM – 2:00 PM\n\nFuera de horario puedes dejarnos un mensaje y te contactamos al siguiente día hábil.",
        ctaLabel: "Agendar cita",
        ctaAction: "schedule",
      },
    ],
    // ── Sección FAQ ─────────────────────────────────────────────────────────
    faqItems: [
      {
        id: "faq-location",
        label: "¿Dónde están ubicados?",
        emoji: "📍",
        content:
          "Estamos en Chihuahua, Chihuahua, México. Atendemos proyectos residenciales y comerciales en toda la ciudad y sus alrededores.",
        ctaLabel: "Hablar por WhatsApp",
        ctaAction: "whatsapp",
      },
      {
        id: "faq-properties",
        label: "¿Tienen propiedades disponibles?",
        emoji: "🏘️",
        content:
          "Sí. Contamos con una selección exclusiva de casas, departamentos y terrenos en las mejores zonas de Chihuahua, con acabados de primer nivel.",
        ctaLabel: "Ver propiedades",
        ctaAction: "properties",
      },
      {
        id: "faq-cost",
        label: "¿Cuánto cuesta construir?",
        emoji: "💰",
        content:
          "El costo varía según el tipo de proyecto, m², materiales y acabados. Manejamos proyectos desde $1M MXN. Te preparamos una cotización personalizada sin compromiso.",
        ctaLabel: "Solicitar cotización",
        ctaAction: "restart",
      },
      {
        id: "faq-custom",
        label: "¿Trabajan proyectos personalizados?",
        emoji: "✏️",
        content:
          "Sí, todos nuestros proyectos son personalizados. Desde el diseño hasta la entrega, trabajamos contigo para que tu visión se convierta en realidad.",
        ctaLabel: "Iniciar mi proyecto",
        ctaAction: "restart",
      },
      {
        id: "faq-schedule",
        label: "¿Puedo agendar una cita?",
        emoji: "📅",
        content:
          "¡Claro! Puedes agendar una visita presencial, videollamada o llamada telefónica. Te confirmamos disponibilidad en menos de 24 horas.",
        ctaLabel: "Agendar cita",
        ctaAction: "schedule",
      },
      {
        id: "faq-financing",
        label: "¿Manejan financiamiento?",
        emoji: "💳",
        content:
          "Sí. Te orientamos con crédito bancario, hipotecario y planes directos según tu perfil financiero. Habla con un asesor para conocer las opciones disponibles.",
        ctaLabel: "Hablar por WhatsApp",
        ctaAction: "whatsapp",
      },
    ],
    next: "",
    stage: 1,
    stageLabel: "Información",
    allowBack: true,
  },
};
