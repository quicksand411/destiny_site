import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  exoticWeaponsIntro,
  exoticWeapons,
  exoticArmorIntro,
  exoticArmor,
} from "@/content/gear";

export default function Gear() {
  return (
    <section id="gear" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="Section 9" title="Legendary Gear: Exotic Weapons & Armor" />

        <ScrollReveal className="mx-auto mb-6 max-w-2xl text-center text-sm text-mute">
          {exoticWeaponsIntro}
        </ScrollReveal>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exoticWeapons.map((w) => (
            <ScrollReveal key={w.name}>
              <div
                data-hover-target
                tabIndex={0}
                className="interactive-hover h-full rounded-lg border p-5 outline-none transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(206,174,51,0.35)", background: "rgba(206,174,51,0.05)" }}
              >
                <h4 className="font-display text-base font-medium text-exotic">{w.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mute">{w.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mx-auto mb-6 max-w-2xl text-center text-sm text-mute">
          {exoticArmorIntro}
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exoticArmor.map((a) => (
            <ScrollReveal key={a.name}>
              <div
                data-hover-target
                tabIndex={0}
                className="interactive-hover h-full rounded-lg border p-5 outline-none transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(206,174,51,0.35)", background: "rgba(206,174,51,0.05)" }}
              >
                <h4 className="font-display text-base font-medium text-exotic">{a.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mute">{a.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
