import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import API from './api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data(){
    return {
      api: new API(),
      offline_mode: false
    }
  },
  created(){
    this.api.setVueInstance(this)
  },
  methods: {
    setOfflineMode(mode){
      this.offline_mode = mode
    }
  },
  render: h => h(App)
}).$mount('#app')