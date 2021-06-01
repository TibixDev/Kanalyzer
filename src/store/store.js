import { createStore } from "vuex";
//Vue.config.devtools = true;

export default createStore({
  state: {
    groups: [],
  },
  mutations: {
    toggleGroup(store, group) {
      if (!store.groups.includes(group)) {
        store.groups.push(group);
      } else {
        store.groups = store.groups.filter((elem) => elem != group);
      }
    },
  },
  actions: {},
  modules: {},
  getters: {
    isGroupToggled: store => group => store.groups.includes(group) ? true : false
  },
});
