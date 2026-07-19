import { SimpleCard } from "@/content/types";

interface CharacterCardProps {
  card: SimpleCard;
  variant: "ally" | "antagonist";
}

export default function CharacterCard({ card, variant }: CharacterCardProps) {
  const glow =
    variant === "ally"
      ? "hover:shadow-[0_0_28px_rgba(126,203,255,0.35)] hover:border-cyan-traveler/50"
      : "hover:shadow-[0_0_28px_rgba(91,58,134,0.55)] hover:border-darkness/60";

  return (
    <div
      data-hover-target
      tabIndex={0}
      className={`interactive-hover group rounded-lg border border-white/10 bg-white/[0.03] p-5 outline-none transition-all duration-300 hover:-translate-y-1 ${glow}`}
    >
      <h3 className="font-display text-base font-medium tracking-wide text-ink">
        {card.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">{card.description}</p>
    </div>
  );
}
