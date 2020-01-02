<template>
  <div class="tooltip" @click="$emit('icon-clicked')">
    <font-awesome-icon :icon="[iconType, iconName]" />
    <span class="tooltiptext"
      ><slot>Hovering over {{ iconName }}.</slot></span
    >
  </div>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      default: "fa",
      required: false
    },
    iconName: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
div {
  display: inline-block;
}

div:hover {
  color: var(--ec-active-color);
}

.tooltip {
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: white;
  color: var(--ec-active-color);
  text-align: center;
  padding: 0.075rem;
  border-radius: 1px;
  border-color: var(--ec-active-color);
  border-style: solid;
  border-width: 1px;
  white-space: nowrap;
  bottom: 150%;
  left: 17%;
  margin-left: -1rem;
  font-size: 0.25rem;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  transform: scale(2.5);
}

.tooltiptext {
  font-weight: normal;
}
</style>
