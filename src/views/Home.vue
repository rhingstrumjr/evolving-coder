<template>
  <div class="home">
    <MarkdownData />
  </div>
</template>

<script>
// @ is an alias to /src

import MarkdownData from '@/blogs/test.md'

export default {
  name: "home",
  components: {
    MarkdownData
  }
};
</script>
