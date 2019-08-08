<template>
  <v-container>
    <h1>Portfolio page</h1>
    <p>I will list my current work and past work.</p>
    <p>The ProjectCard component will be used to show off my work.</p>
    <ProjectCard img-src="https://via.placeholder.com/150" project-title="Evolving Coder Website" project-description="A portfolio website and development blog." />
  </v-container>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"
export default {
  components: {
    ProjectCard
  }
}
</script>
