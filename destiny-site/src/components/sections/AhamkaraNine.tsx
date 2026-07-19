import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ahamkaraLore, nineLore } from "@/content/ahamkaraNine";

export default function AhamkaraNine() {
  return (
    <section id="ahamkara-nine" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="Section 7" title="Ahamkara & The Nine" />

        <div className="space-y-16">
          <ScrollReveal>
            <h3 className="mb-4 font-display text-2xl font-medium tracking-wide text-traveler">
              {ahamkaraLore.title}
            </h3>
            <div className="prose-lore text-base leading-relaxed text-mute">
              {ahamkaraLore.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-4 font-display text-2xl font-medium tracking-wide text-cyan-traveler">
              {nineLore.title}
            </h3>
            <div className="prose-lore text-base leading-relaxed text-mute">
              {nineLore.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="blockquote-styled mt-6">{nineLore.quote}</blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
