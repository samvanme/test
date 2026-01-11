# Code Conventions

## Code Style
- **Language**: JavaScript ES modules
- **Indentation**: 2 spaces
- **Quotes**: Mixed (not enforced)
- **Semicolons**: Not required
- **Target**: ECMAScript 2020+

## Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Files | PascalCase.jsx | `Header.jsx`, `UseCases.jsx` |
| Directories | lowercase | `components/`, `src/` |
| Components | PascalCase | `Header`, `VoiceDemo` |
| Variables | camelCase | `useCase`, `footerLinks` |
| CSS Classes | Tailwind (kebab) | `flex`, `items-center` |
| IDs/Anchors | kebab-case | `#systems`, `#demo` |

## Import/Export Patterns

```javascript
// Default exports for components
export default function ComponentName() { ... }

// Import order: React → Components → CSS
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css'
```

## Component Patterns

```javascript
// Functional components only
export default function ComponentName() {
  // Static data as const
  const items = [{ id: 1, name: 'Item' }];

  return (
    <section>
      {/* Section comments in JSX */}
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </section>
  );
}
```

## CSS/Styling

### Primary Approach
- **Tailwind CSS** utility classes for most styling
- **Custom CSS** in `index.css` using `@layer` directives
- **CSS variables** in `:root` for brand colors

### Color System
| Color | Value | Usage |
|-------|-------|-------|
| Brand Blue | `#00ABE2` | Primary accent |
| Brand Blue Dark | `#105665` | Secondary accent |
| Void/Background | `#030712` | Dark backgrounds |
| Text | `slate-400/500` | Body text |

### Fonts
- **Outfit** - Primary sans-serif
- **JetBrains Mono** - Code/monospace

### Custom Components (index.css)
- `.glass-card` - Glassmorphism effect
- `.aurora-bg` - Animated background
- `.noise-overlay` - Texture overlay

## ESLint Configuration
- React Hooks rules (recommended)
- React Refresh rules
- Unused variables ignored if pattern: `^[A-Z_]`

---
*Last updated: 2026-01-11 via /gsd:map-codebase*
