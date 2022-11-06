import { inject, reactive } from "vue";
import { Store } from "vuex";
/**
 * 手写一个vuex
 */
const STORE_KEY = "__store__";

// 返回store
function useStore() {
  return inject(STORE_KEY);
}

//
function createStore(options) {
  return new Store(options);
}

class Store {
  constructor(options) {
    // 给state创建响应式代理
    this._state = reactive({
      data: options.state(),
    });
    this._mutations = options.mutations;
  }

  // main.js入口处app.use(store)的时候，会执行这个函数，将store provide出去
  install(app) {
    app.provide(STORE_KEY, this);
  }
  // state属性，只读
  get state() {
    return this._state.data;
  }
  // commit方法
  commit = (type, payload) => {
    const entry = this._mutations[type];
    entry && entry(this.state, payload);
  };
}

export { createStore, useStore };
