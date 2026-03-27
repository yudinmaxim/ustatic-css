---
title: Installation
description: How to install and configure uStatic CSS
---

# Installation

## Requirements

- Node.js 18+
- npm, pnpm or yarn

## Install via npm

```bash
npm install ustatic-css
```

## Install via pnpm

```bash
pnpm add ustatic-css
```

## Install via yarn

```bash
yarn add ustatic-css
```

## Connect in Your Project

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

Add the plugin to `main.js`:

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

// Load required modules
await loadStyles({ modules: ['flexbox', 'spacing', 'typography'] });
```

## Next Steps

- [Quick Start](/getting-started/quick-start) — first example
- [Using CSS Classes](/guides/css-classes) — complete class reference
