<template>
	<ul>
		<li v-for="(item, index) in this.tList">
			<a class="todo-check" @click="CheckTodo(index, $event)" />
			{{ item }}
			<a class="todo-trash" @click="DeleteTodo(index)" />
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			tList: this.$store.state.tList
		}
	},
	methods: {
		CheckTodo(idx, e) {
			if (e.target.className == 'todo-uncheck') {
				e.target.className = 'todo-check'
			} else {
				e.target.className = 'todo-uncheck'
			}
			e.target.parentElement.style.textDecoration =
				e.target.className == 'todo-uncheck' ? 'line-through' : 'none'
		},
		DeleteTodo(idx) {
			this.tList.splice(idx, 1)
		}
	},
	created() {
		console.log(this.$store.state)
	}
}
</script>
<style scoped>
ul {
	list-style: none;
	padding-left: 0px;
}
li {
	border: 2px solid #149fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4px auto;
	color: #fff;
	background: linear-gradient(
		90deg,
		rgb(75, 167, 153) 0%,
		rgb(102, 41, 133) 100%
	);
	font-size: 1rem;
	padding: 16px;
	border-radius: 5px;
	/*text-decoration:line-through;*/
}
.todo-trash {
	background-image: url('@/assets/trash-can.png');
	width: 1rem;
	height: 1rem;
	background-size: contain;
}
.todo-check {
	background-image: url('@/assets/checked.png');
	width: 1rem;
	height: 1rem;
	background-size: contain;
}

.todo-uncheck {
	background-image: url('@/assets/unchecked.png');
	width: 1rem;
	height: 1rem;
	background-size: contain;
}
</style>
