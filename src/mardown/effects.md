# Модуль эффектов (effects)

CSS классы для визуальных эффектов — прозрачность и трансформации.

## Прозрачность (opacity)

### Основные классы
```html
<div class="opacity-0">Невидимый</div>
<div class="opacity-5">5%</div>
<div class="opacity-10">10%</div>
<div class="opacity-20">20%</div>
<div class="opacity-25">25%</div>
<div class="opacity-30">30%</div>
<div class="opacity-40">40%</div>
<div class="opacity-50">50%</div>
<div class="opacity-60">60%</div>
<div class="opacity-70">70%</div>
<div class="opacity-75">75%</div>
<div class="opacity-80">80%</div>
<div class="opacity-90">90%</div>
<div class="opacity-95">95%</div>
<div class="opacity-100">Полностью видимый</div>
```

### Интерактивные (hover)
```html
<div class="hover:opacity-50">50% при наведении</div>
<div class="hover:opacity-0">Исчезает при наведении</div>
```

## Поворот (rotate)

```html
<div class="rotate-0">Без поворота</div>
<div class="rotate-45">Поворот 45°</div>
<div class="rotate-90">Поворот 90°</div>
<div class="rotate-135">Поворот 135°</div>
<div class="rotate-180">Поворот 180°</div>
<div class="rotate-225">Поворот 225°</div>
<div class="rotate-270">Поворот 270°</div>
<div class="rotate-315">Поворот 315°</div>
```

## Обязательное поле (required)

```html
<label>
  Имя пользователя *
  <input class="required" type="text">
</label>
```

Добавляет красную звёздочку после элемента.

## Примеры

```html
<!-- Полупрозрачная кнопка -->
<button class="opacity-50 cursor-not-allowed">
  Отключено
</button>

<!-- Поворот иконки -->
<svg class="rotate-90">...</svg>

<!-- Анимация появления -->
<div class="opacity-0 hover:opacity-100 transition-opacity">
  Появляется при наведении
</div>
```
