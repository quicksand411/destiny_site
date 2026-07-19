import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CharacterCard from "@/components/CharacterCard";
import { guardianGhostIntro, vanguardAllies, mainAntagonists } from "@/content/characters";

export default function Characters() {
  return (
    <section id="characters" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mb-16 flex h-[42vh] min-h-[320px] items-center justify-center overflow-hidden">
        <Image
          src="/images/covers/fireteam-1.jpg"
          alt="A fireteam of Guardians"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/40 via-void-950/70 to-void-950" />
        <div className="relative z-10 text-center">
          <p className="mb-2 font-display text-xs uppercase tracking-[0.3em] text-cyan-traveler">
            Section 3
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-wide text-ink drop-shadow-lg md:text-5xl">
            Characters
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-mute md:text-lg">
          {guardianGhostIntro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mb-6">
          <h3 className="font-display text-xl font-medium tracking-wide text-cyan-traveler">
            The Vanguard &amp; Allies of the Last City
          </h3>
        </ScrollReveal>
        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vanguardAllies.map((card) => (
            <ScrollReveal key={card.name}>
              <CharacterCard card={card} variant="ally" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-6">
          <h3 className="font-display text-xl font-medium tracking-wide text-darkness">
            Main Antagonists
          </h3>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainAntagonists.map((card) => (
            <ScrollReveal key={card.name}>
              <CharacterCard card={card} variant="antagonist" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
