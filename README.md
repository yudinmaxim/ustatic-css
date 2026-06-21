# ustatic-css

> **u**tility **static** **css** framework — a set of utility CSS classes for rapid interface development.

<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.1-blue" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/module-ESM%20%7C%20CJS-lightgrey" alt="Modules">
</p>

**[🇷🇺 Русская версия](./README.ru.md)**

---

## 📦 Overview

**ustatic-css** is a utility CSS framework for building modern interfaces. Built on design system tokens.

### Why ustatic-css?

In micro-frontends, typical utility frameworks (Tailwind, UnoCSS) create challenges:
- Complex configurations requiring synchronization between teams
- Style duplication between modules, increasing bundle size

**ustatic-css** solves these problems:
- Unified token system for consistency across micro-frontends
- Modular loading of only required styles
- Runtime class activation capability

### Project includes

- 🎨 Utility CSS classes for typography, spacing, positioning, colors
- 🧩 `useCssProperties` and `useTokens` hooks for style management in JavaScript
- 🌐 Responsive design with breakpoints `xs`, `md`, `def`, `lg`
- 🔌 Module exports as ESM and CJS

## 🌐 Documentation

Full documentation is available at [https://yudinmaxim.github.io/ustatic-css/](https://yudinmaxim.github.io/ustatic-css/)

- [📘 `useCssProperties` — CSS Properties Management](https://yudinmaxim.github.io/ustatic-css/api/use-css-properties)
- [📘 `useTokens` — CSS Tokens Usage](https://yudinmaxim.github.io/ustatic-css/api/use-tokens)
- [📘 Utility Classes (detailed)](https://yudinmaxim.github.io/ustatic-css/guides/css-classes)
- [📗 Dictionary of All Classes](https://yudinmaxim.github.io/ustatic-css/reference/classes)

## 🚀 Quick Start

### Installation

```bash
npm install ustatic-css
```

### Usage

#### CSS Classes

Import the main stylesheet:

```js
import 'ustatic-css';
```

Or import individual modules:

```js
import 'ustatic-css/base';
import 'ustatic-css/typography';
import 'ustatic-css/spacing';
import 'ustatic-css/flexbox';
```

Use classes in markup:

```html
<!-- Card with flexbox -->
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Title</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer">
    Button
  </button>
</div>

<!-- Badge -->
<span class="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-base">
  New
</span>

<!-- Spinning animation -->
<div class="animation:spin-4">⚙️</div>
```

### Available Classes

**Core modules:**
- **Typography**: `.text-{size}`, `.font-{weight}`, `.text-{color}-{brightness}`
- **Spacing**: `.m-{space}`, `.p-{space}`, `.mt-{space}`, `.px-{space}`, etc.
- **Flexbox**: `.flex`, `.items-center`, `.justify-between`, `.gap-{size}`
- **Positioning**: `.relative`, `.absolute`, `.z-{index}`
- **Background**: `.bg-{color}-{brightness}`, `.bg-opacity-{0|25|50|75|100}`
- **Borders**: `.border`, `.border-{color}-{brightness}`, `.rounded-{size}` (e.g., `.rounded-base`, `.rounded-lg`)
- **Sizing**: `.w-{size}`, `.h-{size}`, `.min-w-{size}`, `.max-h-{size}`
- **Effects**: `.opacity-{0-100}`, `.rotate-{angle}`
- **Animations**: `.blink`, `.animation:spin-{1-10}`, `.active:pulse`

**Colors with brightness:** All color classes support brightness specification via hyphen:
- `.bg-red-500`, `.bg-blue-300`, `.bg-green-700`
- `.text-gray-600`, `.text-primary-400`
- `.border-purple-500`, `.border-orange-200`

For the complete list of 350+ classes, see [Utility Classes Dictionary](https://yudinmaxim.github.io/ustatic-css/reference/classes).

#### Runtime Style Activation

To load styles, use the ready-made Vue plugin or the universal method. Direct dynamic CSS import via `import()` is not required.

#### Vue 3 Plugin (ready-made)

The package provides a ready-made plugin for on-the-fly style activation.

```js
// main.js / main.ts
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);

// Option 1: load specific framework modules
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography'] // see module list below
});

// Option 2: auto-detect modules from used classes
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg']
});

app.mount('#app');
```

Plugin/loader options:

| Option | Type | Description |
|--------|------|-------------|
| `modules` | `string[]` | List of modules to include |
| `classes` | `string[]` | List of classes for auto-detection |

**Available modules:** `align`, `animations`, `base`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hide`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`

If no options are provided — base styles (`ustatic.css`) and variables (`vars.css`) are loaded.

#### Loader Usage Examples

```js
// Vue 3: load specific modules
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography', 'border']
});

// Vue 3: auto-detect from classes
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg', 'bg-blue-500']
});

// Vanilla JS / React / Svelte: explicit loading
import { loadStyles, configureUstaticCss } from 'ustatic-css/scripts';

loadStyles({ modules: ['typography', 'spacing'] });

// Auto-detect from classes
loadStyles({ classes: ['flex', 'justify-between', 'items-center'] });

// Set global basePath once
configureUstaticCss({ basePath: '/assets/ustatic-css' });
loadStyles(); // uses the configured basePath
```

> **Note:** `loadStyles` maps classes to **whole CSS modules**, not individual properties. For example, using `p-4` loads the entire `spacing.css` module (~37 KB), not just one rule. Modules are cached by the browser after the first load.

#### SSR Compatibility

The `loadStyles` method works safely with SSR: if `document` is not available, loading is skipped on the server and performed in the browser. For server-side HTML generation, use `getStyleLinks`:

```ts
import { getStyleLinks } from 'ustatic-css/scripts';

// In SSR (e.g. Astro, Next.js)
const links = getStyleLinks({ mode: 'ssr', basePath: '/ustatic-css' });
// links = [
//   { href: '/ustatic-css/modules/flexbox.css', rel: 'stylesheet', type: 'text/css' },
//   { href: '/ustatic-css/vars.css', rel: 'stylesheet', type: 'text/css' }
// ]
// Then convert to <link> tags in your HTML template
```

**Same `basePath` on client and server** prevents duplicate CSS during hydration: `loadStyles` checks the DOM before adding `<link>` elements.

## 🧩 Features

- **Ready Vue Plugin** — activation and on-demand loading of modular styles at runtime
- **Universal Loader** — `loadStyles` method for any environment (Vanilla/React/Svelte/Nuxt/SSR)
- **Auto-detection** — loader automatically determines required modules from class list
- **Design System Tokens** — all styles based on a unified token system
- **350+ Utility Classes** — 19 modules for typography, spacing, positioning, colors, and effects
- **Colors with Brightness** — support for shades like `{color}-{brightness}` (red-500, blue-300, green-700)
- **Dynamic Hooks** — `useCssProperties` and `useTokens` for style management in JavaScript
- **Responsiveness** — breakpoint support for `xs`, `md`, `def`, `lg`
- **Modularity** — import only needed components to reduce bundle size
- **SSR Compatibility** — safe operation on server and browser
- **ESM and CJS** — modern module standards support

## TODO
[ ] Develop interactive examples and library usage documentation

[ ] Publish to public registries

## 📄 License

This project is licensed under the MIT license. See [LICENSE](./LICENSE) for details.

---

🤖 *Part of the documentation was created using artificial intelligence to improve readability and completeness.*
