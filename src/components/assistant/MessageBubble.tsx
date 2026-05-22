"use client";

import type { ChatMessage } from "@/types/assistant";

interface Props {
  message: ChatMessage;
}

/** A single chat bubble — left for assistant, right for user */
export default function MessageBubble({ message }: Props) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex w-full ${isAssistant ? "justify-start" : "justify-end"}`}
    >
      {isAssistant && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#b8914a] flex-shrink-0 flex items-center justify-center text-xs font-bold text-black mr-2 mt-0.5 select-none">
          D
        </div>
      )}

      <div
        className={[
          "max-w-[82%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap rounded-2xl",
          isAssistant
            ? "bg-[#1e1e1e] border border-white/5 text-gray-200 rounded-bl-sm"
            : "bg-gradient-to-br from-[#c9a96e] to-[#b8914a] text-black font-medium rounded-br-sm",
        ].join(" ")}
      >
        {message.content}
      </div>
    </div>
  );
}
