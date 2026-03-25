# Runtime Style Loading

## Vue 3 Plugin

The package provides a ready-made Vue plugin for activating styles on the fly.

```javascript
// main.js / main.ts
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);

// Option 1: load specific modules
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography']
});

// Option 2: auto-detect modules from used classes
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg']
});

app.mount('#app');
```

## Plugin Options

| Option | Type | Description |
|--------|------|-------------|
| `modules` | `string[]` | List of modules to load |
| `classes` | `string[]` | List of classes for auto-detecting modules |

**Available modules:** `align`, `animations`, `base`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hide`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`

If no options are provided — base styles (`ustatic.css`) and variables (`vars.css`) are loaded.

## Universal Loader

The `loadStyles` method works in any environment: Vanilla JS, React, Svelte, Nuxt, SSR.

```javascript
import { loadStyles } from 'ustatic-css/scripts';

// Explicit module loading
await loadStyles({ modules: ['typography', 'spacing', 'border'] });

// Auto-detect from classes
await loadStyles({ classes: ['flex', 'justify-between', 'items-center'] });
```

## SSR-Compatible

The `loadStyles` method works safely with SSR: if `document` is not available, loading is skipped on the server and executed in the browser.

```javascript
// This code is SSR-safe
await loadStyles({ modules: ['flexbox', 'spacing'] });
