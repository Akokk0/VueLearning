<template>
  <div class="app-container">
    <h1 v-color="'pink'">App 根组件</h1>
    <p v-color="color">测试</p>
    <button @click="color = 'lightpink'"></button>
    <hr />

    <Article>
      <template #title>
        <h3>一首诗</h3>
      </template>
      <template #content="{msg, user}">
        春眠不觉晓，处处闻啼鸟
        <hr>
        {{msg}}
        <hr>
        {{user.name}}
      </template>
      <template #footer>
        评论
      </template>
    </Article>

    <div class="box" style="display: none">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
<!--        v-slot不能直接作用在元素身上，只能用在components和template标签上-->
<!--        v-slot的简写为#-->
<!--        <template v-slot:default>-->  <!--template标签所包裹的内容会被渲染到default插槽-->
<!--        <template #default>
          <p>这是在Left组件的内容区域，声明的p标签</p>
        </template>-->
      </Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left";
import Article from "@/components/Article";

export default {
  components: {
    Left,
    Article
  },
  data() {
    return {
      color: 'blue'
    }
  },
  directives: {
    //定义名为color的指令，指向一个配置对象
    /*color: {
      //当指令第一次被绑定到元素对象的时候，会立即触发bind函数
      //形参中的el表示当前指令所绑定到的那个DOM对象
      /!*bind(el, {value}) {
        console.log('调用了bind函数')
        if (value === undefined) return el.style.color = 'red'
        el.style.color = value
      },
      update(el, {value}) {
        console.log('调用了update函数')
        if (value === undefined) return el.style.color = 'red'
        el.style.color = value
      }*!/
    }*/
    //bind函数和update函数的简写形式
    color(el, {value}) {
      console.log('调用了bind函数和update函数的简写形式')
      if (value === undefined) return el.style.color = 'red'
      el.style.color = value
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
