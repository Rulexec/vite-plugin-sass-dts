import { Plugin as Plugin$1 } from 'vite'

declare type PluginOption = {
  enabledMode?: ('development' | 'production')[]
  global?: {
    generate: boolean
    outFile: string
  }
}

declare function Plugin(option?: PluginOption): Plugin$1

export { Plugin as default }
