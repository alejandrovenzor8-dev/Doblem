"use client";

import type { FlowOption } from "@/types/assistant";

interface Props {
  options: FlowOption[];
  onSelect: (label: string, value: string) => void;
  disabled?: boolean;
}

/** Grid of quick-select option buttons */
export default function OptionGrid({ options, onSelect, disabled }: Props) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          disabled={disabled}
          onClick={() => onSelect(opt.label, opt.value)}
          className={[
            "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium",
            "border border-[#c9a96e]/30 text-gray-200 bg-[#1a1a1a]",
            "transition-all duration-150",
            "hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 hover:text-[#c9a96e]",
            "active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]",
            disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
          ].join(" ")}
          aria-label={opt.label}
        >
          {opt.emoji && <span aria-hidden="true">{opt.emoji}</span>}
          {opt.label}
        </button>
      ))}
    </div>
  );
}
