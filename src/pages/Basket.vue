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
    <div class="popup" v-if="popup">
      <div class="overlay" @click="togglePopup"></div>
      <div class="popup__wrapper">
        <div class="popup__close" @click="togglePopup">×</div>
        <form class="popup__content">   
          <p><span class="popup__text">Fullname </span><input type="text" v-model="form_fields.fullname" name="fullname"/></p>
          <p><span class="popup__text">Address </span><input type="text" v-model="form_fields.address" name="address"/></p>
          <p><span class="popup__text">Delivery date </span><input type="text"  v-model="form_fields.date"  name="date"/></p>
          <div class="popup__button" @click="approve">
            Confirm 
          </div>
        </form>    
      </div>
    </div>
  </div>      
</template>  

<script>
  import {store} from '../store/store.js';
  import {customRound} from '../helpers.js';
  
  export default {
    data(){
      return {
        items: store.state.basket,
        popup: false,
        form_fields: store.state.form_fields
      }
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
        this.popup = !this.popup
      },
      approve: function(){
        this.items = []
        store.commit('clearBasket')  
        store.commit('clearFields') 
        this.$root.currentRoute = '/'        
        window.history.pushState(null, 'Title', '/')
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
