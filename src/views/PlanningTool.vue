<template>
    <div>
      <PlanningToolGoogleSignIn />
      <PlanningToolV2 />
    </div>
</template>

<script>
import PlanningToolV2 from "@/components/planning-tool/PlanningToolV2"
import PlanningToolGoogleSignIn from "@/components/planning-tool/PlanningToolGoogleSignIn"
export default {
  components: {
    PlanningToolV2,
    PlanningToolGoogleSignIn
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>