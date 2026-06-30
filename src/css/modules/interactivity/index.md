# Модуль интерактивности (interactivity)

CSS классы для управления интерактивным поведением элементов.

## Pointer events

Управление событиями мыши/касания.

```html
<!-- Отключить клики -->
<div class="pointer-events-none">Не кликабельно</div>

<!-- Включить клики -->
<div class="pointer-events-auto">Кликабельно</div>
```

## User select

Управление выделением текста.

```html
<!-- Запретить выделение -->
<p class="select-none">Нельзя выделить</p>

<!-- Разрешить выделение -->
<p class="select-auto">По умолчанию</p>

<!-- Выделить всё при клике -->
<button class="select-all">Выделить всё</p>

<!-- Разрешить только текст -->
<p class="select-text">Только текст</p>
```

## Примеры

```html
<!-- Клик overlay, не мешающий взаимодействию -->
<div class="pointer-events-none fixed inset-0 bg-black/50"></div>

<!-- Защита текста от копирования -->
<article class="select-none">
  Контент защищён от копирования
</textarea>

<!-- Кнопка "Выделить всё" -->
<textarea class="select-all">Текст для копирования</textarea>
```
