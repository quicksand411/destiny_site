import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SubclassChip from "@/components/SubclassChip";
import {
  classIntro,
  classes,
  lightSubclasses,
  darknessSubclasses,
  prismaticSubclass,
} from "@/content/classes";

export default function Classes() {
  return (
    <section id="classes" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/bg/orrery-earth-moon-indigo.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void-950/85 via-void-950/80 to-void-950" />
      <div className="relative mx-auto max-w-5xl px-4">
        <SectionHeading kicker="Section 4" title="Classes & Subclasses" subtitle={classIntro} />

        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {classes.map((c) => (
            <ScrollReveal key={c.name}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-xl font-semibold tracking-wide text-traveler">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{c.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-6 text-center">
          <h3 className="font-display text-lg font-medium tracking-wide text-ink">
            Subclasses of the Light
          </h3>
        </ScrollReveal>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {lightSubclasses.map((s) => (
            <SubclassChip key={s.name} subclass={s} />
          ))}
        </div>

        <ScrollReveal className="mb-6 text-center">
          <h3 className="font-display text-lg font-medium tracking-wide text-darkness">
            Subclasses of the Darkness
          </h3>
        </ScrollReveal>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {darknessSubclasses.map((s) => (
            <SubclassChip key={s.name} subclass={s} />
          ))}
        </div>

        <ScrollReveal className="mb-6 text-center">
          <h3 className="font-display text-lg font-medium tracking-wide text-ink">
            Prismatic — A Synthesis of Light and Darkness
          </h3>
        </ScrollReveal>
        <div className="flex justify-center">
          <ScrollReveal>
            <SubclassChip subclass={prismaticSubclass} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
