import Vue from 'vue'
import Vuex from 'vuex';
import api from '../api/swapi.js';
import {customRound} from '../helpers/helpers.js';

Vue.use(Vuex);

const addProductsFromPage = (products, page) => {
  let list = []
  for(let el of page){
    if(products.every(item => el.name != item.name)){
      el.basket = 0
      el.price = customRound(1000000*Math.random(),2).toFixed(2)
      list.push(el)
    }
  }
  return list
}

export const store = new Vuex.Store({
  state: {
    starships: [],    
    basket: [],
    form_fields : {fullname: "", addres: "", date: ""},
    popup: false
  },
  actions:{
    updateProductsList({commit, state}){
      api.getProducts((res) => {        
        commit('pushItems',addProductsFromPage(state.starships,res.results))   
      })      
    }
  }
  ,
  mutations: {
    pushItems(state, items){
      items.forEach(el => state.starships.push(el))      
    },
    addItemsToBasket(state, items){
      state.basket = items
    },
    clearBasket(state){
      state.starships.forEach( el => el.basket = 0)
      state.popup = false
    },
    clearFields(state){
      state.form_fields = {fullname: "", addres: "", date: ""}
    },
    togglePopup(state){
      state.popup = !state.popup
    }
  }
})

store.dispatch('updateProductsList')
setInterval(() => {
   store.dispatch('updateProductsList')
}, 60000)
document.getElementById('app').classList.toggle('hidden')

