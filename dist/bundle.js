!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function o(t,e,n,o,i,r,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";n.r(e);var o=n(0),i=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("Page not found")])},[],!1,null,null,null);i.options.__file="404.vue";e.default=i.exports},function(t,e,n){var o={"./404.vue":1,"./Basket.vue":3,"./Home.vue":4};function i(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=2},function(t,e,n){"use strict";n.r(e);var o={data(){return{items:this.$store.state.basket,popup:!1,form_fields:this.$store.state.form_fields}},methods:{toHome:function(){this.$root.currentRoute="/",window.history.pushState(null,"Title","/")},removeFromBasket:function(t){let e=t.currentTarget.dataset.index;this.items[e].basket--,this.items[e].basket<0&&(this.items[e].basket=0)},togglePopup:function(){this.popup=!this.popup},approve:function(){this.items=[],this.$store.commit("clearBasket"),this.$store.commit("clearFields"),this.$root.currentRoute="/",window.history.pushState(null,"Title","/")}},computed:{basketPrice:function(){let t=this.items.reduce((t,e)=>t+=e.basket*e.price,0);return this.$root.customRound(t,2).toFixed(2)}}},i=n(0),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basket-page"},[n("div",{staticClass:"home",on:{click:t.toHome}},[t._v("Назад")]),t._v(" "),t._l(t.items,function(e,o){return e.basket?n("div",{staticClass:"basket-page__item"},[n("div",{staticClass:"basket-page__name"},[t._v("\n      "+t._s(e.name)+" x "+t._s(e.basket)+"\n    ")]),t._v(" "),n("div",{staticClass:"basket-page__button",attrs:{"data-index":o},on:{click:t.removeFromBasket}},[t._v("\n      "+t._s("Удалить из корзины")+"\n    ")])]):t._e()}),t._v(" "),n("div",{staticClass:"basket-page__total"},[t._v("\n    Всего: "+t._s(t.basketPrice)+"\n  ")]),t._v(" "),n("div",{staticClass:"item__order",on:{click:t.togglePopup}},[t._v("\n    Оформить заказ\n  ")]),t._v(" "),t.popup?[n("div",{staticClass:"overlay",on:{click:t.togglePopup}}),t._v(" "),n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__close",on:{click:t.togglePopup}},[t._v("(X)")]),t._v(" "),n("form",{staticClass:"popup__content"},[n("p",[t._v("ФИО "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form_fields.fullname,expression:"form_fields.fullname"}],attrs:{type:"text",name:"fullname"},domProps:{value:t.form_fields.fullname},on:{input:function(e){e.target.composing||t.$set(t.form_fields,"fullname",e.target.value)}}})]),t._v(" "),n("p",[t._v("Адрес "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form_fields.address,expression:"form_fields.address"}],attrs:{type:"text",name:"address"},domProps:{value:t.form_fields.address},on:{input:function(e){e.target.composing||t.$set(t.form_fields,"address",e.target.value)}}})]),t._v(" "),n("p",[t._v("Дата доставки "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form_fields.date,expression:"form_fields.date"}],attrs:{type:"text",name:"date"},domProps:{value:t.form_fields.date},on:{input:function(e){e.target.composing||t.$set(t.form_fields,"date",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"popup__button",on:{click:t.approve}},[t._v("\n          Подтвердить\n        ")])])])]:t._e()],2)},[],!1,null,null,null);r.options.__file="Basket.vue";e.default=r.exports},function(t,e,n){"use strict";n.r(e);var o={data(){return{starships:this.$store.state.starships,fields:this.$store.state.fields}},methods:{toBasket:function(){this.$store.commit("addItemsToBasket",this.starships),this.$root.currentRoute="/basket",window.history.pushState(null,"Title","basket")},toggleAccordion:function(t){t.currentTarget.nextElementSibling.classList.toggle("hidden")},addToBasket:function(t){let e=t.currentTarget.dataset.index;this.starships[e].basket++},removeFromBasket:function(t){let e=t.currentTarget.dataset.index;this.starships[e].basket--,this.starships[e].basket<0&&(this.starships[e].basket=0)}},computed:{basketCount:function(){return this.starships.reduce((t,e)=>t+e.basket,0)}}},i=n(0),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-items"},[n("div",{staticClass:"basket",on:{click:t.toBasket}},[t._v("\n    Корзина ("+t._s(t.basketCount)+")\n  ")]),t._v(" "),t._l(t.starships,function(e,o){return n("div",{staticClass:"item"},[n("div",{staticClass:"item__name",on:{click:t.toggleAccordion}},[t._v("\n      "+t._s(e.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"item__content hidden"},[t._l(e,function(e,o){return t.fields.indexOf(o)>=0?n("div",{staticClass:"item__prop"},[t._v("\n        "+t._s(o[0].toUpperCase()+o.slice(1))+" - "+t._s(e)+"\n      ")]):t._e()}),t._v(" "),n("div",{staticClass:"item__button",attrs:{"data-index":o},on:{click:t.addToBasket}},[t._v('\n        "Добавить в корзину"\n      ')]),t._v(" "),e.basket?n("div",{staticClass:"item__button",attrs:{"data-index":o},on:{click:t.removeFromBasket}},[t._v('\n        "Удалить из корзины"\n      ')]):t._e()],2)])})],2)},[],!1,null,null,null);r.options.__file="Home.vue";e.default=r.exports},function(t,e,n){"use strict";n.r(e);
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var o=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){r(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,a);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},u.prototype.update=function(t){!function t(e,n,o){0;n.update(o);if(o.modules)for(var i in o.modules){if(!n.getChild(i))return void 0;t(e.concat(i),n.getChild(i),o.modules[i])}}([],this.root,t)},u.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var i=new s(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&r(e.modules,function(e,i){o.register(t.concat(i),e,n)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var c;var l=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1);var r=t.state;void 0===r&&(r={}),"function"==typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var s=this,a=this.dispatch,l=this.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=o,m(this,r,[],this._modules.root),h(this,r),n.forEach(function(t){return t(e)}),c.config.devtools&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}(this)},p={state:{configurable:!0}};function d(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var o=t._vm;t.getters={};var i={};r(t._wrappedGetters,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:i}),c.config.silent=s,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),c.nextTick(function(){return o.$destroy()}))}function m(t,e,n,o,i){var r=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!r&&!i){var a=_(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){c.set(a,u,o.state)})}var l=o.context=function(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=v(n,o,i),s=r.payload,a=r.options,u=r.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:o?t.commit:function(n,o,i){var r=v(n,o,i),s=r.payload,a=r.options,u=r.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return _(t.state,n)}}}),i}(t,s,n);o.forEachMutation(function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,o.state,e)})}(t,s+n,e,l)}),o.forEachAction(function(e,n){var o=e.root?n:s+n,i=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,i){var r=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,i);return function(t){return t&&"function"==typeof t.then}(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):r})}(t,o,i,l)}),o.forEachGetter(function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,s+n,e,l)}),o.forEachChild(function(o,r){m(t,e,n.concat(r),o,i)})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function v(t,e,n){return function(t){return null!==t&&"object"==typeof t}(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function g(t){c&&t===c||o(c=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},l.prototype.commit=function(t,e,n){var o=this,i=v(t,e,n),r=i.type,s=i.payload,a=(i.options,{type:r,payload:s}),u=this._mutations[r];u&&(this._withCommit(function(){u.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},l.prototype.dispatch=function(t,e){var n=this,o=v(t,e),i=o.type,r=o.payload,s={type:i,payload:r},a=this._actions[i];if(a)return this._actionSubscribers.forEach(function(t){return t(s,n.state)}),a.length>1?Promise.all(a.map(function(t){return t(r)})):a[0](r)},l.prototype.subscribe=function(t){return d(t,this._subscribers)},l.prototype.subscribeAction=function(t){return d(t,this._actionSubscribers)},l.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},l.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},l.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])}),f(this)},l.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,p);var y=$(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=x(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),b=$(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var r=x(this.$store,"mapMutations",t);if(!r)return;o=r.context.commit}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n}),k=$(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||x(this.$store,"mapGetters",t))return this.$store.getters[i]},n[o].vuex=!0}),n}),w=$(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var r=x(this.$store,"mapActions",t);if(!r)return;o=r.context.dispatch}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n});function C(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function $(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function x(t,e,n){return t._modulesNamespaceMap[n]}var O={Store:l,install:g,version:"3.0.1",mapState:y,mapMutations:b,mapGetters:k,mapActions:w,createNamespacedHelpers:function(t){return{mapState:y.bind(null,t),mapGetters:k.bind(null,t),mapMutations:b.bind(null,t),mapActions:w.bind(null,t)}}};Vue.use(O);const M={"/":"Home","/basket":"Basket"},E=new O.Store({state:{starships:[],basket:[],fields:["price","MGLT","cargo_capacity","consumables","crew","hyperdrive_rating","length","manufacturer","max_atmosphering_speed","model","passengers"],form_fields:{fullname:"",addres:"",date:""}},mutations:{pushItems(t,e){e.forEach(e=>t.starships.push(e))},addItemsToBasket(t,e){t.basket=e},clearBasket(t){t.starships.forEach(t=>t.basket=0)},clearFields(t){t.form_fields={fullname:"",addres:"",date:""}}}});new Vue({el:"#app",store:E,data:{currentRoute:window.location.pathname},methods:{updateItems:function(t){let e=new RestClient("https://swapi.co/api");e.res("starships");let n=o=>{let i=[],r=o?{page:o}:void 0;e.starships().get(r).then(e=>{for(let t of e.results)E.state.starships.every(e=>t.name!=e.name)&&(t.basket=0,t.price=this.customRound(1e6*Math.random(),2).toFixed(2),i.push(t));E.commit("pushItems",i),e.next?n(function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("page",e.next)):t&&t()})};n()},customRound:function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}},computed:{ViewComponent(){const t=M[this.currentRoute];return t?n(2)("./"+t+".vue").default:n(1).default}},created:function(){this.updateItems(()=>setInterval(()=>{this.updateItems()},6e4)),document.getElementById("app").classList.toggle("hidden")},render(t){return t(this.ViewComponent)}})}]);