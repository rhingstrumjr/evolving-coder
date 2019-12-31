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

.tooltip {
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: var(--ec-bg-color);
  color: #fff;
  text-align: center;
  padding: 0.3rem;
  border-radius: 6px;
  width: 8rem;
  bottom: 100%;
  left: 50%;
  margin-left: -4rem;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext {
  font-weight: normal;
}
</style>
