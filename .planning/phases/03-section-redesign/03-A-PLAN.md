# Plan 03-A: Above-the-Fold Redesign

## Objective
Redesign Hero and VoiceDemo sections with stripped-down brutalist layouts, bolder typography, and improved visual hierarchy. These are the first sections visitors see—maximum impact required.

## Context

### Design System Available (from Phase 2)
- Typography: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (data)
- Shadows: Hard offset shadows (`shadow-brutal`, `shadow-brutal-lg`)
- Borders: Thick borders (`border-2`, `border-3`)
- Spacing: Generous spacing (`section-brutal`, `container-brutal`)
- Colors: Brand blue on CTAs only, white/slate for UI

### Current State
- Hero: Has brutalist elements but centered layout, subtle gradient overlay
- VoiceDemo: Good card styling but could have stronger visual differentiation

### Target Aesthetic
- Asymmetric layouts where appropriate
- Typography as primary visual element
- Minimal decoration, maximum data
- Hard edges, no gradients on UI elements

## Tasks

### Task 1: Hero Section Redesign
**File**: `src/components/Hero.jsx`

Redesign for impact-first, stripped-down brutalist aesthetic:

1. **Layout**: Consider left-aligned or asymmetric layout instead of centered
2. **Typography**: Maximize display type impact with `text-display-xl`
3. **Remove**: Grid overlay background (too decorative)
4. **Stats row**: Make more prominent with larger numbers, cleaner presentation
5. **CTAs**: Ensure brutalist shadow treatment, high contrast
6. **Overline badge**: Simplify—remove background, use border only
7. **Trust line**: More compact, utilitarian presentation

Constraints:
- Keep functional ping animation on CTA
- Maintain responsive breakpoints
- Use existing design tokens

### Task 2: VoiceDemo Section Redesign
**File**: `src/components/VoiceDemo.jsx`

Clean up demo cards with purposeful styling:

1. **Card layout**: Consider asymmetric sizing (one featured, one secondary)
2. **Visual hierarchy**: Agent name/type more prominent
3. **Waveform**: Keep functional animation, simplify container
4. **Metrics badges**: Higher contrast, more data-forward
5. **Play button**: Larger, more prominent brutalist treatment
6. **Section header**: Align with Hero styling approach
7. **Background**: Remove radial gradient, use solid or minimal pattern

Constraints:
- Keep waveform animation (functional)
- Keep ping animation on online status (functional)
- Maintain two-card layout on desktop

### Task 3: Responsive Audit - Above-the-Fold
**Files**: `src/components/Hero.jsx`, `src/components/VoiceDemo.jsx`

Audit and improve responsive behavior:

1. **Mobile (< 640px)**: Stack layouts, full-width CTAs, adequate touch targets
2. **Tablet (640px - 1024px)**: Transitional layouts, comfortable reading widths
3. **Desktop (> 1024px)**: Full layouts with appropriate whitespace
4. Test all breakpoints for typography scale, spacing, and readability

## Verification

```bash
# Start dev server and visually verify
npm run dev

# Check for console errors
# Verify at mobile, tablet, desktop widths
# Confirm animations still work (waveform, ping)
```

## Success Criteria
- [ ] Hero has bolder, more impactful typography and layout
- [ ] VoiceDemo cards have stronger visual hierarchy
- [ ] Both sections use design tokens consistently
- [ ] Responsive behavior improved at all breakpoints
- [ ] No decorative elements remain—only functional UI
- [ ] Build passes without errors
