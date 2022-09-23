<template>
	<div class="blog-detail">
		<table>
			<tr>
				<th>Title</th>
				<th>Body</th>
			</tr>
			<tr>
				<td>{{ blog.title }}</td>
				<td>{{ blog.body }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			blog: {}
		}
	},
	methods: {},
	created() {
		axios
			.get(
				'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id
			)
			.then((response) => {
				this.blog = response.data
			})
	}
}
</script>
