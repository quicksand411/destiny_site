"use client";

import { useState } from "react";
import { SubclassEntry } from "@/content/types";

export default function SubclassChip({ subclass }: { subclass: SubclassEntry }) {
  const [open, setOpen] = useState(false);
  const isPrismatic = subclass.colorKey === "prismatic";

  return (
    <div
      data-hover-target
      tabIndex={0}
      className="group relative inline-block outline-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
    >
      <span
        className="inline-flex cursor-default items-center rounded-full border px-4 py-1.5 text-sm font-medium tracking-wide transition-transform duration-200 group-hover:scale-105"
        style={{
          borderColor: isPrismatic ? "transparent" : subclass.colorHex,
          color: isPrismatic ? "#0b0f1a" : subclass.colorHex,
          backgroundImage: isPrismatic
            ? "linear-gradient(90deg, #4fc3f7, #ff9800, #b388ff, #6c7bff, #6bff9e)"
            : "none",
          backgroundColor: isPrismatic ? undefined : "rgba(255,255,255,0.03)",
          fontWeight: isPrismatic ? 700 : 500,
        }}
      >
        {subclass.name}
      </span>

      <div
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-64 -translate-x-1/2 rounded-md border border-white/10 bg-void-950/95 p-3 text-xs leading-relaxed text-mute shadow-lg transition-all duration-200 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {subclass.description}
      </div>
    </div>
  );
}
