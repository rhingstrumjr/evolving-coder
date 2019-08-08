<template>
  <div>
    <nuxt-link
      v-if="postIndex - 1 >= 0"
      :key="postIndex - 1"
      :to="blogPost[postIndex - 1].path"
    >
      <v-btn outlined elevation="2" color="info" type="outlined" @click="lowerIndex()">
        Prior Post: {{ blogPost[postIndex - 1].title }}
      </v-btn>
    </nuxt-link>
    <nuxt-link
      v-if="postIndex + 1 < blogPost.length"
      :key="postIndex + 1"
      :to="blogPost[postIndex + 1].path"
    >
      <v-btn outlined elevation="2" color="info" @click="raiseIndex()">
        Next Post: {{ blogPost[postIndex + 1].title }}
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    initialIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      postIndex: this.initialIndex
    }
  },
  computed: {
    blogPost () {
      return this.$store.state.blogPosts
    }
  },
  methods: {
    lowerIndex () {
      this.postIndex--
    },
    raiseIndex () {
      this.postIndex++
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none
}
</style>
