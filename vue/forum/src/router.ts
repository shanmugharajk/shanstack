import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '~/pages/HomePage.vue';
import ThreadsViewPage from '~/pages/ThreadsViewPage.vue';
import NotFoundPage from '~/pages/NotFoundPage.vue';

// prettier-ignore
const routes = [
  { path: '/', component: HomePage },
  // eslint-disable-next-line object-curly-newline
  { path: '/thread/:id', name: 'ThreadsViewPage', component: ThreadsViewPage, props: true },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
