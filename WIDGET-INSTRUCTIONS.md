# Octocat Ticker Widget Instructions

## Overview
You now have standalone widget files that can be used as desktop widgets by opening them in any modern browser.

## Widget Files
- **widget-horizontal.html** - Horizontal scrolling ticker (for top/bottom of screen)
- **widget-vertical.html** - Vertical scrolling ticker (for left/right side of screen)

## How to Use as a Desktop Widget

### Option 1: Browser Window (Easiest)
1. Open the widget HTML file in your browser (Chrome, Firefox, Edge, Safari, etc.)
2. Press **F11** for fullscreen mode, or manually resize the window to your preferred size
3. Position the window where you want it (top, bottom, or side of screen)
4. Keep the window on top using your OS features (see below)

### Option 2: Browser App Mode (Chrome/Edge - Best Experience)
Create a standalone widget window without browser chrome:

**On Windows/Linux:**
```bash
chrome --app=file:///path/to/widget-horizontal.html --window-size=800,100 --window-position=0,0
```

**On Mac:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --app=file:///path/to/widget-horizontal.html --window-size=800,100 --window-position=0,0
```

Replace `/path/to/` with the actual file path to your widget.

### Recommended Window Sizes
- **Horizontal ticker**: 800-1200px wide × 100-120px tall
- **Vertical ticker**: 100-120px wide × 600-1000px tall

## Positioning on Screen

### Windows
- **Always on Top**: Use [PowerToys](https://github.com/microsoft/PowerToys) (free) - Pin with Win+Ctrl+T
- **Manual positioning**: Resize and snap window to screen edges using Win+Arrow keys

### macOS
- **Always on Top**: Use [Rectangle](https://rectangleapp.com/) (free) or [Afloat](https://github.com/rwu823/afloat) 
- **Manual positioning**: Use Mission Control to assign widget to specific desktop space

### Linux
- Most window managers support "always on top" - right-click title bar or use Alt+Space menu
- Or use wmctrl: `wmctrl -r "Octocat" -b add,above`

## Customization
You can edit the HTML files to customize:
- Background transparency (change `rgba(255, 255, 255, 0.95)` in the CSS)
- Image size (change `width` and `height` in `.octocat-item img`)
- Animation speed (change `40s` in the animation property)
- Gap between images (change `gap: 16px`)

## Features
- ✨ Smooth infinite scrolling
- 🎭 Semi-transparent background
- 🔍 Hover to pause and zoom
- 🚀 No dependencies - pure HTML/CSS/JS
- 💨 Lightweight and performant
