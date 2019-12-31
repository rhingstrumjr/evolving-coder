<template>
  <div>
    What's your new answer?
    <input
      type="text"
      v-model="newAnswer"
      @keyup.enter="
        updateAnswer({ targetKey: keyToUpdate, answer: newAnswer });
        $emit('updated-answer');
      "
    />
    <button
      @click="
        updateAnswer({ targetKey: keyToUpdate, answer: newAnswer });
        $emit('updated-answer');
      "
      :disabled="isDisabled"
    >
      Update answer
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    keyToUpdate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newAnswer: ""
    };
  },
  computed: {
    ...mapState["answers"],
    isDisabled() {
      return (
        this.$store.state.answers[this.keyToUpdate].answer === this.newAnswer
      );
    }
  },
  methods: {
    ...mapMutations(["updateAnswer"])
  },
  created() {
    this.newAnswer = this.$store.state.answers[this.keyToUpdate].answer;
  }
};
</script>

<style scoped>
div {
  color: var(--ec-active-color);
  font-weight: bold;
}
</style>
