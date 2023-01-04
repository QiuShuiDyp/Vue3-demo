/*
 * @Author: QiuShui
 * @Date: 2022-12-20 16:57:14
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-12-20 17:37:55
 * @FilePath: /vue3-ts/src/router/index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:"/login",
      name:"login",
      component:() => import('../views/LoginView.vue')
    }
  ]
})

export default router
