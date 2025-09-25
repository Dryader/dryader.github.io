# Portfolio

A tiny React + Vite + Tailwind (v4) single-page site showcasing projects, experience, and skills.

## Quick start

1) Install dependencies

```
npm install
```

2) Start the dev server

```
npm run dev
```

3) Build for production

```
npm run build
```

4) Preview the production build

```
npm run preview
```

## Tech
- React 19
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`

## Notes
- Styling uses Tailwind utilities only; `src/index.css` just imports Tailwind.
- Internal sections are anchored (e.g., #projects, #skills, etc.). Some IDEs may warn about anchors statically; they resolve at runtime.
- All content is inline in `src/App.jsx` to keep the project self-contained. No external JSON files or assets are needed.
