# Модуль Grid

CSS классы для CSS Grid раскладки.

## Основные классы

### Контейнер
```html
<div class="grid">Grid контейнер</div>
<div class="grid-container">Контейнер с container-type</div>
```

## Шаблоны колонок

### Простые
```html
<div class="grid-columns">1 колонка (1fr)</div>
<div class="grid-columns--1fr-auto">1fr + auto</div>
<div class="grid-columns--auto-1fr">auto + 1fr</div>
<div class="grid-columns--1fr-1fr">2 равные колонки</div>
<div class="grid-columns--1fr-2fr">1fr + 2fr</div>
<div class="grid-columns--1fr-1fr-1fr">3 колонки</div>
```

### Адаптивные с minmax
```html
<!-- repeat(2, minmax(size, 1fr)) -->
<div class="grid-columns--2-64">2 колонки мин 64px</div>
<div class="grid-columns--3-128">3 колонки мин 128px</div>
<div class="grid-columns--4-256">4 колонки мин 256px</div>
```

## Шаблоны строк

```html
<div class="grid-rows">1 строка (1fr)</div>
<div class="grid-rows--auto-1fr-auto">Хедер-контент-футер</div>
<div class="grid-rows--1fr-auto">Контент-подвал</div>
<div class="grid-rows--auto-1fr">Хедер-контент</div>
<div class="grid-rows--1fr-1fr-1fr">3 строки</div>
<div class="grid-rows--1fr-1fr">2 строки</div>
```

## Объединение колонок

```html
<div class="grid-col-span-1">Занимает 1 колонку</div>
<div class="grid-col-span-2">Занимает 2 колонки</div>
<div class="grid-col-span-3">Занимает 3 колонки</div>
```

## Примеры

```html
<!-- Простая сетка -->
<div class="grid grid-columns--1fr-1fr gap-4">
  <div>Ячейка 1</div>
  <div>Ячейка 2</div>
</div>

<!-- Адаптивная галерея -->
<div class="grid grid-columns--4-64 gap-4">
  <img src="1.jpg">
  <img src="2.jpg">
  <img src="3.jpg">
  <img src="4.jpg">
</div>

<!-- Макет страницы -->
<div class="grid grid-rows--auto-1fr-auto min-h-screen">
  <header>Хедер</header>
  <main>Контент</main>
  <footer>Подвал</footer>
</div>

<!-- Объединение ячеек -->
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <div class="grid-col-span-2">Занимает 2 колонки</div>
  <div>Обычная ячейка</div>
</div>
```

## CSS свойства

```scss
.grid {
  display: grid;
}

.grid-columns {
  grid-template-columns: 1fr;
}

.grid-columns--1fr-1fr {
  grid-template-columns: 1fr 1fr;
}

.grid-rows--auto-1fr-auto {
  grid-template-rows: auto 1fr auto;
}
```
