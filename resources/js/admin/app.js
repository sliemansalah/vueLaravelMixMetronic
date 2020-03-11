import Vue from 'vue'
import router from './router'
import './components'
Vue.config.productionTip = false
import './datatable';
new Vue({
  el: '#app',
  router,
})