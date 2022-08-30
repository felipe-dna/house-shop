import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/prices',
    component: () => import('../components/Prices.vue')
  },
  {
    path: '/about',
    component: () => import('../components/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export { router }