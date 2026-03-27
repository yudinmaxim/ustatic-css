---
title: Introduction
description: Overview of uStatic CSS — a utility CSS framework
---

# Introduction

**uStatic CSS** (from *utility static CSS*) is a set of utility CSS classes for rapid development of modern interfaces. It's based on design system tokens.

## Why uStatic CSS?

Typical utility frameworks (Tailwind, UnoCSS) create challenges in microfrontends:

- Complex configurations requiring synchronization between teams
- Style duplication across modules, increasing bundle size

**uStatic CSS** solves these problems:

- Unified token system for consistency across microfrontends
- Modular loading of only necessary styles
- Ability to activate classes at runtime

## Features

- 🎨 **350+ utility classes** for typography, spacing, positioning, colors
- 🧩 **`useCssProperties` and `useTokens` hooks** for managing styles in JavaScript
- 🌐 **Responsive design** with breakpoints `xs`, `md`, `def`, `lg`
- 🔌 **ESM and CJS module exports**
- ⚡ **SSR compatible** — safe operation on server and browser

## Available Modules

| Module | Description |
|--------|----------|
| `typography` | Typography: sizes, weights, text colors |
| `spacing` | Spacing: margin and padding |
| `flexbox` | Flex containers and alignment |
| `grid` | Grid layouts |
| `position` | Positioning: relative, absolute, fixed |
| `bg` | Background: colors, opacity |
| `border` | Borders and border radius |
| `effects` | Effects: opacity, rotation |
| `animations` | Animations: spin, blink |
| `sizing` | Sizing: width, height |
| `cursor` | Cursors |
| `display` | Display and overflow |
| `filters` | Filters: grayscale |
| `outline` | Outlines |
| `scroll` | Scrollbars |
| `hide` | Hide elements |
| `align` | Vertical alignment |
| `interactivity` | Interactivity |
| `base` | Base styles |

## Next Steps

- [Installation](/getting-started/installation) — how to install the package
- [Quick Start](/getting-started/quick-start) — first usage example
