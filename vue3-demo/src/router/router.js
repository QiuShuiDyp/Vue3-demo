import { createRouter, createWebHashHistory } from "vue-router";
const SetUp = import("../pages/SetUp.vue");
const VueTemplate = import("../pages/VueTemplate.vue");
const Reactivity = import("../pages/VueReactivity.vue");
// 配置路由规则
const routes = [
  {
    path: "/setup",
    component: SetUp,
  },
  {
    path: "/vue-template",
    component: VueTemplate,
  },
  {
    path: "/vue-reactive",
    component: Reactivity,
  },
];

// 创建路由实例
const router = createRouter({
  // 采用hash模式创建路由，注意这里是创建一个实例
  history: createWebHashHistory(),
  routes,
});

export default router;
