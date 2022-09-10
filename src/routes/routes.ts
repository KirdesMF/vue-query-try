import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../pages/PageRoot.vue') },
];

const name = 'PageRoot';
