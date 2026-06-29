# Скругление углов (rounded.scss)

CSS классы для скругления углов элементов.

## Основные классы

```html
<div class="rounded-none">Без скругления</div>
<div class="rounded-sm">Маленькое (2px)</div>
<div class="rounded">База (4px)</div>
<div class="rounded-md">Среднее (6px)</div>
<div class="rounded-lg">Большое (8px)</div>
<div class="rounded-xl">Очень большое (12px)</div>
<div class="rounded-2xl">Двойное (16px)</div>
<div class="rounded-3xl">Тройное (24px)</div>
<div class="rounded-full">Полное (круглый)</div>
```

## Скругление по углам

### Все углы
```html
<div class="rounded-t-sm">Скруглён верх</div>
<div class="rounded-r-sm">Скруглён право</div>
<div class="rounded-b-sm">Скруглён низ</div>
<div class="rounded-l-sm">Скруглён лево</div>
```

### Отдельные углы
```html
<div class="rounded-tr-sm">Верхний правый</div>
<div class="rounded-tl-sm">Верхний левый</div>
<div class="rounded-br-sm">Нижний правый</div>
<div class="rounded-bl-sm">Нижний левый</div>
```

### Комбинации
```html
<!-- Скругление только верхних углов -->
<div class="rounded-t-md rounded-b-none">...</div>

<!-- Скругление только нижних углов -->
<div class="rounded-b-lg rounded-t-none">...</div>

<!-- Скругление одного угла -->
<div class="rounded-tr-full rounded-br-full">...</div>
```

## Круглые элементы

```html
<!-- Круглый элемент -->
<div class="circle">Круг</div>

<!-- Круглая кнопка -->
<button class="circle w-10 h-10">
  <Icon />
</button>

<!-- Круглый аватар -->
<img class="circle w-12 h-12" src="avatar.jpg">
```

## Соответствие размеров

| Класс | Радиус |
|-------|--------|
| `.rounded-none` | 0 |
| `.rounded-sm` | 2px |
| `.rounded` | 4px |
| `.rounded-md` | 6px |
| `.rounded-lg` | 8px |
| `.rounded-xl` | 12px |
| `.rounded-2xl` | 16px |
| `.rounded-3xl` | 24px |
| `.rounded-full` | 9999px |
| `.circle` | 100% |

## Примеры

```html
<!-- Кнопка -->
<button class="rounded-md bg-primary-500 text-white px-4 py-2">
  Кнопка
</button>

<!-- Карточка -->
<div class="rounded-lg border border-gray-200 p-4">
  Контент карточки
</div>

<!-- Инпут -->
<input class="rounded border border-gray-300 px-3 py-2">

<!-- Круглый контейнер -->
<div class="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center">
  <span>1</span>
</div>
```
