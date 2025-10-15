# GitHub Copilot Repo-wide Instructions

Project: Octodex Ticker (Spark + Vite + TypeScript + Tailwind)

## Build & Run
- Install: `npm ci`
- Dev: `npm run dev`
- Typecheck: `npm run typecheck` (if configured)
- Lint: `npm run lint` (if configured)
- Prod build: `npm run build` (Vite ⇒ `./dist`)

## Pull Requests
- If you touch the scroll loop, state expected FPS and paste a short perf note.
- Verify no cumulative layout shift (CLS): images must have width/height.
- Confirm widget HTMLs still run via `file://` (no dev server required).
- Include before/after GIF if UI motion or timing changed.

## Docs Kept Current
- `README.md` (Quick Start, speed controls)
- `WIDGET-INSTRUCTIONS.md` (desktop widget setup, keep-on-top tips)

## Style & Perf
- Prefer `transform: translate3d(...)` + `will-change: transform`.
- Batch DOM reads/writes; avoid forced reflow inside the rAF loop.
- Avoid unnecessary external fonts/scripts in widgets.

## Accessibility
- Provide keyboard mechanism to pause motion.
- Ensure focus states are visible and not auto-scrolling away from focus.
