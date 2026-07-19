import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  conclusionParagraph,
  conclusionDateNote,
  footerDisclaimer,
  footerClosingLine,
} from "@/content/conclusion";

export default function Conclusion() {
  return (
    <section id="conclusion" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/bg/traveler-awakening.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-950/80 to-void-950" />

      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <SectionHeading kicker="Section 19" title="Conclusion" />

        <ScrollReveal className="text-base leading-relaxed text-mute md:text-lg">
          <p>{conclusionParagraph}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-8 font-display text-xs uppercase tracking-[0.3em] text-cyan-traveler">
          {conclusionDateNote}
        </ScrollReveal>

        <div className="mt-20 border-t border-white/10 pt-10">
          <ScrollReveal className="mx-auto max-w-xl text-xs leading-relaxed text-mute/80">
            {footerDisclaimer}
          </ScrollReveal>
          <ScrollReveal className="mt-6 font-display text-sm italic tracking-wide text-traveler">
            {footerClosingLine}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
