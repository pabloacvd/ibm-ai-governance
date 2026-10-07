# Governing AI at Enterprise Scale

An interactive, scrollytelling executive narrative on governing AI at enterprise scale — built as a single-page web experience and published via GitHub Pages.

## Live page

**[pablo-acevedo-areco.github.io/aigovernance](https://pablo-acevedo-areco.github.io/aigovernance)**

## What this is

A visual storytelling experience designed for executive audiences exploring the challenges and opportunities of AI governance in large organisations. The narrative walks through five acts:

| Section | Title | What it covers |
|---|---|---|
| 1 | **The Problem** | The rapid, fragmented proliferation of AI across the enterprise and why it creates risk |
| 2 | **The Gap** | The governance gap — why current tooling and processes fail to keep pace with AI adoption |
| 3 | **Why It Matters** | Regulatory pressure, audit exposure, and the operational consequences of ungoverned AI |
| 4 | **IBM Solution** | IBM's point of view on an integrated, lifecycle-aware AI governance architecture |
| 5 | **Call to Action** | Key takeaways and the path forward for enterprise AI governance |

## Tech stack

- **React + TypeScript** — component-driven UI
- **Vite** — build tooling and local dev server
- **Zustand** — lightweight state management for scroll-driven section tracking
- **SCSS** — styling with IBM Carbon design language influence
- **GitHub Pages** — static hosting via the `gh-pages` deployment

## Project structure

```
enterprise-ai-journey/    # Source code (React app)
  src/
    components/v2/        # Active section components (v2 narrative)
    data/                 # Content data — stats, charts, narrative copy
    store/                # Zustand stores for scroll state
    styles/               # SCSS stylesheets
assets/                   # Compiled JS + CSS bundles (served by GH Pages)
index.html                # Entry point for GitHub Pages
```

## Local development

```bash
cd enterprise-ai-journey
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy

```bash
cd enterprise-ai-journey
npm run build
# copy dist/ contents to repo root and push to main
```

GitHub Pages is configured to serve from the repository root of the `main` branch.

