# Модуль типографики (typography)

CSS классы для управления текстом — шрифт, размер, цвет, выравнивание и т.д.

## Размер текста

```html
<p class="text-2xs">Очень маленький (10px)</p>
<p class="text-xs">Маленький (12px)</p>
<p class="text-sm">Небольшой (14px)</p>
<p class="text-base">Базовый (16px)</p>
<p class="text-lg">Большой (18px)</p>
<p class="text-xl">Очень большой (20px)</p>
<p class="text-2xl">Двойной (24px)</p>
```

## Цвет текста

### Основные цвета
```html
<span class="text-primary">Основной</span>
<span class="text-secondary">Вторичный</span>
<span class="text-success">Успех</span>
<span class="text-danger">Опасность</span>
<span class="text-warning">Предупреждение</span>
<span class="text-info">Информация</span>
```

### Оттенки серого
```html
<span class="text-gray-50">50</span>
<span class="text-gray-100">100</span>
<span class="text-gray-200">200</span>
<span class="text-gray-300">300</span>
<span class="text-gray-400">400</span>
<span class="text-gray-500">500</span>
<span class="text-gray-600">600</span>
<span class="text-gray-700">700</span>
<span class="text-gray-800">800</span>
<span class="text-gray-900">900</span>
```

### Другие цвета
```html
<span class="text-red-500">...</span>
<span class="text-blue-500">...</span>
<span class="text-white">Белый</span>
<span class="text-black">Чёрный</span>
<span class="text-none">Прозрачный</span>
```

### При наведении
```html
<span class="hover:text-primary-500">Цвет при наведении</span>
```

## Выравнивание текста

```html
<p class="text-left">По левому краю</p>
<p class="text-center">По центру</p>
<p class="text-right">По правому краю</p>
<p class="text-justify">По ширине</p>
<p class="text-start">Начало</p>
<p class="text-end">Конец</p>
```

## Толщина шрифта

```html
<span class="font-thin">Тонкий (100)</span>
<span class="font-extralight">Сверхлёгкий (200)</span>
<span class="font-light">Лёгкий (300)</span>
<span class="font-regular">Обычный (400)</span>
<span class="font-medium">Средний (500)</span>
<span class="font-semibold">Полужирный (600)</span>
<span class="font-bold">Жирный (700)</span>
<span class="font-extrabold">Сверхжирный (800)</span>
<span class="font-black">Чёрный (900)</span>
```

## Стиль текста

```html
<span class="italic">Курсив</span>
<span class="underline">Подчёркнутый</span>
```

## Высота строки (line-height)

```html
<p class="line-height-2xs">Высота строки 12px</p>
<p class="line-height-xs">Высота строки 16px</p>
<p class="line-height-sm">Высота строки 20px</p>
<p class="line-height-base">Высота строки 24px</p>
<p class="line-height-lg">Высота строки 28px</p>
<p class="line-height-xl">Высота строки 28px</p>
<p class="line-height-2xl">Высота строки 32px</p>
```

## Вертикальное выравнивание

```html
<span class="text-top">text-top</span>
<span class="text-middle">middle</span>
<span class="text-bottom">bottom</span>
<span class="text-baseline">baseline</span>
```

## Дополнительные классы

```html
<!-- Перенос текста -->
<p class="whitespace-nowrap">Без переноса</p>
<p class="whitespace-pre-wrap">Сохраняет пробелы</p>

<!-- Обрезка текста -->
<p class="truncate">Обрезает текст многоточием...</p>
<p class="text-ellipsis">Многоточие</p>

<!-- Разрыв слов -->
<p class="break-word">Перенос длинных слов</p>

<!-- Список без маркеров -->
<ul class="list-style-none">
  <li>Элемент 1</li>
  <li>Элемент 2</li>
</ul>

<ul class="list-reset">
  <li>Сброс стилей списка</li>
</ul>

<!-- Семейство шрифта -->
<p class="font-family-inherit">Наследовать шрифт</p>

<!-- Размер шрифта -->
<p class="font-size-inherit">Наследовать размер</text>

<!-- Заглавные буквы -->
<p class="font-caps">ВСЕ ЗАГЛАВНЫЕ</p>
```

## Примеры

```html
<!-- Заголовок -->
<h1 class="text-2xl font-bold">Заголовок</h1>

<!-- Ссылка -->
<a href="#" class="text-primary hover:underline">Ссылка</a>

<!-- Кнопка -->
<button class="text-white bg-primary-500 px-4 py-2 rounded">
  Кнопка
</button>

<!-- Текст с многоточием -->
<div class="w-64 truncate">
  Очень длинный текст, который будет обрезан...
</div>
```
