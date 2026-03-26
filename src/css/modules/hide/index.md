# Модуль скрытия (hide)

CSS классы для скрытия элементов на разных брейкпоинтах.

## Классы

### Скрытие на всех размерах
```html
<div class="hide">Скрыт всегда</div>
```

### Скрытие на брейкпоинтах

```html
<!-- Скрыт на md (768px+) -->
<div class="hide-md">Скрыт на экранах >= 768px</div>

<!-- Скрыт на lg (1280px+) -->
<div class="hide-lg">Скрыт на экранах >= 1280px</div>

<!-- Скрыт на больших экранах (def 1920px+) -->
<div class="hide-full">Скрыт на экранах >= 1920px</div>
```

## Логика работы

| Класс | Диапазон |
|-------|----------|
| `.hide-md` | min-width: 768px и max-width: 1279px |
| `.hide-lg` | min-width: 1280px и max-width: 1919px |
| `.hide-full` | min-width: 1920px |

## Примеры

```html
<!-- Мобильное меню, скрытое на десктопе -->
<nav class="hide-lg">
  <button>Меню</button>
</nav>

<!-- Десктопное меню, скрытое на мобильных -->
<nav class="hide-md hide-full">
  <a href="#">Главная</a>
  <a href="#">О нас</a>
</nav>

<!-- Скрытие на всех -->
<div class="hide">
  Этот элемент никогда не отображается
</div>
```

## CSS свойства

```scss
.hide {
  display: none !important;
}

@media (min-width: 768px) and (max-width: 1279px) {
  .hide-md {
    display: none !important;
  }
}
```
