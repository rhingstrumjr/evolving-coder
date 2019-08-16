<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="10" offset="1" lg="8" offset-lg="2">
            <nuxt />
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" sm="6" offset-sm="3">
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
