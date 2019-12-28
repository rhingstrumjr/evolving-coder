<template>
  <div>
    <PlanningToolAnswerRecorder @save-answer="saveAnswer" />
    <PlanningToolAnswers v-if="answers.length > 0" :answers="answers" :answer-key="rootKey" :depth="0" />
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
    saveAnswer (answer) {
      this.answerToAdd.answer = answer
      const newKey = Math.random().toString(36).substr(2, 9)
      if (this.rootKey === null) {
        this.rootKey = newKey
      }
      this.$set(this.answers, newKey, this.answerToAdd)
      this.answerToAdd.answer = ""
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <PlanningToolAnswerRecorder @save-answer="saveAnswer" />
    <PlanningToolAnswers v-if="answers.length > 0" :answers="answers" :answer-key="rootKey" :depth="0" />
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
    saveAnswer (answer) {
      this.answerToAdd.answer = answer
      const newKey = Math.random().toString(36).substr(2, 9)
      if (this.rootKey === null) {
        this.rootKey = newKey
      }
      this.$set(this.answers, newKey, this.answerToAdd)
      this.answerToAdd.answer = ''
    }
  }
}
</script>

<style scoped>

</style>
