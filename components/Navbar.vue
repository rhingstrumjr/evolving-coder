<template>
  <v-app-bar app color="white" elevate-on-scroll hide-on-scroll>
    <nuxt-link to="/">
      <v-toolbar-title class="grey--text text--darken-3">
        Evolving Coder
      </v-toolbar-title>
    </nuxt-link>
    <v-spacer />

    <v-list class="hidden-xs-only" style="display: flex; padding: 0px">
      <v-list-item v-for="(item, i) in pages" :key="i" nuxt :to="item.path">
        <v-list-item-title class="grey--text text--darken-3">
          {{
            item.title
          }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn icon class="hidden-sm-and-up" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in pages" :key="i" nuxt :to="item.path">
          <v-list-item-title class="grey--text text--darken-3">
            {{
              item.title
            }}
          </v-list-item-title>
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
          path: "/portfolio"
        },
        {
          title: "Contact",
          path: "/contact"
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
.v-list-item:active {
  background-color: #8BC34A;
  opacity: .1;
}
</style>
