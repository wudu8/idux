import type { App, Directive, Plugin } from 'vue'

import { clickOutside } from '@idux/cdk/click-outside'
import { IxTypography } from '@idux/components/typography'
import { createGlobalConfig } from '@idux/components/config'

const directives: Record<string, Directive> = {
  clickOutside,
  typography: IxTypography,
}

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
const loadIconDynamically = (iconName: string) => {
  return fetch(`/icon-svg/${iconName}.svg`).then(res => res.text())
}

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
})

const plugins: Plugin[] = [globalConfig]

const install = (app: App): void => {
  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key])
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export default { install }
