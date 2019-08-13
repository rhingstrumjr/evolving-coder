<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <h1>This is my generic blog page.</h1>
        <p>The list of posts will be here.</p>
        <n-link v-for="(post, index) in blogPosts" :key="index" :to="post.path">
          {{ post.title }}
        </n-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  },
  head () {
    return {
      title: "Evolving Coder's Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Updates from Evolving Coder"
        }
      ]
    }
  }
}
</script>
