<<<<<<< HEAD
<template>
  <div>
    <input id="answer" v-model="userAnswer" type="text" @keyup.enter="saveAnswer">
    <button @click="$emit('save-answer', userAnswer)">
      Save Answer
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userAnswer: ""
    }
  }
}
</script>

<style scoped>
#answer {
    background-color: beige
}
</style>
||||||| c8788a8
=======
<template>
  <div>
    <input id="answer" type="text" v-model="userAnswer" @keyup.enter="saveAnswer">
    <button @click="$emit('save-answer', userAnswer)">Save Answer</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userAnswer: ""
    }
  }
}
</script>

<style scoped>
#answer {
    background-color: beige
}
</style>
>>>>>>> 01ad4d2b76533eb822d04e71cd6f5e0ed2ebc513
