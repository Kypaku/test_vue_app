<template>
    <div class="basket-page">
    <div class="home" @click="toHome">Home</div>
    <div class="basket-page__item" v-for="(item, i) in items" v-if="item.basket">
      <div class="basket-page__name">
        {{ item.name }} x {{item.basket}}
      </div>
      <div class="basket-page__button" @click="removeFromBasket" :data-index="i">
        Remove from cart
      </div>
    </div>
    <div class="basket-page__total">
      Total: {{basketPrice}}
    </div>
    <div class="item__order" @click="togglePopup">
      Checkout
    </div>  
    <popup></popup>    
  </div>      
</template>  

<script>
  import {store} from '../store/store.js';
  import {customRound} from '../helpers/helpers.js';
  import popup from '../components/popup.vue';  
  
  export default {
    data(){
      return {
        items: store.state.basket,
        form_fields: store.state.form_fields
      }
    },
    components:{
      popup
    },
    methods:{
      toHome: function(){
        this.$root.currentRoute = '/'  
        window.history.pushState(null, 'Title', '/')
      },
      removeFromBasket: function(ev){
        let index = ev.currentTarget.dataset.index
        this.items[index].basket--
        this.items[index].basket < 0 ? this.items[index].basket = 0 : null
      },
      togglePopup: function(){
        store.commit('togglePopup')
      }
    },
    computed:{
      basketPrice: function(){
        let price = this.items.reduce((total, el) => total += el.basket * el.price, 0)
        return customRound(price,2).toFixed(2)      
      }    
    }
  }
</script>  
