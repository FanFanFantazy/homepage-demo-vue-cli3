import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  locale
})
const bus = new Vue()
Vue.prototype.bus = bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
