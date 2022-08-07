<template>
  <div class="movie-container">
<!--  this.$route 是路由的"参数对象"  -->
<!--  this.$router 是路由的"导航对象"  -->
<!--    <h3>Movie 组件 -&#45;&#45; {{ $route.params.mid }}</h3>-->
    <h3>Movie 组件 --- {{ mid }} --- {{ $route.params.mid }}</h3>
    <button @click="printThis">打印This</button>
    <button @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['mid'],
  methods: {
    printThis() {
      console.log(this)
    },
    goBack() {
      // 向后退一次历史记录 go(-1)表示后退一层 如果后退的层数超过上限，则原地不动
      this.$router.go(-1)
      this.$router.back()  // 后退一层
      this.$router.forward()  // 前进一层
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
