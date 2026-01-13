# Project State

## Current Status

**Milestone**: 1 — AI-Native Website Launch
**Phase**: 8 — Chat UI Use Case Toggle
**Plan**: 08-01 (Chat UI Use Case Toggle)
**Status**: Planned

## Progress

| Phase | Name | Status |
|-------|------|--------|
| 1 | Foundation & Cleanup | ✅ Complete |
| 2 | Design System | ✅ Complete |
| 3 | Section Redesign | ✅ Complete |
| 4 | Animation & State System | ✅ Complete |
| 5 | AI Demo Integration | ✅ Complete (05-01, 05-01.1) |
| 6 | Content & Lead Flow | ✅ Complete (06-01) |
| 7 | Polish & Launch | ✅ Complete (07-01) |
| 8 | Chat UI Use Case Toggle | 📋 Planned (08-01) |

## Context

### Last Action
Plan 08-01 created (Chat UI Use Case Toggle). 10 tasks:
1. Add horizontal slide animations to Tailwind config
2. Create DemoTabs component with ARIA accessibility
3. Create Operations scenarios and agent config
4. Add Operations agent styling to DemoAgent
5. Create DemoCarousel component
6. Refactor DemoController to single panel layout
7. Implement carousel auto-advance logic
8. Update transition prompt for tab selection
9. Remove phone CTA from VoiceDemo
10. Polish and accessibility testing

### Next Action
Execute Plan 08-01 to implement chat UI use case toggle

### Blockers
None

### Decisions Made
- Phone numbers centralized in `src/constants/config.js`
- Base URL configurable via VITE_BASE_URL environment variable
- Footer links converted to non-interactive (pages don't exist yet)
- ESLint scoped to src/ for React rules
- **Typography**: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (code)
- **Shadow system**: Hard offset shadows, no blur
- **Color restraint**: Brand blue on CTAs only
- **Animation policy**: Functional motion only (waveform, ping kept; aurora, float removed)
- **Layout approach**: Left-aligned asymmetric (not centered)
- **Section numbers**: Use numbered prefixes (01, 02...) for section headers
- **Agent differentiation**: Revenue = blue accent, Service = white accent
- **FinalCTA**: Kept centered layout (appropriate for CTA sections)
- **Footer**: Simplified links, solid white logo (no gradient)
- **Animation components**: CSS-first approach to avoid React state complexity
- **Reduced motion**: All animations respect prefers-reduced-motion with static fallbacks
- **Demo architecture**: State machine with useDemoState hook, dependency injection for connection
- **Accessibility**: Skip link, ARIA labels, focus-visible with 3px white outline
- **SEO**: Meta tags with Open Graph and Twitter cards
- **Analytics**: useAnalytics hook with event stubs (page_view, demo_mode_change, form_submit, cta_click)

### Decisions Pending
- AI backend choice for Phase 5-02 (requires research)
- WebSocket vs polling for real-time updates
- Voice API integration (Web Speech API vs cloud service)
- Form submission handling for Phase 6-02 (serverless vs CRM)
- Analytics provider selection (GA4, Plausible, etc.)

### Session History
- 2026-01-11: Phase 1 executed (8 tasks, 7 commits)
- 2026-01-12: Phase 2 executed (16 tasks, 15 commits)
- 2026-01-12: Phase 3-A executed (8 tasks, 8 commits)
- 2026-01-12: Phase 3-B executed (10 tasks, 7 commits)
- 2026-01-12: Phase 4-01 executed (11 tasks, 11 commits)
- 2026-01-12: Phase 5-01 planned (10 tasks)
- 2026-01-13: Phase 5-01 executed (10 tasks, 10 commits)
- 2026-01-13: Plan 05-01.1 executed (4 tasks, 4 commits)
- 2026-01-13: Plan 06-01 planned (7 tasks)
- 2026-01-13: Plan 06-01 executed (7 tasks, 7 commits)
- 2026-01-13: Plan 07-01 planned (8 tasks)
- 2026-01-13: Plan 07-01 executed (9 tasks, 9 commits)
- 2026-01-13: Plan 08-01 planned (10 tasks)

---
*Last updated: 2026-01-13*
