import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import OrreryDivider from "@/components/OrreryDivider";
import { hiveLore, vexLore, fallenLore, cabalLore } from "@/content/deepLore";

const blocks = [hiveLore, vexLore, fallenLore, cabalLore];

export default function DeepLore() {
  return (
    <section id="deep-lore" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="Section 6" title="Deep Lore: Hive, Vex, Fallen, Cabal" />

        <div className="space-y-16">
          {blocks.map((block, i) => (
            <ScrollReveal key={block.title}>
              <h3 className="mb-4 font-display text-2xl font-medium tracking-wide text-traveler">
                {block.title}
              </h3>
              <div className="prose-lore text-base leading-relaxed text-mute">
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              {i < blocks.length - 1 && <OrreryDivider />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
