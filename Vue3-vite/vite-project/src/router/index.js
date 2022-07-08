import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Component from "../pages/Component.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/component",
    name: "Component",
    component: Component,
  },
];

// 创建路由实例，createWebHashHistory表示我们将会采用hash模式来实现路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
