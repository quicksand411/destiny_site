"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";

interface PortraitHoverCardProps {
  src?: string;
  alt: string;
  caption?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps its children (a character/class/race card) so that hovering,
 * focusing, or tapping reveals a floating popover with a portrait image.
 *
 * Positioning logic is copied verbatim from CoverHoverCard: on fine-pointer
 * devices (mouse/trackpad) the popover follows the cursor via a virtual
 * floating-ui reference element updated on every mousemove; on coarse-pointer
 * devices (touch) it anchors to the wrapper element itself instead. `flip()`
 * + `shift()` keep the popover inside the viewport, and it's rendered
 * through a portal to `document.body` so it's never clipped by an
 * `overflow-x-auto`/`overflow-hidden` ancestor.
 *
 * Keyboard accessible (opens on focus, closes on blur) and works on touch
 * (tap toggles open/closed). If no `src` is provided (no portrait sourced
 * for this entity), it gracefully renders just the children with no
 * popover, same fallback behavior as CoverHoverCard.
 */
export default function PortraitHoverCard({
  src,
  alt,
  caption,
  children,
  className = "",
}: PortraitHoverCardProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isCoarseRef = useRef(false);

  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    strategy: "fixed",
    placement: "right-start",
    middleware: [
      offset(18),
      flip({
        fallbackPlacements: ["left-start", "bottom-start", "top-start", "right-end", "left-end"],
        padding: 16,
      }),
      shift({ padding: 16 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      isCoarseRef.current = window.matchMedia("(pointer: coarse)").matches;
    }
  }, []);

  if (!src) {
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
            className="pointer-events-none z-50 w-[180px]"
          >
            <div
              className={`transition-all duration-200 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              <div className="rounded-lg border border-cyan-traveler/40 bg-void-950/95 p-2 shadow-[0_0_24px_rgba(126,203,255,0.25)] backdrop-blur">
                <div className="relative mx-auto h-[220px] w-[180px] overflow-hidden rounded-md">
                  <Image src={src} alt={alt} fill sizes="180px" className="object-cover" />
                </div>
                {caption && (
                  <p className="mt-2 text-center text-xs text-mute">{caption}</p>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
