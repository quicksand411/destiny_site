import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  seasonsModelText,
  strikesNightfallText,
  crucibleText,
  gambitText,
  seasonsTable,
} from "@/content/gameplay";

export default function Gameplay() {
  return (
    <section id="gameplay" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading kicker="Section 10" title="Gameplay: Seasons, PvP & Gambit" />

        <div className="space-y-14">
          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              The Seasons Model
            </h3>
            <div className="prose-lore text-base leading-relaxed text-mute">
              {seasonsModelText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              Strikes &amp; Nightfall
            </h3>
            <p className="text-base leading-relaxed text-mute">{strikesNightfallText}</p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              The Crucible, Trials of Osiris &amp; Iron Banner
            </h3>
            <div className="prose-lore text-base leading-relaxed text-mute">
              {crucibleText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-3 font-display text-xl font-medium tracking-wide text-traveler">
              Gambit
            </h3>
            <p className="text-base leading-relaxed text-mute">{gambitText}</p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="mb-4 font-display text-xl font-medium tracking-wide text-traveler">
              Seasons &amp; Episodes by Year
            </h3>
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="encyclopedia-table w-full min-w-[500px] text-sm">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Seasons / Episodes</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonsTable.map((row) => (
                    <tr key={row.year} className="text-mute">
                      <td className="whitespace-nowrap text-ink">{row.year}</td>
                      <td>{row.seasons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
