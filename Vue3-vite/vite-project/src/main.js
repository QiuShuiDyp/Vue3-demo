import { createApp, VueElement } from "vue";
import Element3 from "element3";
import "element3/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/index";
import moment from "moment";
import store from "./store/index";

const vue = createApp(App);

vue.use(router).use(store).use(Element3).mount("#app");
