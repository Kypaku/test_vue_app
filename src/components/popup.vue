<template>
  <div class="popup" v-if="$store.state.popup">
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
</template> 

<script>
  import {store} from '../store/store.js'
  import router from '../router/router.js'
  import { mapGetters } from 'vuex'
  
  export default {
    name:'popup',
    data(){
      return {
        form_fields: store.state.form_fields
      }
    },  
    methods:{
      approve: function(){
        store.commit('clearCart')  
        store.commit('clearFields') 
        router.push('/')
      }    
    },
    computed: {
      ...mapGetters([
        'togglePopup'
      ])
    }
  }      
</script>  

<style>  
  .overlay{
    width: 100%;
    height: 1000px;
    background: gray;
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0.4;
    cursor: pointer;
  }    
  .popup__wrapper{
    width: 800px;
    height: 600px;
    background: white;
    position: fixed;
    left: 50%;
    top: 20px;
    margin-left: -400px;
  }
  .popup__close{
    float: right;
    font-size: 28px;
    cursor: pointer;
    padding: 10px;
  }    
  .popup__button{
    float: right;
    cursor:pointer;
    padding: 10px;
    background: wheat;  
  }
  .popup__content {
    padding: 20px;
  }
  .popup__text{
    width: 175px;
    display: inline-block;
  }  
</style> 