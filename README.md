# earth-modeling-agent-homepage

Homepage for the **[Earth-Space-Modeling-skills](https://github.com/earth-space-agent-skills)** GitHub organization.

Curated, progressive-disclosure skill packages for Earth, planetary, and space system models, packaged for AI agents and human researchers. The homepage is a static-friendly Next.js site that lists every skill repo by domain, links out to the upstream repos, and explains the layout of a skill package.

## Stack

- Next.js 15 (App Router, React 18)
- TypeScript
- No backend, no database, no auth. Pure static-friendly site.

## Local setup

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy

Any Next.js host (Vercel, Railway, Netlify, self-host). Runs `npm run build` then `npm start`. The service listens on `$PORT`.

## Project layout

```
app/
  (public)/             # home page (single-page anchored sections)
  globals.css           # design tokens + shared layout styles
  layout.tsx            # root <html>, theme init, fonts
components/             # Nav, Footer, OrbitalHero, RevealOnScroll
lib/
  skills.ts             # source of truth for skill repo entries
  pillars.ts            # re-export of domain groups for nav/footer
public/
  logo/                 # brand marks
  theme-init.js         # inline FOIT theme script
```

To add or update a skill repo, edit `lib/skills.ts`. Both the home page and the
nav/footer regenerate from that one file.

## Source

The list of skill repos mirrors the README at the [organization profile](https://github.com/earth-space-agent-skills).
