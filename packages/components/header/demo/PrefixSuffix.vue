<template>
  <IxHeader
    description="This is a description"
    prefix="arrow-left"
    suffix="setting"
    @prefixClick="onPrefixClick"
    @suffixClick="onSuffixClick"
  >
    Title
  </IxHeader>
  <IxHeader description="This is a description">
    Title
    <template #prefix>
      <IxIcon name="caret-left-filled" @click="onPrefixClick" />
    </template>
    <template #suffix>
      <IxButtonGroup :gap="8" size="xs">
        <IxButton icon="setting" @click="onSuffixClick" />
        <IxButton icon="setting" @click="onSuffixClick" />
        <IxButton icon="setting" @click="onSuffixClick" />
        <IxButton icon="menu" @click="onSuffixClick" />
      </IxButtonGroup>
    </template>
  </IxHeader>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const onPrefixClick = (evt: MouseEvent) => console.log(evt)
    const onSuffixClick = (evt: MouseEvent) => console.log(evt)

    return { onPrefixClick, onSuffixClick }
  },
})
</script>
