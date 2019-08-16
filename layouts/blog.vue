<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" offset="1">
            <nuxt />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <PriorAndNextPost :initial-index="currentIndex" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import PriorAndNextPost from "@/components/PriorAndNextPost.vue"
export default {
  components: {
    Navbar,
    PriorAndNextPost
  },
  data: () => {
    return {
      currentIndex: null
    }
  },
  created () {
    const currentPath = this.$route.path
    const blogPosts = this.$store.state.blogPosts
    this.currentIndex = blogPosts.findIndex(post => post.path === currentPath)
  }
}
</script>
