# NIGHTSHIFT — 2026 Premium Automotive Editorial Design System

**Project:** NIGHTSHIFT  
**Aesthetic:** Luxury Automotive Editorial, Deep Emerald-Dark Studio, Filmic Reflections, Restrained High-Contrast Typography  
**Target Year:** 2026  
**Guiding Principle:** Confident, mysterious, sophisticated street-culture storytelling with generous negative space and surgical typographic scale. Avoid generic glowing neon rainbow gradients or HUD game fonts.

---

## 1. Color Palette & Tokens

### Primary Palette
```css
:root {
  /* Page Bases */
  --color-base: #050907;           /* Deep obsidian-green ground */
  --color-base-dark: #071713;      /* Deep green-black secondary ground */
  --color-surface: #0B201A;        /* Elevated card/sheet surface */
  --color-surface-hover: #102B23;  /* Interactive hover surface */
  --color-forest: #12372B;         /* Forest green container accent */

  /* Editorial Accents */
  --color-crimson: #BF1029;        /* Signature architectural crimson */
  --color-crimson-hover: #D21B35;  /* Active/hover state crimson */
  --color-emerald: #3B8D70;        /* Subtle automotive emerald highlight */
  --color-emerald-glow: rgba(59, 141, 112, 0.24);

  /* Typography & Foreground */
  --color-ivory: #F0EEE7;          /* Warm editorial headline & text ivory */
  --color-ivory-dim: #D7D4CA;      /* Secondary reading ivory */
  --color-muted: #A7B5AB;          /* Subtle metadata and caption text */
  --color-muted-dark: #64756A;     /* Low-contrast tertiary metadata */

  /* Architectural Borders & Dividers */
  --border-delicate: rgba(240, 238, 231, 0.16);
  --border-strong: rgba(240, 238, 231, 0.32);
  --border-crimson: rgba(191, 16, 41, 0.40);
  --border-emerald: rgba(59, 141, 112, 0.35);

  /* Overlays */
  --overlay-hero-gradient: linear-gradient(
    180deg,
    rgba(5, 9, 7, 0.35) 0%,
    rgba(5, 9, 7, 0.65) 50%,
    #050907 100%
  );
  --overlay-cinematic-mask: radial-gradient(
    circle at 75% 45%,
    rgba(7, 23, 19, 0.4) 0%,
    rgba(5, 9, 7, 0.95) 85%
  );
  --overlay-card: linear-gradient(
    180deg,
    rgba(11, 32, 26, 0.4) 0%,
    rgba(11, 32, 26, 0.92) 100%
  );
}
```

---

## 2. Typography Hierarchy

### Font Families
1. **Editorial Display Serif:** `Bodoni Moda`, serif (with fallback to `Cormorant Garamond`, `Didot`, `Georgia`, serif)
   - Used for dramatic editorial headlines, hero titles, chapter markers.
   - Characterized by razor-thin serifs, high stroke contrast, and architectural verticality.
2. **Body & UI Sans:** `Manrope`, sans-serif (with fallback to `Inter`, system-ui, sans-serif)
   - Used for navigation, microcopy, body paragraphs, technical specifications, and labels.
   - Legible, modern geometric construction with generous x-height.

### Scale & Metrics
| Role | Font Family | Size | Weight | Line Height | Tracking | Lettercase |
|---|---|---|---|---|---|---|
| **Hero Giant Headline** | `Bodoni Moda` | `clamp(4.2rem, 10vw, 10rem)` | 700 / 800 | 0.88–0.94 | `-0.03em` | UPPERCASE |
| **Section Title** | `Bodoni Moda` | `clamp(2.5rem, 5.5vw, 5.2rem)` | 600 / 700 | 0.96–1.02 | `-0.02em` | UPPERCASE |
| **Subheading / Chapter** | `Bodoni Moda` | `clamp(1.75rem, 3vw, 2.75rem)` | 500 / 600 | 1.15 | `-0.01em` | UPPERCASE |
| **Eyebrow / Category Tag** | `Manrope` | `0.75rem – 0.875rem` (12–14px) | 700 | 1.2 | `0.22em` | UPPERCASE |
| **Body Large / Lead** | `Manrope` | `1.125rem – 1.25rem` (18–20px) | 400 | 1.65 | `0` | Sentence case |
| **Body Regular** | `Manrope` | `0.95rem – 1.05rem` (15–17px) | 400 | 1.6 | `0.01em` | Sentence case (~65 chars) |
| **Metadata / Specs / Pill** | `Manrope` | `0.75rem – 0.825rem` (12–13px) | 600 | 1.3 | `0.12em` | UPPERCASE |

---

## 3. Layout, Grid & Spatial Rhythm

### Editorial Spacing Scale
- Desktop Section Rhythm: `clamp(5rem, 10vw, 10rem)` (80px – 160px vertical padding).
- Content Max Width: `1440px` centered with `clamp(1.25rem, 4vw, 4rem)` gutter.
- Grid: 12-column fluid grid with `1.5rem` – `2.5rem` column gap.
- Breakpoints:
  - Phone: `360px` – `480px`
  - Large Phone / Phablet: `481px` – `767px`
  - Tablet: `768px` – `1023px`
  - Desktop: `1024px` – `1439px`
  - Cinematic Large Display: `1440px` – `1920px+`

### Dividers & Corner Radii
- Thin structural rules: `1px solid var(--border-delicate)`
- Corner radii: Deliberately restrained (`2px` for subtle architectural cards, `9999px` strictly for pill buttons and tag badges; no bubbly soft UI).

---

## 4. Reusable UI Components & States

### Button Variants
1. **Primary Editorial Pill (`btn-primary`):**
   - Ivory border (`1px solid var(--color-ivory)`), transparent background, ivory text.
   - On hover: Ivory background fills with clean wipe transition; text changes to `#050907`; arrow indicator slides `+4px` horizontally.
2. **Signature Crimson CTA (`btn-crimson`):**
   - Solid crimson (`var(--color-crimson)`), warm ivory text, subtle crimson border.
   - On hover: Background transitions to `var(--color-crimson-hover)`, box-shadow subtle warm depth (`0 4px 20px rgba(191,16,41,0.3)`).
3. **Ghost Text Action (`btn-ghost`):**
   - Sans tracking-heavy uppercase text with animated expanding underline (0% to 100% on hover).
4. **Accessible Focus Rings:**
   - `outline: 2px solid var(--color-emerald); outline-offset: 3px;` on all interactive states.

### Cards & Surfaces
- Surface: `#0B201A` with `1px solid var(--border-delicate)`.
- Image containment: `overflow: hidden`, aspect ratio explicit (`16:9`, `3:4`, or `1:1`).
- Card Hover: Image smooth scale (`1.0` -> `1.04` in 400ms cubic-bezier), bottom border or accent line glows crimson.

---

## 5. Motion & Accessibility Standards

### Motion Specifications (Framer Motion / CSS)
- **Hero Stagger:**
  - Hero background video fades in over `700ms`.
  - Eyebrows reveal at `100ms` delay.
  - Giant red serif line masks up (`translateY: 40px -> 0px`, `duration: 850ms`).
  - Giant ivory serif line follows (`duration: 950ms`).
- **Scroll Enters:**
  - Sections reveal with `translateY: 30px` -> `0px`, `opacity: 0` -> `1` (`duration: 650ms`, `ease: [0.16, 1, 0.3, 1]`).
  - Staggered children (`delay: index * 90ms`).
  - Triggered once (`once: true`) to avoid disorienting re-triggering.
- **Accessibility & Reduced Motion:**
  - When `@media (prefers-reduced-motion: reduce)` is active:
    - All parallax offsets clamp to 0.
    - Transitions drop to instant or 1ms opacity fade.
    - Background videos are paused automatically; high-resolution poster stills are rendered.
    - All content remains 100% visible and interactive.

---

## 6. Wordmark & Identity
- **Wordmark:** `NIGHTSHIFT` rendered in heavy tracking geometric sans (`letter-spacing: 0.28em`, uppercase) or custom SVG with architectural slit serif treatment.
- **Footer Disclaimer:**
  `Independent university portfolio concept. Not affiliated with any game publisher, automotive manufacturer, or commercial entity. Advanced Web Development, Semester 6.`
