# uStatic CSS

Главный экспортный файл библиотеки uStatic CSS.

## Экспорты

Библиотека экспортирует следующие модули:

### useCssProperties
Хук для управления CSS-свойствами через классы и напрямую через CSS-переменные.

**Импорт:**
```typescript
import { useCssProperties } from 'ustatic-css'
```

### useTokens
Хук для работы с CSS-токенами дизайн-системы. Позволяет устанавливать, получать и удалять CSS-токены.

**Импорт:**
```typescript
import { useTokens } from 'ustatic-css'
```

### Vue Plugin
Vue-плагин для автоматической загрузки стилей в приложениях Vue.

**Импорт:**
```typescript
import { ustaticCss } from 'ustatic-css'

// В main.ts
app.use(ustaticCss, {
  autoLoad: true,
  modules: ['flexbox', 'grid'],
  classes: ['flex', 'grid']
})
```

## Использование

### В React/Vue приложениях
```typescript
import { useCssProperties, useTokens } from 'ustatic-css'

// Работа с CSS-свойствами
const { setCssProperty, setCssPropertiesViaClass } = useCssProperties()
setCssProperty('--custom-color', '#ff0000')

// Работа с токенами
const { setCssToken, getCssToken } = useTokens()
setCssToken('base.color.primary', '#3b82f6')
```

### В Vue приложениях
```typescript
import { ustaticCss } from 'ustatic-css'

app.use(ustaticCss, {
  autoLoad: true, // Автозагрузка стилей при инициализации
  modules: ['flexbox', 'grid'], // Загрузка конкретных модулей
  classes: ['flex', 'grid'] // Определение модулей по классам
})
```
