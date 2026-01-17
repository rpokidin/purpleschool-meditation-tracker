import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth-store'

export const router = createRouter({
  routes: [
    {
      path: '/login',
      component: () => import('./views/AuthView.vue'),
      name: 'login',
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
    {
      path: '/timer/:duration_min',
      component: () => import('./views/TimerView.vue'),
      name: 'timer',
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('./views/AuthView.vue'),
    }
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && to.name != 'login' && to.name != 'register') {
    return { name: 'login' }
  }
})
