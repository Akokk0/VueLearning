<template>
  <div class="left-container">
    <h3>Left 组件 --- {{ count }}</h3>
    <button @click="count += 1"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log('Left组件被创建了')
  },
  destroyed() {
    console.log('Left组件被销毁了')
  },
  //当组件被第一次创建的时候，既会执行created生命周期，也会执行activated生命周期
  activated() {
    console.log('组件被激活了')
  },
  deactivated() {
    console.log('组件被缓存了')
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
