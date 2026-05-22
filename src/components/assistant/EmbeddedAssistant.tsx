"use client";

import { useAssistantFlow } from "@/hooks/useAssistantFlow";
import AssistantChat from "./AssistantChat";

/**
 * Renders the assistant chat directly (no floating button / overlay).
 * Used by the standalone /asistente page.
 */
export default function EmbeddedAssistant() {
  const hook = useAssistantFlow();
  // On the embedded page, "close" reloads to reset — or just does nothing.
  return <AssistantChat hook={hook} onClose={() => hook.restart()} />;
}
