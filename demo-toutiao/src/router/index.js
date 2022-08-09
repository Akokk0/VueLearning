import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
import User from '@/views/User/User'

// 把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 这是路由规则的数组
const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]

// 创建路由实例对象
const router = new VueRouter({
  routes
})

export default router
