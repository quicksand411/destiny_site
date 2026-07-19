import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { soundtrackParagraphs, soundtrackQuote } from "@/content/soundtrack";

export default function Soundtrack() {
  return (
    <section id="soundtrack" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="Section 13" title="Soundtrack & Composers" />

        <ScrollReveal className="prose-lore text-base leading-relaxed text-mute">
          {soundtrackParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="blockquote-styled mt-6">{soundtrackQuote}</blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
