import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ReleaseRoadmap from "@/components/ReleaseRoadmap";
import {
  releasesIntro,
  destiny1Releases,
  destiny2Releases,
  darknessEraReleases,
  finalEraReleases,
} from "@/content/releases";

// Destiny 2's three release arrays, combined into a single chronological
// roadmap (13 items total). Sorted by date rather than relying on source
// array order, since "The Edge of Fate" (Jul 15, 2025) actually ships
// before "Destiny: Rising" (Aug 28, 2025) despite the latter's array
// position in src/content/releases.ts.
const destiny2AllReleases = [...destiny2Releases, ...darknessEraReleases, ...finalEraReleases].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

export default function Releases() {
  return (
    <section id="releases" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="Section 12" title="Release Timeline" subtitle={releasesIntro.d1} />

        <ScrollReveal className="mb-4">
          <h3 className="font-display text-lg font-medium tracking-wide text-cyan-traveler">
            Destiny (2014–2016)
          </h3>
        </ScrollReveal>
        <ScrollReveal className="mb-16">
          <ReleaseRoadmap items={destiny1Releases} />
        </ScrollReveal>

        <ScrollReveal className="mb-4">
          <h3 className="font-display text-lg font-medium tracking-wide text-cyan-traveler">
            Destiny 2 (2017–2026)
          </h3>
        </ScrollReveal>
        <ScrollReveal>
          <ReleaseRoadmap
            items={destiny2AllReleases}
            eraMarkers={[
              { beforeSlug: "destiny-2-base", label: "Years 1–3" },
              { beforeSlug: "beyond-light", label: "Darkness Era" },
              { beforeSlug: "the-final-shape", label: "Fate Saga" },
            ]}
          />
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-mute">
          {releasesIntro.finalNote}
        </ScrollReveal>
      </div>
    </section>
  );
}
