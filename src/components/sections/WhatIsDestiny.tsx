import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { whatIsDestiny } from "@/content/whatIsDestiny";

export default function WhatIsDestiny() {
  return (
    <section id="what-is-destiny" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading kicker="Section 1" title="What Is Destiny" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <ScrollReveal className="space-y-5 text-base leading-relaxed text-mute md:text-lg">
            {whatIsDestiny.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={150} className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/images/bg/destiny-wordmark-cream.jpg"
              alt="Destiny wordmark and Traveler emblem"
              fill
              className="object-cover"
              sizes="320px"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
