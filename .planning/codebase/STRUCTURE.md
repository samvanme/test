# Directory Structure

```
SBSitev0/
├── public/                          # Static assets
│   ├── stratablue-logo.png          # Brand logo
│   ├── vite.svg                     # Vite logo
│   └── .nojekyll                    # GitHub Pages config
│
├── src/                             # Application source
│   ├── components/                  # Page section components
│   │   ├── Header.jsx               # Navigation bar
│   │   ├── Hero.jsx                 # Hero section with stats
│   │   ├── VoiceDemo.jsx            # Voice agent demo cards
│   │   ├── UseCases.jsx             # Use case cards
│   │   ├── HowItWorks.jsx           # 3-step process guide
│   │   ├── Stats.jsx                # Metrics and testimonial
│   │   ├── FinalCTA.jsx             # Call-to-action section
│   │   └── Footer.jsx               # Footer with links
│   │
│   ├── assets/                      # Local images
│   │   └── react.svg
│   │
│   ├── App.jsx                      # Root component
│   ├── App.css                      # Legacy styles (mostly unused)
│   ├── index.css                    # Global styles + animations
│   └── main.jsx                     # React entry point
│
├── .planning/                       # Project planning (GSD)
├── .claude/                         # Claude AI integration
├── .github/                         # GitHub workflows
├── claudeskills/                    # Claude Skills packages
│
├── index.html                       # HTML entry point
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind theme
├── postcss.config.js                # PostCSS plugins
├── eslint.config.js                 # ESLint rules
└── README.md                        # Documentation
```

## Entry Points

| Entry | Purpose |
|-------|---------|
| `index.html` | HTML shell with `<div id="root">` |
| `src/main.jsx` | React DOM render entry |
| `src/App.jsx` | Root component orchestration |

## Key Files

| File | Purpose |
|------|---------|
| `src/index.css` | Global animations, CSS variables, utilities |
| `tailwind.config.js` | Brand colors, fonts, custom animations |
| `vite.config.js` | Build config, React plugin, base path |
| `eslint.config.js` | Code quality rules |

## Component Hierarchy

```
App.jsx
├── Header      (navigation, logo, CTA buttons)
├── Hero        (headline, stats, animated background)
├── VoiceDemo   (interactive demo cards, waveforms)
├── UseCases    (Revenue, Service, HR cards)
├── HowItWorks  (Discover, Design, Deploy steps)
├── Stats       (metrics, testimonial)
├── FinalCTA    (final call-to-action)
└── Footer      (links, contact, social)
```

---
*Last updated: 2026-01-11 via /gsd:map-codebase*
