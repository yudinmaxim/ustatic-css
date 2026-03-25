# Installation

> * the package is still in development and not yet published

## Requirements

- Node.js 18+
- npm, pnpm or yarn

## Installation via npm

```bash
npm install ustatic-css
```

## Installation via pnpm

```bash
pnpm add ustatic-css
```

## Installation via yarn

```bash
yarn add ustatic-css
```

## Setup in Project

### ESM

```javascript
import 'ustatic-css';
```

### CJS

```javascript
require('ustatic-css');
```

## Usage with Frameworks

### Vue 3

Add the plugin in `main.js`:

```javascript
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);
app.use(ustaticCss);
app.mount('#app');
```

### React / Svelte / Vanilla JS

Use the `loadStyles` function:

```javascript
import { loadStyles } from 'ustatic-css/scripts';

// Load needed modules
await loadStyles({ modules: ['flexbox', 'spacing', 'typography'] });
```

## Next Steps

- [Quick Start](/en/getting-started/quick-start) — first example
- [CSS Classes](/en/guides/css-classes) — complete reference
