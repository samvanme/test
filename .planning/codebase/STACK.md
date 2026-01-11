# Technology Stack

## Primary Language
- **JavaScript (ES6+)** - Using ES modules (`"type": "module"`)

## Frameworks
- **React 19.2.0** - UI component library
- **React DOM 19.2.0** - DOM rendering

## Build Tools
- **Vite 7.2.4** - Build tool and dev server
  - Base path: `/test/`
  - Plugin: @vitejs/plugin-react 5.1.1

## CSS & Styling
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
  - Custom brand colors (#00ABE2, #105665)
  - Custom animations (aurora, float, waveform, glow-pulse, marquee, rotate-beams)
  - Custom fonts (Outfit, Plus Jakarta Sans, JetBrains Mono, Fira Code)
- **PostCSS 8.5.6** - CSS transformation
- **Autoprefixer 10.4.23** - Browser vendor prefixes

## Development Tools
- **ESLint 9.39.1** - Code linting
- **eslint-plugin-react-hooks 7.0.1** - React hooks linting
- **eslint-plugin-react-refresh 0.4.24** - Fast refresh validation

## TypeScript Types (Dev)
- @types/react 19.2.5
- @types/react-dom 19.2.3

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint code checking |
| `npm run preview` | Preview production build |

## Dependencies Summary
- **Production**: 2 packages (React, React DOM)
- **Development**: 10 packages (tooling)
- **Total**: 12 direct dependencies

---
*Last updated: 2026-01-11 via /gsd:map-codebase*
