<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container fluid fill-height>
        <v-layout column align-center justify-center>
          <v-flex>
            <nuxt />
            <PriorAndNextPost :initial-index="currentIndex" />
          </v-flex>
        </v-layout>
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
