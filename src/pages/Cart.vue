<template>
  <div class="cart-page">   
    <div class="cart-page__item" v-for="(item, i) in items" v-if="item.count">
      <div class="cart-page__name">
        {{ item.name }} x {{item.count}}
      </div>
      <div class="cart-page__button" @click="removeFromCart(item)" :data-index="i">
        Remove from cart
      </div>
    </div>
    <div class="cart-page__total">
      Total: {{cartPrice}}
    </div>
    <div class="item__order" @click="togglePopup">
      Checkout
    </div>  
    <popup></popup>    
  </div>      
</template>  

<style>

</style>

<script>
  import {store} from '../store/store.js';
  import {customRound} from '../helpers/helpers.js';
  import popup from '../components/popup.vue';  
  import router from '../router/router.js'
  import { mapActions } from 'vuex'
  
  export default {
    data(){
      return {
        items: Object.values(store.state.cart),
        form_fields: store.state.form_fields
      }
    },
    components:{
      popup
    },
    methods:{
      ...mapActions([
        'removeFromCart'
      ]),
      togglePopup: function(){
        store.commit('togglePopup')
      }
    },
    computed:{
      cartPrice: function(){
        let price = this.items.reduce((total, el) => total += el.count * el.price, 0)
        return customRound(price,2).toFixed(2)      
      }    
    }
  }
</script>  

<style>
  .cart-page__item{
    width: 100%;
    height: 50px;
  }
  .cart-page__name{
    float: left
  }
  .cart-page__total {
    border-top: 1px solid gray;
    padding-top: 10px;
  }
  .cart-page__button{
    float: right;
    cursor:pointer;
    padding: 10px;
  }
  .item__order{
    float: right;
    cursor:pointer;
    padding: 10px;
    background: wheat;  
  }
</style>
