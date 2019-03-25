import Vue from 'vue';
import VueRouter from 'vue-router';
import { uniqueNamesGenerator } from 'unique-names-generator';

import store from './store';
import Board from '@/views/Board.vue';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Redirect landing to named route
    { path: '/', name: 'landing', redirect: () => uniqueNamesGenerator('-') },
    // Rooms get full Board component
    { path: '/:room', name: 'room', component: Board },
  ],
});

Router.beforeEach((to, from, next) => {
  // Set room VueX state for room
  if (to.name === 'room') {
    store.commit('ROOM_SET', to.params.room);
  }
  next();
});

export default Router;
