import Vuex from 'vuex';

Vue.use(Vuex);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const routes = {
  '/': 'Home',
  '/basket': 'Basket'
}

const store = new Vuex.Store({
  state: {
    starships: [],    
    basket: [],
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
    ],
    form_fields : {fullname: "", addres: "", date: ""},
  },
  mutations: {
    pushItems(state, items){
      items.forEach( el => state.starships.push(el))      
    },
    addItemsToBasket(state, items){
      state.basket = items
    },
    clearBasket(state){
      state.starships.forEach( el => el.basket = 0)
    },
    clearFields(state){
      state.form_fields = {fullname: "", addres: "", date: ""}
    }
  }
})

const app = new Vue({
  el: '#app',
  store,
  data:{
    currentRoute: window.location.pathname
  },
  methods:{
    updateItems: function(cb){
      let api = new RestClient('https://swapi.co/api')
      api.res('starships')      
      
      let getItems = (page) =>  {
        let list = []
        let params = page ? {'page':page} : undefined
        api.starships().get(params).then( (res) => {
          for(let el of res.results){
            if(store.state.starships.every(item => el.name != item.name)){
              el.basket = 0
              el.price = this.customRound(1000000*Math.random(),2).toFixed(2)
              list.push(el)
            }
          }
          store.commit('pushItems',list)
          if(res.next){
            getItems(getParameterByName('page',res.next))
          }else{            
            cb && cb()
          }
        }) 
      }  
      
      getItems()      
    },
    customRound: function(num, length){
      return Math.round((num)*Math.pow(10,length))/Math.pow(10,length)
    }
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue').default
    }
  },  
  created: function(){
    this.updateItems( () => setInterval(() => {
        this.updateItems()
      }, 60000)
    );
    document.getElementById('app').classList.toggle('hidden')
  },
  render (h) {
    return h(this.ViewComponent)
  }
})
