<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Evolving Coder</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="#">Portfolio</b-nav-item>
          <b-nav-item to="/posts/learning-vue">Blog</b-nav-item>
          <b-nav-item to="#">Resources</b-nav-item>
          <b-nav-item to="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>
