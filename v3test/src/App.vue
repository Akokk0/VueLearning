<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ count }}</p>
  <p>{{ countPlus }}</p>
  <button @click="count++">Count ++</button>
  <hr/>
  <input v-focus v-model="count"/>
  <hr/>
  <Test></Test>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import Test from "@/components/Test";

const count = ref(0)

const countPlus = computed(() => {
  return count.value * 10
})

// 在模版中启用 v-focus
const vFocus = {
  mounted: (el, binding) => {
    el.focus()
    console.log(binding)
  }
}

/*onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})*/

/*import { reactive,toRefs } from 'vue'

export default {
  name: 'App',
  setup() {
    let data = reactive({
      count: 0,
      name: 'zs',
      age: 20
    })

    return {
      ...toRefs(data)
    }
  }
}*/

</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
