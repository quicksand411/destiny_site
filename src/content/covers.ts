import { CoverInfo } from "./types";

// Lookup table for expansion / release cover art, keyed by slug.
// Used by <CoverHoverCard> in both the Timeline (section 2) and the
// Release Timeline (section 12).
export const covers: Record<string, CoverInfo> = {
  "destiny-1-base": {
    slug: "destiny-1-base",
    src: "/images/covers/destiny-1-base.jpg",
    title: "Destiny",
    date: "September 9, 2014",
  },
  "the-dark-below": {
    slug: "the-dark-below",
    src: "/images/covers/the-dark-below.jpg",
    title: "The Dark Below",
    date: "December 9, 2014",
  },
  "house-of-wolves": {
    slug: "house-of-wolves",
    src: "/images/covers/house-of-wolves.jpg",
    title: "House of Wolves",
    date: "May 19, 2015",
  },
  "the-taken-king": {
    slug: "the-taken-king",
    src: "/images/covers/the-taken-king.jpg",
    title: "The Taken King",
    date: "September 15, 2015",
  },
  "rise-of-iron": {
    slug: "rise-of-iron",
    src: "/images/covers/rise-of-iron.jpg",
    title: "Rise of Iron",
    date: "September 20, 2016",
  },
  "destiny-2-base": {
    slug: "destiny-2-base",
    src: "/images/covers/destiny-2-base.jpg",
    title: "Destiny 2",
    date: "September 6, 2017",
  },
  "curse-of-osiris": {
    slug: "curse-of-osiris",
    src: "/images/covers/curse-of-osiris.jpg",
    title: "Curse of Osiris",
    date: "December 5, 2017",
  },
  warmind: {
    slug: "warmind",
    src: "/images/covers/warmind.jpg",
    title: "Warmind",
    date: "May 8, 2018",
  },
  forsaken: {
    slug: "forsaken",
    src: "/images/covers/forsaken.jpg",
    title: "Forsaken",
    date: "September 4, 2018",
  },
  shadowkeep: {
    slug: "shadowkeep",
    src: "/images/covers/shadowkeep.jpg",
    title: "Shadowkeep",
    date: "October 1, 2019",
  },
  "beyond-light": {
    slug: "beyond-light",
    src: "/images/covers/beyond-light.jpg",
    title: "Beyond Light",
    date: "November 10, 2020",
  },
  "the-witch-queen": {
    slug: "the-witch-queen",
    src: "/images/covers/the-witch-queen.jpg",
    title: "The Witch Queen",
    date: "February 22, 2022",
  },
  lightfall: {
    slug: "lightfall",
    src: "/images/covers/lightfall.jpg",
    title: "Lightfall",
    date: "February 28, 2023",
  },
  "the-final-shape": {
    slug: "the-final-shape",
    src: "/images/covers/the-final-shape.jpg",
    title: "The Final Shape",
    date: "June 4, 2024",
  },
  "destiny-rising": {
    slug: "destiny-rising",
    src: "/images/covers/destiny-2-artwork.jpg",
    title: "Destiny: Rising",
    date: "August 28, 2025",
  },
  "the-edge-of-fate": {
    slug: "the-edge-of-fate",
    src: "/images/covers/the-edge-of-fate.jpg",
    title: "The Edge of Fate",
    date: "July 15, 2025",
  },
  renegades: {
    slug: "renegades",
    src: "/images/covers/renegades.jpg",
    title: "Renegades",
    date: "December 2, 2025",
  },
  "monument-of-triumph": {
    slug: "monument-of-triumph",
    src: "/images/covers/destiny-2-artwork.jpg",
    title: "Monument of Triumph (Update 9.7.0)",
    date: "June 9, 2026",
  },
};
