---
layout: home

hero:
  name: uStatic CSS
  text: Утилитарный CSS-фреймворк
  tagline: Набор CSS-классов для создания современных интерфейсов на основе дизайн-токенов.
  image:
    repo: yudinmaxim/ustatic-css
  actions:
    - text: Начать использовать
      link: /ru/getting-started/installation
      theme: brand
    - text: GitHub
      link: https://github.com/yudinmaxim/ustatic-css
      theme: alt

features:
  - title: Единая система токенов
    details: Консистентность между микрофронтендами благодаря общей дизайн-системе.
    icon: 🎨
  - title: Модульная загрузка
    details: Загружайте только нужные модули. Делайте это в рантайме.
    icon: 📦
  - title: Рантайм-активация
    details: Загружайте модули только там, где это нужно.
    icon: 🔄
  - title: SSR-совместимость
    details: Безопасно работает на сервере и в браузере.
    icon: ⚡
---

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
