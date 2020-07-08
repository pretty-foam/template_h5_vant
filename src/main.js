import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assert/css/reset.css'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  store,
  ...App
})
