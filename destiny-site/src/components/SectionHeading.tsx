import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`mx-auto mb-12 max-w-3xl px-4 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {kicker && (
        <p className="mb-2 font-display text-xs uppercase tracking-[0.3em] text-cyan-traveler">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-mute md:text-lg">{subtitle}</p>}
    </ScrollReveal>
  );
}
