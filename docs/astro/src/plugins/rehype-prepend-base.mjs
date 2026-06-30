/** Добавляет Astro `base` к root-relative ссылкам в markdown (Starlight не делает это сам). */
export function rehypePrependBase (basePath = '/') {
  const prefix = basePath.replace(/\/$/, '')

  return (tree) => {
    walk(tree)
  }

  function walk (node) {
    if (!node || typeof node !== 'object') return

    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href
      if (
        typeof href === 'string' &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !(prefix && href.startsWith(`${prefix}/`))
      ) {
        node.properties.href = `${prefix}${href}`
      }
    }

    if (Array.isArray(node.children)) {
      for (const child of node.children) walk(child)
    }
  }
}
