<script>
import TodoBody from '@/components/business/todo/TodoBody'
export default {
	components: {
		TodoBody
	}
}
</script>

<style scoped>
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
.todo-header {
	font-weight: bold;
	color: black;
	border-bottom: solid #e2e3e3;
	display: flex;
	flex-direction: column;
	background: #db7f63;
	text-align: center;
	border-radius: 5px;
}
h1 {
	margin: 2vmin;
	color: #fff;
	font-size: calc(10px + 2vmin);
}
</style>

<template>
	<div class="todo">
		<header class="todo-header">
			<h1>TODO LIST</h1>
		</header>
		<TodoBody />
	</div>
</template>
