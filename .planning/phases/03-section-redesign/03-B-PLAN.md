# Plan 03-B: Core Content Sections Redesign

## Objective
Redesign UseCases, HowItWorks, Stats, FinalCTA, and Footer sections with brutalist aesthetic. Apply consistent design language, improve data presentation, and create utilitarian layouts.

## Context

### Design System Available (from Phase 2)
- Typography: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (data)
- Shadows: Hard offset shadows (`shadow-brutal`, `shadow-brutal-lg`)
- Borders: Thick borders (`border-2`, `border-3`)
- Grid: `grid-brutal` 12-column system
- Colors: Brand blue on CTAs only, white/slate for UI

### Current State
- UseCases: Grid cards with icons, feature lists
- HowItWorks: 3-step cards with connector lines
- Stats: 4-stat grid with testimonial
- FinalCTA: Centered call-to-action
- Footer: Standard link columns

### Target Aesthetic
- Cards: Stronger typographic hierarchy
- Steps: Cleaner visualization, visible progression
- Stats: Data-forward, numbers dominate
- CTA: Maximum contrast and focus
- Footer: Utilitarian, no decoration

## Tasks

### Task 1: UseCases Section Redesign
**File**: `src/components/UseCases.jsx`

Grid-based cards with typographic hierarchy:

1. **Card layout**: Increase visual weight differentiation
2. **Icons**: Simplify or remove—let text carry meaning
3. **Category/phase labels**: More prominent with `text-mono`
4. **Feature lists**: Cleaner bullets, tighter spacing
5. **CTA links**: Underline style, no "Learn More" generics
6. **Section header**: Consistent with Hero/VoiceDemo approach
7. **Grid**: Consider uneven column spans for visual interest

Constraints:
- Keep 3-card layout on desktop
- Maintain phase progression narrative
- Use existing design tokens

### Task 2: HowItWorks Section Redesign
**File**: `src/components/HowItWorks.jsx`

Primitive grid layout with step visualization:

1. **Step numbers**: Make dominant visual element (large, bold)
2. **Connector lines**: Simplify or make more brutalist (thick, solid)
3. **Icons**: Reduce prominence, number is primary identifier
4. **Card styling**: Consistent with UseCases cards
5. **Content**: Tighter copy, action-oriented
6. **Section CTA**: Consistent brutalist button treatment

Constraints:
- Keep 3-step flow
- Maintain desktop connector visualization
- Discover → Design → Deploy narrative

### Task 3: Stats Section Redesign
**File**: `src/components/Stats.jsx`

Data-forward presentation, minimal decoration:

1. **Numbers**: Maximum size, dominant visual weight
2. **Labels**: Minimal, `text-mono` uppercase
3. **Grid**: Consider 2x2 on mobile, 4-across on desktop
4. **Testimonial**: Simplify—reduce quote styling, focus on attribution
5. **Quote marks**: Remove or minimize decorative SVG
6. **Background**: Solid, no patterns

Constraints:
- Keep all 4 stats
- Maintain testimonial content
- Numbers must read instantly

### Task 4: FinalCTA Section Redesign
**File**: `src/components/FinalCTA.jsx`

High-contrast action focus:

1. **Headline**: Maximum impact, `text-display-xl`
2. **Supporting copy**: Minimal, one line if possible
3. **Buttons**: Large, dominant, high contrast
4. **Trust line**: Compact, utilitarian
5. **Spacing**: Generous vertical rhythm
6. **Remove**: Any decorative elements

Constraints:
- Keep phone number CTA
- Keep secondary action option
- Single clear action focus

### Task 5: Footer Redesign
**File**: `src/components/Footer.jsx`

Utilitarian links layout:

1. **Logo/brand**: Simplified, no gradient
2. **Link columns**: Tighter, scan-friendly
3. **Grid**: 4-column utilitarian layout
4. **Background**: Remove grid pattern
5. **Copyright**: Minimal treatment
6. **Phone link**: Visible but not decorative

Constraints:
- Keep all existing link categories
- Links remain non-interactive (pages don't exist)
- Update copyright year if needed

### Task 6: Responsive Audit - Content Sections
**Files**: All 5 components above

Audit and improve responsive behavior:

1. **Mobile**: Stacked layouts, comfortable reading
2. **Tablet**: Transitional grids (2-column where appropriate)
3. **Desktop**: Full layouts with proper spacing
4. **Typography**: Verify scale at all breakpoints
5. **Touch targets**: Minimum 44px on interactive elements

## Verification

```bash
# Start dev server and visually verify
npm run dev

# Test full page scroll at all breakpoints
# Verify consistent styling across sections
# Check typography hierarchy reads correctly
```

## Success Criteria
- [ ] All 5 sections use consistent brutalist styling
- [ ] Stats section is data-forward (numbers dominate)
- [ ] HowItWorks has clear step progression
- [ ] UseCases cards have strong typographic hierarchy
- [ ] FinalCTA has maximum visual impact
- [ ] Footer is utilitarian, no decoration
- [ ] Responsive behavior consistent across sections
- [ ] Build passes without errors
