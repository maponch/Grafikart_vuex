import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() { console.log('main.js') },
  router,
  store,
  render: h => h(App)
})
