import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/',
    name: 'helloWorld',
    meta: {
      title: 'helloWorld',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/components/HelloWorld.vue'),
    children: [
      {
        path: 'vueUse',
        name: 'vueUse',
        component: () => import('@/components/VueUse.vue'),
      },
      {
        path: 'usePinia',
        name: 'usePinia',
        component: () => import('@/components/UsePinia.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
