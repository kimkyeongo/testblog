<template>
	<div class="blog-detail">
		<h1>{{ this.$route.params.id }}</h1>
	</div>
</template>

<script>
export default {
	methods: {
		init() {
			console.log('init')
		}
	},
	created() {},
	mounted() {
		console.log('created')
		console.log(this.$router)
	}
}
</script>
