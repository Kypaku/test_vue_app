<template>
      
      <div class="basket-page">
        <div class="home" @click="toHome">Назад</div>
        <div class="basket-page__item" v-for="(item, i) in items" v-if="item.basket">
          <div class="basket-page__name">
            {{ item.name }} x {{item.basket}}
          </div>
          <div class="basket-page__button" @click="removeFromBasket" :data-index="i">
            {{"Удалить из корзины"}}
          </div>
        </div>
        <div class="basket-page__total">
          Всего: {{basketPrice}}
        </div>
        <div class="item__order" @click="togglePopup">
          Оформить заказ
        </div>        
      
      
        <template v-if="popup">
          <div class="overlay" @click="togglePopup"></div>
          <div class="popup">
            <div class="popup__close" @click="togglePopup">(X)</div>
            <form class="popup__content">   
              <p>ФИО <input type="text" v-model="form_fields.fullname" name="fullname"/></p>
              <p>Адрес <input type="text" v-model="form_fields.address" name="address"/></p>
              <p>Дата доставки <input type="text"  v-model="form_fields.date"  name="date"/></p>
              <div class="popup__button" @click="approve">
                Подтвердить
              </div>
            </form>
          </div>
        </template>
      </div>
      
</template>    


<script>
  export default {
    data(){
      return {
        items: this.$store.state.basket,
        popup: false,
        form_fields:this.$store.state.form_fields
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
        this.$store.commit('clearBasket')  
        this.$store.commit('clearFields') 
        this.$root.currentRoute = '/'        
        window.history.pushState(null, 'Title', '/')
      }
    },
    computed:{
      basketPrice: function(){
        let price = this.items.reduce((total, el) => total += el.basket * el.price,0)
        return this.$root.customRound(price,2).toFixed(2)      
      }    
    }
  }
</script>  