<template>
<div class="app">
  <app-header/>
  <div class="page">
    <router-view/>
  </div>
</div>
</template>

<script>
import AppHeader from './components/header.vue';  

export default {
  name: 'app',
  components:{
    AppHeader
  }
}
</script>

<style>
  .app{
    width: 640px;
    margin: 0 auto;  
  }
  .link{
    cursor: pointer;
  }
  .link a{
    text-decoration: none;
    color: black;
    padding: 10px;
    display: inline-block;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .fixed{
    position: fixed;
  }
  .hidden{
    display: none;
  } 
</style>