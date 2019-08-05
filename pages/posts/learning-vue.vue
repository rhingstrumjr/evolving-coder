<template lang="md">
  # Learning Vue!

  I'm falling in love with Vuejs.  I find using it incredibly simple!
  <div>
    <nuxt-link to="/">
    Back home
    </nuxt-link>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  layout: 'blog',
  components: {
    Navbar
  }
}
</script>
