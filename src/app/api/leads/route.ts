import { NextRequest, NextResponse } from "next/server";
import type { LeadData } from "@/types/assistant";

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/leads
// Receives a qualified lead from the virtual assistant.
//
// Production integration points (add your adapter here):
//   - Send email via Resend / Nodemailer
//   - Push to CRM (HubSpot, Pipedrive, etc.)
//   - Insert into a database
//   - Trigger a webhook
// ─────────────────────────────────────────────────────────────────────────────

interface LeadPayload extends LeadData {
  timestamp?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Minimal required field validation
  if (!body.nombre && !body.telefono) {
    return NextResponse.json(
      { ok: false, error: "At least nombre or telefono is required" },
      { status: 422 }
    );
  }

  // Sanitise: ensure no unexpected keys with excessively long strings reach downstream
  const sanitised: LeadPayload = sanitiseLead(body as Record<string, unknown>);

  // ── Log to console (replace with your CRM / email / DB call) ──────────────
  console.info("[DobleM Lead]", JSON.stringify(sanitised, null, 2));

  // ── Example: send to an external webhook (uncomment + set env var) ─────────
  // if (process.env.CRM_WEBHOOK_URL) {
  //   await fetch(process.env.CRM_WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(sanitised),
  //   });
  // }

  return NextResponse.json({ ok: true, receivedAt: new Date().toISOString() });
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Allow-list the fields we know about and truncate long strings */
const ALLOWED_KEYS: Array<keyof LeadPayload> = [
  "flujoPrincipal",
  "timestamp",
  "source",
  "status",
  "leadScore",
  "leadTemperature",
  "tipoCliente",
  "tipoPropiedad",
  "zonaInteres",
  "presupuesto",
  "habitaciones",
  "plazoCompra",
  "tieneTerreno",
  "tipoProyecto",
  "tamanoProyecto",
  "etapaProyecto",
  "tipoInversion",
  "retornoBuscado",
  "plazoInversion",
  "tipoCita",
  "fechaCita",
  "horarioCita",
  "nombre",
  "telefono",
  "correo",
];

function sanitiseLead(raw: Record<string, unknown>): LeadPayload {
  const out: Record<string, unknown> = {};
  for (const key of ALLOWED_KEYS) {
    const val = raw[key];
    if (val === undefined || val === null) continue;
    if (typeof val === "string") {
      out[key] = val.slice(0, 500); // cap at 500 chars per field
    } else if (typeof val === "number") {
      out[key] = val;
    }
  }
  return out as LeadPayload;
}
