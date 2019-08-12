<template lang="md">
   # Blog post 1
  I'm falling in love with Vuejs.  I find using it incredibly simple!

  ### What do you love about Vue? {#q1}
  <UserAnswer v-bind:q-number="1" />

  I love how interactive you can make websites!

  ### What do you want to learn next?
  <UserAnswer :q-number="2" />
  I want to learn how to deploy the page.  I also must learn how to show off multiple projects!
</template>

<script>
import UserAnswer from "@/components/UserAnswer.vue"
export default {
  layout: "blog",
  components: {
    UserAnswer
  }
}
</script>
