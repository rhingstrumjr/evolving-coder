<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <h1>Welcome to the Evolving Coder Blog!</h1>
        <p>The list of posts will be here.</p>
        <p>The posts will be able to be sorted by date and tag.</p>
        <p>The posts will include a description of the article.</p>
        <ul>
          <n-link v-for="(post, index) in blogPosts" :key="index" :to="post.path">
            <li>{{ post.title }}<br> {{ post.description }}</li>
          </n-link>
        </ul>
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

<style scoped>
a {
  text-decoration: none;
  color: darkolivegreen
}

a:hover {
  text-decoration: underline
}
</style>
