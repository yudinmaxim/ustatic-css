#!/usr/bin/env node
/**
 * Устанавливает ustatic-css из npm (или .tgz) во временный проект и прогоняет smoke-проверки.
 *
 * Примеры:
 *   node scripts/verify-npm-package.mjs --version 0.0.1-beta.7
 *   node scripts/verify-npm-package.mjs --tag beta
 *   node scripts/verify-npm-package.mjs --pack ./ustatic-css-0.0.2.tgz
 *   npm run build && npm pack && node scripts/verify-npm-package.mjs --pack ustatic-css-*.tgz
 */
import { execSync } from 'node:child_process'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const checksScript = join(root, 'tests/npm-smoke/checks.mjs')

function parseArgs (argv) {
  const opts = { registry: 'https://registry.npmjs.org' }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--version') opts.version = argv[++i]
    else if (arg === '--tag') opts.tag = argv[++i]
    else if (arg === '--pack') opts.pack = resolve(argv[++i])
    else if (arg === '--registry') opts.registry = argv[++i]
    else if (arg === '--no-cleanup') opts.noCleanup = true
    else if (arg === '--help' || arg === '-h') opts.help = true
  }
  return opts
}

function usage () {
  console.log(`Usage:
  node scripts/verify-npm-package.mjs --version <semver>
  node scripts/verify-npm-package.mjs --tag <latest|beta>
  node scripts/verify-npm-package.mjs --pack <path/to/ustatic-css-x.y.z.tgz>

Options:
  --registry <url>   npm registry (default: https://registry.npmjs.org)
  --no-cleanup       keep temp directory for debugging
`)
}

function run (cmd, cwd, env = {}) {
  execSync(cmd, {
    cwd,
    stdio: 'inherit',
    env: { ...process.env, ...env },
  })
}

async function waitForRegistryVersion (name, version, registry, attempts = 36, delayMs = 5000) {
  for (let i = 1; i <= attempts; i++) {
    try {
      const out = execSync(
        `npm view ${name}@${version} version --registry=${registry}`,
        { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
      ).trim()
      if (out === version) {
        console.log(`Registry: ${name}@${version} available (attempt ${i})`)
        return
      }
    } catch {
      // retry
    }
    if (i < attempts) {
      console.log(`Waiting for ${name}@${version} on registry (${i}/${attempts})…`)
      await new Promise(r => setTimeout(r, delayMs))
    }
  }
  throw new Error(`Package ${name}@${version} not found on ${registry} after ${attempts} attempts`)
}

async function main () {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.help || (!opts.version && !opts.tag && !opts.pack)) {
    usage()
    process.exit(opts.help ? 0 : 1)
  }

  const tmpDir = await mkdtemp(join(tmpdir(), 'ustatic-npm-verify-'))
  console.log(`Temp project: ${tmpDir}`)

  try {
    await writeFile(
      join(tmpDir, 'package.json'),
      JSON.stringify({ name: 'ustatic-npm-smoke', private: true, type: 'module' }, null, 2),
    )

    let expectedVersion = opts.version

    if (opts.pack) {
      console.log(`Installing from tarball: ${opts.pack}`)
      run(`npm install --no-save ${JSON.stringify(opts.pack)}`, tmpDir)
    } else {
      const spec = opts.tag
        ? `ustatic-css@${opts.tag}`
        : `ustatic-css@${opts.version}`

      if (opts.version) {
        await waitForRegistryVersion('ustatic-css', opts.version, opts.registry)
      }

      console.log(`Installing from registry: ${spec}`)
      run(
        `npm install --no-save --registry=${opts.registry} ${spec}`,
        tmpDir,
      )

      if (!expectedVersion && opts.tag) {
        expectedVersion = execSync('npm ls ustatic-css --json', {
          cwd: tmpDir,
          encoding: 'utf8',
        })
        const tree = JSON.parse(expectedVersion)
        expectedVersion = tree.dependencies?.['ustatic-css']?.version
      }
    }

    const pkgRoot = join(tmpDir, 'node_modules', 'ustatic-css')
    run(
      `node ${JSON.stringify(checksScript)} ${JSON.stringify(pkgRoot)} ${expectedVersion ?? ''}`.trim(),
      tmpDir,
    )
  } finally {
    if (!opts.noCleanup) {
      await rm(tmpDir, { recursive: true, force: true })
    } else {
      console.log(`Kept temp dir: ${tmpDir}`)
    }
  }
}

main().catch(err => {
  console.error(err.message || err)
  process.exit(1)
})
