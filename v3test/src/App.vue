<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ count }}</p>
  <p>{{ countPlus }}</p>
  <button @click="count++">Count ++</button>
  <hr/>
  <input v-focus v-model="count"/>
  <hr/>
  <Test></Test>-->

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>

</template>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

/*import {computed, onMounted, ref} from "vue";
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
}*/

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
