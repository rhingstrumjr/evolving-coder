<template>
  <v-container>
    <v-form
      ref="form"
    >
      <v-textarea
        v-model="userAnswer"
        rows="2"
        auto-grow
        clearable
        label="Answer"
        required
        @keyup.ctrl.enter="addAnswer"
      />
      <v-btn v-if="isSaved"
             color="success"
             class="mr-4"
             disabled
             outlined
             small
      >
        Answer is saved
      </v-btn>
      <v-tooltip v-else right close-delay="1000" transition="slide-x-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="success"
                 class="mr-4"
                 small
                 outlined
                 v-on="on"
                 @click="addAnswer"
          >
            Save Answer
          </v-btn>
        </template>
        <span>ctrl + enter also saves</span>
      </v-tooltip>
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
      pastAnswers: [],
      isSaved: false,
      userAnswerChanges: 0
    }
  },
  watch: {
    userAnswer () {
      if (this.userAnswerChanges > 1) {
        this.isSaved = false
      }
      this.userAnswerChanges++
    }
  },
  async mounted () {
    this.pastAnswers = await db.answers.toArray()
    if (this.pastAnswers.length > 0) {
      this.pastAnswers.forEach((obj) => {
        if (obj.questionNumber === this.questionNumber) {
          this.userAnswer = obj.answer
          this.isSaved = true
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
      this.isSaved = true
    }
  }
}
</script>
