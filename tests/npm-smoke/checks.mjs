/**
 * Проверки установленного пакета ustatic-css (из npm или .tgz).
 * Запуск: node checks.mjs /path/to/node_modules/ustatic-css [expectedVersion]
 */
import { access, readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const pkgRoot = process.argv[2]
const expectedVersion = process.argv[3]

if (!pkgRoot) {
  console.error('Usage: node checks.mjs <package-root> [expectedVersion]')
  process.exit(1)
}

const require = createRequire(import.meta.url)

async function exists (path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

function fail (message) {
  console.error(`FAIL: ${message}`)
  process.exit(1)
}

function ok (message) {
  console.log(`OK: ${message}`)
}

const pkgJson = JSON.parse(await readFile(join(pkgRoot, 'package.json'), 'utf8'))

if (expectedVersion && pkgJson.version !== expectedVersion) {
  fail(`version ${pkgJson.version} !== expected ${expectedVersion}`)
}
ok(`package ustatic-css@${pkgJson.version}`)

const requiredFiles = [
  'dist/css/ustatic.css',
  'dist/css/vars.css',
  'dist/css/modules/flexbox.css',
  'dist/css/modules/animations.css',
  'dist/js/index.es.js',
  'dist/js/index.cjs',
  'dist/types/src/index.d.ts',
  'src/css/utils/_token.scss',
]

for (const rel of requiredFiles) {
  if (!(await exists(join(pkgRoot, rel)))) {
    fail(`missing file ${rel}`)
  }
}
ok(`required files (${requiredFiles.length})`)

const ustaticCss = await readFile(join(pkgRoot, 'dist/css/ustatic.css'), 'utf8')
if (!ustaticCss.includes('.flex{') && !ustaticCss.includes('.flex ')) {
  fail('ustatic.css does not contain .flex utility')
}
ok('ustatic.css contains .flex')

const flexboxCss = await readFile(join(pkgRoot, 'dist/css/modules/flexbox.css'), 'utf8')
if (!flexboxCss.includes('.flex')) {
  fail('flexbox.css does not contain .flex')
}
ok('flexbox.css contains .flex')

// Subpath exports из package.json
const exportChecks = [
  ['.', join(pkgRoot, 'dist/css/ustatic.css')],
  ['./vars', join(pkgRoot, 'dist/css/vars.css')],
  ['./flexbox', join(pkgRoot, 'dist/css/modules/flexbox.css')],
  ['./scripts', join(pkgRoot, 'dist/js/index.es.js')],
]

for (const [subpath, filePath] of exportChecks) {
  const resolved = pkgJson.exports?.[subpath]
  const target = typeof resolved === 'string'
    ? resolved
    : resolved?.import ?? resolved?.require
  if (!target) fail(`exports missing ${subpath}`)
  const abs = join(pkgRoot, target.replace(/^\.\//, ''))
  if (abs !== filePath && !(await exists(abs))) {
    fail(`export ${subpath} → ${target} not found`)
  }
}
ok('package.json exports resolve to files')

// ESM API из опубликованного dist
const esmPath = join(pkgRoot, 'dist/js/index.es.js')
const { getModulesFromClasses, getStyleLinks } = await import(pathToFileURL(esmPath).href)

const modules = getModulesFromClasses(['flex', 'p-4', 'hidden-md'])
if (!modules.includes('flexbox') || !modules.includes('spacing') || !modules.includes('hidden')) {
  fail(`getModulesFromClasses unexpected: ${modules.join(', ')}`)
}
ok('getModulesFromClasses(["flex","p-4","hidden-md"])')

const links = getStyleLinks({ mode: 'ssr', basePath: '/ustatic-css', modules: ['flexbox'] })
const hrefs = links.map(l => l.href)
if (!hrefs.includes('/ustatic-css/modules/flexbox.css') || !hrefs.includes('/ustatic-css/vars.css')) {
  fail(`getStyleLinks unexpected: ${hrefs.join(', ')}`)
}
ok('getStyleLinks SSR')

// CJS entry
const cjs = require(join(pkgRoot, 'dist/js/index.cjs'))
if (typeof cjs.getModulesFromClasses !== 'function') {
  fail('CJS entry missing getModulesFromClasses')
}
ok('CJS require(".../index.cjs")')

console.log('\nAll npm smoke checks passed.')
