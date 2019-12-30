<template>
  <div>
    <input id="answer" v-model="userAnswer" type="text" @keyup.enter="save" />
    <button @click="save" :disabled="isDisabled">
      Save Answer
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAnswer: ""
    };
  },
  methods: {
    save() {
      this.$emit("save-answer", this.userAnswer);
      this.userAnswer = "";
    }
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
