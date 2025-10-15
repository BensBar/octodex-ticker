---
name: web-app
applyTo:
  paths:
    - "src/**"
    - "index.html"
instructions:
  - Keep speed/controls documented in README’s Quick Start on change.
  - Avoid layout thrash: measure once, write once; use rAF for mutations.
  - When adding Octocats, pre-size images and verify no CLS in DevTools.
  - Prefer small, targeted diffs with file/line references and brief context.
