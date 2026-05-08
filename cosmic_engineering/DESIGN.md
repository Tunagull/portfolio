---
name: Cosmic Engineering
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#47d6ff'
  primary: '#a5e7ff'
  on-primary: '#003543'
  primary-container: '#00d2ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#c6c4df'
  on-secondary: '#2f2e43'
  secondary-container: '#47475d'
  on-secondary-container: '#b8b6d0'
  tertiary: '#d3dcff'
  on-tertiary: '#252f4d'
  tertiary-container: '#b6c0e5'
  on-tertiary-container: '#434e6d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b6ebff'
  primary-fixed-dim: '#47d6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#e2e0fc'
  secondary-fixed-dim: '#c6c4df'
  on-secondary-fixed: '#1a1a2e'
  on-secondary-fixed-variant: '#45455b'
  tertiary-fixed: '#dae1ff'
  tertiary-fixed-dim: '#bbc5eb'
  on-tertiary-fixed: '#0f1a37'
  on-tertiary-fixed-variant: '#3b4665'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.2'
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.9rem
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered to reflect the intersection of high-level computer science and professional precision. The brand personality is intellectual, futuristic, and highly technical, designed to resonate with recruiters and collaborators in the engineering sector. 

The aesthetic is anchored in **Glassmorphism** and **Minimalism**. By utilizing translucent layers and vibrant backdrop blurs, the system creates a sense of depth—much like a modern IDE or high-end dashboard. The goal is to evoke a "Mission Control" feeling where information is presented with absolute clarity against a vast, deep-space background. Every element is intentional, stripping away unnecessary decoration to focus on the technical craft.

## Colors

The palette is a "Deep Space" arrangement that prioritizes visual comfort and focus. 

- **Primary (Vibrant Cyan):** Used exclusively for interactive elements, progress bars, and critical highlights. It acts as the "light source" in the interface.
- **Secondary (Deep Space Purple):** The foundation of the UI, providing a stable, dark canvas that reduces eye strain.
- **Tertiary (Cosmic Blue):** Used for depth, defining card surfaces and subtle background shifts.
- **Neutral:** A range of high-contrast off-whites and cool grays to ensure WCAG AA readability for technical documentation and project descriptions.

Gradients should be used sparingly, primarily as background washes or as subtle 1px border strokes to simulate light hitting glass edges.

## Typography

This design system uses a triple-font approach to emphasize its technical nature:

1.  **Space Grotesk (Headlines):** A technical, geometric font that feels cutting-edge and structural. Use this for all major section headings.
2.  **Inter (Body):** Chosen for its exceptional legibility on digital screens. Use this for all descriptive text and project narratives.
3.  **JetBrains Mono (Labels/Code):** A nod to the student's engineering background. Use this for tags, small UI labels, and actual code snippets to provide an authentic developer feel.

Maintain high contrast by keeping primary text at 90-100% opacity and secondary/metadata text at 60-70% opacity.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** for desktop, centered within a wide viewport to maintain a minimalist, gallery-like feel. 

- **Rhythm:** An 8px base unit drives all spacing decisions.
- **Sectioning:** Large vertical gaps (120px+) between major sections create "breathing room," allowing each project or skill set to stand alone as a distinct module.
- **Alignment:** Content is generally left-aligned to mimic the structure of code, with strategic use of centered headers for "hero" moments.
- **Padding:** Use generous internal padding (32px+) within glass containers to ensure the frosted background effect is visible and elegant.

## Elevation & Depth

Depth is not created with shadows, but through **Tonal Layers** and **Backdrop Blurs**:

- **Layer 0 (Base):** The #1a1a2e / #16213e background gradient.
- **Layer 1 (Cards/Surfaces):** Semi-transparent Cosmic Blue (#16213e) at 40-60% opacity with a `backdrop-filter: blur(12px)`.
- **Layer 2 (Overlays/Modals):** Lighter blue tint at 80% opacity with `backdrop-filter: blur(20px)`.
- **Edge Definition:** Instead of drop shadows, use a 1px solid border with a very low opacity white (rgba(255, 255, 255, 0.1)) to catch the "light" and define the edges of the glass containers.

## Shapes

The design system uses a "Rounded" (level 2) language to balance the technical "hardness" of the font with a modern, approachable feel.

- **Standard Containers:** 0.5rem (8px) for buttons and input fields.
- **Cards/Modules:** 1rem (16px) for project cards and skill containers to create a distinct silhouette against the background.
- **Interactive States:** Use a transition to slightly increase roundedness or scale by 1-2% on hover to indicate tactility.

## Components

### Buttons
- **Primary:** Solid Cyan (#00d2ff) with black text for maximum contrast. Pill-shaped or 8px rounded corners.
- **Secondary:** Transparent background with a 1px Cyan border. On hover, apply a soft Cyan outer glow (`box-shadow: 0 0 15px rgba(0, 210, 255, 0.4)`).

### Glass Cards
- Used for project highlights and skill blocks. Must feature a subtle 1px top-left border gradient to simulate a glass edge.

### Chips/Tags
- Small, rounded containers using JetBrains Mono. Use Cosmic Blue as the fill with 40% opacity and a high-contrast label.

### Skill Bars
- Horizontal tracks in Secondary Purple with a Primary Cyan fill. The fill should have a subtle "pulse" animation or a linear-gradient to indicate "active" energy.

### Inputs
- Dark backgrounds (#16213e) with a 1px border that turns Cyan on focus. Use JetBrains Mono for placeholder text to maintain the "IDE" aesthetic.

### Data Visualization
- For a Computer Engineering student, use stylized "node-link" diagrams or terminal-style output windows to display project metrics or architecture.