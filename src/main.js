import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import createStore from './vuex/store'
import ElementUI from '../node_modules/element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false


const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
