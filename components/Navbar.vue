<template>
  <v-app-bar app absolute color="white" elevate-on-scroll>
    <v-app-bar-nav-icon />

    <nuxt-link to="/">
      <v-toolbar-title class="grey--text text--darken-3">
        Evolving Coder
      </v-toolbar-title>
    </nuxt-link>
    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-triforce</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in pages" :key="i">
          <nuxt-link :to="item.path">
            <v-list-item-title>
              {{
                item.title
              }}
            </v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => {
    return {
      pages: [
        {
          title: "Blog",
          path: "/blog"
        },
        {
          title: "Portfolio",
          path: "#"
        },
        {
          title: "Contact",
          path: "#"
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none
}
</style>
