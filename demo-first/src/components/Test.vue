<template>
  <div class="test-container">
<!--    <h3 id="testh3">Test.vue 组件 -&#45;&#45; {{books.length}} 本图书</h3>
    <p id="pppp">message的值是 {{message}}</p>-->
<!--    <button @click="changeMsg"></button>-->
    <p>{{user}}</p>
    <p>{{userinfo}}</p>
<!--    <p>{{username}}</p>-->

    <button @click="userinfo.name = 'zs'"></button>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    info: String,
    name: String,
    user: {}
  },
  data() {
    return {
      message: 'hello vue.js',
      //定义books数组，存储的是所有图书的信息
      books: [],
      username: this.name,
      //这里赋值仍然是引用
      //userinfo: this.user,
      //深拷贝
      userinfo: {name: this.user.name, age: this.user.age}
    }
  },
  methods: {
    show() {

    },
    initBookList() {
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        const result = JSON.parse(xhr.responseText)
        //console.log(result)
        this.books = result.data
      })
      xhr.open('GET', 'https://www.liulongbin.top:3006/api/getbooks')
      xhr.send()
    },
    changeMsg() {
      this.message += '~'
    }
  },
  //创建之前的钩子函数  初始化了事件和本函数
  beforeCreate() {
  },
  //创建完成的钩子函数  初始化了 data, methods,
  created() {
    //this.initBookList()

    //此方法中不能使用DOM，页面结构尚未渲染完成
    /*const dom = document.getElementById('testh3')
    console.log(dom)*/

  },
  beforeMount() {

    /*console.log('beforeMount')
    const dom = document.querySelector('#testh3')
    console.log(dom)*/

    //console.log(this.$el)

  },
  //如果要操作DOM最早只能在mounted阶段进行
  mounted() {

    //console.log(this.$el)
    /*const dom = document.querySelector('#testh3')
    console.log(dom)*/

  },
  beforeUpdate() {

    /*console.log('beforeUpdate')

    console.log(this.message)

    const dom = document.querySelector('#pppp')
    console.log(dom.innerHTML)*/

  },
  updated() {

    /*console.log('updated')

    console.log(this.message)

    const dom = document.querySelector('#pppp')
    console.log(dom.innerHTML)*/

  },
  beforeDestroy() {

    console.log('beforeDestroy')
    console.log(this.message)

  },
  destroyed() {

    console.log('destroyed')
    console.log(this.message)

  }

}
</script>

<style scoped>

</style>