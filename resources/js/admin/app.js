import Vue from 'vue'
import router from './router'
import './components'
import store from './store/store';
Vue.config.productionTip = false
import './datatable';
new Vue({
  el: '#app',
  router,
  store
})