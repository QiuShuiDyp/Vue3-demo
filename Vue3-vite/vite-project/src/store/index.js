import { createStore } from "vuex";
// import { createStore } from "./gvuex";

const store = createStore({
  state() {
    return {
      count: 666,
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  action: {
    asyncAdd({ commit }) {
      //action处理异步的修改
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
});

export default store;
