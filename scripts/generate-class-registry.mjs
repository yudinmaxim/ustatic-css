import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const modulesDir = path.join(root, 'dist/css/modules')
const helpDir = path.join(root, 'help')

const SELECTOR_CLASS_REGEX = /\.((?:\\:|[^.:#\s,>+~[\]()\\]+)+)/g

function unescapeClassName (name) {
  return name.replace(/\\:/g, ':').replace(/\\\//g, '/')
}

/** `.active\:pulse:active` → `active:pulse`; `.no-filter:hover` → `no-filter` */
function normalizeExtractedClass (name) {
  const m = name.match(/^(.+):(?:active|hover|focus|visited|before|after)$/)
  return m ? m[1] : name
}

function isValidUtilityClass (cls) {
  if (!cls || cls.length < 1) return false
  if (!/^-?[a-zA-Z]/.test(cls)) return false
  if (/^\d/.test(cls)) return false
  return true
}

function normalizeSelectorPart (raw) {
  let selector = raw.trim()
  if (!selector) return ''

  // @charset "UTF-8";.class{ — берём часть после последней ;
  const semi = selector.lastIndexOf(';')
  if (semi !== -1 && selector.slice(0, semi).trim().startsWith('@')) {
    selector = selector.slice(semi + 1).trim()
  }

  if (selector.startsWith('@')) return ''
  return selector
}

function extractClasses (css) {
  const classes = new Set()
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '')

  // .class перед `{` или `,` (в т.ч. `.a,.b{` и внутри @media)
  const globalRe = /\.([^.#,\s{}]+)(?=[,{])/g
  let match
  while ((match = globalRe.exec(stripped)) !== null) {
    const cls = normalizeExtractedClass(unescapeClassName(match[1].trim()))
    if (isValidUtilityClass(cls)) classes.add(cls)
  }

  return [...classes].sort()
}

function ensureDist () {
  if (!fs.existsSync(modulesDir)) {
    console.log('dist/css/modules/ not found, running pnpm build...')
    execSync('pnpm build', { cwd: root, stdio: 'inherit' })
  }
}

function collectModules () {
  const modules = {}

  for (const file of fs.readdirSync(modulesDir).filter(f => f.endsWith('.css'))) {
    const moduleName = file.replace('.css', '')
    const css = fs.readFileSync(path.join(modulesDir, file), 'utf8')
    modules[moduleName] = extractClasses(css)
  }

  const resetsDir = path.join(modulesDir, 'base/resets')
  if (fs.existsSync(resetsDir)) {
    for (const file of fs.readdirSync(resetsDir).filter(f => f.endsWith('.css'))) {
      const moduleName = `base/resets/${file.replace('.css', '')}`
      const css = fs.readFileSync(path.join(resetsDir, file), 'utf8')
      modules[moduleName] = extractClasses(css)
    }
  }

  return modules
}

function derivePatterns (modules) {
  const patterns = {}
  const allClasses = Object.values(modules).flat()

  const rules = [
    { regex: /^hover:bg-.+$/, pattern: 'hover:bg-{palette}', module: 'bg' },
    { regex: /^hover:text-.+$/, pattern: 'hover:text-{palette}', module: 'typography' },
    { regex: /^hover:opacity-.+$/, pattern: 'hover:opacity-{step}', module: 'effects' },
    { regex: /^bg-opacity-\d+$/, pattern: 'bg-opacity-{step}', module: 'bg' },
    { regex: /^animation:spin-\d+$/, pattern: 'animation:spin-{n}', module: 'animations' },
    { regex: /^grid-columns--.+$/, pattern: 'grid-columns--{template}', module: 'grid' },
    { regex: /^grid-rows--.+$/, pattern: 'grid-rows--{template}', module: 'grid' },
    { regex: /^hover:underline--.+$/, pattern: 'hover:underline--{palette}', module: 'animations' },
    { regex: /^active:pulse$/, pattern: 'active:pulse', module: 'animations' },
    { regex: /^hidden-.+$/, pattern: 'hidden-{breakpoint}', module: 'hide' },
    { regex: /^outline-style--.+$/, pattern: 'outline-style--{style}', module: 'outline' },
    { regex: /^divider-[xy]--.+$/, pattern: 'divider-{axis}--{size}', module: 'border' },
  ]

  for (const rule of rules) {
    if (allClasses.some(c => rule.regex.test(c))) {
      patterns[rule.pattern] = rule.module
    }
  }

  return patterns
}

function generateMarkdown (modules, generatedAt) {
  const lines = [
    '# Class Registry (auto-generated)',
    '',
    `> Сгенерировано: ${generatedAt}`,
    '> Не редактировать вручную. Запуск: `pnpm class-registry`',
    '',
  ]

  let total = 0
  for (const [name, classes] of Object.entries(modules).sort()) {
    lines.push(`## ${name} (${classes.length})`)
    lines.push('')
    const sample = classes.slice(0, 15)
    for (const cls of sample) {
      lines.push(`- \`.${cls}\``)
    }
    if (classes.length > 15) {
      lines.push(`- ... ещё ${classes.length - 15} (см. class-registry.json)`)
    }
    lines.push('')
    total += classes.length
  }

  lines.push(`**Всего:** ${total} классов в ${Object.keys(modules).length} модулях`)
  return lines.join('\n')
}

function main () {
  ensureDist()

  const modules = collectModules()
  const patterns = derivePatterns(modules)
  const generatedAt = new Date().toISOString()
  const totalClasses = Object.values(modules).reduce((sum, arr) => sum + arr.length, 0)

  const registry = {
    generatedAt,
    totalClasses,
    modules,
    patterns,
  }

  fs.mkdirSync(helpDir, { recursive: true })
  fs.writeFileSync(
    path.join(helpDir, 'class-registry.json'),
    JSON.stringify(registry, null, 2) + '\n',
  )
  fs.writeFileSync(
    path.join(helpDir, 'class-registry.md'),
    generateMarkdown(modules, generatedAt) + '\n',
  )

  console.log(`Wrote ${totalClasses} classes to help/class-registry.json`)
}

main()
