<template>
	<div class="blog">
		<h1>This is an blog page</h1>
		<table>
			<tr>
				<th>Id</th>
				<th>Title</th>
				<th>Body</th>
			</tr>
			<tr v-for="blog in blogs" :key="blog.id" @click="goToBlogDetail(blog.id)">
				<td>
					{{ blog.id }}
				</td>
				<td>{{ blog.title }}</td>
				<td>{{ blog.body }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import BlogDetailView from '@/components/blog/BlogDetailView'
export default {
	components: {
		BlogDetailView
	},
	data() {
		return {
			blogs: []
		}
	},
	methods: {
		goToBlogDetail(id) {
			// this.$props = { id: blog.id, title: blog.title, context: blog.body }
			console.log(this.$router)
			this.$router.push({ path: '/blog/' + id })
		}
	},
	mounted() {
		console.log('props', this.$props)
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				this.blogs = json
				// max 20 blogs
				this.blogs = this.blogs.slice(0, 20)
				// pagination 10 blogs per page
				console.log('router', this.$router)
			})
	}
}
</script>

<style scoped></style>
