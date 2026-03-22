#!/usr/bin/env node

/**
 * Скрипт копирует CSS файлы из ustatic-css в public папку Astro
 * Это необходимо для корректной работы SSR и отдачи статических файлов
 */

import { copyFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rootDir = join(__dirname, '..')
const nodeModulesDir = join(rootDir, 'node_modules', 'ustatic-css')
const publicDir = join(rootDir, 'public', 'ustatic-css')

// Создаём директорию public/ustatic-css если она не существует
mkdirSync(publicDir, { recursive: true })

// Копируем основные CSS файлы
const cssFiles = [
  'dist/css/ustatic.css',
  'dist/css/vars.css'
]

cssFiles.forEach(file => {
  const src = join(nodeModulesDir, file)
  const dest = join(publicDir, file.replace('dist/css/', ''))
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(src, dest)
  console.log(`Copied: ${file} -> public/ustatic-css/${file.replace('dist/css/', '')}`)
})

// Копируем модули
const modulesDir = join(nodeModulesDir, 'dist/css/modules')
const modulesDestDir = join(publicDir, 'modules')

mkdirSync(modulesDestDir, { recursive: true })

const moduleFiles = readdirSync(modulesDir)
moduleFiles.forEach(file => {
  const src = join(modulesDir, file)
  const dest = join(modulesDestDir, file)
  
  if (statSync(src).isFile() && file.endsWith('.css')) {
    copyFileSync(src, dest)
    console.log(`Copied: modules/${file} -> public/ustatic-css/modules/${file}`)
  }
})

console.log('\nCSS files copied successfully!')
