/**
 * Массовая замена имён классов после переименования Level 1.
 * Запуск: node scripts/apply-class-renames.mjs [--dry-run]
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dryRun = process.argv.includes('--dry-run')

const SKIP_DIRS = new Set([
  'node_modules', '.git', 'dist', '.pnpm-store', 'coverage',
])

const EXT = /\.(md|mdx|scss|ts|vue|json|mjs|mdc|md)$/

/** Порядок важен: длинные паттерны первыми */
const REPLACEMENTS = [
  [/rounded-tl-base/g, 'rounded-tl'],
  [/rounded-tr-base/g, 'rounded-tr'],
  [/rounded-bl-base/g, 'rounded-bl'],
  [/rounded-br-base/g, 'rounded-br'],
  [/rounded-t-base/g, 'rounded-t'],
  [/rounded-b-base/g, 'rounded-b'],
  [/rounded-l-base/g, 'rounded-l'],
  [/rounded-r-base/g, 'rounded-r'],
  [/rounded-base/g, 'rounded'],
  [/user-select-none/g, 'select-none'],
  [/user-select-auto/g, 'select-auto'],
  [/user-select-all/g, 'select-all'],
  [/user-select-text/g, 'select-text'],
  [/user-select/g, 'select'],
  [/font-regular/g, 'font-normal'],
  [/hide-full/g, 'hidden-full'],
  [/hide-def/g, 'hidden-def'],
  [/hide-md/g, 'hidden-md'],
  [/hide-lg/g, 'hidden-lg'],
  [/hide-xs/g, 'hidden-xs'],
  [/\| `hide-/g, '| `hidden-'],
  [/\| `\.hide-/g, '| `.hidden-'],
  [/\| `\.hide`/g, '| `.hidden`'],
  [/\| `hide`/g, '| `hidden`'],
  [/`\.hide`/g, '`.hidden`'],
  [/`hide`/g, '`hidden`'],
  [/\.hide\b/g, '.hidden'],
  [/'hide'/g, "'hidden'"],
  [/"hide"/g, '"hidden"'],
  [/class="([^"]*\b)hide(\b[^"]*)"/g, 'class="$1hidden$2"'],
  [/rounded-base/g, 'rounded'],
  [/font-regular/g, 'font-normal'],
]

function walk (dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (EXT.test(entry.name) && !entry.name.includes('class-registry.json')) {
      files.push(full)
    }
  }
  return files
}

let changed = 0

for (const file of walk(root)) {
  if (file.includes('apply-class-renames.mjs')) continue

  const original = fs.readFileSync(file, 'utf8')
  let content = original
  for (const [pattern, replacement] of REPLACEMENTS) {
    content = content.replace(pattern, replacement)
  }

  if (content !== original) {
    if (!dryRun) fs.writeFileSync(file, content)
    console.log(path.relative(root, file))
    changed++
  }
}

console.log(`\n${dryRun ? 'Would change' : 'Changed'} ${changed} file(s)`)
