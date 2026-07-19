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
 * A single continuous horizontal roadmap/timeline for one game's releases:
 * a thin spine running left-to-right with a node for every release,
 * alternating labels above/below the spine. Each node's title + date are
 * always visible; hovering/focusing/tapping a node reveals its cover art
 * via <CoverHoverCard>, which is portaled to <body> so it can never be
 * clipped by this component's own overflow-x-auto scroll container.
 */
export default function ReleaseRoadmap({ items, eraMarkers = [] }: ReleaseRoadmapProps) {
  let aboveBelowIdx = 0;

  return (
    <div className="overflow-x-auto pb-4">
      <div className="relative inline-flex min-w-full items-stretch px-2">
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

  const dot = (
    <span className="h-3 w-3 flex-shrink-0 rounded-full bg-cyan-traveler shadow-[0_0_10px_rgba(126,203,255,0.8)]" />
  );

  const inner = (
    <div className="relative flex h-56 w-52 flex-shrink-0 flex-col items-center outline-none">
      {above ? (
        <>
          <div className="flex flex-1 flex-col items-center justify-end pb-2">{label}</div>
          <div className="h-4 w-px bg-cyan-traveler/40" />
          {dot}
          <div className="flex-1" />
        </>
      ) : (
        <>
          <div className="flex-1" />
          {dot}
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
