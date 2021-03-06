<template>
  <div>
    <div
      :ref="keyToUse"
      :style="indent"
      :class="{ path: ancestors.includes(keyToUse) }"
      class="planning-tool-item"
    >
      <span
        v-if="
          answers[keyToUse].children && answers[keyToUse].children.length > 0
        "
        @click="toggleChildren"
      >
        <font-awesome-icon
          v-if="showChildren"
          :icon="['far', 'minus-square']"
        />
        <font-awesome-icon
          v-if="!showChildren"
          :icon="['far', 'plus-square']"
        />
      </span>
      <span v-else>
        <font-awesome-icon :icon="['far', 'square']" />
      </span>
      {{ answers[keyToUse].answer }}
      <FontAweWithTooltip
        iconType="far"
        iconName="arrow-alt-circle-down"
        @icon-clicked="movePlan(keyToUse)"
        >Plan Here</FontAweWithTooltip
      >
      <PlanningToolDeleteAnswer
        :keyToDelete="keyToUse"
        :style="{ 'margin-left': 0.5 + 'rem' }"
      />
      <FontAweWithTooltip
        v-if="!wantsUpdate"
        iconType="far"
        iconName="edit"
        @icon-clicked="toggleUpdate"
        >Update Answer?</FontAweWithTooltip
      >
      <PlanningToolUpdateAnswer
        v-if="wantsUpdate"
        :keyToUpdate="keyToUse"
        @updated-answer="wantsUpdate = !wantsUpdate"
      />
      <PlanningToolAnswerRecorder
        v-if="keyToUse === parentKey"
        :parentID="keyToUse"
      />
    </div>
    <div v-if="showChildren">
      <PlanningToolAnswers
        v-for="child of answers[keyToUse].children"
        :key="child"
        :keyToUse="child"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PlanningToolDeleteAnswer from "./PlanningToolDeleteAnswer";
import PlanningToolUpdateAnswer from "./PlanningToolUpdateAnswer";
import PlanningToolAnswerRecorder from "./PlanningToolAnswerRecorder";
import FontAweWithTooltip from "../FontAweWithTooltip";

export default {
  name: "PlanningToolAnswers",
  components: {
    PlanningToolDeleteAnswer,
    PlanningToolUpdateAnswer,
    FontAweWithTooltip,
    PlanningToolAnswerRecorder
  },
  props: {
    keyToUse: {
      required: true,
      type: String
    },
    depth: {
      required: true,
      default: 0
    }
  },
  data() {
    return {
      showChildren: true,
      wantsUpdate: false
    };
  },
  computed: {
    ...mapState([
      "answers",
      "answersToAdd",
      "parentKey",
      "rootKey",
      "ancestors"
    ]),
    indent() {
      return { transform: `translate(${this.depth * 20}px)` };
    },
    iconClasses() {
      return {
        "fa-plus-square-o": !this.showChildren,
        "fa-minus-square-o": this.showChildren
      };
    },
    ancestors() {
      let ancestors = [this.parentKey];
      let ancestor = this.answers[this.parentKey].parent;
      while (ancestor !== null) {
        ancestors.push(ancestor);
        ancestor = this.answers[ancestor].parent;
      }
      return ancestors;
    }
  },
  methods: {
    ...mapMutations(["movePlan", "updateAncestors"]),
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
    toggleUpdate() {
      this.wantsUpdate = !this.wantsUpdate;
    }
  }
};
</script>

<style scoped>
.path {
  color: var(--ec-attention-color);
  font-weight: bold;
}
.planning-tool-item {
  margin-bottom: 0.3rem;
}
</style>
