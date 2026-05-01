# Vishal Gaur — Portfolio

Personal portfolio site. Built with Next.js 14, TypeScript, and Tailwind. Designed as an editorial "build log" — refined typography, monospace accents, asymmetric grid.

## Stack

- **Next.js 14** (App Router, RSC by default — zero client JS on most routes)
- **TypeScript**
- **Tailwind CSS** with a custom paper/ink palette
- **Fraunces** (display), **Geist** (sans), **JetBrains Mono** (code) — loaded via `next/font`

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F4F1EC` | Page background |
| `ink` | `#1A1815` | Primary text |
| `ink-2` | `#3A352D` | Body text |
| `muted` | `#7A7163` | Secondary text |
| `rule` | `#D9D2C5` | Borders & dividers |
| `accent` | `#B85C20` | Single accent (links, current role marker) |

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Edit content

All copy lives in **`lib/content.ts`** — single source of truth. Update:

- `profile` — name, title, links, hero intro
- `domains` — the three "What I work on" cards
- `roles` — experience timeline + case studies (auto-generates `/work/[slug]` pages)
- `projects` — the projects grid
- `notes` — writing/blog (currently empty, hides the section)

Adding a new role to `roles[]` automatically:
1. Adds it to the homepage timeline
2. Generates a static case-study page at `/work/[slug]`
3. Wires up prev/next navigation

## Deploy

Push to GitHub and import to Vercel — zero config. The `images.remotePatterns` in `next.config.js` already allow GitHub-hosted screenshots if you want to embed them.

## Content TODO

- [ ] Replace `public/Resume_Vishal_Gaur.pdf` with the updated resume
- [ ] Add Shipsy bullets that reflect actual shipped work (offline sync, GPS tuning, KMP modules)
- [ ] Write 2 short posts to populate the `notes` section (Compose gotcha + KMP setup)
- [ ] Add a screenshot or device mockup to the hero (optional)

## Why this design

See the design rationale in the chat thread — short version: editorial layout signals seniority better than a gradient hero, and the single-source-of-truth content file makes the site cheap to maintain across job changes.
