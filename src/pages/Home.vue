<template>
  <div class="list-items">  
    <div class="item" v-for="(item, i) in items">
      <div class="item__name" @click="toggleAccordion">
        {{ item.name }} <span v-if="item.count">(Added: {{item.count}})</span>
      </div>
      <div class="item__content hidden">
        <div class="item__prop"  v-for="(prop, key) in item" v-if="fields.indexOf(key) >= 0">
          <div class="item__text left">{{ capitalize(key) }}</div>:<div class="item__text right">{{ prop }}</div>
        </div>  
        <div class="item__button" @click="addToCart(item)">
          Add to cart
        </div>
        <div class="item__button" @click="removeFromCart(item)" v-if="item.count">
          Remove from cart
        </div>            
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router/router.js'
  import {capitalize} from '../helpers/helpers.js'
  import { mapActions } from 'vuex' 

  export default {
    data(){
      return {
        items: this.$store.state.items,
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
      toggleAccordion: function(ev){
        ev.currentTarget.nextElementSibling.classList.toggle('hidden')
      },
      ...mapActions([
        'addToCart',
        'removeFromCart'
      ]),
      capitalize
    }
  }
</script>

<style>
  .item{
    margin: 10px;  
    border-top: 1px solid lightgray
  }
  .item__name{
    font-size: 24px;
    cursor:pointer;
    margin: 5px 0 0 5px;
  }
  .item__name span{
    color: gray;
  }
  .item__name:hover{
    color: gray;
  } 
  .basket-page,.list-items{
    width: 640px;
    margin: 0 auto;
  }  
  .item__content {
    margin: 10px 20px 0 20px;
  }
  .item__prop {
    margin: 4px 0;
    border-bottom: 1px solid #f1f1f1;
  } 
  .item__button{
    background: #34495e;
    width: 130px;
    cursor:pointer;
    padding: 10px;  
    margin-top: 10px;
    text-align: center;
    color: white;
  }
</style>