<template>
  <div>
    <Navbar />
    <b-container>
      <b-row align-h="center" class="justify-content-sm-center">
        <b-col sm="12" class="text-center">
          <h1>Special blog article view</h1>
          <h2>Might want to have a sidebar</h2>
          <p>Or, include links to other posts.</p>
        </b-col>
        <nuxt />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>
