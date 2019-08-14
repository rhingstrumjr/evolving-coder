<template>
  <v-container fluid>
    <v-parallax dark src="../img/hero.jpg">
      <v-container>
        <v-row>
          <v-col offset="1">
            <h1 class="display-3 mb-4 blue-grey--text text--darken-3">
              Rob Hingstrum
            </h1>
            <h3 class="subheading blue-grey--text text--darken-3">
              An evolving coder
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container>
      <v-row class="grey lighten-4">
        <v-col cols="5" offset="2">
          <h1>What I do:</h1>
          <ol>
            <li>Design web applications to help people critically think.</li>
            <li>Document how I learn web development</li>
          </ol>
        </v-col>
        <v-col cols="4">
          <v-img src="../img/plan-design.jpg" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" offset="2">
          <h1>Current focus:</h1>
          <p>
            Setting up Evolving Coder to track my web development
            journey.
          </p>
        </v-col>
      </v-row>
      <v-row class="grey lighten-4">
        <v-col cols="5" offset="2">
          <h1>Technologies I use:</h1>
          <ul>
            <li>
              Frontend
              <ul>
                <li>Vue &amp; Nuxt &amp; Vuetify</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
            </li>
            <li>
              Backend and databases
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Google Firebase</li>
                <li>IndexedDB via Dexie</li>
              </ul>
            </li>
            <li>
              Version control
              <ul>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col cols="4" align-self="center">
          <v-img src="../img/web-tech.png" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {}
</script>
