"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";
import { SubclassEntry } from "@/content/types";

export default function SubclassChip({ subclass }: { subclass: SubclassEntry }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isCoarseRef = useRef(false);
  const isPrismatic = subclass.colorKey === "prismatic";

  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    strategy: "fixed",
    middleware: [offset(12), flip(), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      isCoarseRef.current = window.matchMedia("(pointer: coarse)").matches;
    }
  }, []);

  const followCursor = (e: React.MouseEvent) => {
    if (isCoarseRef.current) return;
    refs.setPositionReference({
      getBoundingClientRect() {
        return {
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
          width: 0,
          height: 0,
        };
      },
    });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (isCoarseRef.current) return;
    followCursor(e);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
    refs.setPositionReference(null);
  };

  const handleBlur = () => {
    setOpen(false);
    refs.setPositionReference(null);
  };

  return (
    <div
      ref={refs.setReference}
      data-hover-target
      tabIndex={0}
      className="group relative inline-block outline-none"
      onMouseEnter={handleMouseEnter}
      onMouseMove={followCursor}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
      onClick={() => {
        if (isCoarseRef.current) setOpen((v) => !v);
      }}
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

      {mounted &&
        createPortal(
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            role="tooltip"
            className="pointer-events-none z-40 w-64"
          >
            <div
              className={`rounded-md border border-white/10 bg-void-950/95 p-3 text-xs leading-relaxed text-mute shadow-lg transition-all duration-200 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              {subclass.description}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
