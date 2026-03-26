# Главный файл стилей (ustatic-index.scss)

Основной файл, который импортирует все модули uStatic CSS в правильном порядке.

## Структура импортов

Порядок импортов важен для правильного каскадирования стилей:

```scss
// 1. Утилиты для работы с токенами
@import './utils/token';

// 2. Глобальные переменные
@import './variables.scss';

// 3. Базовые стили (сброс и нормализация)
@import './modules/base';

// 4. Типографика
@import './modules/typography';

// 5. Остальные модули
@import './modules/display';
@import './modules/align';
@import './modules/spacing';
@import './modules/grid';
@import './modules/flexbox';
@import './modules/position';
@import './modules/border';
@import './modules/hide';
@import './modules/sizing';
@import './modules/bg';
@import './modules/filters';
@import './modules/effects';
@import './modules/interactivity/';
@import './modules/cursor';
@import './modules/scroll';
@import './modules/animations';
@import './modules/outline/';
```

## Использование

Подключите этот файл в вашем проекте для получения всех стилей:

### Vite
```typescript
import 'ustatic-css/dist/ustatic-index.scss'
```

### Webpack
```scss
@import 'ustatic-css/dist/ustatic-index.scss';
```

### Прямой импорт в SCSS
```scss
@use 'ustatic-css/src/css/ustatic-index.scss';
```

## Генерируемые классы

После компиляции становятся доступны классы для:
- Flexbox (flex, justify-*, items-*, etc.)
- Grid (grid, grid-cols-*, gap-*)
- Типографика (text-*, font-*, leading-*)
- Отступы (m-*, p-*, mx-*, etc.)
- Размеры (w-*, h-*, min-w-*, max-h-*)
- Позиционирование (absolute, relative, fixed, top-*, left-*)
- Границы (border-*, rounded-*)
- Фоны (bg-*)
- Цвета (text-*, bg-*, border-*)
- Эффекты (opacity-*, rotate-*)
- Анимации (animate-*, fade-*, slide-up-*)
- И многое другое...

## Кастомизация

Вы можете импортировать только нужные модули:

```scss
// Только flexbox и grid
@import 'ustatic-css/src/css/modules/flexbox';
@import 'ustatic-css/src/css/modules/grid';

// Или импортировать базовые стили отдельно
@import 'ustatic-css/src/css/modules/base';
```
