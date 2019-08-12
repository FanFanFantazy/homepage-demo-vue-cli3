import Vue from 'vue'
import Vuex from 'vuex'
import vuexNum from './modules/vuexNum'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vuexNum
  }
})
