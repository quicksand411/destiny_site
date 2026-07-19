import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { funFacts } from "@/content/funFacts";

export default function FunFacts() {
  return (
    <section id="fun-facts" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="Section 18" title="Fun Facts" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {funFacts.map((fact, i) => (
            <ScrollReveal key={i}>
              <div
                data-hover-target
                tabIndex={0}
                className="interactive-hover h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-traveler/40 hover:shadow-[0_0_20px_rgba(232,220,192,0.2)]"
              >
                <p className="text-sm leading-relaxed text-mute">{fact.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
