<template>
  <div>
    <div :style="indent" @click="toggleChildren">
      <span v-if="answers[keyToUse].children">
        <font-awesome-icon v-if="showChildren" icon="minus-square" />
        <font-awesome-icon v-if="!showChildren" icon="plus-square" />
      </span>
      <span v-else>
        <font-awesome-icon icon="square" />
      </span>
      {{ answers[keyToUse].answer }}
      <button @click="movePlan(keyToUse)">Plan here</button>
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
export default {
  name: "PlanningToolAnswers",
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
      "depthForQuestion"
    ]),
    indent() {
      return { transform: `translate(${this.depth * 50}px)` };
    },
    iconClasses() {
      return {
        "fa-plus-square-o": !this.showChildren,
        "fa-minus-square-o": this.showChildren
      };
    }
  },
  methods: {
    ...mapMutations(["movePlan"]),
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
</script>

<style scoped></style>
