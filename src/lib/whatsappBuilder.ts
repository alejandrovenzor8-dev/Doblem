// ─────────────────────────────────────────────────────────────────────────────
// WhatsApp Message Builder
// Generates a pre-filled wa.me URL from the captured lead data.
// ─────────────────────────────────────────────────────────────────────────────

import { WHATSAPP_BASE_URL } from "@/data/assistantConstants";
import type { LeadData } from "@/types/assistant";

/** Returns a wa.me URL with a pre-filled summary message */
export function buildWhatsAppUrl(data: LeadData): string {
  const lines: string[] = [
    `Hola DobleM, me contacté a través del asistente virtual y me gustaría más información.`,
    ``,
    `*Mi perfil:*`,
  ];

  if (data.nombre) lines.push(`• Nombre: ${data.nombre}`);
  if (data.telefono) lines.push(`• Teléfono: ${data.telefono}`);
  if (data.correo) lines.push(`• Correo: ${data.correo}`);

  if (data.flujoPrincipal) {
    lines.push(``, `*Mi interés:*`);
    lines.push(`• Motivo: ${data.flujoPrincipal}`);
  }

  const details: Array<[string, string | undefined]> = [
    ["Tipo de propiedad", data.tipoPropiedad],
    ["Zona de interés", data.zonaInteres],
    ["Presupuesto", data.presupuesto],
    ["Habitaciones", data.habitaciones],
    ["Plazo de compra", data.plazoCompra],
    ["Tiene terreno", data.tieneTerreno],
    ["Tipo de proyecto", data.tipoProyecto],
    ["Tamaño del proyecto", data.tamanoProyecto],
    ["Etapa del proyecto", data.etapaProyecto],
    ["Tipo de inversión", data.tipoInversion],
    ["Retorno buscado", data.retornoBuscado],
    ["Plazo de inversión", data.plazoInversion],
    ["Tipo de cita", data.tipoCita],
    ["Fecha deseada", data.fechaCita],
    ["Horario deseado", data.horarioCita],
  ];

  const filled = details.filter(([, v]) => Boolean(v));
  if (filled.length > 0) {
    lines.push(``, `*Detalles:*`);
    filled.forEach(([k, v]) => lines.push(`• ${k}: ${v}`));
  }

  const message = lines.join("\n");
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
