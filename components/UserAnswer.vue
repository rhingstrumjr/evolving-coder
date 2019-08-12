<template>
  <v-container>
    <h1>Answer to question</h1>
    <p>Goal: To use indexedDB to store answers to questions posed via the blog.</p>

    <v-form
      ref="form"
    >
      <v-textarea
        v-model="userAnswer"
        label="Answer"
        required
      />

      <v-btn
        color="error"
        class="mr-4"
      >
        Reset Form
      </v-btn>
      <v-btn
        color="success"
        class="mr-4"
        @click="addAnswer"
      >
        Submit Answer
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import db from "@/assets/answersdb.js"
export default {
  props: {
    qNumber: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      userAnswer: "",
      questionNumber: this.qNumber,
      pastAnswers: []
    }
  },
  async mounted () {
    this.pastAnswers = await db.answers.toArray()
    if (this.pastAnswers.length > 0) {
      this.pastAnswers.forEach((obj) => {
        if (obj.questionNumber === this.questionNumber) {
          this.userAnswer = obj.answer
        }
      })
    }
  },
  methods: {
    async addAnswer () {
      await db.answers.put({
        questionNumber: this.questionNumber,
        answer: this.userAnswer
      })
    }
  }
}
</script>
