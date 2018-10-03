<template>
  <div class="header">    
    <div class="home link left">
      <router-link :to="'/'">Home</router-link>
    </div>        
    <div class="cart link fixed" v-if="$route.path == '/'">
      <router-link :to="'cart'">Cart ({{cartCount}})</router-link>
    </div>     
  </div>
</template> 

<script>
  import router from '../router/router.js' 
  import { mapGetters } from 'vuex'   
  
  export default {
    name:'app-header',    
    computed: {
      ...mapGetters([
        'cartCount'
      ])
    }
  }
</script>  

<style>
  .header{
    width: 100%;
    height: 65px;
  }   
  .home{
    background: gray;    
    text-align: center;
    margin-bottom: 20px;  
  }  
  .home a{
    width: 100px;
  }
  .cart{
    right: 50px;
    top: 30px;
    background: #42b783;        
  }
</style> 