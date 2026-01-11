# Technical Concerns

## Critical Issues

### 1. Dependencies Not Installed
**Severity: High**

All dependencies show as UNMET - must run `npm install` before development.

### 2. No Test Coverage
**Severity: High**

- No test framework configured
- No test files exist
- 0% coverage

**Action**: Install Vitest and @testing-library/react

## Configuration Issues

### 3. Hardcoded Phone Number (6 locations)
**Severity: Medium**

Phone `+13179612546` duplicated across:
- Header.jsx (line 29)
- Hero.jsx (line 67)
- VoiceDemo.jsx (line 158)
- HowItWorks.jsx (line 93)
- FinalCTA.jsx (line 19)
- Footer.jsx (line 26)

**Action**: Centralize in `src/constants/config.js`

### 4. Hardcoded Deployment Path
**Severity: Low**

- `vite.config.js`: `base: '/test/'`
- Logo path hardcoded to `/test/stratablue-logo.png`

**Action**: Use environment variables

### 5. No Environment Variable Support
**Severity: Medium**

- No `.env` file or template
- No env-specific configuration

**Action**: Create `.env.example`

## Code Quality

### 6. Excessive Inline Styles
**Severity: Medium**

20+ instances of inline `style={{}}` mixed with Tailwind:
- Hero.jsx (lines 25, 41, 51, 57, 69-71, 95-97)
- VoiceDemo.jsx (lines 61-63, 75, 127-129, 141)
- HowItWorks.jsx (lines 69, 95-97)

**Action**: Move to Tailwind config or CSS classes

### 7. Direct DOM Manipulation
**Severity: Medium**

Event handlers directly modify styles:
```jsx
onMouseEnter={(e) => e.currentTarget.style.boxShadow = '...'}
```

Found in: Hero.jsx, FinalCTA.jsx, HowItWorks.jsx

**Action**: Use CSS `:hover` or React state

### 8. Unused CSS
**Severity: Low**

`App.css` contains unused styles: `.logo`, `.card`, `.read-the-docs`

**Action**: Remove unused CSS

## Accessibility

### 9. Broken Links
**Severity: Low**

Multiple `href="#"` links won't navigate:
- Footer.jsx (lines 44, 62, 67, 73)
- UseCases.jsx (line 117)

**Action**: Add actual URLs or remove links

### 10. Missing ARIA Labels
**Severity: Medium**

- Play button in VoiceDemo.jsx lacks aria-label
- Footer social icons lack descriptions

**Action**: Add appropriate ARIA labels

## Missing Best Practices

### 11. No Error Boundaries
**Severity: Medium**

App will crash on component errors with no fallback.

**Action**: Create ErrorBoundary component

### 12. No PropTypes
**Severity: Low**

No runtime prop validation on any components.

**Action**: Add prop-types package if needed

## Summary

| Category | Count | Priority |
|----------|-------|----------|
| Critical (blocking) | 2 | Immediate |
| Configuration | 3 | High |
| Code Quality | 3 | Medium |
| Accessibility | 2 | Medium |
| Best Practices | 2 | Low |

### Quick Wins
1. Run `npm install`
2. Create `src/constants/config.js` for phone/metrics
3. Remove unused `App.css` styles
4. Add aria-labels to icon buttons

---
*Last updated: 2026-01-11 via /gsd:map-codebase*
