import { describe, it, expect, beforeEach } from 'vitest'
import { ustaticCss } from './vue.plugin'

function createMockApp() {
  return {
    use: () => {},
    config: { globalProperties: {} },
  }
}

describe('ustaticCss.install', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })

  it('adds stylesheets by default', () => {
    const app = createMockApp()
    ustaticCss.install(app)
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('passes modules option to loadStyles', () => {
    const app = createMockApp()
    ustaticCss.install(app, { modules: ['flexbox', 'spacing'], basePath: 'http://localhost:3000/ustatic-css' })
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    expect(links.length).toBe(3) // flexbox + spacing + vars
  })

  it('passes classes option to loadStyles', () => {
    const app = createMockApp()
    ustaticCss.install(app, { classes: ['flex', 'p-4'], basePath: 'http://localhost:3000/ustatic-css' })
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    expect(links.length).toBe(3) // flexbox + spacing + vars
  })

  it('does not load styles when autoLoad is false', () => {
    const app = createMockApp()
    ustaticCss.install(app, { autoLoad: false })
    const links = document.head.querySelectorAll('link[rel="stylesheet"]')
    expect(links.length).toBe(0)
  })

  it('does not throw without document (SSR)', () => {
    const doc = globalThis.document
    // @ts-expect-error - simulating SSR
    delete globalThis.document
    try {
      expect(() => ustaticCss.install(createMockApp())).not.toThrow()
    } finally {
      globalThis.document = doc
    }
  })
})
