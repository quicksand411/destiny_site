// Section 3/4/5 — Portrait hover-card lookups.
//
// `portraits` maps a stable slug to the actual image asset. Populate this as
// images are sourced into /public/images/portraits/<slug>.<ext>. Any slug
// not present here simply means PortraitHoverCard renders no popover (see
// its graceful-fallback behavior), so it's always safe to ship this file
// with partial coverage.
//
// `nameToPortraitSlug` maps each card's exact literal `name` string (as it
// appears in src/content/characters.ts, classes.ts, and factions.ts) to a
// slug key above. Names are used as literal keys (not auto-slugified)
// because several contain slashes, commas, and special characters (e.g.
// "Uldren Sov / the Crow", "Riven of a Thousand Voices") that wouldn't
// slugify predictably.

export const portraits: Record<string, { src: string; alt: string }> = {
  // Vanguard & Allies
  // "zavala": { src: "/images/portraits/zavala.jpg", alt: "Commander Zavala" },
  // "ikora-rey": { src: "/images/portraits/ikora-rey.jpg", alt: "Ikora Rey" },
  // "cayde-6": { src: "/images/portraits/cayde-6.jpg", alt: "Cayde-6" },
  // "the-speaker": { src: "/images/portraits/the-speaker.jpg", alt: "The Speaker" },
  // "osiris": { src: "/images/portraits/osiris.jpg", alt: "Osiris" },
  // "saint-14": { src: "/images/portraits/saint-14.jpg", alt: "Saint-14" },
  // "eris-morn": { src: "/images/portraits/eris-morn.jpg", alt: "Eris Morn" },
  // "the-drifter": { src: "/images/portraits/the-drifter.jpg", alt: "The Drifter" },
  // "lord-shaxx": { src: "/images/portraits/lord-shaxx.jpg", alt: "Lord Shaxx" },
  // "mara-sov": { src: "/images/portraits/mara-sov.jpg", alt: "Mara Sov" },
  // "uldren-sov-crow": { src: "/images/portraits/uldren-sov-crow.jpg", alt: "Uldren Sov / the Crow" },
  // "amanda-holliday": { src: "/images/portraits/amanda-holliday.jpg", alt: "Amanda Holliday" },
  // "suraya-hawthorne": { src: "/images/portraits/suraya-hawthorne.jpg", alt: "Suraya Hawthorne" },
  // "petra-venj": { src: "/images/portraits/petra-venj.jpg", alt: "Petra Venj" },
  // "mithrax": { src: "/images/portraits/mithrax.jpg", alt: "Mithrax" },
  // "asher-mir": { src: "/images/portraits/asher-mir.jpg", alt: "Asher Mir" },
  // "failsafe": { src: "/images/portraits/failsafe.jpg", alt: "Failsafe" },
  // "sloane": { src: "/images/portraits/sloane.jpg", alt: "Sloane" },
  // "orin": { src: "/images/portraits/orin.jpg", alt: "Orin" },
  // "xur": { src: "/images/portraits/xur.jpg", alt: "Xûr, Agent of the Nine" },

  // Main Antagonists
  // "dominus-ghaul": { src: "/images/portraits/dominus-ghaul.jpg", alt: "Dominus Ghaul" },
  // "oryx": { src: "/images/portraits/oryx.jpg", alt: "Oryx, the Taken King" },
  // "crota": { src: "/images/portraits/crota.jpg", alt: "Crota, Son of Oryx" },
  // "savathun": { src: "/images/portraits/savathun.jpg", alt: "Savathûn, the Witch Queen" },
  // "xivu-arath": { src: "/images/portraits/xivu-arath.jpg", alt: "Xivu Arath, God of War" },
  // "riven": { src: "/images/portraits/riven.jpg", alt: "Riven of a Thousand Voices" },
  // "rhulk": { src: "/images/portraits/rhulk.jpg", alt: "Rhulk, Disciple of the Witness" },
  // "nezarec": { src: "/images/portraits/nezarec.jpg", alt: "Nezarec, Last God of Pain" },
  // "eramis": { src: "/images/portraits/eramis.jpg", alt: "Eramis, Shipstealer" },
  // "emperor-calus": { src: "/images/portraits/emperor-calus.jpg", alt: "Emperor Calus" },
  // "the-witness": { src: "/images/portraits/the-witness.jpg", alt: "The Witness" },
  // "rasputin": { src: "/images/portraits/rasputin.jpg", alt: "Rasputin" },

  // Classes
  // "titan": { src: "/images/portraits/titan.jpg", alt: "Titan" },
  // "hunter": { src: "/images/portraits/hunter.jpg", alt: "Hunter" },
  // "warlock": { src: "/images/portraits/warlock.jpg", alt: "Warlock" },

  // Races
  // "humans": { src: "/images/portraits/humans.jpg", alt: "Humans" },
  // "awoken": { src: "/images/portraits/awoken.jpg", alt: "Awoken" },
  // "exo": { src: "/images/portraits/exo.jpg", alt: "Exo" },
  // "fallen": { src: "/images/portraits/fallen.jpg", alt: "Fallen / Eliksni" },
  // "hive": { src: "/images/portraits/hive.jpg", alt: "Hive" },
  // "vex": { src: "/images/portraits/vex.jpg", alt: "Vex" },
  // "cabal": { src: "/images/portraits/cabal.jpg", alt: "Cabal" },
  // "taken": { src: "/images/portraits/taken.jpg", alt: "Taken" },
  // "scorn": { src: "/images/portraits/scorn.jpg", alt: "Scorn" },
  // "the-nine": { src: "/images/portraits/the-nine.jpg", alt: "The Nine" },
};

export const nameToPortraitSlug: Record<string, string> = {
  // Vanguard & Allies
  "Commander Zavala": "zavala",
  "Ikora Rey": "ikora-rey",
  "Cayde-6": "cayde-6",
  "The Speaker": "the-speaker",
  Osiris: "osiris",
  "Saint-14": "saint-14",
  "Eris Morn": "eris-morn",
  "The Drifter": "the-drifter",
  "Lord Shaxx": "lord-shaxx",
  "Mara Sov": "mara-sov",
  "Uldren Sov / the Crow": "uldren-sov-crow",
  "Amanda Holliday": "amanda-holliday",
  "Suraya Hawthorne": "suraya-hawthorne",
  "Petra Venj": "petra-venj",
  Mithrax: "mithrax",
  "Asher Mir": "asher-mir",
  Failsafe: "failsafe",
  Sloane: "sloane",
  Orin: "orin",
  "Xûr, Agent of the Nine": "xur",

  // Main Antagonists
  "Dominus Ghaul": "dominus-ghaul",
  "Oryx, the Taken King": "oryx",
  "Crota, Son of Oryx": "crota",
  "Savathûn, the Witch Queen": "savathun",
  "Xivu Arath, God of War": "xivu-arath",
  "Riven of a Thousand Voices": "riven",
  "Rhulk, Disciple of the Witness": "rhulk",
  "Nezarec, Last God of Pain": "nezarec",
  "Eramis, Shipstealer": "eramis",
  "Emperor Calus": "emperor-calus",
  "The Witness": "the-witness",
  Rasputin: "rasputin",

  // Classes
  Titan: "titan",
  Hunter: "hunter",
  Warlock: "warlock",

  // Races
  Humans: "humans",
  Awoken: "awoken",
  Exo: "exo",
  "Fallen / Eliksni": "fallen",
  Hive: "hive",
  Vex: "vex",
  Cabal: "cabal",
  Taken: "taken",
  Scorn: "scorn",
  "The Nine": "the-nine",
};

/** Look up the portrait for a card's exact literal name, if one exists. */
export function getPortrait(name: string): { src: string; alt: string } | undefined {
  const slug = nameToPortraitSlug[name];
  if (!slug) return undefined;
  return portraits[slug];
}
