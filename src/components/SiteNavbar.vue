<template>
  <nav>
    <span v-for="(route, index) in $router.options.routes" :key="route.path">
      <span v-if="index > 0"> | </span
      ><router-link :to="route.path">{{ route.name }}</router-link>
    </span>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ac44bb;
}

nav a.router-link-exact-active {
  color: #44bbac;
}
</style>
