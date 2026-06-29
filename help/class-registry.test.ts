import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

interface ClassRegistry {
  generatedAt: string
  totalClasses: number
  modules: Record<string, string[]>
  patterns: Record<string, string>
}

function loadRegistry (): ClassRegistry {
  const registryPath = resolve(__dirname, 'class-registry.json')
  return JSON.parse(readFileSync(registryPath, 'utf8')) as ClassRegistry
}

function allClasses (registry: ClassRegistry): string[] {
  return Object.values(registry.modules).flat()
}

describe('class-registry.json', () => {
  const registry = loadRegistry()
  const classes = allClasses(registry)

  it('is not empty', () => {
    expect(registry.totalClasses).toBeGreaterThan(100)
    expect(classes.length).toBe(registry.totalClasses)
  })

  it('contains anchor ustatic classes', () => {
    expect(classes).toContain('rounded')
    expect(classes).toContain('font-normal')
    expect(classes).toContain('select-none')
    expect(classes).toContain('hidden')
    expect(classes).toContain('hidden-md')
    expect(classes).toContain('animation:spin-4')
    expect(classes).toContain('active:pulse')
    expect(classes).toContain('cursor-pointer')
    expect(classes).toContain('flex')
    expect(classes).toContain('p-4')
  })

  it('does not contain deprecated Level-1 names', () => {
    expect(classes).not.toContain('rounded-base')
    expect(classes).not.toContain('font-regular')
    expect(classes).not.toContain('user-select-none')
    expect(classes).not.toContain('hide')
    expect(classes).not.toContain('hide-md')
  })

  it('does not contain keyframe artifacts', () => {
    expect(classes).not.toContain('25s')
    expect(classes).not.toContain('3s')
    expect(classes.filter(c => c.endsWith('\\')).length).toBe(0)
  })

  it('has expected modules', () => {
    expect(registry.modules.spacing).toBeDefined()
    expect(registry.modules.flexbox).toBeDefined()
    expect(registry.modules.typography).toBeDefined()
    expect(registry.modules.animations).toBeDefined()
  })

  it('has derived patterns for hover and animations', () => {
    expect(registry.patterns['hover:bg-{palette}']).toBe('bg')
    expect(registry.patterns['animation:spin-{n}']).toBe('animations')
  })
})
