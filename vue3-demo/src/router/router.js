import { createRouter, createWebHashHistory } from "vue-router"
const SetUp = import("../pages/SetUp.vue")
const VueTemplate = import("../pages/VueTemplate.vue")
const Reactivity = import("../pages/VueReactivity.vue")
const VueWatch = import("../pages/VueWatch.vue")
const VueStyle = import("../pages/VueStyle.vue")
const VueLifeCycle = import("../pages/VueLifeCycle")
const VueComponents = import("../pages/VueComponents.vue")
const VueSlots = import("../pages/VueSlots.vue")
const VueProvide = import("../pages/VueProvide.vue")
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
  {
    path: "/vue-watch",
    component: VueWatch,
  },
  {
    path: "/vue-style",
    component: VueStyle,
  },
  {
    path: "/vue-life-cycle",
    component: VueLifeCycle,
  },
  {
    path: "/vue-components",
    component: VueComponents,
  },
  {
    path: "/vue-slots",
    component: VueSlots,
  },
  {
    path: "/vue-provide",
    component: VueProvide,
  },
]

// 创建路由实例
const router = createRouter({
  // 采用hash模式创建路由，注意这里是创建一个实例
  history: createWebHashHistory(),
  routes,
})

export default router
