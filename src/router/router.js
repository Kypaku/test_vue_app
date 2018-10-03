import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../pages/Cart.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})