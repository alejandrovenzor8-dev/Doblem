"use client";

import { useState } from "react";

interface Props {
  saveAs?: string;
  onSelect: (label: string, value: string) => void;
}

/** Native date-picker styled to match the dark theme */
export default function DatePickerStep({ onSelect }: Props) {
  const [value, setValue] = useState("");

  // Minimum date = tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  function formatDisplayDate(isoDate: string): string {
    const [y, m, d] = isoDate.split("-");
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
    ];
    return `${d} de ${months[parseInt(m, 10) - 1]} de ${y}`;
  }

  function handleConfirm() {
    if (!value) return;
    const displayLabel = formatDisplayDate(value);
    onSelect(displayLabel, value);
  }

  return (
    <div className="flex flex-col gap-3 pt-1">
      <input
        type="date"
        value={value}
        min={minDate}
        onChange={(e) => setValue(e.target.value)}
        className={[
          "bg-[#141414] border rounded-xl px-3.5 py-2.5 text-sm text-white",
          "placeholder-[#555] focus:outline-none transition-colors",
          "border-white/10 focus:border-[#c9a96e]",
          // Style the native date picker chrome
          "[color-scheme:dark]",
        ].join(" ")}
      />
      <button
        disabled={!value}
        onClick={handleConfirm}
        className={[
          "w-full py-3 rounded-xl text-sm font-semibold transition-all duration-150",
          "bg-gradient-to-r from-[#c9a96e] to-[#b8914a] text-black",
          "hover:opacity-90 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]",
          !value ? "opacity-40 cursor-not-allowed" : "",
        ].join(" ")}
      >
        Confirmar fecha →
      </button>
    </div>
  );
}
