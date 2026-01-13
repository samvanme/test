# Chat UI Use Case Toggle — Research

## Summary

This research covers UX patterns and implementation approaches for building a single chat window with tabbed use case selection and carousel-style auto-advancing demo.

**Key Recommendation**: Use CSS-first approach with programmatic control (matches project's animation philosophy) OR lightweight Embla Carousel if touch gestures are critical. Build custom tabs with ARIA patterns (no library needed).

---

## 1. Carousel UX & Accessibility (Critical)

### WCAG Requirements

Auto-advancing carousels have strict accessibility requirements:

| Requirement | WCAG Level | Implementation |
|-------------|------------|----------------|
| Pause/Stop control | 2.2.2 (A) | Must provide visible pause button |
| Keyboard navigation | 2.1.1 (A) | Arrow keys, Tab, Enter/Space |
| Focus indicators | 1.4.11 | 3:1 contrast, 3px outline (project standard) |
| Touch targets | 2.5.5 | 44px minimum |
| Screen reader announcements | aria-live | Announce slide changes |

### Auto-Advance Timing Guidelines

- **Minimum**: 1 second per 3 words + processing time
- **Recommended**: 5-7 seconds per slide for typical content
- **For chat messages**: ~3-4 seconds per message bubble (user needs to read)
- **Critical**: Pause on hover, focus, or interaction

### Accessibility Anti-Patterns to Avoid

1. **No pause control** - WCAG 2.2.2 violation
2. **Auto-advance during focus** - Confuses screen readers
3. **Swipe-only navigation** - Must have button alternatives
4. **Hidden current slide indicator** - Users lose orientation

### Recommendation for This Feature

Since the carousel is showing **chat conversations** (text-heavy), auto-advance timing should be:
- ~3 seconds per message
- ~3 messages per use case = ~10-12 seconds per tab
- Total simulation: ~30-40 seconds
- **Must pause when user hovers or tabs are focused**

Sources:
- [W3C WAI Carousels Tutorial](https://www.w3.org/WAI/tutorials/carousels/)
- [Smashing Magazine Accessible Carousels Guide](https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/)
- [TestParty Carousel Accessibility Guide](https://testparty.ai/blog/carousel-slider-accessibility)

---

## 2. Carousel Implementation Options

### Option A: CSS Scroll-Snap (Recommended)

**Fits project's CSS-first philosophy**. No new dependencies.

```css
.carousel-container {
  display: flex;
  overflow-x: hidden; /* hidden for programmatic control */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.carousel-slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
}
```

Pros:
- Zero bundle size impact
- Native smooth scrolling
- Works with existing StateTransition patterns
- Full programmatic control via `scrollTo()`

Cons:
- Manual implementation of touch gestures if needed
- Need to build slide change detection

### Option B: Embla Carousel

**Lightweight library with excellent touch support**.

```bash
npm install embla-carousel-react embla-carousel-autoplay
```

Bundle size: ~5KB gzipped (core) + ~1KB (autoplay plugin)

```jsx
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: false },
  [Autoplay({ delay: 10000, stopOnInteraction: true })]
);

// Programmatic control
emblaApi.scrollTo(2); // Go to slide 3
emblaApi.plugins().autoplay.stop(); // Pause
```

Pros:
- Excellent touch/swipe precision
- Built-in autoplay with pause controls
- Event system for slide changes
- Used by 376K+ projects

Cons:
- New dependency
- Styling requires custom work

### Recommendation

**Start with CSS scroll-snap** (Option A) since:
1. Project uses CSS-first animation approach
2. Programmatic tab-click control is primary interaction
3. Touch swipe is nice-to-have, not essential
4. Zero bundle impact

If touch gestures prove important later, Embla is easy to swap in.

Sources:
- [MDN CSS Carousels Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels)
- [Embla Carousel React Docs](https://www.embla-carousel.com/get-started/react/)
- [CSS-Tricks CSS-Only Carousel](https://css-tricks.com/css-only-carousel/)

---

## 3. Tab Accessibility Pattern

### Required ARIA Structure

```jsx
<div role="tablist" aria-label="Demo use cases">
  <button
    role="tab"
    id="tab-sales"
    aria-selected="true"
    aria-controls="panel-sales"
    tabIndex={0}
  >
    Sales
  </button>
  <button
    role="tab"
    id="tab-support"
    aria-selected="false"
    aria-controls="panel-support"
    tabIndex={-1}
  >
    Support
  </button>
  <button
    role="tab"
    id="tab-operations"
    aria-selected="false"
    aria-controls="panel-operations"
    tabIndex={-1}
  >
    Operations
  </button>
</div>

<div
  role="tabpanel"
  id="panel-sales"
  aria-labelledby="tab-sales"
  tabIndex={-1}
>
  {/* Chat content */}
</div>
```

### Keyboard Navigation Requirements

| Key | Action |
|-----|--------|
| Tab | Move focus to/from tablist |
| Arrow Left/Right | Navigate between tabs |
| Home | First tab |
| End | Last tab |
| Enter/Space | Activate tab (if manual activation) |

### Activation Modes

1. **Automatic** (recommended): Focus = activation. Simpler UX.
2. **Manual**: Focus ≠ activation. Requires Enter/Space. Better for expensive panel loads.

**Recommendation**: Use automatic activation since panel content is already loaded (carousel).

### Implementation Note

Don't use a heavy library for tabs. The pattern is straightforward:
- Track `activeTab` state
- Handle keyboard events in tablist
- Manage tabIndex roving focus
- Apply aria-selected

Sources:
- [MDN ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [React Aria Tabs](https://react-spectrum.adobe.com/react-aria/Tabs.html)
- [Ariakit Tab Component](https://ariakit.org/components/tab)

---

## 4. Animation Approach

### Extending Existing StateTransition

The project's `StateTransition.jsx` supports: fade, slide-up, slide-down, scale.

**Add horizontal variants:**

```jsx
const animations = {
  // ... existing
  'slide-left': {
    hidden: `opacity-0 translate-x-full pointer-events-none`,
    visible: 'opacity-100 translate-x-0 pointer-events-auto',
  },
  'slide-right': {
    hidden: `opacity-0 -translate-x-full pointer-events-none`,
    visible: 'opacity-100 translate-x-0 pointer-events-auto',
  },
};
```

### Carousel Slide Animation

For chat panel transitions, use CSS transforms:

```css
.slide-enter-from-right {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 300ms var(--ease-out-expo);
}
.slide-exit-to-left {
  transform: translateX(-100%);
  opacity: 0;
}
```

### Reduced Motion Support

Already established pattern in project:
```css
@media (prefers-reduced-motion: reduce) {
  .carousel-slide {
    transition: none;
    transform: none;
  }
}
```

---

## 5. Chat Demo UX Patterns

### Key Findings from SaaS Demo Research

1. **Interactivity is critical** - 63.8% of top SaaS companies use interactive demos
2. **Show real interface** - Demos with actual UI perform 40% better than abstract explainers
3. **Keep it short** - Under 2 minutes for video/auto demos, under 10 steps for interactive
4. **Personalization matters** - Letting users choose their path (use case) increases engagement
5. **Streaming creates engagement** - Real-time output appearance is expected in 2025+

### Multi-Persona Pattern

The "single window, multi-persona toggle" pattern is gaining traction:
- Cursor uses this: same interface, different agent modes
- Users select context (Sales/Support/Operations), interface adapts
- Reduces cognitive load vs. showing all options simultaneously

### Transition from Demo to Interactive

Best practice: **Clear call-to-action** after demo completes
- "Want to try it yourself?" pattern already in codebase
- Should appear after carousel completes (not during)
- Make the selected tab's agent available for interaction

Sources:
- [Patterns.dev AI UI Patterns](https://www.patterns.dev/react/ai-ui-patterns/)
- [Smashing Magazine AI Interface Patterns](https://www.smashingmagazine.com/2025/07/design-patterns-ai-interfaces/)
- [Shape of AI UX Patterns](https://www.shapeof.ai)

---

## 6. Color System for Tabs

### Current Project Colors

```javascript
colors: {
  brand: {
    blue: '#00ABE2',      // Primary CTA color
    'blue-dark': '#105665',
  },
  void: '#030712',        // Background
}
```

### Recommended Tab Colors (Brutalist Palette)

| Tab | Color | Hex | Rationale |
|-----|-------|-----|-----------|
| Sales | Brand Blue | `#00ABE2` | Revenue = blue accent (existing pattern) |
| Support | White | `#FFFFFF` | Service = white accent (existing pattern) |
| Operations | Amber/Gold | `#F59E0B` | New, distinct, complements blue/white |

Alternative for Operations: Slate `#64748B` for more muted brutalist feel.

### Implementation

```jsx
const TAB_COLORS = {
  sales: 'bg-brand-blue text-white',
  support: 'bg-white text-void',
  operations: 'bg-amber-500 text-void', // or slate-500
};
```

Inactive state: Add `opacity-60` or `brightness-75` filter.

---

## 7. Architecture Recommendation

### Component Structure

```
src/components/demo/
├── DemoController.jsx      # Refactor: single panel + carousel logic
├── DemoCarousel.jsx        # NEW: carousel container with slides
├── DemoTabs.jsx            # NEW: tab navigation component
├── DemoAgent.jsx           # Keep: single agent card (reuse)
├── ChatPanel.jsx           # NEW: chat content for one use case
└── ... (existing components)
```

### State Management

```jsx
// DemoController state
const [activeTab, setActiveTab] = useState('sales');     // Current tab
const [carouselIndex, setCarouselIndex] = useState(0);   // During simulation
const [isSimulating, setIsSimulating] = useState(true);  // Simulation vs interactive
const [isPaused, setIsPaused] = useState(false);         // Pause control

// Tab change during simulation = skip to that tab's simulation
// Tab change after simulation = switch to that agent's interactive
```

### Data Structure for 3 Use Cases

```javascript
const USE_CASES = {
  sales: {
    name: 'Sales',
    agent: 'Alex AI',
    color: 'brand-blue',
    scenarios: SALES_SCENARIOS,  // Renamed from REVENUE_SCENARIOS
  },
  support: {
    name: 'Support',
    agent: 'Sarah AI',
    color: 'white',
    scenarios: SERVICE_SCENARIOS,
  },
  operations: {
    name: 'Operations',
    agent: 'Jordan AI',  // New agent
    color: 'amber-500',
    scenarios: OPERATIONS_SCENARIOS,  // New scenarios
  },
};
```

---

## 8. Common Pitfalls to Avoid

### Carousel Pitfalls

1. **Forgetting pause on hover** - Users can't read if it keeps moving
2. **No keyboard escape** - Must be able to Tab past carousel
3. **Jarring transitions** - Use ease-out-expo for smooth deceleration
4. **Breaking during resize** - Test responsive behavior

### Tab Pitfalls

1. **Wrong tabIndex management** - Only active tab should be tabIndex=0
2. **Missing aria-selected** - Screen readers won't know which is active
3. **Focus trap** - Arrows should stay within tabs, Tab should exit

### Demo UX Pitfalls

1. **Too long** - 30-40 seconds max for auto-demo
2. **No skip option** - Tabs should allow jumping ahead
3. **Unclear transition** - Make "try it yourself" prominent
4. **Lost state** - Switching tabs during interactive shouldn't lose conversation

---

## 9. What NOT to Hand-Roll

| Feature | Use Existing/Library | Reason |
|---------|---------------------|--------|
| Scroll snap | CSS native | Browser-optimized |
| Touch gestures | Embla (if needed) | Complex physics |
| Focus management | Custom (small scope) | Only 3 tabs, simple |
| Animations | Extend StateTransition | Consistent with project |
| ARIA patterns | Custom implementation | Well-documented, straightforward |

---

## 10. Implementation Checklist

### Phase 1: Structure
- [ ] Create `DemoTabs.jsx` with ARIA-compliant tabs
- [ ] Create `DemoCarousel.jsx` with CSS scroll-snap
- [ ] Add horizontal slide animations to Tailwind config
- [ ] Refactor `DemoController.jsx` from 2-column to single panel

### Phase 2: Simulation Flow
- [ ] Implement carousel auto-advance with timing
- [ ] Add pause on hover/focus
- [ ] Tab click = skip to that use case's simulation
- [ ] Show progress indicator (dots or timer)

### Phase 3: Operations Use Case
- [ ] Create `OPERATIONS_SCENARIOS` array
- [ ] Add "Jordan AI" agent configuration
- [ ] Design amber/gold color integration

### Phase 4: Interactive Mode
- [ ] Tab selection activates that agent
- [ ] Preserve conversation state per tab
- [ ] Remove phone CTA from VoiceDemo

### Phase 5: Polish
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Reduced motion testing
- [ ] Mobile touch testing

---

*Research completed: 2026-01-13*

## Sources

### Accessibility
- [W3C WAI Carousels Tutorial](https://www.w3.org/WAI/tutorials/carousels/)
- [Smashing Magazine Accessible Carousels](https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/)
- [MDN ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

### Libraries & Implementation
- [Embla Carousel React](https://www.embla-carousel.com/get-started/react/)
- [MDN CSS Carousels](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels)
- [React Aria Tabs](https://react-spectrum.adobe.com/react-aria/Tabs.html)

### UX Patterns
- [Patterns.dev AI UI Patterns](https://www.patterns.dev/react/ai-ui-patterns/)
- [Smashing Magazine AI Interface Patterns](https://www.smashingmagazine.com/2025/07/design-patterns-ai-interfaces/)
- [Navattic Product Demos](https://www.navattic.com/blog/product-demos)
