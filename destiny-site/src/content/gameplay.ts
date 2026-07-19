import { SeasonYearRow } from "./types";

// Section 10 — Gameplay: Seasons, PvP & Gambit

export const seasonsModelText = [
  "Since 2018, Destiny 2 has run on a “Seasons” model — three-to-four-month content cycles featuring a Season Pass, seasonal storylines, and unique activities.",
  "Each season typically introduced a new storyline (for example, Season of the Splicer centered on the alliance with Mithrax and his splicer Fallen, Season of the Lost on Mara Sov's return, and Season of the Deep on Cabal history on Titan), a new activity, and a seasonal artifact with unique modifiers.",
];

export const strikesNightfallText =
  "A Strike is a short (10–15 minute) three-player cooperative mission with matchmaking, usually ending in a fight against a mini-boss. Nightfall is a harder weekly version of a strike with modifiers and increased rewards; over the years the format included Weekly Heroic, The Ordeal, and Grandmaster Nightfall — the pinnacle of PvE difficulty outside of raids. With the release of The Edge of Fate (2025), the classic Vanguard Ops playlist was replaced by Fireteam Ops within the new “Portal” system, and the weekly Nightfall rotation gave way to a daily one.";

export const crucibleText = [
  "The Crucible is the game's core PvP mode, supporting 3v3 and 6v6 formats. Trials of Osiris is a prestigious tournament-style 3v3 mode with no matchmaking and elimination on loss, first introduced in House of Wolves (2015) under the curation of the mysterious Disciples of Osiris, and later curated in Destiny 2 by Saint-14. It runs on weekends and is historically considered the pinnacle of the series' competitive PvP.",
  "Iron Banner is a monthly 6v6 event held in honor of the fallen Iron Lords, curated by Lord Shaxx; unlike Trials, a character's Power/Light level matters here, making the event more casual and team-oriented.",
];

export const gambitText =
  "Gambit is a hybrid PvPvE mode introduced in Forsaken (2018): two four-player teams simultaneously clear identical arenas of AI enemies, collecting “Motes” to summon Primeval bosses, while also having the option to briefly invade the opposing team's arena. The mode is curated by the Drifter himself.";

export const seasonsTable: SeasonYearRow[] = [
  { year: "Y1 (Forsaken, 2018–2019)", seasons: "Outlaw · Forge · Drifter · Opulence" },
  { year: "Y2 (Shadowkeep, 2019–2020)", seasons: "Undying · Dawn · Worthy · Arrivals" },
  { year: "Y3 (Beyond Light, 2020–2021)", seasons: "Hunt · Chosen · Splicer · Lost" },
  { year: "Y4 (Witch Queen, 2022)", seasons: "Risen · Haunted · Plunder · Seraph" },
  {
    year: "Y5 (Lightfall, 2023)",
    seasons: "Defiance · Deep · Witch · Wish (+ Into the Light)",
  },
  {
    year: "Y6 (The Final Shape, 2024–2025)",
    seasons: "Episode: Echoes · Episode: Revenant · Episode: Heresy",
  },
  {
    year: "Year of Prophecy (2025–2026)",
    seasons: "The Edge of Fate · Renegades · Monument of Triumph",
  },
];
