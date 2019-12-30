<template>
  <v-container>
    <h3 v-if="userAnswers.length > 0">
      {{ currentLocation.answer }}
    </h3>
    <h3>{{ questionList[currentQuestionNumber] }}</h3>
    <v-container>
      <v-text-field
        id="answerArea"
        v-model="userAnswer"
        autofocus
        placeholder="Be concise :)"
        outlined
        @keyup.enter="saveAnswer"
      />
      <v-btn :disabled="disabledButton" @click="saveAnswer">
        Save Answer
      </v-btn>
    </v-container>
    <h2>Answers</h2>
    <v-container v-if="currentQuestionNumber > 0" :key="currentQuestionNumber">
      <h3 v-if="currentQuestionNumber === 1">
        Qualities for the following item: {{ currentLocation.answer }}
      </h3>
      <h3 v-if="currentQuestionNumber === 2">
        Structures for the following quality: {{ currentLocation.answer }}
      </h3>
      <v-container v-if="currentLocation.children.length > 0">
        <PlanningToolAnswers
          :key="currentLocation.key + 'planningTool'"
          :answers="currentLocation.children"
          @set-current-location="setCurrentLocation"
          @delete-answer="deleteAnswer"
          @update-answer="updateAnswer"
        />
      </v-container>
      <v-container v-if="currentLocation.children.length > 0">
        <PlanningToolAnswersAncestry
          :answers="currentLocation.children"
          @set-current-location="setCurrentLocation"
        />
      </v-container>
      <v-container>
        <h3>Tree View</h3>
        <PlanningToolFullTree
          :answer="userAnswers[0].answer"
          :children="userAnswers[0].children"
          :depth="0"
        />
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import PlanningToolAnswers from "./PlanningToolAnswers";
import PlanningToolAnswersAncestry from "./PlanningToolAnswersAncestry";
import PlanningToolFullTree from "./PlanningToolFullTree";
export default {
  components: {
    PlanningToolAnswers,
    PlanningToolAnswersAncestry,
    PlanningToolFullTree
  },
  data() {
    return {
      userAnswers: {},
      currentLocation: {},
      questionList: [
        "What will you create?",
        "What qualities must it have?",
        "What structures will support this quality?"
      ],
      currentQuestionNumber: 0,
      userAnswer: "",
      answerToAdd: {
        answer: "",
        parent: null,
        children: null
      }
    };
  },
  computed: {
    disabledButton() {
      return !this.userAnswer.length > 0;
    },
    depth() {
      let searchArea = this.currentLocation;
      let count = 0;
      for (count; searchArea.parent !== null; count++) {
        searchArea = searchArea.parent;
      }
      return count;
    }
  },
  updated() {
    this.$nextTick(function() {
      document.getElementById("answerArea").focus();
    });
  },
  methods: {
    saveAnswer() {
      // const answerKey = Math.random().toString(36).substr(2, 9)
      this.answerToAdd.answer = this.userAnswer;
      if (this.userAnswers.length < 1) {
        this.userAnswers.answerKey = this.answerToAdd;
        this.userAnswer = "";
        this.currentLocation = this.userAnswers;
        this.updateView();
        this.answerToAdd = {
          answer: "",
          children: null,
          parent: null
        };
      } else {
        this.answerToAdd.parent = this.currentLocation;
        this.currentLocation.children.push(this.answerToAdd);
        this.userAnswer = "";
      }
      this.answerToAdd = {
        key: "",
        answer: "",
        children: [],
        parent: null
      };
    },
    setCurrentLocation(newLocation) {
      this.currentLocation = newLocation;
      this.updateView();
    },
    deleteAnswer(key) {
      this.currentLocation.children.forEach((element, index) => {
        if (element.key === key) {
          return this.currentLocation.children.splice(index, 1);
        }
      });
    },
    updateView() {
      if (this.depth % 2 === 0) {
        this.currentQuestionNumber = 1;
      } else {
        this.currentQuestionNumber = 2;
      }
    },
    updateAnswer(key, newAnswer) {
      for (const child of this.currentLocation.children) {
        if (child.key === key) {
          child.answer = newAnswer;
          return;
        }
      }
    }
  }
};
</script>

<style scoped></style>
