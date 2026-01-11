# Architecture

## Overview
**Component-Based Landing Page Architecture** - React single-page marketing site with stateless functional components.

## Design Patterns

### Component Pattern
- **Functional components only** (no class components)
- **Composition over inheritance** - App.jsx composes 8 self-contained sections
- **Presentational components** - Pure render-focused with no business logic

### Styling Architecture
- **Utility-first CSS** - Tailwind CSS with custom extensions
- **CSS-driven animations** - Complex animations via keyframes, not JavaScript
- **CSS variables** - Brand colors in `:root`

### Data Model
- **Static content** - All data hardcoded as JavaScript objects
- **No API integration** - Pure frontend rendering
- **No database** - Marketing content only

## Data Flow

```
index.html
    └── src/main.jsx (entry)
            └── src/App.jsx (root)
                    ├── Header
                    ├── Hero
                    ├── VoiceDemo
                    ├── UseCases
                    ├── HowItWorks
                    ├── Stats
                    ├── FinalCTA
                    └── Footer
```

**Direction**: Top-down, unidirectional
**Props**: Only for styling/positioning
**Callbacks**: None (no state to lift)

## State Management
**None** - Application is completely stateless:
- No React Context
- No Redux/Zustand
- No useState/useReducer/useEffect hooks
- Event handlers use only inline functions for hover effects

## Module Organization
1. **Feature-based** - Components organized by page sections
2. **Separation of concerns**:
   - Each component = one distinct section
   - Styling in components + global CSS
   - Configuration centralized in tailwind.config.js

## Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| No backend | Pure marketing site, no dynamic data needed |
| Static content | Faster loads, simpler deployment |
| CSS animations | Better performance than JS animations |
| Tailwind | Rapid development, consistent design system |

---
*Last updated: 2026-01-11 via /gsd:map-codebase*
