import type {
  TVariant,
  TSize
} from '@utypes/types'

interface IStyleOptions {
  variants?: Record<TVariant, string>
  sizes?: Record<TSize, string>
}

export const useStyle = (options?: IStyleOptions) => {
  const {
    variants = {} as Record<TVariant, string>,
    sizes = {} as Record<TSize, string>
  } = options ?? {}

  const variantStyle = (variant: TVariant) => {
    if (variant in variants) return variants[variant]

    switch (variant) {
      case 'primary': return 'bg-primary text-white hover:bg-primary-400'
      case 'warning': return 'bg-warning text-gray-700 hover:bg-warning-400'
      case 'danger': return 'bg-danger text-white hover:bg-danger-400'
      case 'info': return 'bg-info text-white hover:bg-danger-400'

      case 'default': return 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      default: return 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }
  }

  const sizeStyle = (size: TSize) => {
    if (size in sizes) return sizes[size]

    switch (size) {
      case 'small': {
        return 'px-2 py-1 text-xs'
      }
      case 'default': {
        return 'px-4 py-2 text-sm'
      }
      case 'big': {
        return 'px-6 py-4 text-lg'
      }
      default: {
        return 'px-4 py-2 text-sm'
      }
    }
  }

  return {
    variantStyle,
    sizeStyle
  }
}
