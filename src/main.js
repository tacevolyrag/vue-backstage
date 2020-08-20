import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.use(VueAxios, axios);
Vue.filter('thousand', (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});

window.$ = $;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
