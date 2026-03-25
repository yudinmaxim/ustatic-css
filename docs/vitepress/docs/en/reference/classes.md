# Class Dictionary

## 📐 Align — Element Alignment

| Class | Description |
|-------|-------------|
| `.align-baseline` | Align to text baseline |
| `.align-top` | Align to parent top |
| `.align-middle` | Align to parent middle |
| `.align-bottom` | Align to parent bottom |

---

## 🎬 Animations

| Class | Description |
|-------|-------------|
| `.blink` | Blinking (opacity 50%, 1s) |
| `.animation:spin-1` … `.animation:spin-10` | Spinning (0.25s — 2.5s) |
| `.hover:underline--{color}` | Underline on hover |
| `.active:pulse` | Pulse on click |

---

## 🎨 Bg — Background

| Class | Description |
|-------|-------------|
| `.bg-{color}` | Background color |
| `.bg-{color}-{brightness}` | Background color with brightness |
| `.bg-none` | Transparent background |
| `.bg-opacity-{0\|25\|50\|75\|100}` | Background opacity |
| `.hover:bg-{color}` | Background on hover |

---

## 🖼️ Border — Borders and Rounding

| Class | Description |
|-------|-------------|
| `.border` | 1px border |
| `.border-0` … `.border-5` | Border 0-20px |
| `.border-t`, `.border-r`, `.border-b`, `.border-l` | Border per side |
| `.border-{color}` | Border color |
| `.border-transparent` | Transparent border |
| `.border-dashed` | Dashed border |
| `.rounded-none` | No rounding |
| `.rounded-sm` | Rounding 2px |
| `.rounded-base` | Rounding 4px |
| `.rounded-md` | Rounding 6px |
| `.rounded-lg` | Rounding 8px |
| `.rounded-xl` | Rounding 12px |
| `.rounded-full` | Full rounding |

**Important:** `.rounded` without suffix doesn't exist — use `.rounded-base`.

---

## 👆 Cursor

| Class | Description |
|-------|-------------|
| `.cursor-pointer` | Hand cursor |
| `.cursor-move` | Move cursor |
| `.cursor-default` | Default cursor |
| `.cursor-disabled` | Disabled cursor |
| `.cursor-resize-x`, `.cursor-resize-y` | Resize cursor |
| `.cursor-wait` | Wait cursor |
| `.cursor-help` | Help cursor |

---

## 📦 Display

| Class | Description |
|-------|-------------|
| `.inline` | Inline element |
| `.block` | Block element |
| `.inline-block` | Inline-block |
| `.table`, `.table-cell` | Table/cell |
| `.overflow-hidden` | Hide overflow |
| `.overflow-{scroll\|auto}` | Scroll |

---

## ✨ Effects

| Class | Description |
|-------|-------------|
| `.opacity-{0\|5\|10\|...\|100}` | Element opacity |
| `.hover:opacity-{value}` | Opacity on hover |
| `.required` | Red asterisk * |
| `.rotate-{0\|45\|90\|...\|315}` | Rotation angle |

---

## 📐 Flexbox

| Class | Description |
|-------|-------------|
| `.flex` | Flex container |
| `.flex-column`, `.flex-col` | Vertical direction |
| `.flex-row` | Horizontal direction |
| `.flex-wrap` | Wrap items |
| `.flex-0`, `.flex-1`, `.flex-auto`, `.flex-none` | Flex properties |
| `.items-start` … `.items-stretch` | Item alignment |
| `.justify-start` … `.justify-evenly` | Main axis alignment |
| `.gap-{size}` | Gap between items |

---

## 📊 Grid

| Class | Description |
|-------|-------------|
| `.grid` | Grid container |
| `.grid-columns--1fr-1fr` | Two equal columns |
| `.grid-columns--1fr-2fr` | Columns 1fr and 2fr |
| `.grid-col-span-1` … `.grid-col-span-3` | Column span |

---

## 📍 Position

| Class | Description |
|-------|-------------|
| `.relative` | Relative |
| `.absolute` | Absolute |
| `.fixed` | Fixed |
| `.absolute-center` | Centered |
| `.top-{pos}` … `.left-{pos}` | Coordinates |
| `.z-0` … `.z-100` | Z-index |

---

## 📏 Sizing

| Class | Description |
|-------|-------------|
| `.w-{size}` | Width |
| `.h-{size}` | Height |
| `.w-screen`, `.h-screen` | 100vw / 100vh |
| `.min-w-{size}`, `.max-w-{size}` | Min/max width |

---

## 📐 Spacing

| Class | Description |
|-------|-------------|
| `.m-{space}` | Margin on all sides |
| `.mx-{space}`, `.my-{space}` | Margin on axes |
| `.mt-{space}` … `.ml-{space}` | Margin per side |
| `.p-{space}` | Padding on all sides |
| `.px-{space}`, `.py-{space}` | Padding on axes |
| `.pt-{space}` … `.pl-{space}` | Padding per side |

**Values:** `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

---

## 🔤 Typography

| Class | Description |
|-------|-------------|
| `.text-2xs` … `.text-2xl` | Text size |
| `.font-thin` … `.font-black` | Font weight |
| `.text-{color}` | Text color |
| `.text-left`, `.text-center`, `.text-right` | Text alignment |
| `.italic` | Italic |
| `.underline` | Underline |
| `.truncate` | Truncate with ellipsis |
