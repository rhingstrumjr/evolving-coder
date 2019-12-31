<template>
  <font-awesome-icon
    :icon="['far', 'trash-alt']"
    @click="deleteAnswer(keyToDelete)"
  />
</template>

<script>
import { mapMutations } from "vuex";
export default {
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
