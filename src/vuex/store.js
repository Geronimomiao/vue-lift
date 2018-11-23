import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'

Vue.use(Vuex)


export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations
  })
}
