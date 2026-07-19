"use client";

import { useRef } from "react";
import CoverHoverCard from "@/components/CoverHoverCard";
import { ReleaseRow } from "@/content/types";

interface EraMarker {
  /** Insert this era tick immediately before the item with this coverSlug */
  beforeSlug: string;
  label: string;
}

interface ReleaseRoadmapProps {
  items: ReleaseRow[];
  eraMarkers?: EraMarker[];
}

/**
 * A single continuous horizontal roadmap/timeline for one game's releases,
 * styled after the in-game Director "Timeline" screen: a thin spine running
 * left-to-right with a hexagonal node for every release, alternating
 * labels above/below the spine, and scroll-hint arrows at both edges.
 * Each node's title + date are always visible; hovering/focusing/tapping a
 * node reveals its cover art (and comment) via <CoverHoverCard>, which is
 * portaled to <body> so it can never be clipped by this component's own
 * overflow-x-auto scroll container.
 */
export default function ReleaseRoadmap({ items, eraMarkers = [] }: ReleaseRoadmapProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  let aboveBelowIdx = 0;

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div className="group/roadmap relative">
      {/* Edge fades + scroll-hint arrows, echoing the in-game Director timeline UI */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-void-950 to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-void-950 to-transparent md:w-16" />

      <button
        type="button"
        aria-label="Scroll roadmap left"
        onClick={() => scrollBy(-1)}
        data-hover-target
        className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-cyan-traveler/30 bg-void-950/80 p-1.5 text-cyan-traveler/80 opacity-0 transition-opacity duration-300 hover:border-cyan-traveler hover:text-cyan-traveler group-hover/roadmap:opacity-100 md:flex"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        aria-label="Scroll roadmap right"
        onClick={() => scrollBy(1)}
        data-hover-target
        className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-cyan-traveler/30 bg-void-950/80 p-1.5 text-cyan-traveler/80 opacity-0 transition-opacity duration-300 hover:border-cyan-traveler hover:text-cyan-traveler group-hover/roadmap:opacity-100 md:flex"
      >
        <ChevronIcon direction="right" />
      </button>

      <div ref={scrollerRef} className="overflow-x-auto pb-4 [scrollbar-width:thin]">
        <div className="relative inline-flex min-w-full items-stretch px-8 md:px-14">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-traveler/50 to-transparent" />

          {items.map((row) => {
            const marker = eraMarkers.find((m) => m.beforeSlug === row.coverSlug);
            const idx = aboveBelowIdx++;
            return (
              <span key={row.title} className="flex">
                {marker && <EraTick label={marker.label} />}
                <RoadmapNode row={row} above={idx % 2 === 0} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={direction === "left" ? "" : "rotate-180"}>
      <path
        d="M10 3L5 8l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A small hexagonal "node" marker, echoing the Director timeline's hex icons. */
function HexNode({ filled = false }: { filled?: boolean }) {
  const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
  return (
    <span
      className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110"
      style={{ clipPath: hexClip }}
    >
      <span
        className="absolute inset-0 bg-cyan-traveler/70"
        style={{ clipPath: hexClip }}
      />
      <span
        className="absolute inset-[1.5px] bg-void-950"
        style={{ clipPath: hexClip }}
      />
      <span
        className={`absolute inset-[1.5px] transition-colors duration-300 ${
          filled ? "bg-cyan-traveler/25" : "bg-transparent"
        }`}
        style={{ clipPath: hexClip }}
      />
      <span className="relative h-2 w-2 rounded-full bg-cyan-traveler shadow-[0_0_8px_rgba(126,203,255,0.9)]" />
    </span>
  );
}

function EraTick({ label }: { label: string }) {
  return (
    <div className="relative flex h-56 w-14 flex-shrink-0 items-center justify-center" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-10 w-px -translate-x-1/2 -translate-y-full bg-cyan-traveler/40" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[68px] whitespace-nowrap rounded-full border border-cyan-traveler/30 bg-void-950/70 px-2 py-0.5 font-display text-[10px] uppercase tracking-[0.15em] text-cyan-traveler/80">
        {label}
      </span>
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-traveler/50" />
    </div>
  );
}

function RoadmapNode({ row, above }: { row: ReleaseRow; above: boolean }) {
  const label = (
    <div className="flex flex-col items-center px-2 text-center">
      <span className="font-display text-[11px] uppercase tracking-[0.12em] text-cyan-traveler/90">
        {row.date}
      </span>
      <span className="mt-1 font-display text-sm font-medium leading-snug text-ink">
        {row.title}
      </span>
    </div>
  );

  const inner = (
    <div className="group relative flex h-56 w-52 flex-shrink-0 flex-col items-center outline-none">
      {above ? (
        <>
          <div className="flex flex-1 flex-col items-center justify-end pb-2">{label}</div>
          <div className="h-4 w-px bg-cyan-traveler/40" />
          <HexNode filled={!!row.coverSlug} />
          <div className="flex-1" />
        </>
      ) : (
        <>
          <div className="flex-1" />
          <HexNode filled={!!row.coverSlug} />
          <div className="h-4 w-px bg-cyan-traveler/40" />
          <div className="flex flex-1 flex-col items-center justify-start pt-2">{label}</div>
        </>
      )}
    </div>
  );

  if (!row.coverSlug) {
    return inner;
  }

  return (
    <CoverHoverCard
      cover={row.coverSlug}
      comment={row.comment}
      className="interactive-hover flex-shrink-0 cursor-help rounded-lg transition-colors duration-300 hover:bg-white/[0.03]"
    >
      {inner}
    </CoverHoverCard>
  );
}
