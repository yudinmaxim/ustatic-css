import { describe, it, expect, beforeEach } from 'vitest'
import { loadStyles, getStyleLinks, getModulesFromClasses, configureUstaticCss } from './styleLoader'

describe('getModulesFromClasses', () => {
  it('returns modules for exact class matches', () => {
    expect(getModulesFromClasses(['flex'])).toEqual(['flexbox'])
  })

  it('returns modules for prefix class matches', () => {
    const result = getModulesFromClasses(['items-center'])
    expect(result).toContain('flexbox')
  })
})

describe('getStyleLinks', () => {
  it('returns ustatic.css and vars.css by default', () => {
    const links = getStyleLinks({ mode: 'ssr', basePath: '/ustatic-css' })
    expect(links).toHaveLength(2)
    expect(links[0].href).toBe('/ustatic-css/ustatic.css')
    expect(links[1].href).toBe('/ustatic-css/vars.css')
  })

  it('returns module links with vars.css for specific modules', () => {
    const links = getStyleLinks({
      mode: 'ssr',
      basePath: '/ustatic-css',
      modules: ['flexbox', 'spacing']
    })
    expect(links).toHaveLength(3)
    expect(links[0].href).toBe('/ustatic-css/modules/flexbox.css')
    expect(links[1].href).toBe('/ustatic-css/modules/spacing.css')
    expect(links[2].href).toBe('/ustatic-css/vars.css')
  })

  it('merges modules from classes and explicit modules', () => {
    const links = getStyleLinks({
      mode: 'ssr',
      basePath: '/ustatic-css',
      classes: ['flex', 'p-4'],
      modules: ['typography']
    })
    const hrefs = links.map(l => l.href)
    expect(hrefs).toContain('/ustatic-css/modules/flexbox.css')
    expect(hrefs).toContain('/ustatic-css/modules/spacing.css')
    expect(hrefs).toContain('/ustatic-css/modules/typography.css')
    expect(hrefs).toContain('/ustatic-css/vars.css')
  })

  it('defaults basePath to /ustatic-css in ssr mode', () => {
    const links = getStyleLinks({ mode: 'ssr' })
    expect(links[0].href).toMatch(/^\/ustatic-css\//)
  })

  it('detects browser mode automatically when document exists', () => {
    const links = getStyleLinks()
    // In happy-dom, document exists, so it should be browser mode
    expect(links.length).toBeGreaterThan(0)
    links.forEach(link => {
      expect(link.href).toBeTruthy()
      expect(link.rel).toBe('stylesheet')
      expect(link.type).toBe('text/css')
    })
  })
})

describe('configureUstaticCss', () => {
  it('sets global basePath used by loadStyles', () => {
    configureUstaticCss({ basePath: '/global/path' })
    loadStyles({ modules: ['flexbox'] })
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    const hrefs = Array.from(links).map(l => l.getAttribute('href'))
    expect(hrefs.some(h => h?.startsWith('/global/path/'))).toBe(true)
  })

  it('options.basePath overrides global config', () => {
    configureUstaticCss({ basePath: '/global/path' })
    loadStyles({ modules: ['flexbox'], basePath: '/local/path' })
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    const hrefs = Array.from(links).map(l => l.getAttribute('href'))
    expect(hrefs.some(h => h?.startsWith('/local/path/'))).toBe(true)
  })
})

describe('loadStyles', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })

  const testBasePath = 'http://localhost:3000/ustatic-css'

  it('does not throw when called without arguments', () => {
    expect(() => loadStyles()).not.toThrow()
  })

  it('does not throw with modules option', () => {
    expect(() => loadStyles({ modules: ['flexbox'] })).not.toThrow()
  })

  it('does not throw with classes option', () => {
    expect(() => loadStyles({ classes: ['flex', 'p-4'] })).not.toThrow()
  })

  it('adds link elements to head with basePath', () => {
    loadStyles({ modules: ['flexbox'], basePath: testBasePath })
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('deduplicates link elements on repeated calls', () => {
    loadStyles({ modules: ['flexbox'], basePath: testBasePath })
    const countAfterFirst = document.head.querySelectorAll('link[rel="stylesheet"]').length

    loadStyles({ modules: ['flexbox'], basePath: testBasePath })
    const countAfterSecond = document.head.querySelectorAll('link[rel="stylesheet"]').length

    expect(countAfterSecond).toBe(countAfterFirst)
  })

  it('adds new modules incrementally', () => {
    loadStyles({ modules: ['flexbox'], basePath: testBasePath })
    const countAfterFirst = document.head.querySelectorAll('link[rel="stylesheet"]').length

    loadStyles({ modules: ['spacing'], basePath: testBasePath })
    const countAfterSecond = document.head.querySelectorAll('link[rel="stylesheet"]').length

    expect(countAfterSecond).toBe(countAfterFirst + 1)
  })
})
