<template>
  <div class="badge-demo">
    <IxBadge count="5">
      <a href="#"></a>
    </IxBadge>

    <IxBadge count="0" showZero>
      <a href="#"></a>
    </IxBadge>

    <IxBadge dot>
      <a href="#"></a>
    </IxBadge>

    <IxBadge>
      <a href="#"></a>
      <template #count>
        <IxIcon name="clock-circle"></IxIcon>
      </template>
    </IxBadge>
  </div>
</template>

<style lang="less" scoped>
.badge-demo {
  & > * {
    margin-right: 20px;
    a {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      background-color: gainsboro;
    }
  }
}
</style>
