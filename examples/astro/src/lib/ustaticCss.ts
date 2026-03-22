/**
 * Инициализация ustatic-css для Astro
 *
 * Этот модуль предоставляет функции для загрузки стилей ustatic-css
 * как на сервере (SSR), так и в браузере (client-side).
 */

import { loadStyles as browserLoadStyles, getStyleLinks, type IStyleLink, type IStyleLinksOptions } from 'ustatic-css/scripts'
import type { IStyleLoaderOptions } from 'ustatic-css/scripts'

export interface IUstaticCssInitOptions extends IStyleLoaderOptions {
  /**
   * Автоматически определить классы из HTML и загрузить необходимые модули
   */
  autoDetect?: boolean
}

/**
 * Определяет, выполняется ли код в браузере
 */
const isBrowser = typeof document !== 'undefined'

/**
 * Генерирует HTML с <link> тегами для подключения стилей
 * Используется при SSR (server-side rendering)
 */
export const getStylesheetLinks = async (options?: IUstaticCssInitOptions): Promise<string> => {
  // В SSR режиме используем basePath '/ustatic-css' который соответствует public/ustatic-css
  const links = await getStyleLinks({ ...options, mode: 'ssr', basePath: '/ustatic-css' })

  // Генерируем HTML с link тегами
  return links
    .map((link: IStyleLink) => `<link rel="${link.rel}" type="${link.type}" href="${link.href}" />`)
    .join('\n\t\t')
}

/**
 * Инициализирует ustatic-css с указанными опциями
 *
 * При SSR возвращает HTML строку с <link> тегами
 * При выполнении в браузере динамически загружает стили
 *
 * @example
 * // В Astro компоненте (SSR)
 * const styles = await initUstaticCss({ modules: ['flexbox', 'spacing'] })
 *
 * @example
 * // В браузере (клиент)
 * await initUstaticCss({ modules: ['flexbox', 'spacing'] })
 */
export const initUstaticCss = async (options?: IUstaticCssInitOptions): Promise<string | void> => {
  // SSR режим - возвращаем HTML с link тегами
  if (!isBrowser) {
    console.log('ustatic-css [SSR] - генерация ссылок на стили', { options })
    return getStylesheetLinks(options)
  }

  // Браузер - динамическая загрузка
  console.log('ustatic-css [Client] - динамическая загрузка стилей', { options })
  await browserLoadStyles(options)
}

export type { IStyleLoaderOptions }
