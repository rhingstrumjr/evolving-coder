<template>
  <div>
    <PlanningToolQuestions />
    <input
      :id="parentID || 'root'"
      v-model="userAnswer"
      type="text"
      @keyup.enter="
        saveAnswer({ userAnswer, parentID });
        userAnswer = '';
      "
    />
    <button
      @click="
        saveAnswer({ userAnswer, parentID });
        userAnswer = '';
      "
      :disabled="isDisabled"
    >
      Save Answer
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import PlanningToolQuestions from "./PlanningToolQuestions";
export default {
  components: {
    PlanningToolQuestions
  },
  props: {
    parentID: {
      required: true
    }
  },
  data() {
    return {
      userAnswer: ""
    };
  },
  methods: {
    ...mapMutations(["saveAnswer"])
  },
  computed: {
    isDisabled() {
      return !this.userAnswer.length > 0;
    }
  },
  mounted() {
    if (this.parentID) {
      document.getElementById(this.parentID).focus();
    }
  }
};
</script>

<style scoped>
#answer {
  background-color: beige;
}
</style>
