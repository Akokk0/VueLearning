<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="test">Test</button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'App',
  methods: {
    test() {
      console.log(Vue)
      console.log(Vue.prototype)
      console.log(Vue.__proto__)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
