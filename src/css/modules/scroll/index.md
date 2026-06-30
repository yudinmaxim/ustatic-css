# Модуль скролла (scroll)

CSS классы для управления полосой прокрутки.

## Основные классы

```html
<!-- Стилизованный скроллбар -->
<div class="z-scroll">
  Контент с кастомным скроллом
</div>
```

## Модификаторы

### Тонкий скролл
```html
<div class="z-scroll--thin">
  Тонкий скроллбар
</div>
```

### Скролл при наведении
```html
<div class="z-scroll--hovered">
  Увеличивается при наведении
</div>
```

## CSS свойства

```scss
.z-scroll {
  -ms-overflow-style: none;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--u-base-color-gray-100);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--u-base-color-gray-400);
    border-radius: 40px;
  }
}

.z-scroll--thin {
  scrollbar-width: thin;
}

.z-scroll--hovered:hover {
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
}
```

## Примеры

```html
<!-- Область со скроллом -->
<div class="z-scroll h-64 overflow-y-auto">
  <p>Контент...</p>
  <p>Контент...</p>
  <p>Контент...</p>
</div>

<!-- Сайдбар -->
<aside class="z-scroll flex-1 overflow-y-auto">
  Список элементов
</aside>

<!-- Тонкий скролл -->
<div class="z-scroll--thin h-48 overflow-auto">
  Много контента
</div>
```
