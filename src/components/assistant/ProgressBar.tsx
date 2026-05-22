"use client";

import { TOTAL_STAGES } from "@/data/assistantFlow";

interface Props {
  stage: number;
  stageLabel: string;
}

/** Horizontal step indicator at the top of the assistant panel */
export default function ProgressBar({ stage, stageLabel }: Props) {
  return (
    <div className="px-4 pt-1 pb-3">
      {/* Step dots */}
      <div className="flex items-center gap-1.5 mb-1.5">
        {Array.from({ length: TOTAL_STAGES }).map((_, i) => {
          const stepNum = i + 1;
          const isActive = stepNum === stage;
          const isDone = stepNum < stage;
          return (
            <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-white/10">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: isDone || isActive ? "100%" : "0%",
                  background: isDone
                    ? "#c9a96e"
                    : isActive
                    ? "linear-gradient(90deg,#c9a96e,#e8c98a)"
                    : "transparent",
                }}
              />
            </div>
          );
        })}
      </div>
      {/* Label */}
      <p className="text-[11px] text-[#8a8a8a] font-medium tracking-wide uppercase">
        Paso {stage} de {TOTAL_STAGES}&nbsp;·&nbsp;
        <span className="text-[#c9a96e]">{stageLabel}</span>
      </p>
    </div>
  );
}
