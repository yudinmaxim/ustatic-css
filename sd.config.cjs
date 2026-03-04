const StyleDictionary = require('style-dictionary')
const YAML = require('js-yaml')

const $PREFIX = `${require('./package.json').prefix}-`

// Регистрируем новый формат
StyleDictionary.registerFormat({
  name: 'scss/prefix-variable',
  formatter: function(_, config) {
    // Возвращаем строку с переменной и ее значением из конфигурации
    return `$prefix: "${config.prefix}";`
  }
})

const colorName = (colorKey, removeDef = false) => {
  if (removeDef) {
    return colorKey.replace('-hex', '').replace('-rgb', '').replace('-def', '')
  }
  return colorKey.replace('-hex', '').replace('-rgb', '')
}

StyleDictionary.registerFormat({
  name: 'scss/map-custom',
  formatter: function({ dictionary, options }) {
    const hexTokens = dictionary.allProperties.filter(prop => prop.name.endsWith('-hex'))
    const rgbTokens = dictionary.allProperties.filter(prop => prop.name.endsWith('-rgb'))
    const otherTokens = dictionary.allProperties.filter(prop => !prop.name.endsWith('-hex') && !prop.name.endsWith('-rgb'))

    const formatTokens = (tokens, mapName, removeDef = false) => {
      return `$${mapName}: (\n` +
        tokens.map(prop => {
          if (prop.attributes?.item === 'variant') {
            return `  ${colorName(prop.attributes?.subitem, removeDef)}: token("${prop.path?.join('.')}"),`
          } else {
            return `  ${colorName(prop.path?.slice(2)?.join('-'), removeDef)}: token("${prop.path?.join('.')}"),`
          }
        }).join('\n') +
        '\n);'
    }

    return [
      formatTokens(hexTokens, 'palette-hex', true),
      formatTokens(rgbTokens, 'palette-rgb', true),
      formatTokens(otherTokens, 'palette')
    ].join('\n\n')
  }
})

// Регистрация пользовательского парсера для YAML файлов
StyleDictionary.registerParser({
  pattern: /\.yaml$/,
  parse: ({ contents }) => {
    return YAML.load(contents)
  }
})

module.exports = {
  source: [
    'src/css/tokens/**/*.json',
    'src/css/tokens/**/*.yaml'
  ],
  platforms: {
    'scss-prefix': {
      'prefix': $PREFIX,
      'transformGroup': 'scss',
      'buildPath': 'src/css/assets/tokens/',
      'files': [ {
        'destination': '_prefix.scss',
        'format': 'scss/prefix-variable'
      } ]
    },
    'scss-color-list': {
      transformGroup: 'scss',
      prefix: $PREFIX,
      buildPath: 'src/css/assets/tokens/',
      files: [
        {
          destination: '_list.scss',
          format: 'scss/map-custom',
          options: {
            mapName: 'palette',
            showFileHeader: false
          },
          filter: function(token) {
            return token.filePath.indexOf('base/color') !== -1
          }
        }
      ]
    },
    css: {
      transformGroup: 'css',
      prefix: $PREFIX,
      buildPath: 'src/css/assets/tokens/',
      files: [
        {
          format: 'css/variables',
          destination: '_vars.scss',
          options: {
            showFileHeader: false
          },
        }
      ]
    }
  }
}