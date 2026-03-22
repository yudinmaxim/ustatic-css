# Акцентные цвета (Variants)

Акцентные цвета используются для семантического обозначения состояний и действий в интерфейсе. Основаны на токенах дизайн-системы.

### Primary

<div class="color-grid">
  <ColorSwatch color="primary" shade="50" backgroundClasses="bg-primary-50" textClasses="text-gray-900" />
  <ColorSwatch color="primary" shade="100" backgroundClasses="bg-primary-100" textClasses="text-gray-900" />
  <ColorSwatch color="primary" shade="200" backgroundClasses="bg-primary-200" textClasses="text-gray-900" />
  <ColorSwatch color="primary" shade="300" backgroundClasses="bg-primary-300" textClasses="text-white" />
  <ColorSwatch color="primary" shade="400" backgroundClasses="bg-primary-400" textClasses="text-white" />
  <ColorSwatch color="primary" shade="500" backgroundClasses="bg-primary-500" textClasses="text-white" />
</div>

| Класс | Токен |
|-------|-------|
| `bg-primary-50` ... `bg-primary-500` | `--color-primary-50` ... `--color-primary-500` |
| `text-primary-50` ... `text-primary-500` | `--color-primary-50` ... `--color-primary-500` |

### Secondary

<div class="color-grid">
  <ColorSwatch color="secondary" shade="50" backgroundClasses="bg-secondary-50" textClasses="text-gray-900" />
  <ColorSwatch color="secondary" shade="100" backgroundClasses="bg-secondary-100" textClasses="text-gray-900" />
  <ColorSwatch color="secondary" shade="200" backgroundClasses="bg-secondary-200" textClasses="text-gray-900" />
  <ColorSwatch color="secondary" shade="300" backgroundClasses="bg-secondary-300" textClasses="text-white" />
  <ColorSwatch color="secondary" shade="400" backgroundClasses="bg-secondary-400" textClasses="text-white" />
  <ColorSwatch color="secondary" shade="500" backgroundClasses="bg-secondary-500" textClasses="text-white" />
</div>

| Класс | Токен |
|-------|-------|
| `bg-secondary-50` ... `bg-secondary-500` | `--color-secondary-50` ... `--color-secondary-500` |
| `text-secondary-50` ... `text-secondary-500` | `--color-secondary-50` ... `--color-secondary-500` |

### Success

<div class="color-grid">
  <ColorSwatch color="success" shade="50" backgroundClasses="bg-success-50" textClasses="text-gray-900" />
  <ColorSwatch color="success" shade="100" backgroundClasses="bg-success-100" textClasses="text-gray-900" />
  <ColorSwatch color="success" shade="200" backgroundClasses="bg-success-200" textClasses="text-gray-900" />
  <ColorSwatch color="success" shade="300" backgroundClasses="bg-success-300" textClasses="text-white" />
  <ColorSwatch color="success" shade="400" backgroundClasses="bg-success-400" textClasses="text-white" />
  <ColorSwatch color="success" shade="500" backgroundClasses="bg-success-500" textClasses="text-white" />
</div>

| Класс | Токен |
|-------|-------|
| `bg-success-50` ... `bg-success-500` | `--color-success-50` ... `--color-success-500` |
| `text-success-50` ... `text-success-500` | `--color-success-50` ... `--color-success-500` |

### Info

<div class="color-grid">
  <ColorSwatch color="info" shade="50" backgroundClasses="bg-info-50" textClasses="text-gray-900" />
  <ColorSwatch color="info" shade="100" backgroundClasses="bg-info-100" textClasses="text-gray-900" />
  <ColorSwatch color="info" shade="200" backgroundClasses="bg-info-200" textClasses="text-gray-900" />
  <ColorSwatch color="info" shade="300" backgroundClasses="bg-info-300" textClasses="text-white" />
  <ColorSwatch color="info" shade="400" backgroundClasses="bg-info-400" textClasses="text-white" />
  <ColorSwatch color="info" shade="500" backgroundClasses="bg-info-500" textClasses="text-white" />
</div>

| Класс | Токен |
|-------|-------|
| `bg-info-50` ... `bg-info-500` | `--color-info-50` ... `--color-info-500` |
| `text-info-50` ... `text-info-500` | `--color-info-50` ... `--color-info-500` |

### Warning

<div class="color-grid">
  <ColorSwatch color="warning" shade="50" backgroundClasses="bg-warning-50" textClasses="text-gray-900" />
  <ColorSwatch color="warning" shade="100" backgroundClasses="bg-warning-100" textClasses="text-gray-900" />
  <ColorSwatch color="warning" shade="200" backgroundClasses="bg-warning-200" textClasses="text-gray-900" />
  <ColorSwatch color="warning" shade="300" backgroundClasses="bg-warning-300" textClasses="text-white" />
  <ColorSwatch color="warning" shade="400" backgroundClasses="bg-warning-400" textClasses="text-white" />
  <ColorSwatch color="warning" shade="500" backgroundClasses="bg-warning-500" textClasses="text-white" />
</div>

| Класс | Токен |
|-------|-------|
| `bg-warning-50` ... `bg-warning-500` | `--color-warning-50` ... `--color-warning-500` |
| `text-warning-50` ... `text-warning-500` | `--color-warning-50` ... `--color-warning-500` |

### Danger

<div class="color-grid">
  <ColorSwatch color="danger" shade="50" backgroundClasses="bg-danger-50" textClasses="text-gray-900" />
  <ColorSwatch color="danger" shade="100" backgroundClasses="bg-danger-100" textClasses="text-gray-900" />
  <ColorSwatch color="danger" shade="200" backgroundClasses="bg-danger-200" textClasses="text-gray-900" />
  <ColorSwatch color="danger" shade="300" backgroundClasses="bg-danger-300" textClasses="text-white" />
  <ColorSwatch color="danger" shade="400" backgroundClasses="bg-danger-400" textClasses="text-white" />
  <ColorSwatch color="danger" shade="500" backgroundClasses="bg-danger-500" textClasses="text-white" />
</div>

| Класс | Токен |
|-------|-------|
| `bg-danger-50` ... `bg-danger-500` | `--color-danger-50` ... `--color-danger-500` |
| `text-danger-50` ... `text-danger-500` | `--color-danger-50` ... `--color-danger-500` |

## Примеры использования

### Кнопки

::: component-view
<div class="flex gap-2 flex-wrap">
  <button class="px-4 py-2 bg-primary-500 text-white rounded-base hover:bg-primary-600 cursor-pointer active:pulse">
    Primary
  </button>
  <button class="px-4 py-2 bg-secondary-500 text-white rounded-base hover:bg-secondary-600 cursor-pointer active:pulse">
    Secondary
  </button>
  <button class="px-4 py-2 bg-success-500 text-white rounded-base hover:bg-success-600 cursor-pointer active:pulse">
    Success
  </button>
  <button class="px-4 py-2 bg-info-500 text-white rounded-base hover:bg-info-600 cursor-pointer active:pulse">
    Info
  </button>
  <button class="px-4 py-2 bg-warning-500 text-white rounded-base hover:bg-warning-600 cursor-pointer active:pulse">
    Warning
  </button>
  <button class="px-4 py-2 bg-danger-500 text-white rounded-base hover:bg-danger-600 cursor-pointer active:pulse">
    Danger
  </button>
</div>
:::

### Бейджи

::: component-view
<div class="flex gap-2 flex-wrap">
  <span class="px-2 py-1 bg-primary-100 text-primary-700 rounded-base text-sm">Primary</span>
  <span class="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-base text-sm">Secondary</span>
  <span class="px-2 py-1 bg-success-100 text-success-700 rounded-base text-sm">Success</span>
  <span class="px-2 py-1 bg-info-100 text-info-700 rounded-base text-sm">Info</span>
  <span class="px-2 py-1 bg-warning-100 text-warning-700 rounded-base text-sm">Warning</span>
  <span class="px-2 py-1 bg-danger-100 text-danger-700 rounded-base text-sm">Danger</span>
</div>
:::

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
</style>
