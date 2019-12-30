import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    answers: {},
    answerToAdd: {
      answer: "",
      parent: null,
      children: null
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
    saveAnswer(state, sentAnswer) {
      const newKey = Math.random()
        .toString(36)
        .substr(2, 9);
      state.answerToAdd.answer = sentAnswer;
      if (state.parentKey) {
        state.answerToAdd.parent = state.parentKey;
        if (Array.isArray(state.answers[state.parentKey].children)) {
          state.answers[state.parentKey].children.push(newKey);
        } else {
          state.answers[state.parentKey].children = [newKey];
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
    }
  }
});

export default store;
