# Prashant — Product Designer Portfolio

A React + Vite portfolio site with a dark/light theme switcher, a hero with an
animated SVG signal-pipeline graphic, real screenshots pulled from the Reqore
Mail Figma case study, a motion/interaction lab with live micro-interactions,
and a full dedicated case study page at `/case-studies/reqore-mail`.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to double check
```

The build output goes to `dist/`.

## Deploy

This is a static site after building — it deploys cleanly to **Vercel**,
**Netlify**, **Cloudflare Pages**, or GitHub Pages.

**Vercel (recommended, fastest):**
```bash
npm i -g vercel
vercel
```
Framework preset: Vite. No extra config needed.

**Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`

> Because this uses client-side routing (`react-router-dom`), if you deploy to
> a static host that isn't Vercel/Netlify (which both handle this
> automatically), add a rewrite rule so `/case-studies/reqore-mail` falls back
> to `index.html`.

## Project structure

```
src/
  components/      Reusable UI pieces (Navbar, Hero, About, CaseStudyCard, etc.)
  pages/           Home.jsx and ReqoreCaseStudy.jsx (routed pages)
  data/            content.js (resume-sourced content) and reqoreContent.js
                   (full case study copy)
  theme/           ThemeContext.jsx — dark/light mode, persisted to localStorage
public/assets/     Real screenshots extracted from your Reqore Mail PDF,
                   your headshot, sketch photos, and a copy of the case
                   study PDF for the "Download full PDF" button
```

## Editing your content

- **Resume / About / Experience / Skills** → `src/data/content.js`
- **Reqore Mail case study copy** → `src/data/reqoreContent.js`
- **Email / LinkedIn / live product links** → top of `src/data/content.js`
  (`profile` object)
- **Second case study card (Whuups)** currently links straight out to
  `whuups.com` since no screenshots were available for it. Swap in real
  screenshots the same way Reqore Mail's were added (drop a JPG into
  `public/assets/` and reference it in `caseStudies` inside `content.js`),
  and flip `internal: true` plus give it a `slug` if you build it into a full
  case study page later.

## Notes

- The PDF in `public/assets/Reqore-Mail-Case-Study.pdf` is your original
  upload, included so the "Download full PDF" button on the case study page
  works out of the box. It's ~19MB — worth compressing before a real deploy if
  load time matters to you.
- Dark mode is the default, matching the brief. The toggle lives in the navbar
  and remembers your choice on return visits.
