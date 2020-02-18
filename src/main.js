import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import './assets/css/main.css'
import DashboardBase from './component/DashboardBase'

Vue.use(VueCookies)

Vue.config.productionTip = false

Vue.component('dashboard-base', DashboardBase)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
