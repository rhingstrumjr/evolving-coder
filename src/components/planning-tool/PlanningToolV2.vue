<template>
  <div>
    <PlanningToolQuestions />
    <PlanningToolAnswerRecorder @save-answer="saveAnswer" />
    <div v-if="rootKey">
      <PlanningToolAnswers :keyToUse="rootKey" :depth="0" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import PlanningToolAnswerRecorder from "./PlanningToolAnswerRecorder";
import PlanningToolAnswers from "./PlanningToolAnswers";
import PlanningToolQuestions from "./PlanningToolQuestions";

export default {
  components: {
    PlanningToolAnswerRecorder,
    PlanningToolAnswers,
    PlanningToolQuestions
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      "answers",
      "answersToAdd",
      "parentKey",
      "rootKey",
      "depthForQuestion"
    ])
  },
  methods: {
    ...mapMutations(["saveAnswer"]),
    movePlan(parentKey, depth) {
      this.parentKey = parentKey;
      this.depthForQuestion = depth + 1;
    }
  }
};
</script>

<style scoped></style>
