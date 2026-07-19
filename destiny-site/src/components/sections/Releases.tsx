import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CoverHoverCard from "@/components/CoverHoverCard";
import {
  releasesIntro,
  destiny1Releases,
  destiny2Releases,
  darknessEraReleases,
  finalEraReleases,
} from "@/content/releases";
import { ReleaseRow } from "@/content/types";

function ReleaseStrip({ title, rows }: { title: string; rows: ReleaseRow[] }) {
  return (
    <div className="mb-14">
      <ScrollReveal className="mb-4">
        <h3 className="font-display text-lg font-medium tracking-wide text-cyan-traveler">
          {title}
        </h3>
      </ScrollReveal>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {rows.map((r) => {
          const card = (
            <div
              data-hover-target={r.coverSlug ? true : undefined}
              tabIndex={r.coverSlug ? 0 : undefined}
              className="interactive-hover flex h-full w-64 flex-shrink-0 flex-col rounded-lg border border-white/10 bg-white/[0.03] p-5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-cyan-traveler/40"
            >
              <span className="font-display text-xs uppercase tracking-[0.15em] text-traveler">
                {r.date}
              </span>
              <h4 className="mt-1.5 font-display text-base font-medium text-ink">{r.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-mute">{r.comment}</p>
            </div>
          );
          return (
            <ScrollReveal key={r.title} className="flex-shrink-0">
              {r.coverSlug ? <CoverHoverCard cover={r.coverSlug}>{card}</CoverHoverCard> : card}
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

export default function Releases() {
  return (
    <section id="releases" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="Section 12" title="Release Timeline" subtitle={releasesIntro.d1} />

        <ReleaseStrip title="Destiny (2014–2017)" rows={destiny1Releases} />
        <ReleaseStrip title="Destiny 2: Years 1–3" rows={destiny2Releases} />
        <ReleaseStrip
          title={'The "Darkness Era" (Beyond Light — The Witch Queen — Lightfall)'}
          rows={darknessEraReleases}
        />
        <ReleaseStrip
          title="The Saga's Finale & the Fate Saga (2024–2026)"
          rows={finalEraReleases}
        />

        <ScrollReveal className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-mute">
          {releasesIntro.finalNote}
        </ScrollReveal>
      </div>
    </section>
  );
}
