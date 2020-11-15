import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    npmPackage: {
      name: "boostrap",
      version: "4.1.2"
    },
    npmPackageList: {}
  },
  mutations: {
    addPackages(state, payload) {
      state.npmPackageList = payload;
    },
    extendPackageInfo(state, payload) {
      state.npmPackageList[payload.name] = payload;
    }
  },
  getters: {
    npmPackageListCount(state) {
      return state.npmPackageList.length;
    }
  },
  actions: {},
  modules: {}
});
