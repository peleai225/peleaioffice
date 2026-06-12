"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function AfroZigzagDivider({
  className,
  flip,
}: {
  className?: string
  flip?: boolean
}) {
  const gradId = React.useId().replace(/:/g, "")
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden text-afro-gold/45",
        flip && "rotate-180",
        className
      )}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 14"
        preserveAspectRatio="none"
        className="block h-3.5 w-full min-w-[600px] sm:h-4"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--afro-terracotta)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--afro-gold)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--afro-ochre)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradId})`}
          d="M0 14 L30 0 L60 14 L90 0 L120 14 L150 0 L180 14 L210 0 L240 14 L270 0 L300 14 L330 0 L360 14 L390 0 L420 14 L450 0 L480 14 L510 0 L540 14 L570 0 L600 14 L630 0 L660 14 L690 0 L720 14 L750 0 L780 14 L810 0 L840 14 L870 0 L900 14 L930 0 L960 14 L990 0 L1020 14 L1050 0 L1080 14 L1110 0 L1140 14 L1170 0 L1200 14 L0 14 Z"
        />
      </svg>
    </div>
  )
}
