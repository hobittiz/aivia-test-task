

import { createRouter, createWebHistory } from 'vue-router';
import Auth from '@/pages/Auth.vue';
import GridPage from '@/pages/GridPage.vue';

const routes = [
  { path: '/', component: Auth },
  { path: '/game', component: GridPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
