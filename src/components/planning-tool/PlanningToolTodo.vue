// Different types of to-dos: // 1. Research // 2. Get // 3. Create // Todos
will fall into 2 categories: // 1. Actionable - can be done immediately // 2.
Dependent - must be done after another task

<template>
  <div>
    Todo list
    <ul>
      <li v-for="[key, entry] of Object.entries(answers)" :key="key">
        {{ entry.answer }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["answers"])
  }
};
</script>

<style scoped></style>
