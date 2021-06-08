import { createStore } from "vuex";
//Vue.config.devtools = true;

export default createStore({
  state: {
    mode: "hiragana",
    groups: {
      main: [],
      dakuten: [],
      combination: []
    },
  },
  mutations: {
    toggleGroup(store, payload) {
      console.log("Group, Kind: " + payload.Group + " - " + payload.Kind);
      if (!store.groups[payload.Kind].includes(payload.Group)) {
        store.groups[payload.Kind].push(payload.Group);
      } else {
        store.groups[payload.Kind] = store.groups[payload.Kind].filter((elem) => elem != payload.Group);
      }
    },
    changeMode(store, mode) {
      store.mode = mode;
    }
  },
  actions: {},
  modules: {},
  getters: {
    isGroupToggled: store => payload => store.groups[payload.Kind].includes(payload.Group),
    hasGroups: store => {
      return (store.groups.main.length != 0 || store.groups.dakuten.length != 0 || store.groups.combination.length != 0)
    }
  },
});
