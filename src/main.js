import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import util from './lib/utils'
import api from './api/index'
import _ from 'lodash'

import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$util = util
Vue.prototype.$service = api
Vue.prototype.$http = util.http
Vue.prototype._ = _

const vm = new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
export default vm