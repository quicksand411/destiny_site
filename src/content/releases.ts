import { ReleaseRow } from "./types";

// Section 12 — Release Timeline of Games & Expansions

export const releasesIntro = {
  d1: "From 2014 to 2016, Destiny was published by Activision under a 10-year agreement with Bungie signed back in 2010.",
  finalNote:
    "Two further Year of Prophecy expansions — Shattered Cycle and The Alchemist — along with a major mid-cycle update, Shadow & Order, were originally announced for 2026. All of them were cancelled alongside Bungie's decision to end active support for Destiny 2. Destiny: Rising is notable for having grown out of NetEase's $100 million investment in Bungie, made back in 2018.",
};

export const destiny1Releases: ReleaseRow[] = [
  {
    title: "Destiny (base game)",
    date: "September 9, 2014",
    comment: "Debut release on PS3/PS4/Xbox 360/Xbox One",
    coverSlug: "destiny-1-base",
  },
  {
    title: "The Dark Below",
    date: "December 9, 2014",
    comment: "First DLC; story centered on avenging Crota's death",
    coverSlug: "the-dark-below",
  },
  {
    title: "House of Wolves",
    date: "May 19, 2015",
    comment:
      "The hunt for Skolas, the Fallen “Kell of Kells”; introduced Trials of Osiris",
    coverSlug: "house-of-wolves",
  },
  {
    title: "The Taken King",
    date: "September 15, 2015",
    comment:
      "The largest Year 1 expansion; Cayde-6 emerges as a key character; overhauled Ghost voice acting",
    coverSlug: "the-taken-king",
  },
  {
    title: "Rise of Iron",
    date: "September 20, 2016",
    comment:
      "The return of the Iron Lords and the SIVA threat; the final Destiny 1 DLC, exclusive to 8th-generation consoles",
    coverSlug: "rise-of-iron",
  },
];

export const destiny2Releases: ReleaseRow[] = [
  {
    title: "Destiny 2 (base game)",
    date: "September 6, 2017",
    comment: "The “Red War” story; published by Activision",
    coverSlug: "destiny-2-base",
  },
  {
    title: "Curse of Osiris",
    date: "December 5, 2017",
    comment: "The first, smaller Year 1 DLC",
    coverSlug: "curse-of-osiris",
  },
  {
    title: "Warmind",
    date: "May 8, 2018",
    comment: "The return of Rasputin; set on Mars",
    coverSlug: "warmind",
  },
  {
    title: "Forsaken",
    date: "September 4, 2018",
    comment:
      "The death of Cayde-6; introduced Gambit; the biggest story turning point of Year 2, with a major systems rebalance",
    coverSlug: "forsaken",
  },
  {
    title: "Shadowkeep",
    date: "October 1, 2019",
    comment:
      "The Moon's return; the end of the Activision publishing deal (early 2019) and the transition to self-publishing and free-to-play",
    coverSlug: "shadowkeep",
  },
];

export const darknessEraReleases: ReleaseRow[] = [
  {
    title: "Beyond Light",
    date: "November 10, 2020",
    comment:
      "Guardians gain the power of Stasis for the first time; the Deep Stone Crypt opens; delayed from September 22 due to COVID-19",
    coverSlug: "beyond-light",
  },
  {
    title: "The Witch Queen",
    date: "February 22, 2022",
    comment:
      "The death of Savathûn; introduced weapon crafting; released a month after Sony's acquisition of Bungie was announced",
    coverSlug: "the-witch-queen",
  },
  {
    title: "Lightfall",
    date: "February 28, 2023",
    comment: "The unveiling of Neomuna and the Strand subclass; confrontation with Calus",
    coverSlug: "lightfall",
  },
];

export const finalEraReleases: ReleaseRow[] = [
  {
    title: "The Final Shape",
    date: "June 4, 2024",
    comment:
      "The culmination of the decade-long Light and Darkness Saga; the final battle against the Witness; introduced the Prismatic subclass; originally planned for February 27, 2024, delayed by four months following major layoffs at Bungie",
    coverSlug: "the-final-shape",
  },
  {
    title: "Destiny: Rising (mobile spin-off)",
    date: "August 28, 2025",
    comment:
      "A separate free-to-play mobile MMO from NetEase Games (under license from Bungie); an alternate timeline predating the original Destiny; over 5 million pre-registrations",
    coverSlug: "destiny-rising",
  },
  {
    title: "The Edge of Fate",
    date: "July 15, 2025",
    comment:
      "The start of the Year of Prophecy and the Fate Saga; the new Kepler location, first contact with the Nine; a major overhaul of endgame progression and the “Portal” system; the Desert Perpetual raid",
    coverSlug: "the-edge-of-fate",
  },
  {
    title: "Renegades",
    date: "December 2, 2025",
    comment:
      "An expansion made in collaboration with Lucasfilm Games, with a Star Wars–inspired aesthetic; well received by the community",
    coverSlug: "renegades",
  },
  {
    title: "Monument of Triumph (Update 9.7.0)",
    date: "June 9, 2026",
    comment:
      "Officially the final content update for Destiny 2 — the end of active development on the game (see section 15 for more)",
    coverSlug: "monument-of-triumph",
  },
];
