<template>
  <div id="app">
    <SiteNavBar />
    <router-view />
  </div>
</template>

<script>
import SiteNavBar from "@/components/SiteNavbar";
export default {
  components: {
    SiteNavBar
  }
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ac44bb;
}

#nav a.router-link-exact-active {
  color: #44bbac;
}
</style>
