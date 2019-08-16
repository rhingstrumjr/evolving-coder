<template>
  <v-container>
    <v-card v-for="(post, index) in postList" :key="'post'+index" max-width="540" class="mx-auto mb-4" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title style="white-space: normal" class="title mb-1">
            <nuxt-link :to="post.path">
              <v-icon class="pr-2">
                mdi-triforce
              </v-icon>{{ post.title }}
            </nuxt-link>
          </v-list-item-title>
          <v-list-item-subtitle>{{ post.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions style="flex-wrap: wrap" class="d-flex">
        <v-chip v-for="(tag, i) in post.tags" :key="'tag'+i" outlined color="primary" class="mr-2 mt-1" text>
          {{ tag.toUpperCase() }}
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    postArray: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      postList: this.postArray.reverse()
    }
  },
  watch: {
    postArray (newPostArray, oldPostArray) {
      this.postList = this.postArray
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
