# Destiny — The Complete Encyclopedia of the Universe

A single-page, long-scrolling fan tribute site covering the complete lore, timeline,
characters, races, gear, gameplay systems, release history, soundtrack, and corporate
history of Bungie's Destiny and Destiny 2, presented in an atmospheric cosmic /
"Traveler" visual style. Built with Next.js 14 (App Router), TypeScript, and Tailwind
CSS as a fully static site — no backend, no database, no forms.

This is an **unofficial, non-commercial fan project**. Destiny, Bungie, and all related
names, characters, and imagery are trademarks of Bungie, Inc. This site has no
affiliation with or endorsement by Bungie and is not for sale or commercial use.

## Project structure

- `src/app/` — root layout, global styles, and the single page (`page.tsx`) that
  assembles all 20 sections in order.
- `src/components/sections/` — one component per encyclopedia section (Hero, Timeline,
  Characters, Classes, etc.).
- `src/components/` — shared UI: `CustomCursor`, `CoverHoverCard`, `Nav`, `Starfield`,
  `OrreryDivider`, `ScrollReveal`, `SectionHeading`, `CharacterCard`, `SubclassChip`.
- `src/content/` — all encyclopedia text as structured TypeScript data, translated to
  English, kept separate from the presentation components.
- `src/lib/` — small hooks (`useInView`, `usePrefersReducedMotion`).
- `public/images/covers/` — expansion/release cover art.
- `public/images/bg/` — atmospheric cosmic backgrounds.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

**Option A — CLI:**

```bash
npx vercel
```

Follow the prompts (link or create a project, accept the defaults). Run `npx vercel --prod`
to deploy to production once you're happy with a preview.

**Option B — Git + Vercel dashboard:**

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to https://vercel.com/new and import that repository.
3. Framework Preset: "Next.js" is auto-detected — leave defaults as-is.
4. No environment variables are required.
5. Click **Deploy**.

## Notes on this build environment

This project was authored and build-verified inside a sandboxed Linux container. That
sandbox has two quirks that do **not** apply to normal machines or to Vercel's build
infrastructure, and require no action from you:

- The container's native `@next/swc` binary for `linux-arm64-gnu` crashes on load in
  that specific sandbox, so the WASM fallback (`@next/swc-wasm-nodejs`) was used to
  verify the build there instead. On a normal machine or on Vercel, Next.js will use
  its native SWC binary automatically and build faster — nothing to configure.
- `next/font/google` (Space Grotesk / Inter) could not be fetched from that sandbox's
  restricted network, so `src/app/layout.tsx` currently uses system font stacks
  defined in `src/app/globals.css` (`--font-display` / `--font-body`) instead. If you
  have normal network access, you can swap back to `next/font/google` for pixel-perfect
  Space Grotesk / Inter rendering — the Tailwind config already wires up `font-display`
  and `font-body` utility classes to whichever font variables you provide.
