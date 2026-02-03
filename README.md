# Tony Wu — Portfolio

Personal portfolio website showcasing my projects, experience, and contact information.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Node.js / npm

## Local Development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components` — UI components and section modules
- `src/pages` — page-level layout and routing
- `src/assets` — images and design assets
- `public` — static files (resume, audio, etc.)
- `src/index.css` — global styles and theme tokens

## Customization

- Projects list: `src/components/ExperienceSection.jsx`
- About content: `src/components/AboutSection.jsx`
- Skills content: `src/components/SkillsSection.jsx`
- Contact details: `src/components/ContactSection.jsx`
- Resume link: `src/pages/Home.jsx` (downloads from `public/Resume_TonyWu.pdf`)
- Theme + OS styling: `src/index.css`
- Background audio: `public/audio/bg.mp3`

## Deployment

This repo includes a deploy script for GitHub Pages:

```bash
npm run build
npm run deploy
```

## License

MIT — see `LICENSE`.

## Design (Optional)

Wireframe references:

- `src/assets/wireframes/hero.jpg`
- `src/assets/wireframes/about.jpg`
- `src/assets/wireframes/skills.jpg`
- `src/assets/wireframes/experiences.jpg`
- `src/assets/wireframes/contact.jpg`
