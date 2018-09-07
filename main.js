function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function customRound(num, length){
  return Math.round((num)*Math.pow(10,length))/Math.pow(10,length)
}

var app = new Vue({
  el: '#app',
  data:{
    starships: [],
    basket: {page:false, price: 0, popup: false},
    fields: ['price','MGLT','cargo_capacity','consumables','crew','hyperdrive_rating','length','manufacturer','max_atmosphering_speed','model','passengers'],
    form_fields : {fullname:"", addres:"", date:""}
  },
  methods:{
    updateItems: function(cb){
      var api = new RestClient('https://swapi.co/api')
      api.res('starships')
      
      let getPage = (page) =>  {  
        let params = page ? {'page':page} : undefined
        api.starships().get(params).then( (res) => {
          for(let el of res.results){
            if(this.starships.every(item => el.name != item.name)){
              el.basket = 0
              el.price = customRound(1000000*Math.random(),2).toFixed(2)
              this.starships.push(el)
            }
          }
          if(res.next){
            getPage(getParameterByName('page',res.next))
          }else{
            cb && cb()
          }
        }) 
      }  
      
      getPage()      
    },
    toggleAccordion: function(ev){
      ev.currentTarget.nextElementSibling.classList.toggle('hidden')
    },
    toggleBasket: function(ev){
      let index = ev.currentTarget.dataset.index
      this.starships[index].basket = !this.starships[index].basket
    },
    basketCount: function(){
      return this.starships.filter((el) => el.basket).length
    },
    basketPrice: function(){
      let price = 0
      this.starships.forEach((el) => {
        el.basket? price += +el.price: null
      })
      return customRound(price,2).toFixed(2)
    },
    toBasket: function(){
      window.history.pushState('basket', 'Title', 'basket')
      this.basket.page = true
    },
    showPopup: function(){
      this.basket.popup = true
    },
    hidePopup: function(){
      this.basket.popup = false
    },
    approve: function(){
      this.starships = []
      this.basket = {page:false, price: 0, popup: false}
      this.form_fields = {fullname:"", addres:"", date:""}
      window.history.pushState('basket', 'Title', 'index.html')
      this.updateItems()
    }
  },  
  created: function(){
    this.updateItems( () => setInterval(() => {
        this.updateItems()
      }, 60000)
    );
    document.getElementById('app').classList.toggle('hidden')
  }
})