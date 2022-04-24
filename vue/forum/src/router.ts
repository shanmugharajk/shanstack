import { createRouter, createWebHistory } from 'vue-router';

import ThreadsList from '~/components/ThreadsList.vue';

const routes = [{ path: '/', component: ThreadsList }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
