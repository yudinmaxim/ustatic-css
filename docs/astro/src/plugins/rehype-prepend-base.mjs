import { visit } from 'unist-util-visit'

/** Добавляет Astro `base` к root-relative ссылкам в markdown (Starlight не делает это сам). */
export function rehypePrependBase (basePath = '/') {
  const prefix = basePath.replace(/\/$/, '')

  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return

      const href = node.properties?.href
      if (typeof href !== 'string') return
      if (!href.startsWith('/') || href.startsWith('//')) return
      if (prefix && href.startsWith(`${prefix}/`)) return

      node.properties.href = `${prefix}${href}`
    })
  }
}
