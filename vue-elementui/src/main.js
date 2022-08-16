import Vue from 'vue'
import App from './App.vue'
import { Button, Row, DatePicker, ButtonGroup } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)
Vue.component(ButtonGroup.name, ButtonGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
