"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/526140000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
    >
      {/* Pulsing ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"
        style={{ animationDuration: "2s" }}
      />
      <MessageCircle size={26} className="relative z-10" />
    </a>
  );
}
