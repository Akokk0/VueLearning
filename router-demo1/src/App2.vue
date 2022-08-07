<template>
  <div class="app-container">
    <h1>App2 组件</h1>

<!--  当安装和配置了 vue-router后，就可以使用 router-link 来代替普通的a链接了  -->
<!--    <a href="#/home">首页</a>-->
    <router-link to="/home">首页</router-link>

<!--    <a href="#/movie">电影</a>-->
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>

<!--    <a href="#/about">关于</a>-->
    <router-link to="/about">关于</router-link>

    <hr />
<!--  只要在项目中安装和配置了 vue-router ，就可以使用router-view这个组件了  -->
<!--  它的作用是占位符  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
