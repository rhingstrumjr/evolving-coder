<template>
  <div>
    <h3 v-if="depth === 0">What do you want to create?</h3>
    <h3 v-else-if="depth % 2 === 1">
      What qualities does the {{ answers[parentKey].answer }} need?
    </h3>
    <h3 v-else>
      What supports are needed to ensure this quality:
      {{ answers[parentKey].answer }}?
    </h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["answers", "parentKey"]),
    ...mapGetters(["depth"])
  }
};
</script>

<style scoped></style>
