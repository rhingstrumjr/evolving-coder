<template lang="md">
  # Interested in coding?

  Computer programmer.  Coder.  Software developer.  Web designer.  Web developer.  Backend developer.  Frontend developer.  Fullstack developer.  The list of titles goes on.

  We hear these titles all the time now.  You also might have heard stories of people learning to code and getting a job they love.  Who doesn't want that?

  ### What have you dreamed of creating if you had the skills of computer programmer?
  <UserAnswer :q-number="3" />

  I'm going to assume you have an interest in coding if you are reading this.  Here are my suggestions if you continue down this path.
    1. Start with [FreeCodeCamp](www.freecodecamp.org) as it gives you challenges to complete
    2. Pursue any small project or challenge you get excited about
    3. Sketch out what you are trying to accomplish
    4. Try to solve any problem on your own first
    5. Celebrate your accomplishments!

  When I was starting off, I would get really worked up worrying about what programming language to learn first.  My suggestion would be to learn HTML first, CSS second, and JavaScript third.  I believe this gives you the positive feedback required to maintain motivation.

  The HTML language allows you to see immediate effects on the screen.  That in itself is inspiring.  Then, CSS allows you to make the HTML pretty and organized.  JavaScript makes the pages interactive and fun.  These build nicely upon one another.  But, don't think you must be a master before moving on.  You'll always be learning more and more about every language you use.

You will forever be an evolving coder!
  </template>

<script>
import UserAnswer from "@/components/UserAnswer.vue"
export default {
  layout: "blog",
  components: {
    UserAnswer
  }
}
</script>
