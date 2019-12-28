<template>
  <div>
    <PlanningToolAnswerRecorder @save-answer="saveAnswer" />
    <PlanningToolAnswers v-if="Object.keys(answers).length > 0" :answers="answers" :answer-key="rootKey" :depth="0" />
  </div>
</template>

<script>
import PlanningToolAnswerRecorder from "./PlanningToolAnswerRecorder"
import PlanningToolAnswers from "./PlanningToolAnswers"
export default {
  components: {
    PlanningToolAnswerRecorder,
    PlanningToolAnswers
  },
  data () {
    return {
      answers: {},
      answerToAdd: {
        answer: "",
        parent: null,
        children: null
      },
      childKey: null,
      parentKey: null,
      rootKey: null
    }
  },
  methods: {
    saveAnswer (sentAnswer) {
      this.answerToAdd.answer = sentAnswer
      console.log(this.answerToAdd.answer)
      const newKey = Math.random().toString(36).substr(2, 9)
      if (this.rootKey === null) {
        this.rootKey = newKey
      }
      this.$set(this.answers, newKey, this.answerToAdd)
    }
  }
}
</script>

<style scoped>

</style>
