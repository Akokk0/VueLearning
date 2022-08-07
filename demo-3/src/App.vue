<template>
  <div>
    <h1>App根组件</h1>

    <hr>

    <div class="box-container">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left'
import Right from '@/components/Right'

export default {
  components: {
    Left,
    Right
  }
}
</script>

<style lang="less" scoped>
  .box-container {
    display: flex;
  }
</style>
