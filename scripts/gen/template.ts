export function getThemesTemplate(isPrivate: boolean): string {
  return `@import '${isPrivate ? '../../../../' : '../../../'}style/themes/default.less';
@import './default.variable.less';

@import '../index.less';
`
}

export function getThemesVariableTemplate(): string {
  return ``
}

export function getLessTemplate(compName: string, isPrivate: boolean): string {
  return `@import '${isPrivate ? '../../../' : '../../'}style/mixins/reset.less';

.@{${compName}-prefix} {
  .reset-component();
}
`
}

export function getThemesIndexTemplate(category: 'cdk' | 'components' | 'pro'): string {
  return `// style dependencies
import '@idux/${category}/style/core/default'

import './default.less'
`
}

export function getTypesTemplate(upperFirstName: string, camelCaseName: string): string {
  return `import type { DefineComponent, HTMLAttributes, PropType } from 'vue'
import type { ExtractInnerPropTypes, ExtractPublicPropTypes, MaybeArray } from '@idux/cdk/utils'



export const ${camelCaseName}Props = {

} as const

export type ${upperFirstName}Props = ExtractInnerPropTypes<typeof ${camelCaseName}Props>
export type ${upperFirstName}PublicProps = ExtractPublicPropTypes<typeof ${camelCaseName}Props>
export type ${upperFirstName}Component = DefineComponent<Omit<HTMLAttributes, keyof ${upperFirstName}PublicProps> & ${upperFirstName}PublicProps>
export type ${upperFirstName}Instance = InstanceType<DefineComponent<${upperFirstName}Props>>
`
}

export function getTsxTemplate(upperFirstName: string, camelCaseName: string, isPrivate: boolean): string {
  return `import { defineComponent } from 'vue'
import { ${camelCaseName}Props } from './types'

export default defineComponent({
  name: '${isPrivate ? 'ɵ' : 'Ix'}${upperFirstName}',
  props: ${camelCaseName}Props,
  setup(props) {

  }
})
`
}

export function getIndexTemplate(compName: string, isPrivate: boolean): string {
  const prefix = isPrivate ? 'ɵ' : 'Ix'
  const instance = isPrivate ? `${compName}Instance as ɵ${compName}Instance` : `${compName}Instance`
  const component = isPrivate ? `${compName}Component as ɵ${compName}Component` : `${compName}Component`
  const props = isPrivate ? `${compName}PublicProps as ɵ${compName}Props` : `${compName}PublicProps as ${compName}Props`

  return `import type { ${compName}Component } from './src/types'

import ${compName} from './src/${compName}'

const ${prefix}${compName} = ${compName} as unknown as ${compName}Component

export { ${prefix}${compName} }

export type { ${instance}, ${component}, ${props} } from './src/types'
`
}

export function getTestTemplate(compName: string): string {
  return `import { mount, MountingOptions } from '@vue/test-utils'
import { renderWork } from '@tests'
import ${compName} from '../src/${compName}'
import { ${compName}Props } from '../src/types'

describe('${compName}', () => {
  const ${compName}Mount = (options?: MountingOptions<Partial<${compName}Props>>) => mount(${compName}, { ...(options as MountingOptions<${compName}Props>)})

  renderWork<${compName}Props>(${compName},{
    props: { },
  })

  test('xxx work', async () => {
    const wrapper = ${compName}Mount({ props: { xxx: 'Xxx' } })

    expect(wrapper.classes()).toContain('ix-Xxx')

    await wrapper.setProps({ xxx: 'Yyy' })

    expect(wrapper.classes()).toContain('ix-Yyy')
  })
})
`
}

export function getCdkUseTemplate(compName: string): string {
  return `export const use${compName} = () => {

}`
}

export function getCdkTestTemplate(compName: string, camelCaseName: string): string {
  return `import { } from '@vue/test-utils'
import { use${compName} } from '../src/use${compName}'

describe('use${compName}.ts', () => {
  test('init test', () => {
    const ${camelCaseName} = use${compName}()

    expect(${camelCaseName}).toBeUndefined()
  })
})
`
}

export function getAPITemplate(moduleName: string, compName: string, isEn = false): string {
  return `### Ix${compName}

#### ${compName}Props

${
  isEn
    ? '| Name | Description | Type | Default | Global Config | Remark |'
    : '| 名称 | 说明 | 类型  | 默认值 | 全局配置 | 备注 |'
}
| --- | --- | --- | --- | --- | --- |
| - | - | - | - | ✅ | - |

#### ${compName}Slots

${isEn ? '| Name | Description | Parameter Type | Remark |' : '| 名称 | 说明 | 参数类型 | 备注 |'}
| --- | --- | --- | --- |
| - | - | - | - |

#### ${compName}Methods

${isEn ? '| Name | Description | Parameter Type | Remark |' : '| 名称 | 说明 | 参数类型 | 备注 |'}
| --- | --- | --- | --- |
| - | - | - | - |
`
}

export function getThemeTemplate(isEn = false): string {
  if (isEn) {
    return `| name | default | seer | mark |
| --- | --- | --- | --- |
| - | - | - | - |
`
  }
  return `| 名称 | default | seer | 备注 |
| --- | --- | --- | --- |
| - | - | - | - |
`
}

export function getDocsTemplate(moduleName: string, compName: string, type = '', isEn = false): string {
  const [enType, zhType] = type.split('_')
  return `---
category: ${moduleName}
type: ${isEn ? enType || '' : zhType || ''}
order: 0
title: ${compName}
subtitle:
---

`
}

export function getDesignTemplate(isEn = false): string {
  return `### ${isEn ? 'Usage scenarios' : '使用场景'}`
}

export function getDemoTemplate(): string {
  return `---
order: 0
title:
  zh: 基本使用
  en: Basic usage
---

## zh

最简单的用法。

## en

The simplest usage.
`
}

export function getDemoVueTemplate(compName: string): string {
  return `<template>
  <Ix${compName}></Ix${compName}>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style scoped lang="less">
</style>
`
}
