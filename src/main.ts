import Vue from 'vue';
import VueSocketIO from 'vue-socket.io-extended';
import io from 'socket.io-client';

import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';
import '@/assets/css/tailwind.css';

// Sockets set up
Vue.use(VueSocketIO, io('http://localhost:3000'), { store });

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
