---
title: Classes Dictionary
description: Complete list of all uStatic CSS utility classes
---

# Utility Classes Dictionary

## 📐 Align — Element Alignment

| Class | Description |
|-------|----------|
| `.align-baseline` | Align to text baseline |
| `.align-top` | Align to top of parent |
| `.align-middle` | Align to middle of parent |
| `.align-bottom` | Align to bottom of parent |

---

## 🎬 Animations — Animations

| Class | Description |
|-------|----------|
| `.blink` | Blinking (opacity 50%, 1s) |
| `.animation:spin-1` … `.animation:spin-10` | Spinning (0.25s — 2.5s) |
| `.hover:underline--{color}` | Underline on hover |
| `.active:pulse` | Pulse on click |

---

## 🎨 Bg — Background

| Class | Description |
|-------|----------|
| `.bg-{color}` | Background color |
| `.bg-{color}-{brightness}` | Background color with brightness |
| `.bg-none` | Transparent background |
| `.bg-opacity-{0\|25\|50\|75\|100}` | Background opacity |
| `.hover:bg-{color}` | Background on hover |

---

## 🖼️ Border — Borders and Radius

| Class | Description |
|-------|----------|
| `.border` | 1px border |
| `.border-0` … `.border-5` | 0-20px border |
| `.border-t`, `.border-r`, `.border-b`, `.border-l` | Border by side |
| `.border-{color}` | Border color |
| `.border-transparent` | Transparent border |
| `.border-dashed` | Dashed border |
| `.rounded-none` | No radius |
| `.rounded-sm` | 2px radius |
| `.rounded-base` | 4px radius |
| `.rounded-md` | 6px radius |
| `.rounded-lg` | 8px radius |
| `.rounded-xl` | 12px radius |
| `.rounded-full` | Full radius |

**Important:** `.rounded` without suffix doesn't exist — use `.rounded-base`.

---

## 👆 Cursor — Cursor

| Class | Description |
|-------|----------|
| `.cursor-pointer` | Pointer cursor |
| `.cursor-move` | Move cursor |
| `.cursor-default` | Default cursor |
| `.cursor-disabled` | Disabled element cursor |
| `.cursor-resize-x`, `.cursor-resize-y` | Resize cursor |
| `.cursor-wait` | Wait cursor |
| `.cursor-help` | Help cursor |

---

## 📦 Display — Display

| Class | Description |
|-------|----------|
| `.inline` | Inline element |
| `.block` | Block element |
| `.inline-block` | Inline-block element |
| `.table`, `.table-cell` | Table/cell |
| `.overflow-hidden` | Hide overflow |
| `.overflow-{scroll\|auto}` | Scroll |

---

## ✨ Effects — Effects

| Class | Description |
|-------|----------|
| `.opacity-{0\|5\|10\|...\|100}` | Element opacity |
| `.hover:opacity-{value}` | Opacity on hover |
| `.required` | Red asterisk * |
| `.rotate-{0\|45\|90\|...\|315}` | Rotate by angle |

---

## 🌫️ Filters — Filters

| Class | Description |
|-------|----------|
| `.grayscale` | Grayscale (100%) |
| `.grayscale-0` | No filter |
| `.no-filter` | Reset filters |

---

## 📐 Flexbox

| Class | Description |
|-------|----------|
| `.flex` | Flex container |
| `.flex-column`, `.flex-col` | Vertical direction |
| `.flex-row` | Horizontal direction |
| `.flex-wrap` | Wrap elements |
| `.flex-0`, `.flex-1`, `.flex-auto`, `.flex-none` | Flex properties |
| `.items-start` … `.items-stretch` | Item alignment |
| `.justify-start` … `.justify-evenly` | Axis alignment |
| `.gap-{size}` | Gap between elements |

---

## 📊 Grid

| Class | Description |
|-------|----------|
| `.grid` | Grid container |
| `.grid-columns--1fr-1fr` | Two equal columns |
| `.grid-columns--1fr-2fr` | Columns 1fr and 2fr |
| `.grid-columns--1fr-1fr-1fr` | Three equal columns |
| `.grid-col-span-1` … `.grid-col-span-3` | Column spanning |

---

## 🙈 Hide — Hide

| Class | Description |
|-------|----------|
| `.hide` | Hide (display: none) |
| `.hide-{breakpoint}` | Hide at breakpoint |

---

## 🖱️ Interactivity

| Class | Description |
|-------|----------|
| `.pointer-events-none` | Disable pointer events |
| `.pointer-events-auto` | Enable pointer events |
| `.user-select-none` | Disable selection |
| `.user-select-all` | Allow select all |

---

## 📝 Outline — Outline

| Class | Description |
|-------|----------|
| `.outline-none` | No outline |
| `.outline-{size}` | Outline width (1-5) |
| `.outline-{color}` | Outline color |
| `.outline-offset-{0-10}` | Outline offset |

---

## 📍 Position — Positioning

| Class | Description |
|-------|----------|
| `.relative` | Relative |
| `.absolute` | Absolute |
| `.fixed` | Fixed |
| `.absolute-center` | Centered |
| `.top-{pos}` … `.left-{pos}` | Coordinates |
| `.z-0` … `.z-100` | Z-index |

---

## 📜 Scroll — Scrollbar

| Class | Description |
|-------|----------|
| `.z-scroll` | Custom scrollbar |
| `.z-scroll--hovered` | Enlarged on hover |
| `.z-scroll--thin` | Thin scrollbar |

---

## 📏 Sizing — Sizing

| Class | Description |
|-------|----------|
| `.w-{size}` | Width |
| `.h-{size}` | Height |
| `.w-screen`, `.h-screen` | 100vw / 100vh |
| `.min-w-{size}`, `.max-w-{size}` | Min/max width |
| `.min-h-{size}`, `.max-h-{size}` | Min/max height |

---

## 📐 Spacing — Spacing

| Class | Description |
|-------|----------|
| `.m-{space}` | Margin all sides |
| `.mx-{space}`, `.my-{space}` | Margin by axis |
| `.mt-{space}` … `.ml-{space}` | Margin by side |
| `.-m-{space}` | Negative margin |
| `.p-{space}` | Padding all sides |
| `.px-{space}`, `.py-{space}` | Padding by axis |
| `.pt-{space}` … `.pl-{space}` | Padding by side |

**Values:** `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

---

## 🔤 Typography — Typography

| Class | Description |
|-------|----------|
| `.text-2xs` … `.text-2xl` | Text size |
| `.font-thin` … `.font-black` | Font weight |
| `.text-{color}` | Text color |
| `.text-left`, `.text-center`, `.text-right` | Text alignment |
| `.italic` | Italic |
| `.underline` | Underline |
| `.truncate` | Truncate with ellipsis |
