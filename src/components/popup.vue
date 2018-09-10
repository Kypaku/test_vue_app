<template>
  <div class="popup">
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
  export default {
    methods:{
      togglePopup: function(){
        this.popup = !this.popup
      }    
    }
  }
</script>