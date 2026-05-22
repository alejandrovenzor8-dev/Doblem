"use client";

/** Animated three-dot typing indicator */
export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-[#1e1e1e] border border-white/5 w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-2 h-2 rounded-full bg-[#c9a96e]"
          style={{
            animation: "assistantPulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes assistantPulse {
          0%, 60%, 100% { opacity: 0.2; transform: scale(0.8); }
          30%            { opacity: 1;   transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
