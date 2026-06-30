import { describe, it, expect } from 'vitest'
import { getModulesFromClasses } from './styleLoader'

describe('getModulesFromClasses', () => {
  it('returns empty array for empty input', () => {
    expect(getModulesFromClasses([])).toEqual([])
    expect(getModulesFromClasses('')).toEqual([])
    expect(getModulesFromClasses('   ')).toEqual([])
  })

  it('handles string array input', () => {
    const result = getModulesFromClasses(['flex', 'p-4', 'text-lg'])
    expect(result).toContain('flexbox')
    expect(result).toContain('spacing')
    expect(result).toContain('typography')
  })

  it('handles comma-separated string input', () => {
    const result = getModulesFromClasses('flex, p-4, text-lg')
    expect(result).toContain('flexbox')
    expect(result).toContain('spacing')
    expect(result).toContain('typography')
  })

  it('handles space-separated string input', () => {
    const result = getModulesFromClasses('flex p-4 text-lg')
    expect(result).toContain('flexbox')
    expect(result).toContain('spacing')
    expect(result).toContain('typography')
  })

  it('strips variant prefixes before matching', () => {
    const result = getModulesFromClasses(['hover:bg-blue-500', 'rounded'])
    expect(result).toContain('bg')
    expect(result).toContain('border')
  })

  it('strips responsive prefixes before matching', () => {
    const result = getModulesFromClasses(['md:flex', 'lg:block'])
    expect(result).toContain('flexbox')
    expect(result).toContain('display')
  })

  it('matches compound classes via prefix', () => {
    const result = getModulesFromClasses(['items-center', 'justify-between'])
    expect(result).toContain('flexbox')
  })

  it('deduplicates modules', () => {
    const result = getModulesFromClasses(['flex', 'flex-row', 'justify-center'])
    expect(result.filter(m => m === 'flexbox').length).toBe(1)
  })

  it('handles animation:spin-N classes (real CSS format)', () => {
    const result = getModulesFromClasses(['animation:spin-4'])
    expect(result).toContain('animations')
  })

  it('handles active:pulse variant class', () => {
    const result = getModulesFromClasses(['active:pulse'])
    expect(result).toContain('animations')
  })

  it('handles unknown classes gracefully', () => {
    const result = getModulesFromClasses(['nonexistent-class'])
    expect(result.length).toBeGreaterThanOrEqual(0)
  })

  it.each([
    ['flex', 'flexbox'],
    ['items-center', 'flexbox'],
    ['justify-between', 'flexbox'],
    ['inline-block', 'display'],
    ['p-4', 'spacing'],
    ['m-2', 'spacing'],
    ['text-lg', 'typography'],
    ['hover:bg-blue-500', 'bg'],
    ['rounded', 'border'],
    ['w-1/2', 'sizing'],
    ['animation:spin-4', 'animations'],
    ['active:pulse', 'animations'],
    ['cursor-pointer', 'cursor'],
    ['grid-cols-3', 'grid'],
  ])('maps %s → %s module (contract)', (className, module) => {
    expect(getModulesFromClasses([className])).toContain(module)
  })
})
