---
title: Installation
description: How to install and configure uStatic CSS
---

import { Tabs, TabItem } from '@astrojs/starlight/components'

# Installation

## Requirements

- Node.js 18+
- npm, pnpm or yarn

## Install

<Tabs>
  <TabItem label="npm">
  ```bash
  npm install ustatic-css
  ```
  </TabItem>
  <TabItem label="pnpm">
  ```bash
  pnpm add ustatic-css
  ```
  </TabItem>
  <TabItem label="yarn">
  ```bash
  yarn add ustatic-css
  ```
  </TabItem>
</Tabs>

## Connect in Your Project

<Tabs>
  <TabItem label="ESM">
  ```javascript
  import 'ustatic-css';
  ```
  </TabItem>
  <TabItem label="CJS">
  ```javascript
  require('ustatic-css');
  ```
  </TabItem>
</Tabs>

## Usage with Frameworks

<Tabs>
  <TabItem label="Vue 3">
  Add the plugin to `main.js`:

```javascript
import { createApp } from "vue";
import { ustaticCss } from "ustatic-css/scripts";
import App from "./App.vue";

const app = createApp(App);
app.use(ustaticCss);
app.mount("#app");
```

  </TabItem>
  <TabItem label="React / Svelte / Vanilla JS">
  Use the `loadStyles` function:

```javascript
import { loadStyles } from "ustatic-css/scripts";

// Load required modules
await loadStyles({ modules: ["flexbox", "spacing", "typography"] });
```

  </TabItem>
</Tabs>
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

## Connect in Your Project

:::tab-group
:::tab[ESM]

```javascript
import "ustatic-css";
```

:::
:::tab[CJS]

```javascript
require("ustatic-css");
```

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

## Next Steps

- [Quick Start](/getting-started/quick-start) — first example
- [Using CSS Classes](/guides/css-classes) — complete class reference
