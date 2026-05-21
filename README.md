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

### Vercel auto-deploy

This repo is configured for Vercel Git deployments:

- Framework preset: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Root directory: repository root (`.`)

After the GitHub repo is connected to the Vercel project, Vercel will deploy
automatically from Git:

- pushes to `main` create production deployments
- pull requests and non-production branches create preview deployments

No application environment variables are required for the current static site.
The local `.vercel/` directory is intentionally ignored; Vercel stores the
project link in its own dashboard and builds from the committed repo contents.

For manual verification from the project root:

```bash
npm ci
npm run build
```

Any Next.js host (Vercel, Railway, Netlify, self-host) can also run `npm run build` then `npm start`. The service listens on `$PORT`.

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
