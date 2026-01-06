import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth-store'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/AuthView.vue'),
      name: 'auth',
    },
    {
      path: '/register',
      component: () => import('./views/RegisterView.vue'),
      name: 'register',
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      name: 'main',
    },
    {
      path: '/statistics',
      component: () => import('./views/StatisticsView.vue'),
      name: 'statistics',
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && to.name != 'auth' && to.name != 'register') {
    return { name: 'auth' }
  }
})
