import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/MainView.vue'),
    },
    {
      path: '/statistics',
      component: () => import('./views/StatisticsView.vue'),
    },
    /*
    {
      path: '/:patchMatch(.*)*',
      component: () => import('./views/404View.vue'),
      name: '404',
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/IndexView.vue'),
          name: 'main',
        },
        {
          path: ':alias',
          component: () => import('./views/CategoryView.vue'),
        },
      ],
    },
    */
  ],
  history: createWebHistory(),
})
