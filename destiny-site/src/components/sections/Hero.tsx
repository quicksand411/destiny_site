import Image from "next/image";
import Starfield from "@/components/Starfield";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <Image
        src="/images/bg/destiny-1-title-card.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void-950/70 via-void-950/60 to-void-950" />
      <Starfield />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-4 font-display text-xs uppercase tracking-[0.4em] text-cyan-traveler md:text-sm">
          A Non-Commercial Fan Tribute
        </p>
        <h1 className="font-display text-6xl font-bold uppercase tracking-[0.25em] text-ink drop-shadow-[0_0_35px_rgba(232,220,192,0.35)] md:text-8xl">
          DESTINY
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-traveler md:text-xl">
          The Complete Encyclopedia of the Universe
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-mute md:text-base">
          Destiny · Destiny 2 · Destiny: Rising
        </p>
        <p className="mt-8 max-w-xl text-sm text-mute/90">
          An unofficial fan-made archive of lore, characters, and history, created after
          Bungie brought active development of Destiny 2 to a close in June 2026.
        </p>

        <a
          href="#what-is-destiny"
          data-hover-target
          className="mt-14 flex flex-col items-center gap-2 text-mute transition-colors hover:text-cyan-traveler"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path
              d="M8 1v18M2 13l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
