/**
 * Исправляет типичные Tailwind-классы в документации Astro.
 * Запуск: node scripts/fix-docs-classes.mjs [--dry-run]
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.join(__dirname, '../docs/astro/src/content/docs')
const dryRun = process.argv.includes('--dry-run')

const REPLACEMENTS = [
  [/\bflex-column-reverse\b/g, 'flex-col-reverse'],
  [/\bflex-column\b/g, 'flex-col'],
  [/\bgrid-cols-4\b/g, 'grid-columns--4-32'],
  [/\bgrid-cols-3\b/g, 'grid-columns--3-32'],
  [/\bgrid-cols-2\b/g, 'grid-columns--2-32'],
  [/\bgrid-cols-1\b/g, 'grid-columns--1-32'],
  [/\bmd:grid-cols-\d+\s*/g, ''],
  [/\blg:grid-cols-\d+\s*/g, ''],
  [/\bmd:gap-\d+\s*/g, ''],
  [/\bcursor-not-allowed\b/g, 'cursor-disabled'],
  [/\btext-4xl\b/g, 'text-2xl'],
  [/\btext-3xl\b/g, 'text-2xl'],
  [/\buppercase\b/g, 'font-caps'],
  [/\bmax-h-\[80vh\]\b/g, 'max-h-80vh'],
  [/\bmin-w-max\b/g, 'min-w-fit'],
  [/\bgrayscale-50\b/g, 'grayscale'],
  [/\s*transition-opacity\b/g, ''],
  [/\s*transition-transform\b/g, ''],
  [/\s*duration-300\b/g, ''],
  [/\bgroup-hover:opacity-100\b/g, 'hover:opacity-100'],
  [/\bgroup-hover:opacity-75\b/g, 'hover:opacity-75'],
  [/\bgroup-hover:opacity-50\b/g, 'hover:opacity-50'],
  [/\bgroup-hover:visible\b/g, ''],
  [/\bgroup-hover:grayscale-0\b/g, 'hover:grayscale-0'],
  [/\bgroup-hover:bg-opacity-50\b/g, 'hover:bg-opacity-50'],
  [/\bgroup-hover:bg-opacity-20\b/g, 'hover:bg-opacity-20'],
  [/\bgroup-hover:bg-opacity-0\b/g, ''],
  [/\bline-clamp-3\b/g, 'truncate'],
  [/\btable-row\b/g, 'flex w-full'],
  [/\bsticky\b/g, 'relative'],
  [/\b-translate-x-1\/2\b/g, ''],
  [/\b-translate-y-1\/2\b/g, ''],
  [/\binvisible\b/g, 'opacity-0'],
  [/\b-right-2\b/g, 'right-0'],
  [/\b-top-2\b/g, 'top-0'],
  [/\bmax-h-\[80vh\]\b/g, 'max-h-80vh'],
  [/\bbottom-1\/3\b/g, 'bottom-1/4'],
  [/\bleft-1\/3\b/g, 'left-1/4'],
  [/\bbg-opacity-10\b/g, 'bg-opacity-25'],
  [/\bbg-opacity-20\b/g, 'bg-opacity-25'],
  [/\s+-translate-x-1\/2\b/g, ''],
  [/\s+-translate-y-1\/2\b/g, ''],
  [/\bbg-white\/50\b/g, 'bg-white bg-opacity-50'],
  [/\s*bg-gradient-to-r\b/g, ''],
  [/\s*from-primary-\d+\b/g, ''],
  [/\s*to-primary-\d+\b/g, ''],
  [/\bprose\b/g, ''],
  [/\bh-14\b/g, 'h-12'],
  [/\bw-14\b/g, 'w-12'],
  [/\bpt-16\b/g, 'pt-12'],
  [/\boutline-dashed\b/g, 'outline-style--dashed'],
  [/\bclass="outline outline-/g, 'class="outline-1 outline-'],
  [/\bclass="outline outline /g, 'class="outline-1 outline-'],
  [/\bmax-w-sm\b/g, 'max-w-96'],
  [/\bmax-w-xs\b/g, 'max-w-80'],
  [/\bmax-w-md\b/g, 'max-w-96'],
  [/\bmax-w-lg\b/g, 'max-w-128'],
  [/\bmax-w-xl\b/g, 'max-w-160'],
  [/\bmax-w-2xl\b/g, 'max-w-192'],
  [/\bspace-y-1\b/g, 'flex flex-col gap-1'],
  [/\bspace-y-2\b/g, 'flex flex-col gap-2'],
  [/\bspace-y-4\b/g, 'flex flex-col gap-4'],
  [/\bbg-white\/30\b/g, 'bg-white bg-opacity-50'],
  [/\bfont-mono\b/g, 'text-sm'],
  [/\bobject-cover\b/g, ''],
  [/\bw-3\/4\b/g, 'w-4/5'],
  [/\s*shadow-sm\b/g, ''],
  [/\s*shadow-lg\b/g, ''],
  [/\s*hover:shadow-lg\b/g, ''],
  [/\s*transition-colors\b/g, ''],
  [/\s*transition-shadow\b/g, ''],
  [/\s*transition-all\b/g, ''],
  [/\s*duration-500\b/g, ''],
  [/\s*focus:outline-none\b/g, ''],
  [/\s*focus:border-success\b/g, ''],
  [/\s*focus:border-danger\b/g, ''],
  [/\| `max-w-sm`/g, '| `max-w-96`'],
  [/\bwhitespace-nowrap\b/g, 'nowrap'],
  [/\bwhitespace-pre-wrap\b/g, 'pre-wrap'],
  [/\bfilter-grayscale\b/g, 'grayscale'],
  [/\bfilter-none\b/g, 'no-filter'],
  [/\binset-0\b/g, 'top-0 right-0 bottom-0 left-0'],
  [/\bmax-w-6xl\b/g, 'max-w-256'],
  [/\bmax-w-4xl\b/g, 'max-w-192'],
  [/\bmax-w-7xl\b/g, 'max-w-256'],
  [/\bw-1\/2\b/g, 'w-full'],
  [/\bmax-w-1\/2\b/g, 'max-w-full'],
  // TW group — убираем из class="", примеры упрощаются отдельно
  [/(class="[^"]*)\bgroup\s+/g, '$1'],
  [/(class="[^"]*)\s+group\b/g, '$1'],
]

function walk (dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (/\.(md|mdx)$/.test(entry.name)) files.push(full)
  }
  return files
}

function cleanClassAttr (content) {
  return content.replace(/class="([^"]*)"/g, (_, classes) => {
    const cleaned = classes.replace(/\s+/g, ' ').trim()
    return cleaned ? `class="${cleaned}"` : ''
  })
}

let changedFiles = 0

for (const file of walk(docsRoot)) {
  const original = fs.readFileSync(file, 'utf8')
  let content = original
  for (const [pattern, replacement] of REPLACEMENTS) {
    content = content.replace(pattern, replacement)
  }
  content = cleanClassAttr(content)
  if (content !== original) {
    if (!dryRun) fs.writeFileSync(file, content)
    changedFiles++
  }
}

console.log(`${dryRun ? 'Would change' : 'Changed'} ${changedFiles} file(s)`)
