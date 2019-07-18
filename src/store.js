import Vue from 'vue'
import Vuex from 'vuex'
import Cart from "./components/cart/index"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Cart
  }
  
})
