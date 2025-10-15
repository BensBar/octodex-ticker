# Planning Guide

An endlessly scrolling ticker that displays GitHub's Octocats from the Octodex in a smooth right-to-left animation, designed to be a compact, embeddable component.

**Experience Qualities**:
1. **Seamless** - The animation should loop infinitely without any jarring jumps or breaks in the visual flow
2. **Playful** - Celebrating GitHub's whimsical Octocat mascot collection with a lighthearted presentation
3. **Unobtrusive** - Small enough to be placed at the top, middle, or bottom of a layout without dominating the screen

**Complexity Level**: Light Application (multiple features with basic state)
  - A focused component with core scrolling functionality plus interactive features: display scrolling Octocats with drag-and-drop reordering and customizable controls.

## Essential Features

### Infinite Scroll Animation
- **Functionality**: Continuously scrolls Octocat images from right to left in an endless loop
- **Purpose**: Creates an engaging visual element that showcases the variety of Octocats
- **Trigger**: Starts automatically on page load
- **Progression**: Page loads → Octocats fetch → Images appear → Smooth rightward scroll begins → Loop restarts seamlessly
- **Success criteria**: No visible seam or jump when animation loops; consistent smooth motion

### Dynamic Octocat Loading
- **Functionality**: Fetches Octocat data from the Octodex and displays their images
- **Purpose**: Shows real GitHub Octocats rather than static placeholder content
- **Trigger**: Component mount
- **Progression**: Component mounts → Fetch Octodex data → Parse image URLs → Render in ticker
- **Success criteria**: Successfully loads and displays multiple unique Octocats

### Drag-and-Drop Reordering
- **Functionality**: Users can drag Octocats to reorder them while the ticker is scrolling
- **Purpose**: Provides interactive control over the display order, making the component more engaging
- **Trigger**: User clicks and drags an Octocat
- **Progression**: User hovers over Octocat → Cursor changes to grab → User drags → Octocat moves → Release updates order → Animation continues
- **Success criteria**: Smooth drag interaction that doesn't break scrolling animation; order persists during scroll

### Swipe Gesture Speed and Direction Control
- **Functionality**: Users can swipe left or right on the padding areas (gradient edges) to control scroll speed and direction
- **Purpose**: Provides intuitive touch-based control to speed up, slow down, reverse, or pause the ticker
- **Trigger**: User touches and swipes on the left or right padding gradient areas
- **Progression**: User touches padding → Swipes left/right → Speed adjusts in real-time → Direction can reverse (negative speed) → Release commits the new speed
- **Success criteria**: Smooth, responsive speed changes; ability to reverse direction; visual cursor change on padding areas

### Flexible Positioning
- **Functionality**: Ticker is compact and can be positioned anywhere on screen
- **Purpose**: Allows placement at top, middle, or bottom without layout disruption
- **Trigger**: User positioning choice (demonstrates versatility)
- **Progression**: Ticker renders → User views at different positions → Maintains functionality
- **Success criteria**: Works equally well in all three positions with appropriate sizing

## Edge Case Handling
- **Failed API fetch**: Display a fallback set of popular Octocat image URLs to ensure ticker never appears empty
- **Slow loading images**: Use skeleton placeholders or show ticker with available images while others load
- **Single Octocat loaded**: Duplicate the images to ensure seamless scrolling effect
- **Very fast/slow connections**: Animation speed remains constant regardless of load time

## Design Direction
The design should feel playful and smooth, celebrating GitHub's creative mascot culture while maintaining a clean, modern aesthetic that doesn't distract from surrounding content.

## Color Selection

Analogous (adjacent colors on color wheel) - Using cool grays and soft blues that complement GitHub's brand while maintaining a neutral, versatile ticker that works in various contexts.

- **Primary Color**: Deep charcoal gray (oklch(0.25 0 0)) for text and borders - communicates professionalism
- **Secondary Colors**: Soft blue-gray (oklch(0.85 0.01 240)) for backgrounds - provides subtle depth without competing
- **Accent Color**: GitHub orange (oklch(0.65 0.15 40)) for any interactive elements or highlights
- **Foreground/Background Pairings**:
  - Background (White oklch(1 0 0)): Dark foreground (oklch(0.25 0 0)) - Ratio 14.1:1 ✓
  - Card/Ticker (Light gray oklch(0.97 0 0)): Dark text (oklch(0.25 0 0)) - Ratio 13.2:1 ✓
  - Accent (Orange oklch(0.65 0.15 40)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓

## Font Selection
Clean, modern sans-serif fonts that feel friendly and approachable, matching GitHub's contemporary brand identity.

- **Typographic Hierarchy**: 
  - Title (if needed): Inter SemiBold/18px/tight spacing
  - Labels: Inter Medium/14px/normal spacing
  - Captions: Inter Regular/12px/relaxed spacing

## Animations
The animation should be the star of this component - smooth, continuous, and hypnotic without being distracting. Drag interactions should feel natural and responsive. Swipe gestures provide intuitive real-time control.

- **Purposeful Meaning**: The constant scrolling motion creates a sense of endless discovery and playfulness, reflecting GitHub's diverse community. Drag interactions add a tactile quality that encourages exploration. Swipe gestures on padding areas provide intuitive speed and direction control.
- **Hierarchy of Movement**: Primary animation is the ticker scroll (with bidirectional support); secondary is the drag-and-drop interaction with scale feedback; tertiary is real-time speed adjustment via swipe gestures; everything else remains static to maintain focus on the Octocats

## Component Selection
- **Components**: Card (for ticker container with subtle border), Skeleton (for loading states), Button (for controls toggle), Slider (for adjusting parameters including negative values for reverse), Reorder.Group & Reorder.Item from Framer Motion (for drag-and-drop)
- **Customizations**: Custom ticker animation using CSS keyframes (scroll-left and scroll-right); drag-and-drop reordering with Framer Motion Reorder components; custom image grid layout; floating controls panel; touch-responsive padding areas with cursor feedback
- **States**: Loading (skeleton placeholders), Loaded (animated ticker with draggable items), Dragging (visual feedback during drag), Swiping (real-time speed adjustment), Error (fallback images)
- **Icon Selection**: Sliders icon for controls button (Phosphor Icons)
- **Spacing**: Tight horizontal gaps (gap-4) between Octocats; minimal vertical padding; generous padding in controls panel
- **Mobile**: Reduce Octocat size slightly on mobile; maintain smooth animation; ensure ticker height stays compact; controls panel adapts to smaller screens; swipe gestures work seamlessly on touch devices
