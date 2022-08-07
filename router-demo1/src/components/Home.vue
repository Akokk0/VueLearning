<template>
  <div class="home-container">
    <h3>Home 组件</h3>

    <hr/>

    <button @click="goToLK">通过push跳转到"洛基"页面"</button>
    <button @click="gotoLK2">通过replace跳转到"洛基"页面</button>
    <router-link to="/main">Main</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToLK() {
      // 会增加历史记录
      this.$router.push('/movie/1')
    },
    gotoLK2() {
      // 不会增加历史记录，会代替当前历史记录
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
