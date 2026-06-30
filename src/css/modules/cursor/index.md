# Модуль курсора (cursor)

CSS классы для управления видом курсора.

## Классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.cursor-pointer` | `cursor: pointer` | Рука (как на ссылке) |
| `.cursor-move` | `cursor: move` | Перемещение |
| `.cursor-default` | `cursor: default` | Стандартный |
| `.cursor-disabled` | `cursor: not-allowed` | Запрещён |
| `.cursor-resize-x` | `cursor: ew-resize` | Горизонтальное изменение |
| `.cursor-resize-y` | `cursor: ns-resize` | Вертикальное изменение |
| `.cursor-wait` | `cursor: wait` | Ожидание (песочные часы) |
| `.cursor-help` | `cursor: help` | Вопросительный знак |

## Использование

```html
<!-- Кликабельный элемент -->
<button class="cursor-pointer">Нажми меня</button>

<!-- Элемент для перетаскивания -->
<div class="cursor-move">Перетащи меня</div>

<!-- Отключённая кнопка -->
<button class="cursor-disabled" disabled>Недоступно</button>

<!-- Изменение размера -->
<div class="cursor-resize-x">Тяни влево/вправо</div>
<div class="cursor-resize-y">Тяни вверх/вниз</div>

<!-- Ожидание загрузки -->
<div class="cursor-wait">Загрузка...</div>

<!-- Справка -->
<a href="#" class="cursor-help">Справка</a>
```

## Примеры

```html
<!-- Интерактивная карточка -->
<div class="cursor-pointer hover:bg-gray-100 p-4 rounded">
  Нажмите для действий
</div>

<!-- Элемент для изменения размера -->
<div class="resize-handle cursor-resize-x"></div>

<!-- Кнопка с состоянием -->
<button 
  class="cursor-pointer bg-primary-500 text-white rounded px-4 py-2"
  :class="{ 'cursor-disabled': isDisabled }"
  :disabled="isDisabled"
>
  {{ isDisabled ? 'Загрузка' : 'Отправить' }}
</button>
```
