/**
 * Проверяет class="" в документации Astro против help/class-registry.json.
 * Запуск: node scripts/validate-docs-classes.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.join(__dirname, '../docs/astro/src/content/docs')
const registry = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../help/class-registry.json'), 'utf8'),
)
const allClasses = new Set(Object.values(registry.modules).flat())

const TW_ONLY = new Set([
  'max-w-sm', 'max-w-xs', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl',
  'space-y-1', 'space-y-2', 'space-y-4', 'shadow-sm', 'shadow-lg', 'font-mono',
  'object-cover',
])

/** Классы Vue `<transition name="…">` — задаются в CSS приложения, не в ustatic */
const VUE_TRANSITION = /^(fade|slide-up|scale)-(enter|leave)-(active|from|to)$/

function isAllowedClass (cls) {
  if (VUE_TRANSITION.test(cls)) return true
  return false
}

function walk (dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (/\.(md|mdx)$/.test(entry.name)) files.push(full)
  }
  return files
}

const issues = []

for (const file of walk(docsRoot)) {
  const content = fs.readFileSync(file, 'utf8')
  const re = /class="([^"]*)"/g
  let match
  while ((match = re.exec(content)) !== null) {
    const classes = match[1].split(/\s+/).filter(Boolean)
    for (const cls of classes) {
      if (TW_ONLY.has(cls)) {
        issues.push({ file, cls, reason: 'tailwind-only' })
      } else if (isAllowedClass(cls)) {
        continue
      } else if (!allClasses.has(cls) && !cls.includes(':') && !cls.includes('--')) {
        // пропускаем составные паттерны hover: и --
        if (!/^hover:/.test(cls) && !/^active:/.test(cls) && !/^animation:/.test(cls)) {
          issues.push({ file, cls, reason: 'not-in-registry' })
        }
      }
    }
  }
}

if (issues.length === 0) {
  console.log('OK: no class issues found')
  process.exit(0)
}

const grouped = new Map()
for (const { file, cls, reason } of issues) {
  const rel = path.relative(docsRoot, file)
  if (!grouped.has(rel)) grouped.set(rel, [])
  grouped.get(rel).push(`${cls} (${reason})`)
}

for (const [file, classes] of [...grouped.entries()].sort()) {
  console.log(`\n${file}:`)
  for (const c of [...new Set(classes)].sort()) console.log(`  - ${c}`)
}

console.log(`\n${issues.length} issue(s) in ${grouped.size} file(s)`)
process.exit(1)
