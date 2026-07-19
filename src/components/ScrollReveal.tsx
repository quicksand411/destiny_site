"use client";

import { ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps children in a fade+slide-up reveal that triggers once the element
 * scrolls into view. Respects prefers-reduced-motion by rendering children
 * immediately with no transition.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const Tag = as as any;

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
