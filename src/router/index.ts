import { createRouter, createWebHistory } from 'vue-router'

import Layout from "@/layout/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard.vue'),
          name: '首页',
          meta: { title: '首页', icon: 'dashboard', affix: true },
        },
      ],
    },
    {
//  import { useRoute, useRouter } from 'vue-router';
//  const router = useRouter()
//  const route = useRoute()
//  router.replace({
//    path: "redirect" + '/login',
//    query: { 'sd': 123 },
//  })
      path: '/redirect',
      component: Layout,
      meta: { hidden: true },
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () => import('@/views/redirect.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login.vue'),
      meta: { hidden: true },
    },
    {
      path: '/profile',
      component: Layout,
      redirect: '/profile',
      meta: { hidden: true },
      children: [
        {
          path: 'index',
          component: () => import('@/views/profile.vue'),
          name: '个人信息',
          meta: { title: '个人信息', icon: 'user', noCache: true },
        },
      ],
    },
  ]
})

export default router
