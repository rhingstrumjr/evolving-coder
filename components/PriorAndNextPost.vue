<template>
  <div>
    <nuxt-link
      v-if="postIndex - 1 >= 0"
      :key="postIndex - 1"
      :to="blogPost[postIndex - 1].path"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn outlined elevation="2" color="info" @click="lowerIndex()" v-on="on">
            Prior Post
          </v-btn>
        </template>
        <span>{{ blogPost[postIndex - 1].title }}</span>
      </v-tooltip>
    </nuxt-link>
    <nuxt-link
      v-if="postIndex + 1 < blogPost.length"
      :key="postIndex + 1"
      :to="blogPost[postIndex + 1].path"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn outlined elevation="2" color="info" class="float-right" @click="raiseIndex()" v-on="on">
            Next Post
          </v-btn>
        </template>
        <span>{{ blogPost[postIndex + 1].title }}</span>
      </v-tooltip>
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

button {
  justify-content: left;
  overflow: auto;
  white-space: nowrap;
  margin-top: 5px;
}
</style>
