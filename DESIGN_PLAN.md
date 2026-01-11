# StrataBlue Website Redesign Plan

## Design Direction

### Core Aesthetic: Calm Minimal Brutalist Hybrid

A design language that combines:
- **Minimalist brutalism**: Sparse layouts, big typography, primitive grids, 1-2 strong focal interactions
- **High-contrast systems**: Careful dark palette, restrained accent colors, typography doing the visual lifting
- **Legibility & transparency**: Visible system states, clear controls, embedded information over hidden modals

### What This Replaces

Current site has:
- Glowing gradients, aurora backgrounds, animated orbs
- Multiple decorative effects (grain overlays, mesh gradients, spotlight effects)
- Complex animations throughout

New direction strips this back to:
- Stark black/white with single brand accent (#00ABE2)
- Typography and whitespace as primary design tools
- Purposeful motion only (system state, not decoration)

---

## Agentic & Conversational UI

### Hybrid Chat/Voice Interface

The hero section should feature an embedded AI agent interface that demonstrates:
- **Mixed-mode input**: Users can type OR speak (voice button alongside text input)
- **Domain-specific flows**: Not generic chat - opinionated qualification and scheduling flows
- **Progressive disclosure**: Agent asks focused questions, doesn't dump all options at once
- **Clear escalation paths**: Visible option to talk to human or switch to phone call

### Agent as First-Class UI Element

The agent interface should feel like a native part of the page, not a widget:
```
┌─────────────────────────────────────────┐
│ Alex AI · Revenue Agent         ● Online│
├─────────────────────────────────────────┤
│                                         │
│  [AI] Hi, I'm Alex. I can help qualify  │
│       your interest and schedule a      │
│       strategy call.                    │
│                                         │
│                    [User] I need help   │
│                          with leads     │
│                                         │
│  [AI] ●●● Processing...                 │
│                                         │
├─────────────────────────────────────────┤
│ [Type or speak...]              [🎤]    │
│ ✓ CRM Connected  🔒 Encrypted           │
└─────────────────────────────────────────┘
```

### System State Indicators

- **Active**: Subtle pulse on status dot, monospace "ONLINE" label
- **Thinking**: Animated dots with "Processing..." text - shows AI is working
- **Error/Escalation**: Clear path to human or phone fallback

---

## Motion & Micro-Interactions

### Philosophy: Post-Decorative Motion

Motion should communicate system state, not decorate:

| Current (Remove) | New (Add) |
|-----------------|-----------|
| Floating orbs | Thinking indicator dots |
| Aurora gradients | Progress bars for operations |
| Glow pulses | Subtle state transitions |
| Rotating beams | Scroll-reveal for sections |

### Specific Interactions

1. **Agent thinking state**: Three dots that pulse sequentially (0.2s stagger)
2. **Progress indicator**: Thin 2px bar under agent header during operations
3. **Section reveals**: Fade-in-up on scroll (0.6s ease, 20px travel)
4. **Button feedback**: Subtle 2px lift on hover, no color explosions

### Outcome-Focused Animation

Key events get slightly more pronounced animation:
- Agent response arriving: Scale 0.95 → 1.02 → 1 (0.4s)
- Call connected: Success state with checkmark
- Form submitted: Confirmation with progress to next step

---

## Component-by-Component Plan

### Header
- Keep logo image
- Minimal nav: Systems | Results | Process
- Agent status indicator (shows online/offline)
- Single primary CTA: "Talk to Agent"
- Mobile: Hamburger menu with same minimal structure

### Hero
- Split layout: Typography left, Agent interface right
- Big display type headline (clamp 3rem to 6rem)
- 3 key stats in monospace (Revenue, Time to Value, Answer Rate)
- Primary CTA: "Talk to Agent" / Secondary: "See Demo"
- Agent interface preview showing hybrid chat/voice

### VoiceDemo (Rename to AgentDemo)
- Show both Revenue and Service agents
- Each card shows: Agent name, type, current state
- Sample conversation snippet
- "Try Now" action that initiates call/chat
- Visible quality metrics (conversion rate, satisfaction)

### UseCases
- Primitive 3-column grid with 1px borders
- Each phase: Icon, title, 4 bullet features
- Monospace phase labels: "01 REVENUE" etc.
- Hover: Border highlight only (no glow)

### HowItWorks (Rename to Process)
- Editorial vertical layout with large step numbers
- Each step: Big number, title, description
- Connector lines between steps (simple 1px)
- No decorative icons - typography carries the weight

### Stats
- Full-width section with 4 key metrics
- Very large monospace numbers
- Single testimonial below in quote style
- Attribution: Name, title, avatar initial

### FinalCTA
- Single strong action area
- Big headline: "Ready to Install an AI System?"
- Primary action: Phone number as main CTA
- Secondary: "Schedule Call" button
- Trust indicators: CRM Integration, Attribution, Audit Logs

### Footer
- Minimal: Logo, essential links, phone number
- Copyright and legal
- No elaborate link columns - just essentials

---

## Color System

### Palette

```css
/* Surfaces */
--surface: #030712;           /* Near black */
--surface-secondary: #0f172a; /* Dark slate */
--surface-tertiary: #1e293b;  /* Slate */

/* Text */
--text-primary: #f8fafc;      /* White */
--text-secondary: #94a3b8;    /* Slate 400 */
--text-muted: #475569;        /* Slate 600 */

/* Brand - PRESERVED */
--brand-blue: #00ABE2;
--brand-blue-dark: #105665;

/* Borders */
--border: #1e293b;

/* States */
--success: #22c55e;
```

### Usage Rules

1. Brand blue used sparingly: Agent indicators, primary buttons, key highlights
2. No gradients on surfaces - solid colors only
3. Borders are the primary structural element
4. Text hierarchy through weight and size, not color variety

---

## Typography

### Font Stack

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

### Scale

| Name | Size | Weight | Use |
|------|------|--------|-----|
| Display | clamp(3rem, 8vw, 6rem) | 700 | Hero headline |
| Headline | clamp(2rem, 5vw, 3.5rem) | 600 | Section titles |
| Title | clamp(1.5rem, 3vw, 2rem) | 600 | Card titles |
| Body Large | 1.125rem | 400 | Lead paragraphs |
| Body | 1rem | 400 | Standard text |
| Caption | 0.875rem | 400 | Secondary info |
| Mono Small | 0.8125rem | 400 | Labels, stats |

### Rules

1. Monospace for: Stats, labels, system indicators, code-like elements
2. Tight letter-spacing on headlines (-0.02em to -0.03em)
3. Generous line-height on body text (1.6)
4. UPPERCASE only for small labels

---

## Layout Principles

### Grid

- Max width: 1280px (max-w-7xl)
- Padding: 24px mobile, 32px desktop
- Primitive grid: 12-column with 1px gap borders where appropriate

### Spacing

- Sections: 128px to 160px vertical padding
- Content blocks: 48px to 64px gaps
- Elements within blocks: 16px to 24px

### Whitespace

Generous whitespace is a feature, not empty space. Let content breathe.

---

## Implementation Phases

### Phase 1: Foundation
1. Update tailwind.config.js with new design tokens
2. Update index.css with brutalist base styles
3. Add agentic UI component styles (status, thinking, progress)

### Phase 2: Core Components
4. Header - minimal, with agent status
5. Hero - typography + agent interface
6. Footer - minimal

### Phase 3: Content Sections
7. AgentDemo (formerly VoiceDemo)
8. UseCases - primitive grid
9. Process (formerly HowItWorks)
10. Stats

### Phase 4: Polish
11. FinalCTA
12. Scroll animations
13. Mobile optimizations
14. Accessibility audit

---

## Files to Modify

```
tailwind.config.js     - Design tokens, colors, typography
src/index.css          - Base styles, component classes, animations
src/App.jsx            - Remove decorative overlays
src/components/
  ├── Header.jsx       - Minimal nav with agent status
  ├── Hero.jsx         - Typography + agent interface
  ├── VoiceDemo.jsx    - Rename to AgentDemo, simplify
  ├── UseCases.jsx     - Primitive grid layout
  ├── HowItWorks.jsx   - Rename to Process, editorial layout
  ├── Stats.jsx        - Data-forward display
  ├── FinalCTA.jsx     - Single strong action
  └── Footer.jsx       - Minimal structure
```

---

## Open Questions

1. **Interactive agent**: Should the hero agent interface be a static demo or actually functional?
2. **Voice integration**: Real-time voice via WebRTC, or phone call redirect?
3. **Chat persistence**: Should conversations persist across page loads?
4. **Mobile agent**: How does the agent interface adapt on mobile? Drawer? Full-screen?

---

## Reference Inspiration

- Linear.app - Stark, purposeful, typography-driven
- Vercel - Dark mode, clear hierarchy, minimal decoration
- Stripe - Clean data display, progressive disclosure
- Notion AI - Embedded agent patterns, thinking states
