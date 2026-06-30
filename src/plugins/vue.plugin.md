# Vue плагин uStatic CSS

Плагин для автоматической загрузки стилей uStatic CSS в Vue приложениях.

## Установка

```typescript
import { ustaticCss } from 'ustatic-css'
import { createApp } from 'vue'

const app = createApp(App)
app.use(ustaticCss)
app.mount('#app')
```

## Параметры плагина (PluginOptions)

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `autoLoad` | `boolean` | `true` | Автоматически загружать стили при инициализации плагина |
| `modules` | `string[]` | `[]` | Список модулей для загрузки |
| `classes` | `string[]` | `[]` | Список классов, по которым определяются нужные модули |

## Примеры использования

### Базовая инициализация
```typescript
app.use(ustaticCss)
```

### С указанием модулей
```typescript
app.use(ustaticCss, {
  modules: ['flexbox', 'grid', 'typography']
})
```

### С указанием классов (модули определяются автоматически)
```typescript
app.use(ustaticCss, {
  classes: ['flex', 'grid', 'text-center', 'w-64']
})
```

### Отключение автозагрузки
```typescript
app.use(ustaticCss, {
  autoLoad: false
})
// Стили можно загрузить вручную через app.config.globalProperties.$loadUStaticStyles()
```

## Как это работает

1. При вызове `app.use(ustaticCss)` плагин проверяет, доступен ли `document` (не SSR)
2. Если `autoLoad: true`, плагин динамически импортирует CSS файлы:
   - `ustatic-index.scss` — основные стили
   - `_ustatic-vars.scss` — CSS переменные (токены)
3. Создаёт `<link>` элементы в `<head>` документа для загрузки стилей

## Типы

```typescript
interface PluginOptions {
  /** Загружать ли стили автоматически при установке плагина */
  autoLoad?: boolean
  
  /** Список модулей для загрузки */
  modules?: string[]
  
  /** Список классов для определения модулей */
  classes?: string[]
}
```
