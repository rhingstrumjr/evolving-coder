<template>
  <div>
    <h3 v-if="depth === 0">What do you want to create?</h3>
    <h3 v-else-if="depth % 2 === 1">
      What qualities or features must it have?
    </h3>
    <h3 v-else>
      What is needed to ensure this?
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

<style scoped>
h3 {
  color: var(--ec-active-color);
  margin: 0.1rem 0;
  font-weight: normal;
}
</style>
