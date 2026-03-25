# Introduction

**uStatic CSS** (from *utility static CSS*) is a set of utility CSS classes for rapidly building modern interfaces. Based on design system tokens.

## Why uStatic CSS?

In microfrontends, typical utility frameworks (Tailwind, UnoCSS) create challenges:

- Complex configurations requiring synchronization between teams
- Style duplication between modules, increasing bundle size

**uStatic CSS** solves these problems:

- Unified token system for consistency across microfrontends
- Modular loading of only needed styles
- Ability to activate modules at runtime

## Features

- 🎨 **350+ utility classes** for typography, spacing, positioning, colors
- 🧩 **Hooks `useCssProperties` and `useTokens`** for managing styles in JavaScript
- 🌐 **Responsive design** with breakpoints `xs`, `md`, `def`, `lg`
- 🔌 **Module exports** as ESM and CJS
- ⚡ **SSR-compatible** — works safely on server and browser

## Available Modules

| Module | Description |
|--------|-------------|
| `typography` | Typography: sizes, weights, text colors |
| `spacing` | Spacing: margin and padding |
| `flexbox` | Flex containers and alignment |
| `grid` | Grid layouts |
| `position` | Positioning: relative, absolute, fixed |
| `bg` | Background: colors, transparency |
| `border` | Borders and rounded corners |
| `effects` | Effects: opacity, rotation |
| `animations` | Animations: spinning, blinking |
| `sizing` | Sizing: width, height |
| `cursor` | Cursors |
| `display` | Display and overflow |
| `filters` | Filters: grayscale |
| `outline` | Outlines |
| `scroll` | Scrollbars |
| `hide` | Hiding elements |
| `align` | Vertical alignment |
| `interactivity` | Interactivity |
| `base` | Base styles |

## Next Steps

- [Installation](/en/getting-started/installation) — how to install the package
- [Quick Start](/en/getting-started/quick-start) — first usage example
