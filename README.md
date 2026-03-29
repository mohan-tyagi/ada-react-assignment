# Ada Psychiatry — React homepage

Marketing homepage for **Ada Psychiatry**, built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4**. The UI follows a black / gold / cream design system with section-based layout (hero, services, testimonials, FAQ, etc.).

---

## Run locally

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+ (comes with Node)

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Vite prints a local URL (usually **http://localhost:5173**). Open it in your browser. Edit files under `src/`; changes reload via HMR.

### Production build (optional)

```bash
npm run build
```

Output is written to `dist/`. To serve that build locally:

```bash
npm run preview
```

---

## npm scripts

| Script            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Development server with hot reload               |
| `npm run build`   | Typecheck (`tsc -b`) + Vite production build     |
| `npm run preview` | Serve the `dist/` folder locally                  |
| `npm run lint`    | ESLint over the project                          |
| `npm run format`  | Prettier (with Tailwind class sorting)           |

---

## How the project is organized

### App flow

1. **`src/main.tsx`** — Mounts the root React tree.
2. **`src/App.tsx`** — Wraps the page in **`Layout`** and renders **`HomePage`**.
3. **`src/components/Layout.tsx`** — Shell: **Header**, **`<main id="main">`**, **Footer**.
4. **`src/pages/HomePage.tsx`** — Composes all homepage sections in order (hero, founder, treatment focus, quote banner, services, etc.).

### Main folders

| Path                    | Role |
| ----------------------- | ---- |
| `src/components/`       | Shared UI: **Header**, **Footer**, **Layout**, **GoldButton**, `logo.png` usage in header |
| `src/components/home/`  | Homepage-only sections (hero, services, FAQ, …); re-exported from `home/index.ts` |
| `src/content/`          | Data and copy: **`images.ts`** (URLs, `heroSlides`), **`treatmentFocus.ts`** |
| `src/assets/`           | Static images imported by Vite (e.g. `homeImages/`, `logo.png`) |
| `src/figma-tokens.css`  | CSS variables for colors / fonts; imported in **`src/index.css`** with Tailwind `@theme` |

### Styling

- **Tailwind v4** via **`@tailwindcss/vite`** (`vite.config` plugin).
- Design tokens live in **`figma-tokens.css`** and are mapped in **`index.css`** (`@theme`) so utilities like `bg-cream`, `text-gold-mid`, etc. stay consistent.

### Icons

- **`lucide-react`** is used for vector icons in sections such as **Services** and **How it works**.

---

## Editor note

VS Code may flag Tailwind’s `@theme` in CSS as an unknown at-rule. The repo includes **`.vscode/settings.json`** so CSS lint ignores that rule.

---

## License / usage

Private assignment project (`"private": true` in `package.json`).
