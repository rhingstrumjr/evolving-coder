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
    }
  }
});

export default store;
