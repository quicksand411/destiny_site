import { SubclassEntry } from "./types";

// Section 4 — Classes & Subclasses

export const classIntro =
  "Every Guardian chooses one of three classes, and within each class, one of several “subclasses,” which determine abilities, supers, and playstyle.";

export const classes = [
  {
    name: "Titan",
    description:
      "The fireteam's “tank”: heavy armor, barricades, and melee-driven shock abilities.",
  },
  {
    name: "Hunter",
    description:
      "A nimble lone wolf: high mobility, knives, and precision damage.",
  },
  {
    name: "Warlock",
    description:
      "A master of paracausal forces: battlefield control, healing, and elemental damage at range.",
  },
];

export const lightSubclasses: SubclassEntry[] = [
  {
    name: "Arc",
    colorKey: "arc",
    colorHex: "#4fc3f7",
    description:
      "Blue, electrical damage; archetypes include the Titan's Striker and the Hunter's Bladedancer.",
  },
  {
    name: "Solar",
    colorKey: "solar",
    colorHex: "#ff9800",
    description:
      "Orange, fire damage; for example, the Hunter's Gunslinger with the “Golden Gun” super.",
  },
  {
    name: "Void",
    colorKey: "void",
    colorHex: "#b388ff",
    description:
      "Purple, void damage, specializing in debuffs and crowd control.",
  },
];

export const darknessSubclasses: SubclassEntry[] = [
  {
    name: "Stasis",
    colorKey: "stasis",
    colorHex: "#6c7bff",
    description:
      "Indigo, freezing and space control; first introduced in Beyond Light (2020). Example archetype: the Warlock's Shadebinder, who freezes enemies with a staff and shatters them with the Winter's Wrath super.",
  },
  {
    name: "Strand",
    colorKey: "strand",
    colorHex: "#6bff9e",
    description:
      "Green, “strands” of paracausal matter that spawn allied Threadlings; first introduced in Lightfall (2023). Example: the Warlock's Broodweaver, with the Needlestorm super.",
  },
];

export const prismaticSubclass: SubclassEntry = {
  name: "Prismatic",
  colorKey: "prismatic",
  colorHex: "prismatic",
  description:
    "Prismatic is a sixth, “hybrid” subclass added in The Final Shape (2024). It combines the most iconic abilities of all five previous subclasses (Arc, Solar, Void, Stasis, Strand) within a single build. Its key mechanic is Transcendence: by simultaneously filling both a Light meter and a Darkness meter, the Guardian temporarily gains enhanced ability regeneration, damage, and resistance, along with a unique grenade.",
};

export const prismaticIntro =
  "Prismatic — a Synthesis of Light and Darkness";
