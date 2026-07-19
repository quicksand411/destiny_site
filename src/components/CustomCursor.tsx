"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A fixed-position Destiny-style reticle cursor: a thin ring with a
 * centered dot, following the mouse via requestAnimationFrame. Disabled
 * entirely on coarse/touch pointers and when prefers-reduced-motion is set.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (coarse || reducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(render);
    };

    const isInteractive = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return !!el.closest(
        'a, button, [data-hover-target], [role="button"], input, textarea, select, .interactive-hover'
      );
    };

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
    >
      <div
        className="rounded-full border transition-all duration-150 ease-out"
        style={{
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          borderWidth: 1.5,
          borderColor: "rgba(143, 214, 255, 0.85)",
          boxShadow: hovering
            ? "0 0 16px 2px rgba(143, 214, 255, 0.55)"
            : "0 0 6px 0 rgba(143, 214, 255, 0.25)",
        }}
      />
      <div
        className="absolute rounded-full bg-[#8fd6ff]"
        style={{
          width: 4,
          height: 4,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
