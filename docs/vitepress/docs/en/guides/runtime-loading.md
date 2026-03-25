# Runtime Style Loading

## Vue 3 Plugin

```javascript
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography']
});
app.mount('#app');
```

## Options

| Option | Type | Description |
|--------|------|-------------|
| `modules` | `string[]` | List of modules to load |
| `classes` | `string[]` | Auto-detect modules from classes |

## Universal Loader

```javascript
import { loadStyles } from 'ustatic-css/scripts';

await loadStyles({ modules: ['typography', 'spacing'] });
```

## SSR-Compatible

Safe for SSR — skips loading on server.
