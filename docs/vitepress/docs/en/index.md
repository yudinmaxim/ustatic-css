---
layout: home

hero:
  name: uStatic CSS
  text: Utility CSS Framework
  tagline: A set of CSS classes for building modern interfaces based on design tokens.
  image:
    repo: yudinmaxim/ustatic-css
  actions:
    - text: Get Started
      link: /en/getting-started/introduction
      theme: brand
    - text: GitHub
      link: https://github.com/yudinmaxim/ustatic-css
      theme: alt

features:
  - title: Unified Token System
    details: Consistency across microfrontends thanks to a shared design system.
  - title: Modular Loading
    details: Load only the modules you need. Do it at runtime.
  - title: Runtime Activation
    details: Load modules only where they're needed.
  - title: SSR-Compatible
    details: Works safely on the server and in the browser.
---

## Quick Example

Here's an example of a card with flexbox. Try hovering over the button — hover effect works!

::: component-view
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Header</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 active:pulse cursor-pointer">
    Press me
  </button>
</div>
:::

## 350+ Classes Available

- **Typography**: sizes, weights, text colors
- **Spacing**: margin and padding on all sides
- **Flexbox**: alignment, direction, gap
- **Grid**: grids with automatic columns
- **Positioning**: relative, absolute, fixed, z-index
- **Backgrounds and borders**: colors, transparency, rounded corners
- **Animations**: spinning, blinking, underlining
- **And much more...**
