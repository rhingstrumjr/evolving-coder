import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    answers: {},
    answerToAdd: {
      answer: "",
      parent: null,
      children: null,
      completed: false,
      todoType: null,
      notes: null,
      dependentOn: [] // can find using depth
    },
    childKey: null, // might not need
    parentKey: null,
    rootKey: null
  },
  getters: {
    depth: state => {
      if (!state.parentKey) {
        return 0;
      }
      let depth = 1;
      let currentKey = state.parentKey;
      while (state.answers[currentKey].parent !== null) {
        depth++;
        currentKey = state.answers[currentKey].parent;
      }
      return depth;
    }
  },
  mutations: {
    saveAnswer(state, payload) {
      const newKey = Math.random()
        .toString(36)
        .substr(2, 9);
      state.answerToAdd.answer = payload.userAnswer;
      if (state.answers[payload.parentID]) {
        state.answerToAdd.parent = payload.parentID;
        if (Array.isArray(state.answers[payload.parentID].children)) {
          state.answers[payload.parentID].children.push(newKey);
        } else {
          state.answers[payload.parentID].children = [newKey];
        }
      }
      if (!state.rootKey) {
        state.rootKey = newKey;
        state.parentKey = newKey;
      }
      Vue.set(state.answers, newKey, { ...state.answerToAdd });
    },
    movePlan(state, newKey) {
      state.parentKey = newKey;
    },
    deleteAnswer(state, key) {
      let parent = state.answers[key].parent;
      let index = state.answers[parent].children.indexOf(key);
      state.answers[parent].children.splice(index, 1);
      let keysToDelete = [];
      keysToDelete.push(key);
      keysToDelete.forEach(element => {
        if (state.answers[element].children) {
          keysToDelete = [...keysToDelete, ...state.answers[element].children];
        }
      });
      if (keysToDelete.indexOf(state.parentKey) > -1) {
        state.parentKey = parent;
      }
      keysToDelete.reverse().forEach(victim => {
        Vue.delete(state.answers, victim);
      });
    },
    updateAnswer(state, payload) {
      // payload has two properties: targetKey and answer
      state.answers[payload.targetKey].answer = payload.answer;
    },
    loadAnswers(state, plannedProject) {
      const obj = plannedProject;
      for (const key in obj) {
        if (obj[key].parent === null) {
          state.rootKey = key;
          state.parentKey = key;
          break;
        }
      }
      state.answers = plannedProject;
    }
  }
});

export default store;
