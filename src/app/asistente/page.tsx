import type { Metadata } from "next";
import EmbeddedAssistant from "@/components/assistant/EmbeddedAssistant";

export const metadata: Metadata = {
  title: "Asistente Virtual | DobleM Diseño y Construcción",
  description:
    "Nuestro asistente virtual te guiará para encontrar la propiedad o proyecto de construcción ideal para ti.",
};

/** Standalone page that embeds the assistant full-screen */
export default function AsistentePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-12">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-xs text-[#c9a96e] font-semibold tracking-widest uppercase mb-2">
            DobleM Diseño y Construcción
          </p>
          <h1 className="text-3xl font-bold text-white">
            Asistente Virtual
          </h1>
          <p className="mt-2 text-[#8a8a8a] text-sm">
            Te acompañamos para encontrar la mejor opción para ti.
          </p>
        </div>

        {/* Embedded assistant panel (always visible on this page) */}
        <div
          className="w-full rounded-2xl overflow-hidden border border-white/8"
          style={{
            height: "640px",
            boxShadow: "0 0 0 1px rgba(201,169,110,0.12), 0 24px 80px rgba(0,0,0,0.6)",
          }}
        >
          <EmbeddedAssistant />
        </div>
      </div>
    </div>
  );
}
