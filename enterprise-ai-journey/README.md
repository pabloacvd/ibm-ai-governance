# Governing AI at Enterprise Scale

> From fragmented AI adoption to accountable, transparent and governed AI

An interactive executive narrative explaining AI governance as a problem, a discipline, and an IBM point of view. Built with React, TypeScript, Vite, Carbon Design System, Cytoscape, and Zustand.

---

## Overview

This application is a continuous scrollytelling experience. Users move through eight narrative sections explaining:

1. **AI Is Already Everywhere** — progressive reveal of AI proliferation across an enterprise, from traditional ML through agentic AI
2. **The Ungoverned AI Reality** — six representative AI initiatives with expandable governance gap analysis
3. **Fragmented Governance** — an interactive network diagram showing what each organisational perspective can and cannot see
4. **Consequences of Doing Nothing** — an interactive consequence map with four-dimension impact analysis
5. **What Effective Governance Requires** — the governance lifecycle and the twelve common capabilities required
6. **Governing Different Types of AI** — a three-column comparison of Traditional AI, Generative AI and RAG, and Agentic AI
7. **IBM Point of View** — IBM's governance architecture with verified IBM product mapping
8. **Security as Part of Governance** — a data exposure scenario showing how security contributes to the governance lifecycle

No customer names are used. No IBM products are invented. All IBM capabilities described in Section 7 are verified against official IBM documentation.

---

## Local setup

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Install and run

```bash
cd enterprise-ai-journey
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
  app/
    App.tsx                    — root component, IntersectionObserver, section layout
  components/
    GlobalHeader.tsx           — IBM header with product title
    JumpNav.tsx                — sticky section navigation (desktop only)
    PerspectiveCanvas.tsx      — Cytoscape network for Section 3
    sections/
      Section1Proliferation.tsx
      Section2Initiatives.tsx
      Section3Fragmentation.tsx
      Section4Consequences.tsx
      Section5Requirements.tsx
      Section6AITypes.tsx
      Section7IBMPov.tsx
      Section8Security.tsx
  data/
    proliferation.ts           — enterprise zones and AI node phases
    initiatives.ts             — six AI initiatives with governance gap questions
    perspectives.ts            — nine organisational perspectives
    perspectives-network.ts    — network nodes and edges for Section 3
    consequences.ts            — thirteen consequence nodes with impact mapping
    lifecycle.ts               — twelve lifecycle stages and governance capabilities
    aiTypes.ts                 — three AI type profiles with common and specific controls
    ibmPov.ts                  — verified IBM products and governance architecture items
    securityScenario.ts        — data exposure scenario steps
  models/
    types.ts                   — all TypeScript types
  store/
    narrativeStore.ts          — Zustand state for all interactive elements
  styles/
    app.scss                   — Carbon + custom styles for all sections
```

---

## Technology

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI |
| TypeScript | 5 | Type safety |
| Vite | 5 | Build tool |
| Carbon Design System (`@carbon/react`) | 1.73 | Components and design tokens |
| Cytoscape + cytoscape-dagre | 3.31 | Section 3 network diagram |
| Zustand | 4 | Application state |
| Sass | 1 | Styling |

---

## IBM Product references

Only the following IBM products are referenced in the narrative. All described capabilities are verified against official IBM documentation:

- **IBM watsonx.governance** — primary AI governance platform (Model Management + Risk and Compliance)
- **IBM OpenPages** — Governance console with Model Risk Governance, Operational Risk Management, and Regulatory Compliance Management solutions
- **IBM Knowledge Catalog** — enterprise data catalog and governed data asset management
- **IBM Manta Data Lineage** — automated data lineage for AI data pipelines
- **IBM Instana Observability** — generative AI and agentic AI observability
- **IBM watsonx.ai** — model development and deployment platform
