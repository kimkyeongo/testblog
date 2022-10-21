<template>
	<div class="todo-body">
		<todo-add />
		<todo-list />
	</div>
</template>
<script>
import TodoList from '@/components/business/todo/TodoList'
import TodoAdd from '@/components/business/todo/TodoAdd'
export default {
	components: { TodoAdd, TodoList }
}
</script>

<style scoped>
.todo-body {
	overflow: auto;
	height: 52vmin;
	border-radius: 10px;
}
.todo-body::-webkit-scrollbar {
	display: none;
}
</style>
