
import { getPrefix } from './prefix'

/**
 * Преобразует имя токена в CSS-переменную с префиксом
 * @param token - Имя токена в формате: "foo.bar.field"
 * @returns CSS-переменная с префиксом
 */
const _getTokenName = (token: string): string => {
  const prefix = getPrefix()

  const variableName = token.replaceAll('.', '-').replaceAll('/', '-')
  if (prefix) {
    return `--${prefix}-${variableName}`
  } else {
    return `--${variableName}`
  }
}

/**
 * Возвращает значение токена как var(--token) (используется при
 * использовании значения токена в стилях, атрибуте style или внутри
 * генерируемого класса
 * @param token - Имя токена в формате: "foo.bar.field"
 * @returns CSS-переменная в формате var(--token)
 */
const getCssTokenVar = (token: string): string => {
  const tokenName = _getTokenName(token)
  return `var(${tokenName})`
}

/**
 * Позволяет получить значение токена, при использовании его в качестве значения
 * для другого токена
 * @param value - Если value начинается на 'T:' - то метод считает это значение
 * кодом токена и пытается получить значение этого токена
 * Иначе - возвращается само значение
 * @returns Преобразованное значение токена
 * @example
 * ```ts
 * const val = getValueFromForToken('foo.bar') // val == 'foo.bar'
 * const val = getValueFromForToken('T:foo.bar') // val == 'var(--foo-bar)'
 * ```
 */
const getValueFromForToken = (value: string): string => {
  let _value = value
  const isValueToken = value.startsWith('T:')

  if (isValueToken) {
    _value = getCssTokenVar(value.slice(2))
  }

  return _value
}

/**
 * Получает значение CSS-токена из глобальной области переменных
 * @param token - Имя токена в формате: "foo.bar.field"
 * @returns Значение токена
 */
const getCssToken = (token: string): string => {
  const tokenName = _getTokenName(token)
  return getComputedStyle(document.documentElement).getPropertyValue(`${tokenName}`)
}

/**
 * Создает значение токена как локальную переменную вида: --token: value
 * применимо при задаче токенов в атрибуте style
 * @param token - Имя токена в формате: "foo.bar.field"
 * @param value - Значение токена
 * @returns CSS-переменная в формате --token: value
 */
const setCssTokenVar = (token: string, value: string): string => {
  const _value = getValueFromForToken(value)
  const tokenName = _getTokenName(token)
  return `${tokenName}: ${_value}`
}

/**
 * Хук для управления CSS-переменными через классы
 * Позволяет устанавливать, получать и удалять CSS-токены как в глобальной области видимости, так и в рамках CSS-классов
 * @returns Объект с методами для работы с токенами
 */
export const useTokens = () => {
  const styleId = 'tokens-via-class'

  const generalTokens: Set<string> = new Set()
  const classes: Set<string> = new Set()

  /**
   * Устанавливает значения переменных на основании имени токена и его значения
   * @param className - Имя класса
   * @param tokens - Словарь токенов, где ключ - имя токена, значение - значение токена
   * @param options - Опции
   * @param options.patch - Флаг, определяющий нужно ли сохранять существующие токены. По умолчанию false
   * если patch == true, то существующие в классе токены сохраняются
   * если patch == false, то существующие в классе токены перезатираются
   * @info В случае применения кода токена в правой части, необходимо использовать префикс T:
   */
  const setCssTokenViaClass = (className: string, tokens: Record<string, string>, options?: { patch: boolean}): void => {
    const {
      patch = false
    } = options ?? {}

    const classTokens = getCssTokensFromClass(className)
    const classTokensList = patch
      ? Object.entries(classTokens)
        ?.map(([ key, value ]) => {
          return `${key}: ${value};`
        }) ?? []
      : []

    // Найти или создать тег <style> с нужным id
    let styleTag = document.getElementById(styleId) as HTMLStyleElement
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = styleId
      document.head.appendChild(styleTag)
    }

    // Создаем переменные для указанного класса
    const classVariables = classTokensList
      .concat(Object.entries(tokens)
        .map(([ key, value ]) => {
          const _value = getValueFromForToken(value)
          const tokenName = _getTokenName(key)
          return `${tokenName}: ${_value};`
        }))
      .join('\n  ')

    // Генерируем новый CSS-код для класса
    const classContent = `.${className} {\n  ${classVariables}\n}`

    // Удаляем старую запись для этого класса, если она существует
    let styleContent = styleTag.textContent || ''
    const classRegex = new RegExp(`\\.${className}\\s*\\{[^}]*\\}`, 'g')
    styleContent = styleContent.replace(classRegex, '')

    // Добавляем обновлённый контент для класса
    styleContent += `\n${classContent}`
    // Обновляем содержимое тега <style>
    styleTag.textContent = styleContent

    classes.add(className)
  }

  /**
   * Получает значения токенов из класса
   * @param className - Имя класса
   * @returns Словарь токенов, где ключ - имя токена, значение - значение токена
   */
  const getCssTokensFromClass = (className: string): { [tokenName: string]: string } => {
    const styleTag = document.getElementById(styleId) as HTMLStyleElement
    if (!styleTag) {
      return {}
    }

    const styleContent = styleTag.textContent
    const classRegex = new RegExp(`\\.${className}\\s*\\{[^}]*\\}`, 'g')
    const classContent = styleContent?.match(classRegex)
    if (!classContent) {
      return {}
    }

    const tokenRegex = /([a-zA-Z-]+):\s*([^;]+);/g
    const matches = classContent[0].matchAll(tokenRegex)
    const tokensList = Object.fromEntries(
      Array.from(matches, (match) => [ match[1], match[2].trim() ])
    )

    return tokensList
  }

  /**
   * Получает значение токена из класса
   * @param className - Имя класса
   * @param token - Имя токена
   * @returns Значение токена
   */
  const getCssTokenViaClass = (className: string, token: string): string => {
    const tokenName = _getTokenName(token)

    // Найти или создать тег <style> с нужным id
    const styleTag = document.getElementById(styleId) as HTMLStyleElement
    if (!styleTag) {
      return ''
    }

    // Получаем содержимое тега <style>
    const styleContent = styleTag.textContent
    // Ищем нужный класс в содержимом
    const classRegex = new RegExp(`\\.${className}\\s*\\{[^}]*\\}`, 'g')
    const classContent = styleContent?.match(classRegex)
    if (!classContent) {
      return ''
    }
    // Получаем значение токена
    const tokenRegex = new RegExp(`${tokenName}:\\s*([^;]+);`, 'g')
    const tokenStr = classContent[0].match(tokenRegex)?.[0]
    if (!tokenStr) {
      return ''
    }
    return tokenStr.split(':')[1].trim()
  }

  /**
   * Удаляет класс стилей
   * @param className - Имя класса
   */
  const removeClassWithTokens = (className:string): void => {
    const styleTag = document.getElementById(styleId) as HTMLStyleElement
    const isExist = classes.has(className)
    if (!styleTag || !isExist) {
      return
    }
    // Удаляем запись для этого класса, если она существует
    let styleContent = styleTag.textContent || ''
    const classRegex = new RegExp(`\\.${className}\\s*\\{[^}]*\\}`, 'g')
    styleContent = styleContent.replace(classRegex, '')
    // Обновляем содержимое тега <style>
    styleTag.textContent = styleContent
    // Удаляем класс из списка
    classes.delete(className)
  }

  /**
   * Удаляет все классы со значениями токенов
   */
  const clearClassWithTokens = (): void => {
    classes.forEach(className => {
      removeClassWithTokens(className)
    })
  }

  /**
   * Устанавливает значение CSS-токена в глобальной области
   * @param token - Имя токена в формате: "foo.bar.field"
   * @param value - Значение токена
   */
  const setCssToken = (token: string, value: string): void => {
    const _value = getValueFromForToken(value)
    const tokenName = _getTokenName(token)
    generalTokens.add(token)
    document.documentElement.style.setProperty(`${tokenName}`, _value)
  }

  /**
   * Удаляет CSS-токен из глобальной области
   * @param token - Имя токена в формате: "foo.bar.field"
   */
  const removeCssToken = (token: string): void => {
    const tokenName = _getTokenName(token)
    generalTokens.delete(token)
    document.documentElement.style.removeProperty(`${tokenName}`)
  }

  /**
   * Удаляет все CSS-токены из глобальной области
   */
  const clearCssTokens = (): void => {
    generalTokens.forEach(token => {
      removeCssToken(token)
    })
  }

  /**
   * Полная очистка всех изменений токенов
   * Удаляет все токены из глобальной области и все классы со значениями токенов
   */
  const clearAll = () => {
    clearCssTokens()
    clearClassWithTokens()
  }

  return {
    setCssTokenViaClass,
    getCssTokenViaClass,
    removeClassWithTokens,
    clearClassWithTokens,
    setCssToken,
    removeCssToken,
    clearCssTokens,
    getCssToken,
    getCssTokenVar,
    setCssTokenVar,
    clearAll
  }
}

