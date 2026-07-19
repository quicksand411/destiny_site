"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";
import { covers } from "@/content/covers";

interface CoverHoverCardProps {
  cover: string;
  secondaryCover?: string;
  /** Optional one-line comment/blurb shown under the primary cover's date (e.g. a release's summary). */
  comment?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps its children (a timeline/release card) so that hovering, focusing,
 * or tapping reveals a floating popover with the release's cover art and
 * date.
 *
 * Positioning: on fine-pointer devices (mouse/trackpad) the popover follows
 * the cursor, using a virtual floating-ui reference element updated on every
 * mousemove. On coarse-pointer devices (touch) it anchors to the wrapper
 * element itself instead, since there's no cursor to follow. In both cases
 * `flip()` + `shift()` keep the popover fully inside the viewport, and it's
 * rendered through a portal to `document.body` so it can never be visually
 * clipped by an `overflow-x-auto`/`overflow-hidden` ancestor (e.g. the
 * horizontal-scrolling release roadmap).
 *
 * Keyboard accessible (opens on focus, closes on blur) and works on touch
 * (tap toggles open/closed).
 */
export default function CoverHoverCard({
  cover,
  secondaryCover,
  comment,
  children,
  className = "",
}: CoverHoverCardProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isCoarseRef = useRef(false);
  const info = covers[cover];
  const secondaryInfo = secondaryCover ? covers[secondaryCover] : undefined;

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

  if (!info) {
    return <div className={className}>{children}</div>;
  }

  // On fine-pointer devices, follow the cursor via a 1x1 virtual reference
  // positioned at the current mouse coordinates.
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
    // Reset back to element-based anchoring for the next focus/tap.
    refs.setPositionReference(null);
  };

  const handleBlur = () => {
    setOpen(false);
    refs.setPositionReference(null);
  };

  const handleTap = (e: React.MouseEvent) => {
    // Only intercept as a tap-toggle on touch/coarse pointers.
    if (isCoarseRef.current) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  const renderCover = (c: { src: string; title: string; date: string }, divider: boolean) => (
    <>
      {divider && <div className="my-2 h-px w-full bg-white/10" />}
      <div className="relative mx-auto h-[300px] w-[220px] overflow-hidden rounded-md">
        <Image src={c.src} alt={c.title} fill sizes="220px" className="object-cover" />
      </div>
      <p className="mt-2 text-center font-display text-sm tracking-wide text-traveler">
        {c.title}
      </p>
      <p className="text-center text-xs text-mute">{c.date}</p>
    </>
  );

  return (
    <div
      ref={refs.setReference}
      data-hover-target
      tabIndex={0}
      className={`group relative outline-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={followCursor}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
      onClick={handleTap}
    >
      {children}

      {mounted &&
        createPortal(
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            role="tooltip"
            className="pointer-events-none z-50 w-[220px]"
          >
            <div
              className={`transition-all duration-200 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              <div className="rounded-lg border border-cyan-traveler/40 bg-void-950/95 p-2 shadow-[0_0_24px_rgba(126,203,255,0.25)] backdrop-blur">
                {renderCover(info, false)}
                {comment && (
                  <p className="mt-2 max-w-[220px] text-center text-[11px] leading-relaxed text-mute">
                    {comment}
                  </p>
                )}
                {secondaryInfo && renderCover(secondaryInfo, true)}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
