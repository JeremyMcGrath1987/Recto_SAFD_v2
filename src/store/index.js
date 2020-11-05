import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import file from "./file";
import pathologies from "./pathologies";
import user from "./user";
import files from "./files";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    file,
    pathologies,
    user,
    files
  }
});
