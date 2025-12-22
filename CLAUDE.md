# CLAUDE.md - PurrKit Development Guide

> This file guides Claude (AI assistant) when working on this codebase. Read this first!

## Project Overview

PurrKit is an open-source platform that helps cat rescue organizations create professional websites without technical expertise. We're building tools for the rescues that need them most—small, grassroots organizations doing incredible work with limited resources.

**Current Focus:** Website Generator MVP + Rescue Site Template

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with CSS variables
- **Monorepo:** Turborepo with pnpm
- **UI Components:** shadcn/ui (already installed)
- **Fonts:**
  - `DM Sans` - headings
  - `Inter` - body text
  - `Architects Daughter` - handwritten accents

## Monorepo Structure

```
purrkit/
├── apps/
│   ├── frontend/              # PurrKit Generator app (the form UI)
│   ├── backend/               # API server for generation
│   └── default-site-template/  # The generated site template
├── packages/
│   ├── ui/                    # Shared UI components
│   ├── eslint-config/
│   └── typescript-config/
```

## Code Style

- Use existing shadcn/ui components from `components/ui/` before creating new ones
- Prefer composition over complex props
- Keep components focused—extract hooks for business logic
- Use CSS variables from globals.css for colors (e.g., `text-primary`, `bg-secondary`, `bg-cream`)
- Tailwind classes only, no inline styles

---

# Design System: "Friendly Neighborhood Rescue" Template

This aesthetic is for the `default-site-template` app. It should feel like a warm hug from a rescue volunteer—approachable, trustworthy, and full of heart.

## Core Aesthetic: Warm & Approachable

**Personality:** Friendly, heartfelt, community-driven, hopeful
**Feeling:** Like visiting a cozy rescue where volunteers greet you by name
**NOT:** Corporate, clinical, sterile, or overly polished

### Design Principles

1. **Warmth over polish** - Imperfect, hand-touched details feel more genuine than pixel-perfect precision
2. **Softness everywhere** - Rounded corners, gentle shadows, organic shapes
3. **Personality through typography** - The handwritten font adds soul; use it for emotional moments
4. **Color with purpose** - Primary for trust/action, secondary for warmth/urgency, neutrals for comfort

## Color System (Theme-Agnostic)

**IMPORTANT:** The default-site-template uses a dynamic color system. The specific colors (sage green, terracotta) in the template are just *development defaults*. When a rescue generates their site, they pick their own primary and secondary colors which get swapped in programmatically.

**Note on app colors:**
- **Generator app** (`apps/frontend`): Uses teal/apricot - this is PurrKit's brand
- **Rescue template** (`apps/default-site-template`): Uses sage/terracotta as defaults - these get replaced with the rescue's chosen colors

This distinction helps avoid confusion and makes it obvious when color replacement is working.

Design decisions must work with ANY color combination.

### Variable Naming Convention

The CSS variables and Tailwind classes use semantic names (`primary`, `secondary`) that map to the rescue's chosen colors:

- `--primary` / `text-primary` / `bg-primary` → the rescue's **primary** brand color
- `--secondary` / `text-secondary` / `bg-secondary` → the rescue's **secondary** accent color
- `--primary-light` / `bg-primary-light` → a lighter variant of primary (for backgrounds, highlights)

The actual color values (currently teal and apricot) are defined in `globals.css` and get replaced when a site is generated.

### Color Roles

| Role | CSS Variable | Current Default | Purpose |
|------|--------------|-----------------|--------|
| **Primary** | `--primary`, `text-primary`, `bg-primary` | Sage Green `#6B8F71` | Trust, main actions, links, navigation, form focus states |
| **Primary Light** | `--primary-light`, `bg-primary-light` | Light Sage `#E8F0E9` | Subtle backgrounds, hover states, highlights |
| **Secondary** | `--secondary`, `text-secondary`, `bg-secondary` | Terracotta `#C4785A` | Emotional emphasis, donate buttons, urgent CTAs, warmth |
| **Background** | `--cream`, `bg-cream` | Cream `#FAFAF8` | Page backgrounds, breathing room |
| **Text** | `--charcoal` | Charcoal `#1F2937` | Body text, headings |

### Color Usage Rules (Apply to ANY Color Combo)

**Primary color is for trust and action:**
- Navigation links and buttons
- Form focus rings and borders
- "Learn more", "Adopt", "Submit" buttons
- Section headers and accents
- Use at ~60-70% of accent color usage

**Secondary color is for emotion and urgency:**
- Donation CTAs
- "Urgent need" callouts
- Featured/highlighted elements
- Decorative accents that need warmth
- Use sparingly (~30-40% of accent color usage)

**Neutral backgrounds provide breathing room:**
- Cream (or equivalent light neutral) as default page background
- White for cards and elevated surfaces
- Never pure black or pure white for large areas

### Designing for Unknown Colors

Since we don't know what colors a rescue will choose:

1. **Ensure sufficient contrast** - Don't rely on specific hue relationships. Use opacity variants (`bg-primary/10`, `text-primary/80`) that will work with any color.

2. **Test with extremes** - Mentally check: would this work with navy blue? Bright pink? Forest green? If it only works with one specific color, it's too specific.

3. **Decorative blobs use low opacity** - `bg-primary/10` or `bg-secondary/20` ensures decorative elements stay subtle regardless of the base color.

4. **White text on colored backgrounds** - Full-color backgrounds (`bg-primary`, `bg-secondary`) should always use white or very light text for accessibility.

5. **Colored text on light backgrounds** - Use the color at full strength on cream/white backgrounds.

6. **Avoid color-dependent meanings** - Don't design something that only makes sense if primary is "cool" and secondary is "warm"—a rescue might pick two warm colors or two cool colors.

### Text Contrast on Colored Backgrounds

**Always use explicit white text on full-color backgrounds.** Don't rely on inherited text colors or `text-primary-foreground`.

```jsx
// ✅ Good - explicit white text
<section className="bg-primary">
  <h2 className="text-white font-bold">Heading</h2>
  <p className="text-white/90">Body text with slight transparency</p>
  <p className="text-white/75">Secondary text</p>
</section>

// ❌ Bad - relying on inheritance or CSS variables
<section className="bg-primary text-primary-foreground">
  <h2>Heading</h2>  {/* May inherit wrong color from base styles */}
</section>
```

**Why?** Base heading styles set `text-slate-900` which can override parent text colors. Explicit `text-white` ensures contrast regardless of what colors the rescue chooses.

**Future enhancement:** The generator could calculate WCAG contrast ratios and auto-select white or dark text based on the chosen primary/secondary colors.

## Typography

**Headings:** DM Sans (bold, tight tracking)
**Body:** Inter (readable, friendly)
**Accents:** Architects Daughter (`font-hand` class) for:
- Hero headlines with emotion ("Purrfect", "Forever Home")
- Section titles that need warmth ("Waiting for Love")
- Stats and numbers that should feel personal
- Pull quotes or testimonials

**Typography hierarchy:**
```
Hero headline: text-5xl md:text-7xl font-bold (can mix in font-hand)
Section title: text-4xl font-hand font-bold
Card title: text-2xl font-bold
Body: text-lg leading-relaxed text-slate-600
Small/meta: text-sm text-slate-500
```

## Spacing & Layout

- **Generous padding** - sections need room to breathe (py-24 is standard)
- **Rounded everything** - `rounded-2xl` minimum for cards, `rounded-3xl` for large containers
- **Soft shadows** - `shadow-md` or `shadow-xl`, never harsh
- **Organic shapes** - Use decorative blobs, curved section dividers, rotated elements

## Visual Elements

### Cards
```jsx
// Cat cards, value props, any contained content
<div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow">
```

### Decorative Blobs
Use subtle background shapes to add warmth:
```jsx
<div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-secondary opacity-20 blur-2xl" />
<div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary opacity-20 blur-2xl" />
```

### Section Backgrounds
Alternate between:
- `bg-cream` (default neutral background)
- `bg-white` (for contrast/elevated sections)
- `bg-primary` with white text (for stats, important CTAs)
- `bg-secondary` with white text (for donation/urgent CTAs)

### Playful Rotations
Add subtle rotation to images and cards for a hand-placed feel:
```jsx
<div className="rotate-3 hover:rotate-6 transition-transform">
```

## Micro-interactions & Animation

Keep animations **subtle and purposeful**:

- **Hover states:** Gentle shadow lift, slight rotation, color transitions
- **Transitions:** `transition-all duration-300` as baseline
- **NO:** Aggressive animations, bouncing, or distracting motion

```jsx
// Good: subtle and warm
className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"

// Avoid: too much movement
className="animate-bounce hover:scale-150"
```

## Buttons

Primary (main actions): Trust actions (Adopt, Learn More, Submit)
```jsx
<Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
```

Secondary/Outline: Lower priority actions
```jsx
<Button variant="outline" className="border-2 border-primary text-primary rounded-full">
```

Emotional CTA (secondary color): Donation/urgent actions
```jsx
<Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
```

## Image Treatment

- **Rounded corners:** Always `rounded-2xl` or `rounded-3xl`
- **Border frames:** Optional white border (`border-8 border-white`) for a Polaroid feel
- **Slight rotation:** `rotate-2` or `rotate-3` for casual placement
- **Soft shadows:** `shadow-xl` to lift off the page

## Icons

- Use simple, friendly icons (Lucide icons preferred)
- Give icons personality: put them in rounded containers with subtle rotation
- Primary color for informational icons, secondary color for action-oriented icons

```jsx
<div className="mx-auto flex h-16 w-16 rotate-3 items-center justify-center rounded-2xl bg-white shadow-md text-primary">
  <HeartIcon className="h-8 w-8" />
</div>
```

---

## Anti-Patterns (AVOID THESE)

### ❌ Generic AI Aesthetics
- Purple/blue gradients on white
- Inter or system fonts with no personality
- Perfectly symmetrical, grid-locked layouts
- Generic stock photo hero with text overlay
- Cookie-cutter SaaS landing page vibes

### ❌ Corporate/Clinical Feel
- Sharp corners and hard edges
- Pure black text on pure white backgrounds
- Overly minimal with no warmth
- Formal, institutional language in copy

### ❌ Over-designed
- Too many competing colors
- Excessive animations
- Cluttered layouts with no breathing room
- Multiple decorative elements fighting for attention

### ❌ Template Look
- Default Bootstrap/Tailwind aesthetic
- Predictable hero → features → testimonials → CTA structure with no personality
- Stock icons without customization

---

## Quick Reference

When creating new components or pages for the rescue template, ask:

1. **Does it feel warm?** Would a rescue volunteer smile seeing this?
2. **Is there breathing room?** Generous padding and whitespace?
3. **Does typography have personality?** Is the handwritten font used for emotional moments?
4. **Are shapes soft?** Rounded corners, organic backgrounds?
5. **Is color purposeful?** Primary for trust/action, secondary for heart/urgency, neutrals for comfort?

---

## Files to Reference

- `apps/default-site-template/app/globals.css` - Color variables and base styles
- `apps/default-site-template/app/page.tsx` - Example of the aesthetic in practice
- `apps/frontend/app/globals.css` - Generator app styling (similar palette)

## Development Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start all apps in dev mode
pnpm build            # Build all apps
pnpm lint             # Lint all apps
```
