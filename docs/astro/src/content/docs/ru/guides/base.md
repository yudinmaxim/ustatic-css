---
title: Базовые стили (Base)
outline:
  level: 2
---

# Базовые стили (Base)

Базовые стили обеспечивают сброс и нормализацию отображения элементов во всех браузерах, а также предоставляют утилитарные классы для управления box-sizing.

> **Важно:** Модуль `base` закомментирован в `ustatic-index.scss` по умолчанию.
> Подключите его отдельно: `import 'ustatic-css/base'` или раскомментируйте импорт в своём SCSS.

## Глобальный сброс (CSS Reset)

Модуль `base` включает глобальный сброс стилей для следующих элементов:

### Общий сброс (`reset.scss`)

- `*`, `::before`, `::after` — `box-sizing: border-box`, сброс границ
- `html` — базовая типографика: `line-height: 1.5`, системный шрифт
- `body` — сброс `margin`, `overflow-y: hidden`
- `hr` — корректная высота и цвет
- Заголовки, параграфы, списки — сброс `margin`

### Сброс кнопок (`button.scss`)

- Убирает фоны и границы по умолчанию
- Наследует шрифт от родителя
- Убирает `outline` в Firefox

### Сброс полей ввода (`input.scss`, `textarea.scss`, `select.scss`, `optgroup.scss`)

- Единый стиль для текстовых полей
- Сброс `appearance` для select
- Корректные отступы и размер шрифта
- Стили для optgroup

### Сброс ссылок (`links.scss`)

- Убирает подчёркивание по умолчанию
- Устанавливает цвет через токен `base.color.variant.primary`
- Стили для посещённых и активных ссылок

### Сброс заголовков (`headings.scss`)

- Сброс `font-size` и `font-weight` для `h1`–`h6`
- Наследование от системных настроек

### Сброс текста (`text.scss`)

- Сброс `font-size` для `small`, `strong`, `em` и других текстовых элементов
- Корректное отображение `code`, `pre`, `kbd`

### Сброс списков (`lists.scss`)

- Убирает маркеры и отступы у `ul`, `ol`
- Стили для вложенных списков

### Сброс таблиц (`tables.scss`)

- `border-collapse: collapse`
- Сброс отступов в ячейках

### Сброс медиа (`media.scss`)

- `img`, `video`, `canvas` — `display: block`, `max-width: 100%`
- Адаптивные изображения

### Сброс форм (`form.scss`)

- Сброс `fieldset`, `legend`
- Единые отступы для элементов формы

### Состояния (`states.scss`)

- Стили для `:focus-visible`, `:disabled`, `:read-only`
- Плавные переходы для `transition-colors`

### Скроллбар (`scrollbar.scss`)

- Кастомные стили для полосы прокрутки
- Тонкий скроллбар в WebKit-браузерах

## Утилитарные классы

Модуль также предоставляет классы для управления `box-sizing`:

| Класс | CSS свойство | Описание |
|-------|-------------|----------|
| `.box-border` | `box-sizing: border-box` | Границы и padding входят в ширину |
| `.box-content` | `box-sizing: content-box` | Ширина без учёта границ и padding |

## Примеры

::: component-view
<div class="flex gap-4">
  <div class="box-border w-32 p-4 border-2 border-blue-500">
    border-box
  </div>
  <div class="box-content w-32 p-4 border-2 border-green-500">
    content-box
  </div>
</div>
:::

```html
<div class="box-border">border-box</div>
<div class="box-content">content-box</div>
```

## Подключение

```bash
# Через npm
npm install ustatic-css

# Импорт в SCSS
@import 'ustatic-css/src/css/modules/base/index.scss';

# Или через CSS
@import 'ustatic-css/base';
```
