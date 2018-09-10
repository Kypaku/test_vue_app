<template>
  <div class="list-items">  
    <div class="basket" @click="toBasket">
      Cart ({{basketCount}})
    </div>
    <div class="item" v-for="(item, i) in starships">
      <div class="item__name" @click="toggleAccordion">
        {{ item.name }}
      </div>
      <div class="item__content hidden">
        <div class="item__prop"  v-for="(prop, key) in item" v-if="fields.indexOf(key) >= 0">
          {{key[0].toUpperCase() + key.slice(1)}} - {{prop}}
        </div>  
        <div class="item__button" @click="addToBasket" :data-index="i">
          Add to cart
        </div>
        <div class="item__button" @click="removeFromBasket" :data-index="i" v-if="item.basket">
          Remove from cart
        </div>            
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../store/store.js';

  export default {
    data(){
      return {
        starships: store.state.starships,
        fields: [
          'price',
          'MGLT',
          'cargo_capacity',
          'consumables',
          'crew',
          'hyperdrive_rating',
          'length',
          'manufacturer',
          'max_atmosphering_speed',
          'model',
          'passengers'
        ]        
      }
    },
    methods:{
      toBasket: function(){
        store.commit('addItemsToBasket', this.starships)
        this.$root.currentRoute = '/basket'
        window.history.pushState(null, 'Title', 'basket')
      },
      toggleAccordion: function(ev){
        ev.currentTarget.nextElementSibling.classList.toggle('hidden')
      },
      addToBasket: function(ev){
        let index = ev.currentTarget.dataset.index
        this.starships[index].basket++
      },
      removeFromBasket: function(ev){
        let index = ev.currentTarget.dataset.index
        this.starships[index].basket--
        this.starships[index].basket < 0 ? this.starships[index].basket = 0 : null
      }
    },
    computed:{
      basketCount: function(){
        return this.starships.reduce((a,b) => a + b.basket, 0)          
      }
    }
  }
</script>