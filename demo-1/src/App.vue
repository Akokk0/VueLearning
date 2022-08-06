<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <button @click="changeComponent('Left')">显示左组件</button>
    <button @click="changeComponent('Right')">显示右组件</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!--   动态组件  keep-alive组件 include表示谁会被缓存， exclude表示谁不会被缓存，这两个不要同时使用 -->
      <keep-alive include="Left,Right">  <!--可以把内部的组件进行缓存，而不是销毁组件-->
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left";
import Right from "@/components/Right";

export default {
  //表示组件名称，不写默认为注册时的名称
  name: 'App',
  data() {
    return {
      //表示默认要展示的组件的名字
      comName: 'Left'
    }
  },
  components:{
    Left,
    Right
  },
  methods: {
    changeComponent (component) {
      this.comName = component
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
