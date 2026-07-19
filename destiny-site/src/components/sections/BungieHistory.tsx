import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  independenceSection,
  sonySection,
  layoffsSection,
  currentStateSection,
} from "@/content/bungieHistory";

export default function BungieHistory() {
  return (
    <section id="bungie-history" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          kicker="Section 15"
          title="Bungie History & Recent News (2019–2026)"
        />

        <div className="space-y-12">
          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              {independenceSection.title}
            </h3>
            <p className="text-base leading-relaxed text-mute">
              {independenceSection.paragraph}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              {sonySection.title}
            </h3>
            <p className="text-base leading-relaxed text-mute">{sonySection.paragraph}</p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-darkness">
              {layoffsSection.title}
            </h3>
            <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-mute">
              {layoffsSection.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-mute">{layoffsSection.paragraph}</p>
            <blockquote className="blockquote-somber mt-5">{layoffsSection.quote}</blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              {currentStateSection.title}
            </h3>
            <div className="prose-lore text-base leading-relaxed text-mute">
              {currentStateSection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
