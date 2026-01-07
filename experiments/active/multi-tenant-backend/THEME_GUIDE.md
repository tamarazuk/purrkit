# PayloadCMS Theme Guide - Modern Editorial Design

This theme creates a **distinctive, production-grade** PayloadCMS admin interface that avoids generic AI aesthetics through:

- ✨ **Distinctive Typography** - Outfit (headings) + DM Sans (body) for editorial sophistication
- 🎬 **Motion System** - Staggered reveals, smooth transitions, delightful micro-interactions
- 🎨 **Visual Depth** - Layered shadows, subtle grain texture, gradient accents
- 🎯 **Purposeful Design** - Every animation and detail serves the user experience

---

## Typography

### Fonts Loaded
- **Display/Headings:** `Outfit` - Bold, geometric, modern
- **Body Text:** `DM Sans` - Clean, highly readable
- **Monospace:** `JetBrains Mono` - For code

### Usage
```scss
/* Headings automatically use Outfit */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

/* Body text uses DM Sans */
body {
  font-family: var(--font-body);
}
```

---

## Animation System

### Keyframes Available
- `fadeInUp` - Fade in with upward motion
- `fadeIn` - Simple fade in
- `scaleIn` - Scale up from 95% to 100%
- `shimmer` - Loading/skeleton state
- `pulse` - Subtle pulsing effect
- `spin` - Rotation for loaders

### Motion Variables
```scss
--transition-fast: 150ms;     // Quick interactions
--transition-base: 250ms;     // Default transitions
--transition-slow: 400ms;     // Dramatic reveals
--transition-bounce: 500ms;   // Playful bounce effect
```

### Staggered List Reveals
Table rows automatically animate in with staggered delays (0-350ms) for a polished loading experience.

---

## Dashboard Stats Cards

### HTML Structure
```html
<div class="dashboard__stats">
  <!-- Teal card - Total Entries -->
  <div class="stat-card stat-card--teal">
    <div class="stat-card__header">
      <span class="stat-card__label">Total Entries</span>
      <div class="stat-card__icon">
        <svg><!-- Icon SVG --></svg>
      </div>
    </div>
    <div class="stat-card__value">1,204</div>
    <div class="stat-card__trend stat-card__trend--up">
      <svg class="stat-card__trend-icon"><!-- Arrow up --></svg>
      <span>+5%</span>
    </div>
  </div>

  <!-- Purple card - Media Assets -->
  <div class="stat-card stat-card--purple">
    <div class="stat-card__header">
      <span class="stat-card__label">Media Assets</span>
      <div class="stat-card__icon">
        <svg><!-- Icon SVG --></svg>
      </div>
    </div>
    <div class="stat-card__value">450 GB</div>
    <div class="stat-card__trend stat-card__trend--up">
      <svg class="stat-card__trend-icon"><!-- Arrow up --></svg>
      <span>+10%</span>
    </div>
  </div>

  <!-- Orange card - API Requests -->
  <div class="stat-card stat-card--orange">
    <div class="stat-card__header">
      <span class="stat-card__label">API Requests</span>
      <div class="stat-card__icon">
        <svg><!-- Icon SVG --></svg>
      </div>
    </div>
    <div class="stat-card__value">12k/day</div>
    <div class="stat-card__trend stat-card__trend--up">
      <svg class="stat-card__trend-icon"><!-- Arrow up --></svg>
      <span>+12%</span>
    </div>
  </div>
</div>
```

### Features
- **Gradient corner accents** that intensify on hover
- **Animated icons** that scale and rotate on hover
- **Staggered entrance animations** (0ms, 100ms, 200ms delays)
- **Color variants:** `.stat-card--teal`, `.stat-card--purple`, `.stat-card--orange`
- **Trend indicators:** `.stat-card__trend--up` (green) or `.stat-card__trend--down` (red)

---

## Visual Depth System

### Shadow Variables
```scss
--shadow-xs: /* Tiny shadow with orange tint */
--shadow-sm: /* Small, layered shadow */
--shadow-md: /* Medium depth */
--shadow-lg: /* Large, dramatic */
--shadow-xl: /* Extra large for modals */
```

### Grain Texture
A subtle noise texture is applied globally via `body::before` for an editorial, printed feel.

```scss
/* Disable grain texture if needed */
body::before {
  display: none;
}
```

---

## Enhanced Button Interactions

### Primary Buttons
- **Hover:** Lifts up with scale effect + ripple animation
- **Active:** Slight press-down effect
- **Transition:** Bouncy easing for playful feel

### Secondary/Outline Buttons
- **Hover:** Subtle lift with soft shadow
- **Active:** Minimal press effect

### Create New Button
Special treatment with enhanced hover/active states.

---

## Loading States

### Skeleton Screens
```html
<div class="skeleton" style="width: 200px; height: 20px;"></div>
```
Animated shimmer effect automatically applied.

### Spinners
```html
<svg class="spinner"><!-- SVG content --></svg>
```
Smooth 360° rotation.

---

## Accessibility

### Focus States
All interactive elements have visible focus rings:
- **Color:** Orange (accent color)
- **Offset:** 2px
- **Style:** 2px solid outline

### Smooth Scrolling
Enabled globally with `scroll-behavior: smooth`.

### Custom Scrollbars
Styled to match the theme (Chrome/Safari):
- **Track:** Light background
- **Thumb:** Medium gray, darkens on hover

---

## Color System

### Primary Accent (Orange)
```scss
--theme-accent-500: #f07a24;  /* Main orange */
--theme-accent-600: #db6b1f;  /* Darker on hover */
```

### Secondary Accent (Teal)
```scss
rgb(15, 118, 110)   /* Teal - table headers, active states */
```

### Stat Card Colors
- **Teal:** `rgb(15, 118, 110)` - Content/entries
- **Purple:** `rgb(147, 51, 234)` - Media/uploads
- **Orange:** `var(--theme-accent-500)` - API/activity

---

## Dark Mode Support

All enhancements include dark mode variants via `html[data-theme='dark']`.

### Dark Mode Adjustments
- Grain texture remains visible but subtle
- Shadows adapt to darker backgrounds
- Colors maintain contrast ratios
- Stat cards use adjusted accent opacities

---

## Performance Notes

### Animations
- Use `animation-fill-mode: both` to prevent flashes
- Hardware-accelerated with `transform` and `opacity`
- Respects `prefers-reduced-motion` (add if needed)

### Font Loading
- Fonts load via Google Fonts with `display=swap`
- System font fallbacks prevent layout shift

---

## Customization

### Adjust Animation Speed
```scss
:root {
  --transition-base: 350ms; /* Slower animations */
}
```

### Change Stat Card Colors
```scss
.stat-card--custom {
  --accent-color: #your-color-here;
}
```

### Disable Specific Animations
```scss
.table tbody tr {
  animation: none; /* Remove staggered reveal */
}
```

---

## Browser Support

- **Modern browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **IE11:** Graceful degradation (no animations, standard shadows)

---

## Examples in the Wild

### List View
- ✅ Staggered table row reveals
- ✅ Search bar with orange accent border
- ✅ Smooth drawer animations
- ✅ Table row slide on hover

### Buttons
- ✅ Orange "Create New" with ripple effect
- ✅ Teal selection bar buttons
- ✅ Bouncy hover states

### Dashboard
- ✅ Animated stats cards
- ✅ Color-coded gradient accents
- ✅ Trend indicators

---

## Tips for Best Results

1. **Use stats cards on the dashboard** - They create immediate visual impact
2. **Let animations finish** - Don't reduce delays too much; the stagger is intentional
3. **Maintain color consistency** - Stick to teal for secondary, orange for primary
4. **Test dark mode** - All enhancements work in both modes

---

## Questions or Issues?

Check the theme.scss file for all available classes and variables. The code is heavily commented for easy customization.

**Happy theming! 🎨**
