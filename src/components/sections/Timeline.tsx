import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CoverHoverCard from "@/components/CoverHoverCard";
import OrreryDivider from "@/components/OrreryDivider";
import Starfield from "@/components/Starfield";
import { timeline, timelineIntro } from "@/content/timeline";
import { covers } from "@/content/covers";

export default function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden py-24 md:py-32">
      <Starfield className="opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4">
        <SectionHeading
          kicker="Section 2"
          title="Timeline & Lore of the Universe"
          subtitle={timelineIntro}
        />

        <OrreryDivider />

        <div className="relative mt-8">
          {/* spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-traveler/60 via-traveler/30 to-transparent md:left-1/2" />

          <ol className="space-y-14">
            {timeline.map((entry, idx) => {
              const cardBody = (
                <div
                  data-hover-target={entry.coverSlug ? true : undefined}
                  tabIndex={entry.coverSlug ? 0 : undefined}
                  className={`interactive-hover relative rounded-xl border border-white/10 bg-white/[0.03] p-6 outline-none transition-all duration-300 md:p-7 ${
                    entry.coverSlug ? "cursor-help hover:-translate-y-1 hover:border-cyan-traveler/40 hover:shadow-[0_0_30px_rgba(126,203,255,0.2)]" : ""
                  }`}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-traveler/40 px-3 py-0.5 font-display text-xs uppercase tracking-[0.2em] text-traveler">
                      {entry.era}
                    </span>
                    <span className="font-display text-xs text-mute">§{entry.id}</span>
                    {entry.coverSlug && covers[entry.coverSlug] && (
                      <span className="text-xs text-cyan-traveler/80">
                        Hover / focus for cover art →
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                    {entry.title}
                  </h3>
                  <div className="prose-lore mt-4 text-sm leading-relaxed text-mute md:text-base">
                    {entry.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {entry.consequences && (
                    <div className="consequence-box mt-5 text-sm leading-relaxed text-ink/90">
                      <span className="mb-1 block font-display text-xs uppercase tracking-[0.2em] text-traveler">
                        Consequences
                      </span>
                      {entry.consequences}
                    </div>
                  )}
                </div>
              );

              return (
                <li key={entry.id} className="relative pl-12 md:pl-0">
                  <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                    <div className={idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                      <ScrollReveal>
                        {entry.coverSlug ? (
                          <CoverHoverCard
                            cover={entry.coverSlug}
                            secondaryCover={entry.secondaryCoverSlug}
                          >
                            {cardBody}
                          </CoverHoverCard>
                        ) : (
                          cardBody
                        )}
                      </ScrollReveal>
                    </div>
                  </div>

                  {/* mobile / single column */}
                  <div className="md:hidden">
                    <ScrollReveal>
                      {entry.coverSlug ? (
                        <CoverHoverCard cover={entry.coverSlug} secondaryCover={entry.secondaryCoverSlug}>
                          {cardBody}
                        </CoverHoverCard>
                      ) : (
                        cardBody
                      )}
                    </ScrollReveal>
                  </div>

                  <span className="absolute left-2.5 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-traveler shadow-[0_0_10px_rgba(126,203,255,0.8)] md:left-1/2" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
