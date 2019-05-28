<script>
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
export default {
  data() {
    return {
      todos: []
    };
  },
  //Local Component
  components: {
    TodoInput,
    TodoItem
  },
  methods: {
    addTodo(text) {
      this.todos.push(text);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<template>
  <div>
    <TodoInput @submit="addTodo"/>
    <ul>
      <TodoItem v-for="(todo,index) in todos" 
                :data="todo" 
               @click.native="removeTodo(index)"/>
    </ul>
  </div>
</template>

<!--style在單一檔案組建中可以沒有-->
<style>
</style>

