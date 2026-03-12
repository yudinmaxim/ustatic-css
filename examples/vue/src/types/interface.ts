// для демки закинем все интерфейсы в одну кучу - пойдёт
import {
  TSize,
  TVariant
} from './types'

export interface IComponentBase {
  size?: TSize,
  variant?: TVariant,
  classes?: string[]
}

export interface IConfig {
  type: 'modules' | 'classes'
  modules: string[]
  classesInput: string
}
