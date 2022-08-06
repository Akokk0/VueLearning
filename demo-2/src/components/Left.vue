<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
<!--  声明一个插槽区  -->
<!--    官方规定：每一个slot插槽，都要有一个name名称-->
<!--    如果省略了slot的name属性，则有一个默认，名称叫做default-->
<!--    当用户没有指定内容时，显示插槽内的后备内容-->
    <slot name="default">这是default插槽的默认内容</slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
