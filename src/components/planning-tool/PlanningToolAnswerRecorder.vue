<template>
  <div>
    <input
      id="answer"
      v-model="userAnswer"
      type="text"
      @keyup.enter="
        saveAnswer(userAnswer);
        userAnswer = '';
      "
    />
    <button
      @click="
        saveAnswer(userAnswer);
        userAnswer = '';
      "
      :disabled="isDisabled"
    >
      Save Answer
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userAnswer: ""
    };
  },
  methods: {
    ...mapMutations(["saveAnswer"])
  },
  computed: {
    isDisabled() {
      return !this.userAnswer.length > 0;
    }
  }
};
</script>

<style scoped>
#answer {
  background-color: beige;
}
</style>
