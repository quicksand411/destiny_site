import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  raidsIntro,
  destiny1Raids,
  destiny2Raids,
  pantheonText,
  dungeonsText,
} from "@/content/raidsDungeons";

export default function RaidsDungeons() {
  return (
    <section id="raids" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="Section 8" title="Raids & Dungeons" subtitle={raidsIntro} />

        <ScrollReveal className="mb-6">
          <h3 className="font-display text-lg font-medium tracking-wide text-cyan-traveler">
            Destiny Raids (2014–2016)
          </h3>
        </ScrollReveal>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destiny1Raids.map((r) => (
            <ScrollReveal key={r.raid}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-traveler/40">
                <h4 className="font-display text-base font-medium text-ink">{r.raid}</h4>
                <dl className="mt-3 space-y-1.5 text-xs text-mute">
                  <div>
                    <dt className="inline text-traveler/80">Location: </dt>
                    <dd className="inline">{r.location}</dd>
                  </div>
                  <div>
                    <dt className="inline text-traveler/80">Expansion: </dt>
                    <dd className="inline">{r.expansion}</dd>
                  </div>
                  <div>
                    <dt className="inline text-traveler/80">Final Boss: </dt>
                    <dd className="inline">{r.boss}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-6">
          <h3 className="font-display text-lg font-medium tracking-wide text-cyan-traveler">
            Destiny 2 Raids (2017–2026)
          </h3>
        </ScrollReveal>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destiny2Raids.map((r) => (
            <ScrollReveal key={r.raid}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-traveler/40">
                <h4 className="font-display text-base font-medium text-ink">{r.raid}</h4>
                <dl className="mt-3 space-y-1.5 text-xs text-mute">
                  <div>
                    <dt className="inline text-traveler/80">Expansion / Season: </dt>
                    <dd className="inline">{r.expansionSeason}</dd>
                  </div>
                  <div>
                    <dt className="inline text-traveler/80">Final Boss: </dt>
                    <dd className="inline">{r.boss}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <h3 className="mb-3 font-display text-lg font-medium tracking-wide text-traveler">
              The Pantheon
            </h3>
            <p className="text-sm leading-relaxed text-mute">{pantheonText}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h3 className="mb-3 font-display text-lg font-medium tracking-wide text-traveler">
              Dungeons
            </h3>
            <p className="text-sm leading-relaxed text-mute">{dungeonsText}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
