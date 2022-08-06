//导入vue这个包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue根组件，将来要把App.vue中的模版结构，渲染到HTML页面中
//import App from './App.vue'

import testvue from './testvue.vue'

Vue.config.productionTip = false

//创建Vue的实例对象
new Vue({
  //el: '#app',  //使用$mount方法更高级
  render: h => h(testvue)
  //与使用el的方法是一样的
}).$mount('#app')
