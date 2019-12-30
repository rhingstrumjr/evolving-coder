<template>
  <div>
    <input id="answer" v-model="userAnswer" type="text" @keyup.enter="save" />
    <button @click="save">
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
  }
};
</script>

<style scoped>
#answer {
  background-color: beige;
}
</style>
