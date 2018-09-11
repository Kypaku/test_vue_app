import {getParameterByName} from '../helpers/helpers.js';

const getItemsFormPage = (api, page, cb) =>  {  
  let params = page ? {'page':page} : undefined
  api.starships().get(params).then( (res) => {    
    cb && cb(res)
    if(res.next){      
      getItemsFormPage(api,getParameterByName('page',res.next),cb)
    }
  }) 
} 

export default {
  getProducts (cb) {
    let api = new RestClient('https://swapi.co/api')
    api.res('starships')      
    return getItemsFormPage(api, 0, cb)      
  }
}