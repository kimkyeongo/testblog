<template>
	<div class="todo-body">
		<input
			class="todo-input"
			placeholder="Add a Todo"
			v-model="tData"
			@keyup.enter="AddNewTodo"
		/>
		<button class="todo-button" @click="AddNewTodo">ADD</button>
		<ul>
			<li v-for="(item, index) in tList">
				<a class="todo-check" @click="CheckTodo(index, $event)" />
				{{ item }}
				<a class="todo-trash" @click="DeleteTodo(index)" />
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			tData: '',
			tList: []
		}
	},
	methods: {
		AddNewTodo() {
			this.tList.push(this.tData)
			this.tData = ''
		},
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

img {
	width: 1.5vmin;
}
.todo-input {
	padding: 2vmin;
	border-radius: 4px 0 0 4px;
	border: 2px solid #5d0cff;
	outline: none;
	width: 63vmin;
	background: transparent;
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
