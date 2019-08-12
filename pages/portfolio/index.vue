<template>
  <v-container>
    <h1>Portfolio page</h1>
    <p>I will list my current work and past work.</p>
    <p>The ProjectCard component will be used to show off my work.</p>
    <h3>Current Project</h3>
    <ProjectCard img-src="https://via.placeholder.com/150" project-title="Evolving Coder Website" project-description="A portfolio website and development blog." />
    <h3>Cool projects</h3>
    <h3>Technologies used:</h3>
    <ul>
      <li>
        Frontend
        <ul>
          <li>Vue &amp; Nuxt &amp; Vuetify</li>
          <li>CSS</li>
          <li>HTML5</li>
        </ul>
      </li>
      <li>
        Backend and databases
        <ul>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Google Firebase</li>
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
