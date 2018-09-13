import Vue from 'vue'
import Vuex from 'vuex';
import api from '../api/swapi.js';
import {customRound} from '../helpers/helpers.js';

Vue.use(Vuex);

const addProductsFromPage = (products, page) => {
  let list = []
  for(let el of page){
    if(products.every(item => el.name != item.name)){
      el.count = 0
      el.price = customRound(1000000*Math.random(),2).toFixed(2)
      list.push(el)
    }
  }
  return list
}

export const store = new Vuex.Store({
  state: {
    items: [],    
    cart: {},
    form_fields : {fullname: "", addres: "", date: ""},
    popup: false
  },
  actions:{
    updateProductsList({commit, state}){
      api.getProducts((res) => {        
        commit('pushItems',addProductsFromPage(state.items,res.results))   
      })      
    },
    addToCart({commit}, item){
      commit('addToCart', item)
    },
    removeFromCart({commit}, item){
      commit('removeFromCart', item)
    },
    togglePopup({commit}, item){
      commit('togglePopup', item)
    }
  }
  ,
  mutations: {
    pushItems(state, items){
      items.forEach(el => state.items.push(el))      
    },
    addToCart(state, item){
      item.count++
      Vue.set(state.cart, item.name, item)
    },
    removeFromCart(state, item){
      item.count ? item.count-- : null
    },
    clearCart(state){
      state.items.forEach( el => el.count = 0)
      state.cart = {}
      state.popup = false
    },
    clearFields(state){
      state.form_fields = {fullname: "", addres: "", date: ""}
    },
    togglePopup(state){
      state.popup = !state.popup
    }
  },
  getters:{
    cartCount(state){  
      return Object.values(state.cart).reduce((total,el) => total + el.count, 0)
    }
  }
})

store.dispatch('updateProductsList')
setInterval(() => {
   store.dispatch('updateProductsList')
}, 60000)
document.getElementById('app').classList.toggle('hidden')

