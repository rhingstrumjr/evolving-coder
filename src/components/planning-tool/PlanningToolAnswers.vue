<template>
  <div>
    <div :style="indent" @click="toggleChildren">
      <span v-if="answers[answerKey].children">
        <font-awesome-icon v-if="showChildren" icon="minus-square" />
        <font-awesome-icon v-if="!showChildren" icon="plus-square" />
      </span>
      <span v-else>
        <font-awesome-icon icon="square" />
      </span>
      {{ answers[answerKey].answer }}
    </div>
    <div v-if="answers[answerKey].children">
    <div v-if="showChildren">
      <planning-tool-answers
        v-for="child of answers[answerKey].children"
        :key="child"
        :answers="answers"
        :depth="depth + 1"
        :answer-key="child"
      />
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanningToolAnswers",
  props: {
    answers: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: true
    },
    answerKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showChildren: true
    }
  },
  computed: {
    iconClasses () {
      return {
        "fa-plus-square-o": !this.showChildren,
        "fa-minus-square-o": this.showChildren
      }
    },
    labelClasses () {
      return { "has-children": this.nodes }
    },
    indent () {
      return { transform: `translate(${this.depth * 30}px)` }
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>

<style scoped>

</style>
