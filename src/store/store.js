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
    quizentries: []
  },
  mutations: {
    // Toggles a kana group
    toggleGroup(store, payload) {
      console.log("Group, Kind: " + payload.Group + " - " + payload.Kind);
      if (!store.groups[payload.Kind].includes(payload.Group)) {
        store.groups[payload.Kind].push(payload.Group);
      } else {
        store.groups[payload.Kind] = store.groups[payload.Kind].filter((elem) => elem != payload.Group);
      }
    },
    // Changes character modes (Hiragana <-> Katakana)
    changeMode(store, mode) {
      console.log("Changing mode to " + mode);
      store.mode = mode;
    },
    // Adds a quiz entry to the store, it is needed to display stats after the quiz (comes from KanaField)
    addQuizEntry(store, payload) {
      store.quizentries.push({ Kana: payload.Kana, Solution: payload.Solution, Status: 'unsolved', Faults: 0 })
    },
    // Increases the fault count in an existing quiz entry
    increaseQuizEntryFaults(store, Kana) {
      store.quizentries[store.quizentries.findIndex(e => e.Kana === Kana)].Faults++;
    },
    // Changes the quiz entry status to either one of ['unsolved', true, false]
    changeQuizEntryStatus(store, payload) {
      store.quizentries[store.quizentries.findIndex(e => e.Kana === payload.Kana)].Status = payload.Status;
    }
  },
  actions: {},
  modules: {},
  getters: {
    // Checks is a kana group is toggled
    isGroupToggled: store => payload => store.groups[payload.Kind].includes(payload.Group),
    // Needed because a user should only be able to start
    // the quiz once they selected at least one group
    hasGroups: store => {
      return (store.groups.main.length != 0 || store.groups.dakuten.length != 0 || store.groups.combination.length != 0)
    }
  },
});
