<template>
  <div>
    <div :style="indent" @click="toggleChildren">
      <span v-if="children.length > 0">
        <font-awesome-icon v-if="showChildren" icon="minus-square" />
        <font-awesome-icon v-if="!showChildren" icon="plus-square" />
      </span>
      <span v-if="children.length === 0">
        <font-awesome-icon icon="square" />
      </span>
      {{ answer }}
    </div>
    <div v-if="showChildren">
      <planning-tool-full-tree
        v-for="child in children"
        :key="child.key"
        :children="child.children"
        :answer="child.answer"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanningToolFullTree",
  props: {
    answer: {
      type: String,
      required: true
    },
    children: {
      type: Array,
      required: true
    },
    depth: {
      type: Number,
      required: true
    }
  },
  data () {
    return { showChildren: true }
  },
  computed: {
    iconClasses () {
      return {
        "fa-plus-square-o": !this.showChildren,
        "fa-minus-square-o": this.showChildren
      }
    },
    labelClasses () {
      return { "has-children": this.nodes }
    },
    indent () {
      return { transform: `translate(${this.depth * 30}px)` }
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>

<style scoped>

</style>
