// Shared content types for the Destiny encyclopedia site.

export interface CoverInfo {
  slug: string;
  src: string;
  title: string;
  date: string;
}

export interface TimelineEntry {
  id: string; // e.g. "2.6"
  era: string; // short year/era tag shown on the timeline spine
  title: string;
  paragraphs: string[];
  consequences?: string;
  /** If this entry corresponds to a shipped release, key into the covers map */
  coverSlug?: string;
  /** Secondary cover, used e.g. for 2.20 which covers two releases */
  secondaryCoverSlug?: string;
}

export interface SimpleCard {
  name: string;
  description: string;
}

export interface FactCard {
  text: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface RaidRow {
  raid: string;
  location: string;
  expansion: string;
  boss: string;
}

export interface RaidRow2 {
  raid: string;
  expansionSeason: string;
  boss: string;
}

export interface SeasonYearRow {
  year: string;
  seasons: string;
}

export interface ReleaseRow {
  title: string;
  date: string;
  comment: string;
  coverSlug?: string;
}

export interface SubclassEntry {
  name: string;
  colorKey: "arc" | "solar" | "void" | "stasis" | "strand" | "prismatic";
  colorHex: string;
  description: string;
}
