import { createStore } from "vuex";
//Vue.config.devtools = true;

export default createStore({
  state: {
    mode: "hiragana",
    groups: [],
    quizentries: []
  },
  mutations: {
    // Toggles a kana group
    toggleGroup(store, group) {
      console.log("Group: " + group);
      if (!store.groups.includes(group)) {
        store.groups.push(group);
      } else {
        store.groups = store.groups.filter(elem => elem != group);
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
    // Resets the quiz entries
    resetQuizEntries(store) {
      console.log("Reset all quiz entries")
      store.quizentries = [];
    },
    // Resets the groups
    resetGroups(store) {
      console.log("Reset all groups")
      store.groups = [];
    },
    // Changes the quiz entry status to either one of ['unsolved', true, false]
    changeQuizEntryStatus(store, payload) {
      console.log("changeQuizEntryStatus", store, payload)
      console.log(store.quizentries)
      store.quizentries[store.quizentries.findIndex(e => e.Kana === payload.Kana)].Status = payload.Status;
    },
    // Sets the store state to the default state (TODO: Fix)
    resetStore(store) {
      console.log("Got reset store request.");
      store.mode = "hiragana";
      store.groups = [];
      store.quizentries = [];
    }
  },
  actions: {},
  modules: {},
  getters: {
    // Checks if a kana group is toggled
    isGroupToggled: store => group => store.groups.includes(group),
    // Needed because a user should only be able to start
    // the quiz once they selected at least one group
    hasGroups: store => {
      return (store.groups.length != 0)
    },
    // Returns the average tries needed for every kana
    averageTriesPerKana: store => {
      let solvedKana = store.quizentries.filter(e => e.Status === true)
      let tries = 0;
      solvedKana.forEach(e => tries += e.Faults + 1);
      return (tries / solvedKana.length).toFixed(2);
    } 
  },
});
