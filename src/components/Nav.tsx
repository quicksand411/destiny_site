"use client";

import { useEffect, useState } from "react";

const ALL_SECTION_IDS = [
  "hero",
  "what-is-destiny",
  "timeline",
  "characters",
  "classes",
  "factions",
  "deep-lore",
  "ahamkara-nine",
  "raids",
  "gear",
  "gameplay",
  "glossary",
  "releases",
  "soundtrack",
  "behind-the-scenes",
  "bungie-history",
  "reception",
  "community",
  "fun-facts",
  "conclusion",
];

interface NavGroup {
  label: string;
  targetId: string;
  memberIds: string[];
}

const NAV_GROUPS: NavGroup[] = [
  { label: "Lore", targetId: "timeline", memberIds: ["what-is-destiny", "timeline"] },
  { label: "Characters", targetId: "characters", memberIds: ["characters"] },
  { label: "Classes", targetId: "classes", memberIds: ["classes"] },
  {
    label: "World",
    targetId: "factions",
    memberIds: ["factions", "deep-lore", "ahamkara-nine"],
  },
  { label: "Gear", targetId: "raids", memberIds: ["raids", "gear"] },
  {
    label: "Gameplay",
    targetId: "gameplay",
    memberIds: ["gameplay", "glossary", "releases"],
  },
  {
    label: "History",
    targetId: "bungie-history",
    memberIds: ["soundtrack", "behind-the-scenes", "bungie-history"],
  },
  {
    label: "Facts",
    targetId: "fun-facts",
    memberIds: ["reception", "community", "fun-facts", "conclusion"],
  },
];

export default function Nav() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeGroupLabel = NAV_GROUPS.find((g) => g.memberIds.includes(activeId))?.label;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-void-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#hero"
          data-hover-target
          className="flex items-center gap-2 font-display text-sm tracking-[0.2em] text-traveler"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <circle cx="11" cy="11" r="9" stroke="#e8dcc0" strokeWidth="1" fill="none" opacity="0.8" />
            <circle cx="11" cy="11" r="4.5" stroke="#7ecbff" strokeWidth="1" fill="none" opacity="0.8" />
            <circle cx="11" cy="11" r="1.2" fill="#e8dcc0" />
          </svg>
          <span className="hidden sm:inline">DESTINY</span>
        </a>

        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 overflow-x-auto text-[11px] tracking-wide md:gap-x-5 md:text-xs">
          {NAV_GROUPS.map((group) => (
            <li key={group.label}>
              <a
                href={`#${group.targetId}`}
                data-hover-target
                className={`whitespace-nowrap uppercase transition-colors ${
                  activeGroupLabel === group.label
                    ? "text-cyan-traveler"
                    : "text-mute hover:text-ink"
                }`}
              >
                {group.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
