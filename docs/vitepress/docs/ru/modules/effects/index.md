# Эффекты (effects)

Классы для визуальных эффектов: прозрачность, трансформации, обязательные поля.

## Прозрачность (opacity)

### Основные классы

| Класс | Значение | Класс | Значение |
|-------|----------|-------|----------|
| `.opacity-0` | 0% | `.opacity-50` | 50% |
| `.opacity-5` | 5% | `.opacity-60` | 60% |
| `.opacity-10` | 10% | `.opacity-70` | 70% |
| `.opacity-20` | 20% | `.opacity-75` | 75% |
| `.opacity-25` | 25% | `.opacity-80` | 80% |
| `.opacity-30` | 30% | `.opacity-90` | 90% |
| `.opacity-40` | 40% | `.opacity-95` | 95% |
| `.opacity-100` | 100% | | |

### Примеры

```html
<div class="flex gap-4 items-end">
  <div class="opacity-0 bg-primary-500 p-4 text-white">0%</div>
  <div class="opacity-25 bg-primary-500 p-4 text-white">25%</div>
  <div class="opacity-50 bg-primary-500 p-4 text-white">50%</div>
  <div class="opacity-75 bg-primary-500 p-4 text-white">75%</div>
  <div class="opacity-100 bg-primary-500 p-4 text-white">100%</div>
</div>
```

### Интерактивные классы (hover)

```html
<!-- Исчезновение при наведении -->
<div class="opacity-100 hover:opacity-0 transition-opacity cursor-pointer">
  Наведи — я исчезну
</div>

<!-- Появление при наведении -->
<div class="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
  Наведи — я появлюсь
</div>

<!-- Кнопка с эффектом -->
<button class="bg-primary-500 text-white px-4 py-2 rounded opacity-100 hover:opacity-80">
  Кнопка
</button>
```

## Поворот (rotate)

### Классы поворота

| Класс | Угол | Класс | Угол |
|-------|------|-------|------|
| `.rotate-0` | 0° | `.rotate-135` | 135° |
| `.rotate-45` | 45° | `.rotate-180` | 180° |
| `.rotate-90` | 90° | `.rotate-225` | 225° |
| `.rotate-270` | 270° | `.rotate-315` | 315° |

### Примеры

```html
<div class="flex gap-8 items-center">
  <div class="rotate-0">0°</div>
  <div class="rotate-45">45°</div>
  <div class="rotate-90">90°</div>
  <div class="rotate-135">135°</div>
  <div class="rotate-180">180°</div>
  <div class="rotate-225">225°</div>
  <div class="rotate-270">270°</div>
  <div class="rotate-315">315°</div>
</div>
```

### Поворот иконок

```html
<!-- Стрелка вправо -->
<svg class="rotate-0 w-6 h-6">...</svg>

<!-- Стрелка вниз -->
<svg class="rotate-90 w-6 h-6">...</svg>

<!-- Стрелка влево -->
<svg class="rotate-180 w-6 h-6">...</svg>

<!-- Стрелка вверх -->
<svg class="rotate-270 w-6 h-6">...</svg>
```

### Анимация поворота

```html
<!-- Вращающийся спиннер -->
<div class="animation:spin-2">
  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
  </svg>
</div>
```

## Обязательное поле (required)

Класс для добавления красной звёздочки к обязательным полям:

```html
<form>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Имя пользователя <span class="required">*</span>
    </label>
    <input type="text" class="border border-gray-300 rounded px-4 py-2 w-full" required>
  </div>
  
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email <span class="required">*</span>
    </label>
    <input type="email" class="border border-gray-300 rounded px-4 py-2 w-full" required>
  </div>
</form>
```

## Примеры использования

### Полупрозрачная кнопка (отключённая)

```html
<button disabled class="opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 px-4 py-2 rounded">
  Недоступно
</button>
```

### Эффект наведения на карточку

```html
<div class="border rounded-lg p-4 transition-opacity hover:opacity-80 cursor-pointer">
  <h3 class="font-bold">Карточка</h3>
  <p class="text-gray-600">Наведи на меня</p>
</div>
```

### Модальное окно с затемнением

```html
<div class="fixed inset-0 z-i-modal bg-black opacity-50"></div>
```

### Плавное появление

```html
<div class="opacity-0 fade-enter-active">
  Контент с плавным появлением
</div>
```

### Иконка со стрелкой (аккордеон)

```html
<button class="flex items-center justify-between w-full p-4 border rounded">
  <span>Заголовок аккордеона</span>
  <svg class="w-5 h-5 transition-transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
  </svg>
</button>
```

### Галерея с эффектом

```html
<div class="grid grid-cols-3 gap-4">
  <div class="relative group overflow-hidden rounded-lg">
    <img src="image1.jpg" alt="Фото" class="w-full h-48 object-cover transition-opacity group-hover:opacity-75">
    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span class="text-white bg-black bg-opacity-50 px-4 py-2 rounded">Просмотр</span>
    </div>
  </div>
</div>
```

## Трансформации

### Комбинирование эффектов

```html
<!-- Поворот + прозрачность -->
<div class="rotate-45 opacity-50 bg-primary-500 p-4">
  Поворот + прозрачность
</div>

<!-- Поворот при наведении -->
<button class="hover:rotate-180 transition-transform">
  <svg class="w-8 h-8">...</svg>
</button>
```

## Таблица классов

### Прозрачность

| Классы | Значения |
|--------|----------|
| `.opacity-{0,5,10,20,25,30,40,50,60,70,75,80,90,95,100}` | 0% - 100% |
| `.hover:opacity-{value}` | При наведении |

### Поворот

| Классы | Углы |
|--------|------|
| `.rotate-{0,45,90,135,180,225,270,315}` | 0° - 315° |

### Обязательное поле

| Класс | Описание |
|-------|----------|
| `.required` | Добавляет красную звёздочку * |

## См. также

- [Анимации](../animations/index.md) — для анимации эффектов
- [Фильтры](../filters/index.md) — для CSS фильтров
- [Курсор](../cursor/index.md) — для управления курсором
