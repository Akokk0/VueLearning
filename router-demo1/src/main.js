import Vue from 'vue'
import App from './App2.vue'
// 导入路由模块，目的：拿到路由的实例对象
import router from '@/router';

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载路由的实例对象
  router
}).$mount('#app')
