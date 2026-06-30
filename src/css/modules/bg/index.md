# Модуль фонов (bg)

CSS классы для управления фоном элементов.

## Классы фона

### Основные цвета
```html
<div class="bg-primary-50">...</div>
<div class="bg-primary-100">...</div>
<div class="bg-primary-200">...</div>
<div class="bg-primary-300">...</div>
<div class="bg-primary-400">...</div>
<div class="bg-primary-500">...</div>
<div class="bg-primary-600">...</div>
<div class="bg-primary-700">...</div>
<div class="bg-primary-800">...</div>
<div class="bg-primary-900">...</div>
<div class="bg-primary">основной</div>
```

### Семантические цвета
```html
<div class="bg-success">Успех</div>
<div class="bg-danger">Опасность</div>
<div class="bg-warning">Предупреждение</div>
<div class="bg-info">Информация</div>
```

### Нейтральные цвета
```html
<div class="bg-gray-50">...</div>
<div class="bg-gray-100">...</div>
<div class="bg-gray-200">...</div>
<div class="bg-gray-300">...</div>
<div class="bg-gray-400">...</div>
<div class="bg-gray-500">...</div>
<div class="bg-gray-600">...</div>
<div class="bg-gray-700">...</div>
<div class="bg-gray-800">...</div>
<div class="bg-gray-900">...</div>
```

### Дополнительные цвета
```html
<!-- Оттенки -->
<div class="bg-red-500">...</div>
<div class="bg-orange-500">...</div>
<div class="bg-yellow-500">...</div>
<div class="bg-green-500">...</div>
<div class="bg-sky-500">...</div>
<div class="bg-blue-500">...</div>

<!-- Специальные -->
<div class="bg-white">Белый</div>
<div class="bg-black">Чёрный</div>
<div class="bg-transparent">Прозрачный</div>
<div class="bg-none">Нет фона</div>
```

## Прозрачность фона

```html
<div class="bg-opacity-0">Прозрачный</div>
<div class="bg-opacity-25">25%</div>
<div class="bg-opacity-50">50%</div>
<div class="bg-opacity-75">75%</div>
<div class="bg-opacity-100">Полный</div>
```

## Размытие фона (backdrop-filter)

```html
<!-- Эффект матового стекла -->
<div class="bg-filter-blur-1">Размытие 1px</div>
<div class="bg-filter-blur-2">Размытие 2px</div>
<div class="bg-filter-blur-5">Размытие 5px</div>
<div class="bg-filter-blur-10">Размытие 10px</div>
```

## Интерактивные классы (hover)

```html
<!-- Смена фона при наведении -->
<button class="hover:bg-primary-500">Наведи</button>
<span class="hover:bg-success-100">Успех при наведении</span>
<div class="hover:bg-gray-200">Серый при наведении</div>
```

## Примеры

```html
<!-- Карточка -->
<div class="bg-white rounded-lg shadow p-4">
  Контент
</div>

<!-- Кнопка -->
<button class="bg-primary-500 text-white rounded px-4 py-2">
  Кнопка
</div>

<!-- Модальное окно с размытием -->
<div class="bg-filter-blur-5 bg-white/50">
  Размытый фон
</div>
```
