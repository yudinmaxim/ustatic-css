# Модуль фильтров (filters)

CSS классы для фильтров изображений и элементов.

## Оттенки серого (grayscale)

```html
<!-- Полностью чёрно-белый -->
<img class="grayscale" src="photo.jpg">

<!-- Цветной (сброс фильтра) -->
<img class="grayscale-0" src="photo.jpg">

<!-- При наведении становится цветным -->
<img class="grayscale hover:grayscale-0" src="photo.jpg">
```

## Сброс фильтров

```html
<!-- Без фильтра -->
<div class="no-filter">Оригинальный вид</div>

<!-- Сброс фильтра при наведении -->
<div class="no-filter hover:no-filter">
  Остаётся оригинальным
</div>
```

## CSS свойства

```scss
.grayscale {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
}

.no-filter {
  filter: none;
  -webkit-filter: none;
  // ...
}
```

## Примеры

```html
<!-- Галерея с чёрно-белыми превью -->
<div class="grid grid-cols-4 gap-4">
  <img class="grayscale hover:grayscale-0 transition" src="1.jpg">
  <img class="grayscale hover:grayscale-0 transition" src="2.jpg">
  <img class="grayscale hover:grayscale-0 transition" src="3.jpg">
  <img class="grayscale hover:grayscale-0 transition" src="4.jpg">
</div>

<!-- Эффект наведения -->
<div class="grayscale hover:grayscale-0 transition-all duration-300">
  <img src="photo.jpg">
</div>
```

## Поддержка браузеров

- Chrome, Edge, Safari, Opera — полная поддержка
- Firefox — требует префикса `-moz-`
- IE — не поддерживается
