<template>
  <FontAweWithTooltip
    iconType="far"
    iconName="trash-alt"
    @icon-clicked="deleteAnswer(keyToDelete)"
    >Delete answer?</FontAweWithTooltip
  >
</template>

<script>
import { mapMutations } from "vuex";
import FontAweWithTooltip from "../FontAweWithTooltip";
export default {
  components: {
    FontAweWithTooltip
  },
  props: {
    keyToDelete: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapMutations(["deleteAnswer"])
  }
};
</script>

<style scoped></style>
