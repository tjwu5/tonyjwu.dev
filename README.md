# Tony Wu — Portfolio

Personal site for intern / co-op recruiting: experience, selected work, skills, and resume.

## Tech stack

- React
- Vite
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Content

All recruiter-facing copy lives in [`src/content.js`](src/content.js). Edit that file, not the section components, so the page stays aligned with [`public/Resume_TonyWu.pdf`](public/Resume_TonyWu.pdf).

| Surface | Source |
| --- | --- |
| Hero, nav, SEO | `profile`, `hero`, `nav`, `seo` |
| Experience and leadership | `experience`, `leadership` |
| Featured / additional work | `featuredProjects`, `additionalProjects` |
| Skills | `skills` |
| Footer | `contact` |
| Resume download | `public/Resume_TonyWu.pdf` |

Layout:

- `src/pages/Home.jsx` — page composition
- `src/components/` — Nav, Hero, Experience, Projects, Skills, footer
- `src/index.css` — light editorial theme
- `src/pages/NotFound.jsx` — 404

## Deployment

GitHub Pages:

```bash
npm run build
npm run deploy
```

## License

MIT — see `LICENSE`.
