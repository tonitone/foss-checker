import Vue from "vue";
import FundamentalVue from "fundamental-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(FundamentalVue);

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
