import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '@/views/SlLayout.vue'
import ErrorPage from '@/components/SlErrorPage.vue'

export const routes = [
  {
    path: '/',
    name: '资源开通',
    component: Layout,
    children: [
      {
        path: '/resourceApproval',
        name: '开通申请',
        component: () => import('@/views/flow/ResourceApproval.vue'),
      },
      {
        path: '/testForm',
        name: 'form测试',
        component: () => import('@/views/TestForm.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/SlLogin.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 捕获所有路径，显示 404 页面
    name: 'NotFound',
    component: ErrorPage,
    props: { errorCode: 404 },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue'),
  // },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
