<template>
  <div>
    <h3>Ancestry View</h3>
    <h4>These qualities or pieces:</h4>
    <ul>
      <li v-for="answer of answerArray" :key="answer.key">
        {{ answer.answer }}
      </li>
    </ul>
    <h4>Are to support the following:</h4>
    <ul>
      <li v-for="(answer, index) of ancestryAnswers" :key="answer.answer.slice(0, 3)+index">
        {{ answer.answer }}
        <v-btn @click="$emit('set-current-location', answer)">
          Go here
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    answers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      answerArray: this.answers
    }
  },
  computed: {
    ancestryAnswers () {
      const ancestry = []
      if (this.answerArray.length > 0) {
        let currentChild = this.answerArray[0]
        let currentParent = currentChild.parent
        while (currentParent !== null) {
          ancestry.push(currentParent)
          currentChild = currentParent
          currentParent = currentChild.parent
        }
      }
      return ancestry
    }
  }
}
</script>

<style scoped>
</style>
