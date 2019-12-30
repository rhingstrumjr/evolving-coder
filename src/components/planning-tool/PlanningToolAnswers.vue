<template>
  <div>
    <div :style="indent" :class="{ path: ancestors.includes(keyToUse) }">
      <span v-if="answers[keyToUse].children" @click="toggleChildren">
        <font-awesome-icon v-if="showChildren" icon="minus-square" />
        <font-awesome-icon v-if="!showChildren" icon="plus-square" />
      </span>
      <span v-else>
        <font-awesome-icon icon="square" />
      </span>
      {{ answers[keyToUse].answer }}
      <button @click="movePlan(keyToUse)">Plan here</button>
      <PlanningToolDeleteAnswer :keyToDelete="keyToUse" />
    </div>
    <div v-if="showChildren">
      <PlanningToolAnswers
        v-for="child of answers[keyToUse].children"
        :key="child"
        :keyToUse="child"
        :depth="depth + 1"
        :ref="child"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PlanningToolDeleteAnswer from "./PlanningToolDeleteAnswer";

export default {
  name: "PlanningToolAnswers",
  components: {
    PlanningToolDeleteAnswer
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
      showChildren: true
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
      let ancestors = [];
      let ancestor = this.parentKey;
      do {
        ancestors.push(ancestor);
        ancestor = this.answers[ancestor].parent;
      } while (ancestor !== null);
      return ancestors;
    }
  },
  methods: {
    ...mapMutations(["movePlan", "updateAncestors"]),
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
</script>

<style scoped>
.path {
  color: var(--ec-attention-color);
  font-weight: bold;
}
</style>
