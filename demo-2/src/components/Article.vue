<template>
  <div class="article-container">
<!--  文章的标题  -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>

<!--  文章的内容  -->
    <div class="content-box">
<!--   在封装组件的时候，为预留的<slot>提供属性对应的值 ，这种用法叫做"作用域插槽"  -->
      <slot name="content" msg="'hello vue.js" :user="userInfo"></slot>
    </div>

<!--  文章的作者  -->
    <div class="footer-box">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //首字母要大写
  name: "Article",
  data() {
    return {
      userInfo: {
        name: 'zs',
        age: 18
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .article-container {
    > div {
      min-height: 150px;
    }
    .header-box {
      background-color: pink;
    }
    .content-box {
      background-color: lightblue;
    }
    .footer-box {
      background-color: lightsalmon;
    }
  }
</style>