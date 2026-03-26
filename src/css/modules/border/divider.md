# Разделители (divider.scss)

Горизонтальные и вертикальные линии-разделители.

## Классы

### Горизонтальный разделитель (divider-x)

```html
<hr class="divider-x">
<hr class="divider-x--small">
<hr class="divider-x--medium">
<hr class="divider-x--large">
```

### Вертикальный разделитель (divider-y)

```html
<div class="h-full">
  <div class="divider-y"></div>
  <div class="divider-y--small"></div>
  <div class="divider-y--medium"></div>
  <div class="divider-y--large"></div>
</div>
```

## Стили

| Класс | Описание | Отступы |
|-------|----------|---------|
| `.divider-x` | Горизонтальная линия | 20px сверху/снизу |
| `.divider-x--small` | Маленький отступ | 10px |
| `.divider-x--medium` | Средний отступ | 20px |
| `.divider-x--large` | Большой отступ | 30px |
| `.divider-y` | Вертикальная линия | 20px слева/справа |
| `.divider-y--small` | Маленький отступ | 10px |
| `.divider-y--medium` | Средний отступ | 20px |
| `.divider-y--large` | Большой отступ | 30px |

## CSS свойства

```scss
.divider-x {
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 20px 0;
}

.divider-y {
  width: 1px;
  height: 100%;
  background-color: #000;
  margin: 0 20px;
}
```

## Примеры использования

```html
<!-- Разделитель между секциями -->
<section>
  <h1>Секция 1</h1>
</section>
<hr class="divider-x--medium">
<section>
  <h1>Секция 2</h1>
</section>

<!-- Вертикальный разделитель в меню -->
<nav class="flex">
  <a href="#">Главная</a>
  <div class="divider-y"></div>
  <a href="#">О нас</a>
  <div class="divider-y"></div>
  <a href="#">Контакты</a>
</nav>
```
