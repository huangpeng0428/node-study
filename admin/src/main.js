/*
 * @Date: 2020-08-27 15:58:02
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-27 16:28:29
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './lib/http'

Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
