import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'
import router from './router/router.js'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<app/>',
  components: { App }
})
