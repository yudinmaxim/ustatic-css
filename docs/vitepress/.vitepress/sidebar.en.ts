import { API } from './nav.en'

const LANG = 'en'

export const modules = {
  text: 'Modules',
  collapsed: false,
  items: [
    { text: 'Align', link: `/${LANG}/modules/align/` },
    { text: 'Background', link: `/${LANG}/modules/bg/` },
    { text: 'Border', link: `/${LANG}/modules/border/` },
    { text: 'Cursor', link: `/${LANG}/modules/cursor/` },
    { text: 'Display', link: `/${LANG}/modules/display/` },
    { text: 'Effects', link: `/${LANG}/modules/effects/` },
    { text: 'Filters', link: `/${LANG}/modules/filters/` },
    { text: 'Flexbox', link: `/${LANG}/modules/flexbox/` },
    { text: 'Grid', link: `/${LANG}/modules/grid/` },
    { text: 'Hide', link: `/${LANG}/modules/hide/` },
    { text: 'Interactivity', link: `/${LANG}/modules/interactivity/` },
    { text: 'Outline', link: `/${LANG}/modules/outline/` },
    { text: 'Position', link: `/${LANG}/modules/position/` },
    { text: 'Presets', link: `/${LANG}/modules/presets/` },
    { text: 'Scroll', link: `/${LANG}/modules/scroll/` },
    { text: 'Sizing', link: `/${LANG}/modules/sizing/` },
    { text: 'Spacing', link: `/${LANG}/modules/spacing/` },
    { text: 'Typography', link: `/${LANG}/modules/typography/` },
  ],
}

export const sidebar = [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'Installation', link: `/${LANG}/getting-started/installation` },
      { text: 'Introduction', link: `/${LANG}/getting-started/introduction` },
      { text: 'Quick Start', link: `/${LANG}/getting-started/quick-start` },
    ],
  },
  {
    text: 'Manuals',
    collapsed: false,
    items: [
      { text: 'Align', link: `/${LANG}/guides/align` },
      { text: 'Base', link: `/${LANG}/guides/base` },
      { text: 'Background', link: `/${LANG}/guides/bg` },
      { text: 'Border', link: `/${LANG}/guides/border` },
      { text: 'Cursor', link: `/${LANG}/guides/cursor` },
      { text: 'Display', link: `/${LANG}/guides/display` },
      { text: 'Effects', link: `/${LANG}/guides/effects` },
      { text: 'Filters', link: `/${LANG}/guides/filters` },
      { text: 'Flexbox', link: `/${LANG}/guides/flexbox` },
      { text: 'Grid', link: `/${LANG}/guides/grid` },
      { text: 'Interactivity', link: `/${LANG}/guides/interactivity` },
      { text: 'Outline', link: `/${LANG}/guides/outline` },
      { text: 'Position', link: `/${LANG}/guides/position` },
      { text: 'Scroll', link: `/${LANG}/guides/scroll` },
      { text: 'Sizing', link: `/${LANG}/guides/sizing` },
      { text: 'Spacing', link: `/${LANG}/guides/spacing` },
      { text: 'Typography', link: `/${LANG}/guides/typography` },
    ],
  },
  {
    text: 'Reference',
    collapsed: false,
    items: [
      { text: 'CSS Classes', link: `/${LANG}/guides/css-classes` },
      { text: 'Animations', link: `/${LANG}/reference/animations` },
      { text: 'Color Palette', link: `/${LANG}/reference/colors-palette` },
      { text: 'Color Examples', link: `/${LANG}/reference/colors-examples` },
      { text: 'Variants', link: `/${LANG}/reference/variants` },
    ],
  },
  modules,
  API,
]