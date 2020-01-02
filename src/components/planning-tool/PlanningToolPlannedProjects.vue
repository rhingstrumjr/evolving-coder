<template>
  <button @click="loadProject()">Load Project</button>
</template>

<script>
const exampleData = require("../../example-data.json");
export default {
  data() {
    return {
      savedProjects: []
    };
  },
  mounted() {
    this.savedProjects.push(exampleData);
  },
  methods: {
    loadProject() {
      this.$store.commit("loadAnswers", this.savedProjects[0]);
    }
  }
};
</script>

<style scoped></style>
