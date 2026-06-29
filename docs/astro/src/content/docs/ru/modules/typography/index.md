---
title: Typography
description: Справочник по модулю typography
---

# Типографика (typography)

Классы для управления текстом: размер, цвет, выравнивание, толщина шрифта и другие.

## Размер текста

| Класс        | Размер | Высота строки |
| ------------ | ------ | ------------- |
| `.text-2xs`  | 10px   | 12px          |
| `.text-xs`   | 12px   | 16px          |
| `.text-sm`   | 14px   | 20px          |
| `.text-base` | 16px   | 24px          |
| `.text-lg`   | 18px   | 28px          |
| `.text-xl`   | 20px   | 28px          |
| `.text-2xl`  | 24px   | 32px          |

```html
<div class="flex flex-col gap-2">
  <p class="text-2xs">Очень маленький (10px)</p>
  <p class="text-xs">Маленький (12px)</p>
  <p class="text-sm">Небольшой (14px)</p>
  <p class="text-base">Базовый (16px)</p>
  <p class="text-lg">Большой (18px)</p>
  <p class="text-xl">Очень большой (20px)</p>
  <p class="text-2xl">Двойной (24px)</p>
</div>
```

## Цвет текста

### Основные цвета

```html
<div class="flex flex-col gap-2">
  <span class="text-primary">Основной цвет</span>
  <span class="text-secondary">Вторичный</span>
  <span class="text-success">Успех</span>
  <span class="text-danger">Опасность</span>
  <span class="text-warning">Предупреждение</span>
  <span class="text-info">Информация</span>
</div>
```

### Оттенки серого

```html
<div class="flex flex-col gap-2">
  <span class="text-gray-50">50 (очень светлый)</span>
  <span class="text-gray-100">100</span>
  <span class="text-gray-200">200</span>
  <span class="text-gray-300">300</span>
  <span class="text-gray-400">400</span>
  <span class="text-gray-500">500 (серый)</span>
  <span class="text-gray-600">600</span>
  <span class="text-gray-700">700</span>
  <span class="text-gray-800">800</span>
  <span class="text-gray-900">900 (очень тёмный)</span>
</div>
```

### Другие цвета

```html
<div class="flex gap-4">
  <span class="text-red-500">Красный</span>
  <span class="text-blue-500">Синий</span>
  <span class="text-green-500">Зелёный</span>
  <span class="text-yellow-500">Жёлтый</span>
</div>

<!-- Специальные -->
<div class="flex gap-4">
  <span class="text-white bg-gray-900 px-2">Белый</span>
  <span class="text-black">Чёрный</span>
  <span class="text-none">Прозрачный</span>
</div>
```

### При наведении

```html
<a href="#" class="text-gray-600 hover:text-primary-500">
  Ссылка с изменением цвета
</a>
```

## Выравнивание текста

| Класс           | CSS свойство          |
| --------------- | --------------------- |
| `.text-left`    | `text-align: left`    |
| `.text-center`  | `text-align: center`  |
| `.text-right`   | `text-align: right`   |
| `.text-justify` | `text-align: justify` |
| `.text-start`   | `text-align: start`   |
| `.text-end`     | `text-align: end`     |

```html
<div class="border p-4">
  <p class="text-left">По левому краю</p>
  <p class="text-center">По центру</p>
  <p class="text-right">По правому краю</p>
  <p class="text-justify">По ширине</p>
</div>
```

## Толщина шрифта

| Класс              | Значение | Описание    |
| ------------------ | -------- | ----------- |
| `.font-thin`       | 100      | Тонкий      |
| `.font-extralight` | 200      | Сверхлёгкий |
| `.font-light`      | 300      | Лёгкий      |
| `.font-normal`    | 400      | Обычный     |
| `.font-medium`     | 500      | Средний     |
| `.font-semibold`   | 600      | Полужирный  |
| `.font-bold`       | 700      | Жирный      |
| `.font-extrabold`  | 800      | Сверхжирный |
| `.font-black`      | 900      | Чёрный      |

```html
<div class="flex flex-col gap-2">
  <span class="font-thin">Thin (100)</span>
  <span class="font-extralight">Extra Light (200)</span>
  <span class="font-light">Light (300)</span>
  <span class="font-normal">Regular (400)</span>
  <span class="font-medium">Medium (500)</span>
  <span class="font-semibold">Semi Bold (600)</span>
  <span class="font-bold">Bold (700)</span>
  <span class="font-extrabold">Extra Bold (800)</span>
  <span class="font-black">Black (900)</span>
</div>
```

## Стиль текста

```html
<p class="italic">Курсив</p>
<p class="underline">Подчёркнутый</p>
<p class="font-caps">ВСЕ ЗАГЛАВНЫЕ</p>
```

## Высота строки (line-height)

| Класс               | Высота |
| ------------------- | ------ |
| `.line-height-2xs`  | 12px   |
| `.line-height-xs`   | 16px   |
| `.line-height-sm`   | 20px   |
| `.line-height-base` | 24px   |
| `.line-height-lg`   | 28px   |
| `.line-height-xl`   | 28px   |
| `.line-height-2xl`  | 32px   |

```html
<p class="line-height-base">Базовая высота строки для удобного чтения</p>
```

## Вертикальное выравнивание

| Класс            | CSS свойство               |
| ---------------- | -------------------------- |
| `.text-top`      | `vertical-align: top`      |
| `.text-middle`   | `vertical-align: middle`   |
| `.text-bottom`   | `vertical-align: bottom`   |
| `.text-baseline` | `vertical-align: baseline` |

```html
<div class="text-lg">
  <span class="text-top">Top</span>
  <span class="text-middle">Middle</span>
  <span class="text-bottom">Bottom</span>
  <span class="text-baseline">Baseline</span>
</div>
```

## Дополнительные классы

### Перенос текста

```html
<!-- Без переноса -->
<p class="nowrap">Текст без переноса строк</p>

<!-- Сохранение пробелов -->
<p class="pre-wrap">Сохраняет пробелы и переносы</p>
```

### Обрезка текста

```html
<!-- Многоточие -->
<div class="w-64 truncate">
  Очень длинный текст, который будет обрезан и заменён многоточием...
</div>

<!-- Обрезка без многоточия -->
<div class="w-64 overflow-hidden nowrap">Обрезанный текст</div>
```

### Разрыв слов

```html
<p class="break-word">Длинноесловокотороене разрывается</p>
```

### Списки

```html
<!-- Без маркеров -->
<ul class="list-style-none">
  <li>Элемент 1</li>
  <li>Элемент 2</li>
</ul>

<!-- Сброс стилей -->
<ul class="list-reset">
  <li>Элемент без маркеров</li>
</ul>
```

## Примеры использования

### Заголовок статьи

```html
<article>
  <h1 class="text-2xl font-bold mb-4">Заголовок статьи</h1>
  <p class="text-gray-600 text-sm mb-6">Опубликовано 26 марта 2024</p>
  <p class="text-base line-height-base">Основной текст статьи...</p>
</article>
```

### Карточка товара

```html
<div class="border rounded-lg p-4">
  <h3 class="text-lg font-bold mb-2">Название товара</h3>
  <p class="text-gray-600 text-sm mb-4">Краткое описание товара</p>
  <div class="flex justify-between items-center">
    <span class="text-xl font-bold text-primary-500">$99.99</span>
    <button class="text-sm text-primary-500 hover:underline">В корзину</button>
  </div>
</div>
```

### Навигация

```html
<nav class="flex items-center gap-6">
  <a href="/" class="text-lg font-bold">Логотип</a>
  <a href="/about" class="text-gray-600 hover:text-primary-500"> О нас </a>
  <a href="/products" class="text-gray-600 hover:text-primary-500">
    Продукты
  </a>
  <a href="/contact" class="text-gray-600 hover:text-primary-500"> Контакты </a>
</nav>
```

### Цитата

```html
<blockquote class="border-l-4 border-primary-500 pl-4 italic">
  <p class="text-lg text-gray-700">«Цитата известного человека»</p>
  <footer class="text-sm text-gray-500 mt-2">— Автор цитаты</footer>
</blockquote>
```

### Подсказка

```html
<p class="text-xs text-gray-500">* Обязательное поле</p>
```

### Уведомление

```html
<div class="bg-success text-white p-4 rounded">
  <p class="font-bold mb-1">Успешно!</p>
  <p class="text-sm">Операция выполнена успешно</p>
</div>
```

### Ссылка с подчёркиванием

```html
<a href="#" class="text-primary-500 hover:underline">
  Ссылка с подчёркиванием при наведении
</a>
```

### Код

```html
<p>
  Используйте
  <code class="bg-gray-100 px-2 py-1 rounded text-sm">npm install</code>
  для установки пакета
</p>

<pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
  <code>npm install ustatic-css</code>
</pre>
```

## Таблица классов

### Размер

| Классы                                                                          |
| ------------------------------------------------------------------------------- |
| `text-2xs`, `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` |

### Цвет

| Категория    | Классы                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------- |
| **Основные** | `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info` |
| **Серый**    | `text-gray-50`, `text-gray-100` ... `text-gray-900`                                          |
| **Цвета**    | `text-red-*`, `text-blue-*`, `text-green-*`, `text-yellow-*`                                 |
| **Спец.**    | `text-white`, `text-black`, `text-none`                                                      |
| **Hover**    | `hover:text-{color}`                                                                         |

### Выравнивание

| Классы                                                                             |
| ---------------------------------------------------------------------------------- |
| `text-left`, `text-center`, `text-right`, `text-justify`, `text-start`, `text-end` |

### Толщина

| Классы                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black` |

### Стиль

| Классы                                                                        |
| ----------------------------------------------------------------------------- |
| `italic`, `underline`, `font-caps`, `truncate` |

### Высота строки

| Классы                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| `line-height-2xs`, `line-height-xs`, `line-height-sm`, `line-height-base`, `line-height-lg`, `line-height-xl`, `line-height-2xl` |

### Вертикальное

| Классы                                                    |
| --------------------------------------------------------- |
| `text-top`, `text-middle`, `text-bottom`, `text-baseline` |

### Дополнительно

| Классы                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `nowrap` (`nowrap`), `pre-wrap` (`pre-wrap`), `truncate`, `text-ellipsis`, `break-word`, `list-style-none`, `list-reset` |
| `font-family-inherit`, `font-size-inherit`, `font-caps`                                                                                        |
| `text-decoration-none`, `text-style-clear`                                                                                                     |
| `text-text-top`, `text-text-bottom`, `text-sub`, `text-super`                                                                                  |
| Алиасы выравнивания: `left-align`, `center`, `right-align`, `justify`                                                                          |

## См. также

- [Выравнивание](../align/index.md) — вертикальное выравнивание
- [Цвета фона](../bg/index.md) — фоновые цвета
- [Отступы](../spacing/index.md) — для создания промежутков
