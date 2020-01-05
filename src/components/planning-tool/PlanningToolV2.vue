<template>
  <div>
    <PlanningToolPlannedProjects />
    <PlanningToolAnswerRecorder v-if="!rootKey" :parentID="rootKey" />
    <div v-if="rootKey">
      <PlanningToolAnswers :keyToUse="rootKey" :depth="0" />
      <PlanningToolTodo />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import PlanningToolAnswerRecorder from "./PlanningToolAnswerRecorder";
import PlanningToolAnswers from "./PlanningToolAnswers";
import PlanningToolPlannedProjects from "./PlanningToolPlannedProjects";
import PlanningToolTodo from "./PlanningToolTodo";

export default {
  components: {
    PlanningToolAnswerRecorder,
    PlanningToolAnswers,
    PlanningToolPlannedProjects,
    PlanningToolTodo
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["answers", "parentKey", "rootKey"])
  },
  methods: {
    movePlan(parentKey, depth) {
      this.parentKey = parentKey;
      this.depthForQuestion = depth + 1;
    }
  }
};
</script>

<style scoped></style>
