import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { glossary } from "@/content/glossary";

export default function Glossary() {
  return (
    <section id="glossary" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading kicker="Section 11" title="Glossary of Terms" />

        <dl className="grid gap-6 sm:grid-cols-2">
          {glossary.map((g) => (
            <ScrollReveal key={g.term}>
              <div className="border-b border-white/10 pb-4">
                <dt className="font-display text-base font-medium text-traveler">{g.term}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-mute">{g.definition}</dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
