<template>
	<input
		class="todo-input"
		placeholder="Add a Todo"
		v-model="this.data"
		@keyup.enter="AddNewTodo"
	/>
	<button class="todo-button" @click="AddNewTodo">ADD</button>
</template>

<script>
export default {
	data() {
		return {
			data: ''
		}
	},
	methods: {
		AddNewTodo() {
			this.$store.state.tList.push(this.data)
			this.data = ''
			console.log(this.$store.state.tList)
		}
	}
}
</script>

<style scoped>
.todo-input {
	padding: 2vmin;
	border-radius: 4px 0 0 4px;
	border: 2px solid #5d0cff;
	outline: none;
	width: 63vmin;
	background-color: #7c61c5;
}

.todo-input::placeholder {
	color: #e2e2e2;
}

.todo-button {
	padding: 2vmin;
	border: 2px solid #5d0cff;
	border-radius: 0 4px 4px 0;
	cursor: pointer;
	outline: none;
	background: linear-gradient(
		90deg,
		rgba(93, 12, 255, 1) 0%,
		rgba(155, 0, 250, 1) 100%
	);
	width: 12vmin;
	color: #fff;
	text-transform: capitalize;
}
</style>
