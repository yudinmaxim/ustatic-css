# Быстрый старт

## Использование CSS-классов

Подключите основной файл стилей и используйте классы в разметке:

```javascript
import 'ustatic-css';
```

```html
<!-- Кнопка -->
<button class="flex items-center justify-center gap-2 p-4 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer">
  Нажми меня
</button>

<!-- Карточка -->
<div class="block p-6 bg-white border border-gray-200 rounded-base">
  <h3 class="text-lg font-bold text-gray-800">Заголовок</h3>
  <p class="text-gray-600 mt-2">Описание карточки</p>
</div>

<!-- Бейдж -->
<span class="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-base">
  New
</span>

<!-- Анимация вращения -->
<div class="animation:spin-4">⚙️</div>
```

## Цвета с яркостью

Все цветовые классы поддерживают указания яркости через дефис:

- `bg-red-500`, `bg-blue-300`, `bg-green-700`
- `text-gray-600`, `text-primary-400`
- `border-purple-500`, `border-orange-200`

## Доступные классы

### Типографика

```html
<p class="text-sm font-medium">Текст</p>
<p class="text-lg font-bold">Заголовок</p>
```

### Отступы

```html
<div class="p-4 m-2">Отступы</div>
<div class="px-4 py-2">Горизонтальные и вертикальные</div>
```

### Flexbox

```html
<div class="flex justify-between items-center gap-4">Контейнер</div>
```

### Позиционирование

```html
<div class="relative">
  <div class="absolute top-0 right-0">Абсолютный элемент</div>
</div>
```

## Следующие шаги

- [CSS-классы](/guides/css-classes) — полный справочник
- [Рантайм загрузка](/guides/runtime-loading) — динамическая загрузка
