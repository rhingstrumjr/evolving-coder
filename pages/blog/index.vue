<template>
  <v-container>
    <v-row class="d-xs-flex-direction: column d-md-flex">
      <v-col cols="9" offset="1" md="7" md-offset="1">
        <h1 style="display: block; margin: auto; max-width: 540px">
          Welcome to the Evolving Coder Blog!
        </h1>
        <BlogInfo :post-array="blogPostsToShow" />
      </v-col>
      <v-col cols="9" offset="1" md="3" align-self="center">
        <v-container style="max-width: 540px">
          <h3>Tags</h3>
          <v-container v-for="tag in tagList" :key="tag">
            <v-btn @click="filterPosts(tag)">
              {{ tag }}
            </v-btn>
            <br>
          </v-container>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogInfo from "@/components/BlogInfo.vue"
export default {
  components: {
    BlogInfo
  },
  data () {
    return {
      blogPostsToShow: [],
      filterTags: []
    }
  },
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    },
    tagList () {
      const tlist = []
      this.$store.state.blogPosts.forEach((post) => {
        post.tags.forEach((tag) => {
          if (!tlist.includes(tag)) {
            tlist.push(tag)
          }
        })
      })
      return tlist
    }
  },
  created () {
    if (this.blogPosts.length < 5) {
      this.blogPostsToShow = this.blogPosts.slice(0)
    } else {
      this.blogPostsToShow = this.blogPosts.slice(this.blogPosts.length - 5)
    }
  },
  methods: {
    filterPosts (filterTag) {
      this.blogPostsToShow = []
      let newBlogPostList = []
      if (this.filterTags.includes(filterTag)) {
        this.filterTags = this.filterTags.filter((tag) => {
          return tag !== filterTag
        })
      } else {
        this.filterTags.push(filterTag)
      }
      this.blogPosts.forEach((post) => {
        this.filterTags.forEach((tag) => {
          if (post.tags.includes(tag) && !newBlogPostList.includes(post)) {
            newBlogPostList.push(post)
          }
        })
      })
      if (newBlogPostList.length === 0) {
        if (this.blogPosts.length < 5) {
          newBlogPostList = this.blogPosts.slice(0)
        } else {
          newBlogPostList = this.blogPosts.slice(this.blogPosts.length - 5)
        }
      }
      this.blogPostsToShow = newBlogPostList.reverse()
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
  color: rgb(46, 47, 63)
}

a:hover {
  text-decoration: underline
}
</style>
