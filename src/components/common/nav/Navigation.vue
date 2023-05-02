<template>
	<ul class="nav nav-tabs">
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/about">About</router-link></li>
		<li><router-link to="/todo">Todo</router-link></li>
		<li><router-link to="/blog">Blog</router-link></li>
	</ul>
</template>
<style>
nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
