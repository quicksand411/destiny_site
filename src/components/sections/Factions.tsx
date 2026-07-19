import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { races, cityFactions, locationsText } from "@/content/factions";

export default function Factions() {
  return (
    <section id="factions" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/bg/orrery-sun-earth.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void-950/85 via-void-950/80 to-void-950" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading kicker="Section 5" title="Races, Factions & Locations" />

        <ScrollReveal className="mb-6 text-center">
          <h3 className="font-display text-lg font-medium tracking-wide text-cyan-traveler">
            Races
          </h3>
        </ScrollReveal>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {races.map((r) => (
            <ScrollReveal key={r.name}>
              <div
                data-hover-target
                tabIndex={0}
                className="interactive-hover h-full rounded-lg border border-white/10 bg-white/[0.03] p-4 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-cyan-traveler/40 hover:shadow-[0_0_20px_rgba(126,203,255,0.2)]"
              >
                <h4 className="font-display text-sm font-medium text-ink">{r.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-mute">{r.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-6 text-center">
          <h3 className="font-display text-lg font-medium tracking-wide text-traveler">
            City Factions (Destiny 1)
          </h3>
        </ScrollReveal>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cityFactions.map((f) => (
            <ScrollReveal key={f.name}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-display text-sm font-medium text-ink">{f.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-mute">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-mute md:text-base">
          <h3 className="mb-4 font-display text-lg font-medium tracking-wide text-ink">
            Locations
          </h3>
          <p>{locationsText}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
