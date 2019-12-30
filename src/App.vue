<template>
  <div id="app" class="ec-grid-hcf">
    <SiteNavBar class="ec-header" />
    <router-view class="ec-content" />
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
