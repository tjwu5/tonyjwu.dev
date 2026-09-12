# Agent notes — tonyjwu.dev

Personal intern / co-op site (software, product, tech consulting). Stack: Vite, React, Tailwind, GitHub Pages (`gh-pages -d dist`).

## Content

Recruiter-facing copy lives in `src/content.js`. Edit that file, not section components. Source of truth is `public/Resume_TonyWu.pdf`. Site facts must stay a subset of the PDF (SFU Esports is the known exception). Do not invent metrics.

| Surface | Source |
| --- | --- |
| Hero, nav, SEO | `profile`, `hero`, `nav`, `seo` |
| Experience and leadership | `experience`, `leadership` |
| Featured / additional work | `featuredProjects`, `additionalProjects` |
| Skills | `skills` |
| Footer | `contact` |

Dated ships, decisions, and work notes belong in `src/log.js` when that module exists — not in `content.js`. Keep summaries to one line and highlights to 2–4 bullets.

## Layout

- `src/pages/Home.jsx` — page composition
- `src/components/` — Nav, Hero, Experience, Projects, Skills, footer
- `src/index.css` — light editorial theme (IBM Plex, `os-muted` / `os-button`)
- `src/pages/NotFound.jsx` — 404

Match existing typography, spacing, and chips. Do not reintroduce the old OS desktop (windows, music, gimmicks).

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```
