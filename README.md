# Karthik N Kulal — Developer Portfolio

A modern, premium, production-ready personal portfolio for **Karthik N Kulal**, a Full-Stack Software Engineer specializing in **.NET Core, C#, Web APIs, MS SQL Server and React**.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**, with dark/light mode, smooth animations, glassmorphism, full SEO, accessibility (WCAG), lazy-loading and code-splitting.

---

## ✨ Features

- ⚡️ **Vite + React 18 + TypeScript** — fast, type-safe, modern tooling
- 🎨 **Tailwind CSS** — custom design system, glassmorphism, responsive (mobile / tablet / desktop)
- 🌗 **Dark / Light mode** — system-aware with persisted preference
- 🎞 **Framer Motion** — page transitions, scroll reveals, hover effects, section entrances
- 🧭 **React Router** — clean routing with a custom 404 page
- ♿ **Accessible** — semantic HTML, skip-link, focus rings, ARIA, reduced-motion support
- 🔍 **SEO** — meta tags, Open Graph, Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`
- 🚀 **Performance** — lazy-loaded sections, code splitting, manual vendor chunks
- 📨 **Contact form** — client-side validation + **Formspree** integration (graceful `mailto` fallback)
- 📄 **Resume download** — one-click download of the bundled résumé
- ☁️ **Deploy-ready** — Vercel, Netlify and GitHub Pages configs included

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf              # Downloadable résumé
│   ├── favicon.svg
│   ├── og-image.svg            # Social share image
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── 404.html                # SPA fallback for GitHub Pages
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Layout
│   │   ├── sections/           # Hero, About, Skills, Experience, Projects, …
│   │   ├── seo/                # SEO (react-helmet-async)
│   │   └── ui/                 # Button, Section, Badge, ThemeToggle, …
│   ├── context/                # ThemeContext (dark/light)
│   ├── data/                   # All content (personal, skills, experience, …)
│   ├── hooks/                  # useScrollSpy, useMediaQuery, useScrollProgress
│   ├── pages/                  # HomePage, NotFoundPage
│   ├── types/                  # Shared TypeScript types
│   ├── utils/                  # cn(), animation variants
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── .github/workflows/deploy.yml
```

---

## 🚀 Getting Started

> Requires **Node.js 18+** (Node 20 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create a production build (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

Other scripts:

```bash
npm run lint        # Lint the codebase
npm run type-check  # Type-check without emitting
npm run format      # Format with Prettier
```

---

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in values. All client-exposed variables must be prefixed with `VITE_`.

| Variable             | Description                                                                 | Default                      |
| -------------------- | --------------------------------------------------------------------------- | ---------------------------- |
| `VITE_FORMSPREE_ID`  | Formspree form ID for the contact form. Create one at https://formspree.io. | _(falls back to `mailto:`)_  |
| `VITE_BASE`          | Public base path. `/` for Vercel/Netlify; `/<repo>/` for GitHub Pages.      | `/`                          |
| `VITE_SITE_URL`      | Canonical site URL used in SEO/OG tags.                                      | `https://karthikkulal.dev`   |

If `VITE_FORMSPREE_ID` is not set, the contact form gracefully opens the visitor's email client instead of failing.

---

## ✏️ Editing Content

All site content lives in **`src/data/`** — no component edits required:

| File                          | Controls                                  |
| ----------------------------- | ----------------------------------------- |
| `data/personal.ts`            | Name, role, summary, socials, languages   |
| `data/skills.ts`              | Skill categories & proficiency levels     |
| `data/experience.ts`          | Work timeline                             |
| `data/projects.ts`            | Project cards (links are placeholders)    |
| `data/certifications.ts`      | Certifications                            |
| `data/education.ts`           | Education                                 |
| `data/navigation.ts`          | Navbar items                              |

### ⚠️ Placeholders to update

A few details were not available (or were masked) in the source résumé and are clearly marked in the data files:

- **Phone number** — masked in the résumé (`src/data/personal.ts`).
- **GitHub URL** — not present in the résumé (`src/data/personal.ts`, `src/data/projects.ts`).
- **Project repo / live-demo links** — placeholders in `src/data/projects.ts`.
- **Some dates** (employment start/end, graduation years) — inferred where masked.

Search the codebase for `PLACEHOLDER` / `NOTE:` comments to find every spot.

Replace `public/resume.pdf` with your latest résumé to update the download.

---

## 🌐 Deployment

The app builds to a fully static `dist/` folder and can be hosted anywhere.

### 1) Vercel (recommended)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite. Defaults are correct (`vercel.json` is included):
   - Build command: `npm run build`
   - Output directory: `dist`
4. (Optional) Add `VITE_FORMSPREE_ID` and `VITE_SITE_URL` under **Settings → Environment Variables**.
5. Deploy. SPA rewrites are already configured.

### 2) Netlify

1. Push the repo to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Settings are read from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. (Optional) Add environment variables under **Site settings → Environment variables**.
5. Deploy. SPA redirects are already configured.

### 3) GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

1. Push the repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. For a **project page** (`https://<user>.github.io/<repo>/`), add a repository **Variable** (Settings → Secrets and variables → Actions → Variables):
   - `VITE_BASE` = `/<repo>/`  ← include leading & trailing slashes
   - (Optional) `VITE_SITE_URL` = your Pages URL
   - (Optional secret) `VITE_FORMSPREE_ID`
   For a **user/org page** or a **custom domain**, leave `VITE_BASE` as `/`.
4. Push to `main` — the action builds and deploys automatically.

> Deep-link refreshes on GitHub Pages are handled by `public/404.html`.

---

## 📊 Performance & SEO

- Below-the-fold sections are **lazy-loaded** via `React.lazy` + `Suspense`.
- Vendor code is split into separate chunks (`react`, `framer-motion`, `react-icons`).
- Fonts are preconnected and loaded with `display=swap`.
- Targets a **Lighthouse score above 90** across Performance, Accessibility, Best Practices and SEO.

To audit: run `npm run build && npm run preview`, then run Lighthouse against the preview URL.

---

## 🛠 Tech Stack

| Area        | Technology                                  |
| ----------- | ------------------------------------------- |
| Framework   | React 18, TypeScript                        |
| Build       | Vite 5                                       |
| Styling     | Tailwind CSS 3, custom design tokens         |
| Animation   | Framer Motion 11                             |
| Routing     | React Router 6                               |
| SEO         | react-helmet-async, JSON-LD                  |
| Icons       | react-icons                                  |
| Forms       | Formspree (with `mailto` fallback)           |

---

## 📄 License

MIT © Karthik N Kulal
