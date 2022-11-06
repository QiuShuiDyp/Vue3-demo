import { ref, inject } from "vue";
import RouterLink from "./RouterLink.vue";
import RouterView from "./RouterView.vue";
const ROUTER_KEY = "__router__";

function createRouter(options) {
  return new Router(options);
}

// 返回router实例
function useRouter() {
  return inject(ROUTER_KEY);
}

// hash模式，绑定hashChagne事件
function createWebHashHistory() {
  // 绑定hash事件
  function bindEvents(fn) {
    window.addEventListener("hashchange", fn);
  }
  return {
    bindEvents,
    //location.hash可以获取到#后面的路径
    url: window.location.hash.slice(1) || "/",
  };
}

class Router {
  constructor(options) {
    this.history = options.history;
    this.routes = options.routes;
    //响应式监听
    this.current = ref(this.history.url);
    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1);
    });
  }
  install(app) {
    app.provide(ROUTER_KEY, this);
    app.component("router-link", RouterLink);
    app.component("router-view", RouterView);
  }
}

export { createRouter, useRouter, createWebHashHistory };
