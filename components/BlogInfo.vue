<template>
  <v-container>
    <v-card v-for="(post, index) in postList" :key="'post'+index" class="mx-auto mb-4" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <nuxt-link :to="post.path">
              {{ post.title }}
            </nuxt-link>
          </v-list-item-title>
          <v-list-item-subtitle>{{ post.description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey" />
      </v-list-item>

      <v-card-actions>
        <!-- Use v-for to cycle through tags -->
        <v-chip v-for="(tag, i) in post.tags" :key="'tag'+i" outlined color="primary" class="mr-2" text>
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
