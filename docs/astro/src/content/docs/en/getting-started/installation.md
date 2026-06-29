---
title: Installation
description: How to install and configure uStatic CSS
---

## Requirements

- Node.js 18+
- npm, pnpm or yarn

## Install

:::tab-group
:::tab[npm]
```bash
npm install ustatic-css
```
:::
:::tab[pnpm]
```bash
pnpm add ustatic-css
```
:::
:::tab[yarn]
```bash
yarn add ustatic-css
```
:::
:::

## Connect in Your Project

:::tab-group
:::tab[ESM]
```javascript
import 'ustatic-css';
```
:::
:::tab[CJS]
```javascript
require('ustatic-css');
```
:::
:::

## Usage with Frameworks

:::tab-group
:::tab[Vue 3]
Add the plugin to `main.js`:

```javascript
import { createApp } from "vue";
import { ustaticCss } from "ustatic-css/scripts";
import App from "./App.vue";

const app = createApp(App);
app.use(ustaticCss);
app.mount("#app");
```
:::
:::tab[React / Svelte / Vanilla JS]
Use the `loadStyles` function:

```javascript
import { loadStyles } from "ustatic-css/scripts";

// Load required modules
await loadStyles({ modules: ["flexbox", "spacing", "typography"] });
```
:::
:::

## Next Steps

- [Quick Start](/en/getting-started/quick-start) — first example
- [Using CSS Classes](/en/guides/css-classes) — complete class reference