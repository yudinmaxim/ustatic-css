/**
 * Хранилище состояния для обмена данными между островами Astro
 * Использует nanostores для реактивного управления состоянием
 */

import { atom } from 'nanostores'

import type { IConfig } from '@utypes/interface'

/**
 * Состояние приложения
 */
export interface IAppState {
  /** Конфигурация ustatic-css */
  config: IConfig
  /** HTML код для предпросмотра */
  htmlCode: string
  /** Загруженные CSS модули */
  loadedModules: string[]
}

/**
 * Основное хранилище состояния
 */
export const appStore = atom<IAppState>({
  config: {
    type: 'modules',
    modules: [ 'flexbox', 'spacing', 'typography' ],
    classesInput: 'flex, p-4, text-lg'
  },
  htmlCode: `<div class="p-4 bg-blue-100 rounded text-center">
  <h2 class="text-xl font-bold mb-2">Пример заголовка</h2>
  <p class="text-gray-700">Это пример текста с использованием утилитарных классов</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Пример кнопки
  </button>
</div>`,
  loadedModules: [ 'flexbox', 'spacing', 'typography' ]
})

/**
 * Обновить конфигурацию
 */
export const setConfig = (config: IConfig) => {
  appStore.set({
    ...appStore.get(),
    config
  })
}

/**
 * Обновить HTML код
 */
export const setHtmlCode = (htmlCode: string) => {
  appStore.set({
    ...appStore.get(),
    htmlCode
  })
}

/**
 * Обновить список загруженных модулей
 */
export const setLoadedModules = (loadedModules: string[]) => {
  appStore.set({
    ...appStore.get(),
    loadedModules
  })
}
