
/**
 * Хук для управления CSS-свойствами через классы
 * @param params - Параметры конфигурации
 * @param params.resetOnUnmount - Флаг, определяющий нужно ли сбрасывать свойства при размонтировании компонента.
 * По умолчанию true
 */
export const useCssProperties = () => {
  const styleId = 'css-features'

  const generalProperties: Set<string> = new Set()
  const classes: Set<string> = new Set()

  /**
   * Устанавливает CSS-свойства для указанного класса
   * @param className - Имя класса
   * @param properties - Объект с CSS-свойствами и их значениями
   */
  const setCssPropertiesViaClass = (className: string, properties: Record<string, string>): void => {
    // Найти или создать тег <style> с нужным id
    let styleTag = document.getElementById(styleId) as HTMLStyleElement
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = styleId
      document.head.appendChild(styleTag)
    }

    // Создаем CSS-свойства для указанного класса
    const classProperties = Object.entries(properties)
      .map(([ property, value ]) => `${property}: ${value};`)
      .join('\n  ')

    // Генерируем новый CSS-код для класса
    const classContent = `.${className} {\n  ${classProperties}\n}`

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
   * Получает значение CSS-свойства для указанного класса
   * @param className - Имя класса
   * @param property - Имя CSS-свойства
   * @returns Значение свойства или пустая строка, если свойство не найдено
   */
  const getCssPropertyViaClass = (className: string, property: string): string => {
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
    // Получаем значение свойства
    const propertyRegex = new RegExp(`${property}:\\s*([^;]+);`, 'g')
    const propertyStr = classContent[0].match(propertyRegex)?.[0]
    if (!propertyStr) {
      return ''
    }
    return propertyStr.split(':')[1].trim()
  }

  /**
   * Удаляет CSS-свойства для указанного класса
   * @param className - Имя класса
   */
  const removeClassWithProperties = (className: string): void => {
    // Найти или создать тег <style> с нужным id
    const styleTag = document.getElementById(styleId) as HTMLStyleElement
    if (!styleTag) {
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
   * Очищает все CSS-свойства для всех классов
   */
  const clearClassWithProperties = (): void => {
    classes.forEach(className => {
      removeClassWithProperties(className)
    })
  }

  /**
   * Устанавливает CSS-свойство для элемента
   * @param property - Имя CSS-свойства
   * @param value - Значение свойства
   */
  const setCssProperty = (property: string, value: string): void => {
    generalProperties.add(property)
    document.documentElement.style.setProperty(property, value)
  }

  /**
   * Удаляет CSS-свойство для элемента
   * @param property - Имя CSS-свойства
   */
  const removeCssProperty = (property: string): void => {
    generalProperties.delete(property)
    document.documentElement.style.removeProperty(property)
  }

  /**
   * Очищает все CSS-свойства для элемента
   */
  const clearCssProperties = (): void => {
    generalProperties.forEach(property => {
      removeCssProperty(property)
    })
  }

  // Очистка при размонтировании компонента
  const clearAll = () => {
    clearCssProperties()
    clearClassWithProperties()
  }

  return {
    setCssPropertiesViaClass,
    getCssPropertyViaClass,
    removeClassWithProperties,
    clearClassWithProperties,
    setCssProperty,
    removeCssProperty,
    clearCssProperties,
    clearAll
  }
}