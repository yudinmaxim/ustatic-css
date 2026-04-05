---
title: Introduction
description: Overview of uStatic CSS — a utility CSS framework
---

import Demo from '../../../../components/Demo.astro'

# Introduction

**uStatic CSS** (from _utility static CSS_) is a set of utility CSS classes for rapid development of modern interfaces. It's based on design system tokens.

:::note[Important]
The library is under development, breaking changes are possible. Not recommended for critical projects.
:::

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

## Quick example

See the power of uStatic CSS with accent-colored buttons:

<Demo title="Buttons">
  <div class="flex gap-2 flex-wrap">
    <button class="px-4 py-2 bg-primary-500 text-white rounded-base hover:bg-primary-600 cursor-pointer active:pulse">
      Primary
    </button>
    <button class="px-4 py-2 bg-secondary-500 text-white rounded-base hover:bg-secondary-600 cursor-pointer active:pulse">
      Secondary
    </button>
    <button class="px-4 py-2 bg-success-500 text-white rounded-base hover:bg-success-600 cursor-pointer active:pulse">
      Success
    </button>
    <button class="px-4 py-2 bg-info-500 text-white rounded-base hover:bg-info-600 cursor-pointer active:pulse">
      Info
    </button>
    <button class="px-4 py-2 bg-warning-500 text-white rounded-base hover:bg-warning-600 cursor-pointer active:pulse">
      Warning
    </button>
    <button class="px-4 py-2 bg-danger-500 text-white rounded-base hover:bg-danger-600 cursor-pointer active:pulse">
      Danger
    </button>
  </div>
</Demo>

This example demonstrates:

- **Color variants** — `bg-primary-500`, `bg-success-500`, etc.
- **Hover effects** — `hover:bg-primary-600`
- **Border radius** — `rounded-base`
- **Cursor** — `cursor-pointer`
- **Click animation** — `active:pulse`

## Available Modules

| Module          | Description                             |
| --------------- | --------------------------------------- |
| `typography`    | Typography: sizes, weights, text colors |
| `spacing`       | Spacing: margin and padding             |
| `flexbox`       | Flex containers and alignment           |
| `grid`          | Grid layouts                            |
| `position`      | Positioning: relative, absolute, fixed  |
| `bg`            | Background: colors, opacity             |
| `border`        | Borders and border radius               |
| `effects`       | Effects: opacity, rotation              |
| `animations`    | Animations: spin, blink                 |
| `sizing`        | Sizing: width, height                   |
| `cursor`        | Cursors                                 |
| `display`       | Display and overflow                    |
| `filters`       | Filters: grayscale                      |
| `outline`       | Outlines                                |
| `scroll`        | Scrollbars                              |
| `hide`          | Hide elements                           |
| `align`         | Vertical alignment                      |
| `interactivity` | Interactivity                           |
| `base`          | Base styles                             |

## Next Steps

- [Installation](/getting-started/installation) — how to install the package
- [Quick Start](/getting-started/quick-start) — first usage example
