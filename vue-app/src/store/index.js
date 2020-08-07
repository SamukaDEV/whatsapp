import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: 2,
    messages: []
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value
    }
  },
  actions: {
  },
  modules: {
  }
})
