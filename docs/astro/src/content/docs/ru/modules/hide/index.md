---
title: Hide
description: Справочник по модулю hide
---

# Скрытие (hide)

Классы для скрытия элементов на разных брейкпоинтах (адаптивное скрытие).

## Классы

### Скрытие на всех размерах

```html
<div class="hide">Этот элемент никогда не отображается</div>
```

### Скрытие на брейкпоинтах

Библиотека использует 4 брейкпоинта: `xs` (480px), `md` (768px), `def` (1024px), `lg` (1280px).
Класс `.hide-{breakpoint}` скрывает элемент в диапазоне от **предыдущего** брейкпоинта до текущего.

| Класс        | Диапазон скрытия | Когда виден                                    |
| ------------ | ---------------- | ---------------------------------------------- |
| `.hide-md`   | 0px – 767px      | На экранах ≥ 768px (md, def, lg)               |
| `.hide-def`  | 768px – 1023px   | На экранах < 768px (xs) или ≥ 1024px (def, lg) |
| `.hide-lg`   | 1024px – 1279px  | На экранах < 1024px (xs, md) или ≥ 1280px (lg) |
| `.hide-full` | ≥ 1280px         | На экранах < 1280px (xs, md, def)              |

```html
<!-- Скрыт на мобильных и маленьких планшетах -->
<div class="hide-md">Видно на экранах ≥ 768px</div>

<!-- Скрыт в диапазоне md (планшет) -->
<div class="hide-def">Видно на xs (< 768px) или ≥ 1024px</div>

<!-- Скрыт в диапазоне def (десктоп) -->
<div class="hide-lg">Видно на xs, md (< 1024px) или ≥ 1280px</div>

<!-- Скрыт на больших экранах -->
<div class="hide-full">Видно на экранах < 1280px</div>
```

## Примеры использования

### Мобильное меню

```html
<!-- Кнопка гамбургер (видна только на мобильных) -->
<button class="hide-lg cursor-pointer p-2">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

<!-- Десктопное меню (скрыто на мобильных) -->
<nav class="hide-md hide-full">
  <a href="/" class="px-4 py-2 hover:bg-gray-100">Главная</a>
  <a href="/about" class="px-4 py-2 hover:bg-gray-100">О нас</a>
  <a href="/products" class="px-4 py-2 hover:bg-gray-100">Продукты</a>
  <a href="/contact" class="px-4 py-2 hover:bg-gray-100">Контакты</a>
</nav>
```

### Адаптивная боковая панель

```html
<div class="flex">
  <!-- Сайдбар (скрыт на мобильных) -->
  <aside class="hide-md w-64 bg-white border-r p-4">
    <nav class="space-y-2">
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 1</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 2</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 3</a>
    </nav>
  </aside>

  <!-- Основной контент -->
  <main class="flex-1 p-4">
    <h1 class="text-2xl font-bold">Заголовок</h1>
    <p>Основной контент страницы...</p>
  </main>
</div>
```

### Адаптивные карточки

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Карточки видны на всех экранах -->
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 1</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 2</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 3</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 4</h3>
    <p class="text-gray-600">Описание</p>
  </div>
</div>
```

### Промо-блок для мобильных

```html
<!-- Промо-блок (только мобильные) -->
<div class="hide-lg bg-primary-500 text-white p-4 text-center">
  <p>🎉 Специальное предложение для мобильных пользователей!</p>
  <button class="mt-2 bg-white text-primary-500 px-4 py-2 rounded">
    Узнать больше
  </button>
</div>

<!-- Основной контент -->
<div class="p-4">
  <h1 class="text-2xl font-bold">Добро пожаловать</h1>
  <p>Основной контент для всех устройств</p>
</div>
```

### Адаптивная таблица

```html
<div>
  <!-- Мобильный вид (карточки) -->
  <div class="hide-lg space-y-4">
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">Товар 1</h3>
      <p class="text-primary-500">$99</p>
      <p class="text-gray-600">Описание товара</p>
    </div>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">Товар 2</h3>
      <p class="text-primary-500">$149</p>
      <p class="text-gray-600">Описание товара</p>
    </div>
  </div>

  <!-- Десктопный вид (таблица) -->
  <table class="hide-md w-full border">
    <thead>
      <tr class="bg-gray-50">
        <th class="border p-2">Название</th>
        <th class="border p-2">Цена</th>
        <th class="border p-2">Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Товар 1</td>
        <td class="border p-2">$99</td>
        <td class="border p-2">Описание товара</td>
      </tr>
      <tr>
        <td class="border p-2">Товар 2</td>
        <td class="border p-2">$149</td>
        <td class="border p-2">Описание товара</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Брейкпоинты

```html
<div class="flex flex-column gap-4">
  <!-- Только ≥ md -->
  <div class="hide-md bg-primary-100 p-4 rounded">
    <strong>Видно на ≥ 768px</strong>
    <p>Скрыт на xs (&lt; 768px)</p>
  </div>

  <!-- Всё кроме md диапазона -->
  <div class="hide-def bg-primary-200 p-4 rounded">
    <strong>Видно вне 768–1023px</strong>
    <p>Видно на xs (&lt; 768px) или ≥ 1024px</p>
  </div>

  <!-- Всё кроме def диапазона -->
  <div class="hide-lg bg-primary-300 p-4 rounded">
    <strong>Видно вне 1024–1279px</strong>
    <p>Видно на xs, md (&lt; 1024px) или ≥ 1280px</p>
  </div>

  <!-- Только &lt; lg -->
  <div class="hide-full bg-primary-400 p-4 rounded">
    <strong>Только &lt; 1280px</strong>
    <p>Скрыт на lg (≥ 1280px)</p>
  </div>
</div>
```

## Логика работы

Брейкпоинты библиотеки: `xs: 480px`, `md: 768px`, `def: 1024px`, `lg: 1280px`

| Класс        | Media query                                          | Когда виден           |
| ------------ | ---------------------------------------------------- | --------------------- |
| `.hide`      | —                                                    | Никогда               |
| `.hide-md`   | `@media (min-width: 0) and (max-width: 767px)`       | ≥ 768px               |
| `.hide-def`  | `@media (min-width: 768px) and (max-width: 1023px)`  | < 768px или ≥ 1024px  |
| `.hide-lg`   | `@media (min-width: 1024px) and (max-width: 1279px)` | < 1024px или ≥ 1280px |
| `.hide-full` | `@media (min-width: 1280px)`                         | < 1280px              |

## CSS свойства

```scss
.hide {
  display: none !important;
}

@media (min-width: 0) and (max-width: 767px) {
  .hide-md {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hide-def {
    display: none !important;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .hide-lg {
    display: none !important;
  }
}

@media (min-width: 1280px) {
  .hide-full {
    display: none !important;
  }
}
```

## Таблица классов

| Класс        | Описание                             |
| ------------ | ------------------------------------ |
| `.hide`      | Скрыт всегда                         |
| `.hide-md`   | Скрыт на экранах < 768px (xs)        |
| `.hide-def`  | Скрыт на экранах 768px–1023px (md)   |
| `.hide-lg`   | Скрыт на экранах 1024px–1279px (def) |
| `.hide-full` | Скрыт на экранах ≥ 1280px (lg)       |

## См. также

- [Display](../display/index.md) — управление отображением
- [Flexbox](../flexbox/index.md) — для адаптивных макетов
- [Grid](../grid/index.md) — для адаптивных сеток
