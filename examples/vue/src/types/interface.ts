// для демки закинем все интерфейсы в одну кучу - пойдёт

export interface IConfig {
  type: 'modules' | 'classes'
  modules: string[]
  classesInput: string
}