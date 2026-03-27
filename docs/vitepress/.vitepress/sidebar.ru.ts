import { API } from './nav.ru'

export const modules = {
  text: 'Модули',
  collapsed: false,
  items: [
    { text: 'Выравнивание', link: '/ru/modules/align/' },
    { text: 'Фон', link: '/ru/modules/bg/' },
    { text: 'Границы', link: '/ru/modules/border/' },
    { text: 'Курсор', link: '/ru/modules/cursor/' },
    { text: 'Отображение', link: '/ru/modules/display/' },
    { text: 'Эффекты', link: '/ru/modules/effects/' },
    { text: 'Фильтры', link: '/ru/modules/filters/' },
    { text: 'Flexbox', link: '/ru/modules/flexbox/' },
    { text: 'Сетка', link: '/ru/modules/grid/' },
    { text: 'Скрытие', link: '/ru/modules/hide/' },
    { text: 'Интерактивность', link: '/ru/modules/interactivity/' },
    { text: 'Контур', link: '/ru/modules/outline/' },
    { text: 'Позиционирование', link: '/ru/modules/position/' },
    { text: 'Предустановки', link: '/ru/modules/presets/' },
    { text: 'Прокрутка', link: '/ru/modules/scroll/' },
    { text: 'Размеры', link: '/ru/modules/sizing/' },
    { text: 'Отступы', link: '/ru/modules/spacing/' },
    { text: 'Типографика', link: '/ru/modules/typography/' },
  ],
}

export const sidebar = [
  {
    text: 'Начало работы',
    collapsed: false,
    items: [
      { text: 'Установка', link: '/ru/getting-started/installation' },
      { text: 'Введение', link: '/ru/getting-started/introduction' },
      { text: 'Быстрый старт', link: '/ru/getting-started/quick-start' },
    ],
  },
  {
    text: 'Руководство',
    collapsed: false,
    items: [
      { text: 'Выравнивание', link: '/ru/guides/align' },
      { text: 'Базовые стили', link: '/ru/guides/base' },
      { text: 'Фон', link: '/ru/guides/bg' },
      { text: 'Границы', link: '/ru/guides/border' },
      { text: 'Курсор', link: '/ru/guides/cursor' },
      { text: 'Отображение', link: '/ru/guides/display' },
      { text: 'Эффекты', link: '/ru/guides/effects' },
      { text: 'Фильтры', link: '/ru/guides/filters' },
      { text: 'Flexbox', link: '/ru/guides/flexbox' },
      { text: 'Сетка', link: '/ru/guides/grid' },
      { text: 'Интерактивность', link: '/ru/guides/interactivity' },
      { text: 'Контур', link: '/ru/guides/outline' },
      { text: 'Позиционирование', link: '/ru/guides/position' },
      { text: 'Прокрутка', link: '/ru/guides/scroll' },
      { text: 'Размеры', link: '/ru/guides/sizing' },
      { text: 'Отступы', link: '/ru/guides/spacing' },
      { text: 'Типографика', link: '/ru/guides/typography' },
    ],
  },
  {
    text: 'Справочник',
    collapsed: false,
    items: [
      { text: 'CSS классы', link: '/ru/guides/css-classes' },
      { text: 'Анимации', link: '/ru/reference/animations' },
      { text: 'Палитра цветов', link: '/ru/reference/colors-palette' },
      { text: 'Примеры цветов', link: '/ru/reference/colors-examples' },
      { text: 'Варианты', link: '/ru/reference/variants' },
    ],
  },
  modules,
  API,
]