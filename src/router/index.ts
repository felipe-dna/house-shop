import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export { router }