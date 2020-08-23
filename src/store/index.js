import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import search from "./search";
import file from "./file";
import pathologies from "./pathologies";
import doctor from "./doctor";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    search,
    file,
    pathologies,
    doctor
  }
});
