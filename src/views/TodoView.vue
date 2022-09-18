<script>
import TodoHeader from "@/components/todo/TodoHeader";
import TodoBody from "@/components/todo/TodoBody";
export default {
  components : {
    TodoHeader,
    TodoBody,
  }
}
</script>

<style>
.todo {
  position: absolute;
  left: calc(50% - 40vmin);
  top: calc(50% - 30vmin);
  border: solid #e2e3e3;
  border-radius: 10px;
  height: 60vmin;
  width: 80vmin;
  background-color: rgba(59, 45, 234, 0.4);
}

</style>

<template>
  <div class="todo">
    <TodoHeader/>
    <TodoBody/>
  </div>
</template>
