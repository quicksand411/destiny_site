"use client";

import { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import { covers } from "@/content/covers";

interface CoverHoverCardProps {
  cover: string;
  secondaryCover?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps its children (a timeline/release card) so that hovering, focusing,
 * or tapping reveals a floating popover with the release's cover art and
 * date. Keyboard accessible (opens on focus, closes on blur) and works on
 * touch (tap toggles open/closed).
 */
export default function CoverHoverCard({
  cover,
  secondaryCover,
  children,
  className = "",
}: CoverHoverCardProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const info = covers[cover];
  const secondaryInfo = secondaryCover ? covers[secondaryCover] : undefined;

  if (!info) {
    return <div className={className}>{children}</div>;
  }

  const handleTap = (e: React.MouseEvent) => {
    // Only intercept as a tap-toggle on touch/coarse pointers.
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      ref={wrapperRef}
      data-hover-target
      tabIndex={0}
      className={`group relative outline-none ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={handleTap}
    >
      {children}

      <div
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-[220px] -translate-x-1/2 transition-all duration-200 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transformOrigin: "top center" }}
      >
        <div className="rounded-lg border border-cyan-traveler/40 bg-void-950/95 p-2 shadow-[0_0_24px_rgba(126,203,255,0.25)] backdrop-blur">
          <div className="relative mx-auto h-[300px] w-[220px] overflow-hidden rounded-md">
            <Image
              src={info.src}
              alt={info.title}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center font-display text-sm tracking-wide text-traveler">
            {info.title}
          </p>
          <p className="text-center text-xs text-mute">{info.date}</p>

          {secondaryInfo && (
            <>
              <div className="my-2 h-px w-full bg-white/10" />
              <div className="relative mx-auto h-[300px] w-[220px] overflow-hidden rounded-md">
                <Image
                  src={secondaryInfo.src}
                  alt={secondaryInfo.title}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center font-display text-sm tracking-wide text-traveler">
                {secondaryInfo.title}
              </p>
              <p className="text-center text-xs text-mute">{secondaryInfo.date}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
