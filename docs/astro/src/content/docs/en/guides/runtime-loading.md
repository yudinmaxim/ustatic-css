---
title: Runtime Style Loading
description: Dynamic loading of uStatic CSS modules
---

# Runtime Style Loading

## Vue 3 Plugin

The package provides a ready-to-use Vue plugin for activating styles on the fly.

```javascript
// main.js / main.ts
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);

// Option 1: Load specific modules
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography']
});

// Option 2: Auto-detect modules based on used classes
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg']
});

app.mount('#app');
```

## Plugin Options

| Option | Type | Description |
|--------|------|-------------|
| `modules` | `string[]` | List of modules to connect |
| `classes` | `string[]` | List of classes for auto-detection of modules |

**Available modules:** `align`, `animations`, `base`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hide`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`

If no options are provided — base styles (`ustatic.css`) and variables (`vars.css`) are connected.

## Universal Loader

The `loadStyles` method works in any environment: Vanilla JS, React, Svelte, Nuxt, SSR.

```javascript
import { loadStyles } from 'ustatic-css/scripts';

// Explicit module loading
await loadStyles({ modules: ['typography', 'spacing', 'border'] });

// Auto-detection by classes
await loadStyles({ classes: ['flex', 'justify-between', 'items-center'] });
```

## SSR Compatible

The `loadStyles` method works safely with SSR: if `document` is unavailable, loading is skipped on the server and executed in the browser.

```javascript
// This code is SSR-safe
await loadStyles({ modules: ['flexbox', 'spacing'] });
```

## Examples

### Vue 3: Load specific modules

```javascript
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography', 'border']
});
```

### Vue 3: Auto-detect by classes

```javascript
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg', 'bg-blue-500']
});
```

### React / Svelte / Vanilla JS

```javascript
import { loadStyles } from 'ustatic-css/scripts';

await loadStyles({ modules: ['typography', 'spacing'] });
await loadStyles({ classes: ['flex', 'justify-between', 'items-center'] });
```
