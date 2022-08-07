<template>
  <div class="right-container">
    <h3>Right组件</h3>
    <button @click="postInfo">发起POST请求</button>
  </div>
</template>

<script>

export default {
  name: 'Right',
  methods: {
    async postInfo() {
      try {
        const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 20 })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .right-container {
    background-color: deepskyblue;
    min-height: 200px;
    flex: 1;
  }
</style>
