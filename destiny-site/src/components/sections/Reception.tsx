import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { receptionParagraphs } from "@/content/reception";

export default function Reception() {
  return (
    <section id="reception" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="Section 16" title="Reception, Stats & Awards" />

        <ScrollReveal className="prose-lore text-base leading-relaxed text-mute">
          {receptionParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
