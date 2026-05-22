"use client";

interface Props {
  slots: string[];
  onSelect: (label: string, value: string) => void;
  disabled?: boolean;
}

/** Grid of selectable time slot pills */
export default function TimePickerStep({ slots, onSelect, disabled }: Props) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {slots.map((slot) => (
        <button
          key={slot}
          disabled={disabled}
          onClick={() => onSelect(slot, slot)}
          className={[
            "px-4 py-2 rounded-xl text-sm font-medium",
            "border border-[#c9a96e]/30 text-gray-200 bg-[#1a1a1a]",
            "transition-all duration-150",
            "hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 hover:text-[#c9a96e]",
            "active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]",
            disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
          ].join(" ")}
        >
          🕐 {slot}
        </button>
      ))}
    </div>
  );
}
