import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  lootCaveSection,
  worldsFirstSection,
  raidCheeseSection,
  loreCommunitySection,
} from "@/content/community";

const blocks = [lootCaveSection, worldsFirstSection, raidCheeseSection, loreCommunitySection];

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading kicker="Section 17" title="Community & Culture" />

        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <ScrollReveal key={block.title}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-3 font-display text-lg font-medium tracking-wide text-traveler">
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed text-mute">{block.paragraph}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
