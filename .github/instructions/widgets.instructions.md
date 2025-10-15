---
name: desktop-widgets
applyTo:
  paths:
    - "widget-horizontal.html"
    - "widget-vertical.html"
instructions:
  - Must run from `file://` and `https://` without bundling or external CDNs.
  - No new external fonts/scripts; keep widget HTMLs single-purpose.
  - Update `WIDGET-INSTRUCTIONS.md` with step-by-step for macOS desktop:
    - open file directly
    - optional “keep on top” utilities
    - scaling and display tips
  - If changing asset paths, provide a quick validation checklist for broken links.
