<template>
  <div class="test-box">
<!--    <h3>
      这是用户自定义的Test.vue -&#45;&#45; {{username}}
    </h3>
    <button @click="changeName">修改用户名</button>-->
<!--    <Test v-if="flag" :name="name" :user="user"></Test>
    <button @click="flag = !flag"></button>-->
    <Test :name="name" :user="user"></Test>
  </div>
</template>

<script>
  import Test from '@/components/Test.vue'

  export default {
    components: {
      Test
    },

    // data必须是函数
    data() {
      return {
        flag: true,
        username: 'zs',
        name: 'ls',
        user: {
          name: 'wsc',
          age: 18
        }
      }
    },
    methods: {
      changeName() {
        this.username = '哇哈哈'
        console.log(this)
      }
    },
    // 当前组件中的侦听器
    watch: {},
    // 当前组件中的计算属性
    computed: {},
    // 当前组件中的过滤器
    filters: {}
  }
</script>

<style lang="less" scoped>
  .test-box {
    background-color: pink;
    h3 {
      color: red;
    }
  }
</style>