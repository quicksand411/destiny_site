import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  engineSection,
  argSection,
  comicsSection,
  directorsSection,
} from "@/content/behindScenes";

const blocks = [engineSection, argSection, comicsSection, directorsSection];

export default function BehindScenes() {
  return (
    <section id="behind-the-scenes" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="Section 14" title="Behind the Scenes" />

        <div className="space-y-12">
          {blocks.map((block) => (
            <ScrollReveal key={block.title}>
              <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
                {block.title}
              </h3>
              <p className="text-base leading-relaxed text-mute">{block.paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
