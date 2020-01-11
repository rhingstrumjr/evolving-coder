// Different types of to-dos: // 1. Research // 2. Get // 3. Create // Todos
will fall into 2 categories: // 1. Actionable - can be done immediately // 2.
Dependent - must be done after another task // Be able to check as complete via
screen // Show breadcrumb details above the todo as useful hints

<template>
  <div>
    You are able to complete the following:
    <ul>
      <li v-for="todo of todoList" :key="todo">
        {{ answers[todo].answer }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["answers", "rootKey"]),
    todoList() {
      const todoList = [];
      const searchList = [];
      Object.keys(this.answers).forEach(key => {
        let depth = 0;
        let currentKey = key;
        while (this.answers[currentKey].parent !== null) {
          depth++;
          currentKey = this.answers[currentKey].parent;
        }
        if (depth % 2 === 0) {
          searchList.push(key);
        }
      });
      searchList.forEach(item => {
        let dependentsDone = true;
        this.answers[item].dependentOn.forEach(element => {
          if (this.answers[element].completed === false) {
            dependentsDone = false;
          }
        });
        if (dependentsDone && this.answers[item].completed === false) {
          todoList.push(item);
        }
      });
      return todoList;
    }
  }
};
</script>

<style scoped></style>
