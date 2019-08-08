<template>
  <v-card class="mx-auto" max-width="350">
    <v-img
      :src="imgSrc"
      height="200px"
    />

    <v-card-title>
      {{ projectTitle }}
    </v-card-title>

    <v-card-actions>
      <v-btn
        icon
        color="purple"
      >
        <v-layout align-start justify-space-around column>
          <v-icon style="align-self:center">
            mdi-github-circle
          </v-icon>
          <span>GitHub</span>
        </v-layout>
      </v-btn>

      <v-spacer />

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-arrow-down-circle-outline' : 'mdi-arrow-up-drop-circle-outline' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          {{ projectDescription }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    projectTitle: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      show: false
    }
  }
}
</script>
