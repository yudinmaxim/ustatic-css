# Контур (outline)

Классы для управления обводкой (outline) элементов — внешняя линия вокруг элемента, не влияющая на размеры.

## Основные классы

### Убрать обводку

```html
<!-- Убрать стандартную обводку -->
<button class="outline-none">Без обводки</button>
```

## Толщина обводки

| Класс | Толщина | Класс | Толщина |
|-------|---------|-------|---------|
| `.outline-0d5` | 2px | `.outline-3` | 12px |
| `.outline-1` | 4px | `.outline-4` | 16px |
| `.outline-2` | 8px | `.outline-5` | 20px |
| `.outline-6` | 24px | `.outline-8` | 32px |
| `.outline-9` | 36px | | |

```html
<div class="flex gap-4 items-end">
  <div class="outline outline-0d5 p-4">outline-0d5 (2px)</div>
  <div class="outline outline-1 p-4">outline-1 (4px)</div>
  <div class="outline outline-2 p-4">outline-2 (8px)</div>
  <div class="outline outline-3 p-4">outline-3 (12px)</div>
  <div class="outline outline-4 p-4">outline-4 (16px)</div>
</div>
```

## Цвет обводки

### Основные цвета

```html
<div class="flex gap-4 flex-wrap">
  <div class="outline outline-2 outline-primary p-4">outline-primary</div>
  <div class="outline outline-2 outline-secondary p-4">outline-secondary</div>
  <div class="outline outline-2 outline-success p-4">outline-success</div>
  <div class="outline outline-2 outline-danger p-4">outline-danger</div>
  <div class="outline outline-2 outline-warning p-4">outline-warning</div>
  <div class="outline outline-2 outline-info p-4">outline-info</div>
</div>
```

### Оттенки серого

```html
<div class="flex gap-4 flex-wrap">
  <div class="outline outline-2 outline-gray-300 p-4">gray-300</div>
  <div class="outline outline-2 outline-gray-400 p-4">gray-400</div>
  <div class="outline outline-2 outline-gray-500 p-4">gray-500</div>
  <div class="outline outline-2 outline-gray-600 p-4">gray-600</div>
</div>
```

### Цветные оттенки

```html
<div class="flex gap-4 flex-wrap">
  <div class="outline outline-2 outline-red-500 p-4">red-500</div>
  <div class="outline outline-2 outline-blue-500 p-4">blue-500</div>
  <div class="outline outline-2 outline-green-500 p-4">green-500</div>
</div>
```

## Стиль обводки

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.outline-style--solid` | `outline-style: solid` | Сплошная |
| `.outline-style--dotted` | `outline-style: dotted` | Точками |
| `.outline-style--dashed` | `outline-style: dashed` | Пунктирная |
| `.outline-style--groove` | `outline-style: groove` | Вдавленная |
| `.outline-style--ridge` | `outline-style: ridge` | Выпуклая |
| `.outline-style--inset` | `outline-style: inset` | Внутрь |
| `.outline-style--outset` | `outline-style: outset` | Наружу |

```html
<div class="flex gap-4 flex-wrap">
  <div class="outline outline-2 outline-style--solid p-4">solid</div>
  <div class="outline outline-2 outline-style--dotted p-4">dotted</div>
  <div class="outline outline-2 outline-style--dashed p-4">dashed</div>
  <div class="outline outline-2 outline-style--groove p-4">groove</div>
  <div class="outline outline-2 outline-style--ridge p-4">ridge</div>
</div>
```

## Смещение обводки (offset)

### Положительное смещение

| Класс | Смещение |
|-------|----------|
| `.outline-offset-1` | 1px |
| `.outline-offset-2` | 2px |
| `.outline-offset-5` | 5px |
| `.outline-offset-10` | 10px |

### Отрицательное смещение

| Класс | Смещение |
|-------|----------|
| `.-outline-offset-1` | -1px |
| `.-outline-offset-5` | -5px |

```html
<div class="flex gap-4 items-end">
  <div class="outline outline-2 outline-primary outline-offset-1 p-4">
    offset-1
  </div>
  <div class="outline outline-2 outline-primary outline-offset-2 p-4">
    offset-2
  </div>
  <div class="outline outline-2 outline-primary outline-offset-5 p-4">
    offset-5
  </div>
</div>
```

## Примеры использования

### Кнопка с кастомным фокусом

```html
<!-- Кнопка без обводки, с кастомным фокусом -->
<button class="outline-none focus:outline-2 focus:outline-primary 
               focus:outline-offset-2 bg-primary-500 text-white px-4 py-2 rounded">
  Кнопка
</button>

<!-- Кнопка с обводкой при фокусе -->
<button class="outline-none focus:outline-2 focus:outline-primary 
               focus:outline-offset-2 border border-primary-500 
               text-primary-500 bg-white px-4 py-2 rounded">
  Контурная кнопка
</button>
```

### Поле ввода с обводкой

```html
<input 
  type="text" 
  class="outline-none border border-gray-300 rounded px-4 py-2 w-full
         focus:outline-2 focus:outline-primary focus:outline-offset-2 
         focus:border-primary-500"
  placeholder="Введите текст"
>
```

### Карточка с обводкой

```html
<div class="outline outline-1 outline-gray-300 rounded-lg p-6 bg-white">
  <h3 class="font-bold text-lg mb-2">Заголовок</h3>
  <p class="text-gray-600">Карточка с внешней обводкой</p>
</div>
```

### Выделение активного элемента

```html
<div class="flex gap-4">
  <div class="outline outline-2 outline-primary outline-offset-2 p-4 bg-white">
    Активный элемент
  </div>
  <div class="outline outline-2 outline-gray-300 p-4 bg-white">
    Обычный элемент
  </div>
</div>
```

### Доступная форма

```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input 
      type="email" 
      class="outline-none border border-gray-300 rounded px-4 py-2 w-full
             focus:outline-2 focus:outline-primary focus:outline-offset-2 
             focus:border-primary-500"
      placeholder="you@example.com"
    >
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Пароль
    </label>
    <input 
      type="password" 
      class="outline-none border border-gray-300 rounded px-4 py-2 w-full
             focus:outline-2 focus:outline-primary focus:outline-offset-2 
             focus:border-primary-500"
      placeholder="••••••••"
    >
  </div>
  
  <button 
    type="submit" 
    class="outline-none bg-primary-500 text-white px-4 py-2 rounded
           focus:outline-2 focus:outline-primary focus:outline-offset-2 
           hover:bg-primary-600"
  >
    Войти
  </button>
</form>
```

### Декоративная обводка

```html
<!-- Элемент с декоративной обводкой -->
<div class="outline outline-2 outline-dashed outline-primary-300 outline-offset-4 
            p-6 rounded-lg bg-white">
  <h3 class="font-bold text-lg mb-2">Декоративная рамка</h3>
  <p class="text-gray-600">Элемент с пунктирной обводкой</p>
</div>
```

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Сброс** | `outline-none` |
| **Толщина** | `outline-0d5`, `outline-1`, `outline-2`, `outline-3`, `outline-4`, `outline-5`, `outline-6`, `outline-8`, `outline-9` |
| **Цвета** | `outline-{primary,secondary,success,danger,warning,info}` |
| **Оттенки** | `outline-gray-{300-900}`, `outline-{color}-{shade}` |
| **Стиль** | `outline-style--solid`, `outline-style--dotted`, `outline-style--dashed`, `outline-style--groove`, `outline-style--ridge`, `outline-style--inset`, `outline-style--outset` |
| **Offset** | `outline-offset-{1,2,5,10}`, `.-outline-offset-{1,5}` |

## Отличие outline от border

| Характеристика | Outline | Border |
|----------------|---------|--------|
| Влияет на размеры | ❌ Нет | ✅ Да |
| Может быть круглой | ❌ Нет | ✅ Да (с border-radius) |
| Смещение (offset) | ✅ Да | ❌ Нет |
| Доступность | ✅ Чаще для focus | ✅ Для стилизации |

## См. также

- [Границы](../border/index.md) — для управления границами
- [Эффекты](../effects/index.md) — для визуальных эффектов
- [Интерактивность](../interactivity/index.md) — для управления событиями
