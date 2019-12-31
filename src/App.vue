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
<style></style>
