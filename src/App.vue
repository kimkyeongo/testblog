<template>
	<div>
		<navigation />
	</div>
	<router-view />
</template>

<style>
body {
	background-color: #3e94ec;
	font-family: 'Roboto', helvetica, arial, sans-serif;
	font-size: 16px;
	font-weight: 400;
	text-rendering: optimizeLegibility;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
<script setup>
import Navigation from '@/components/common/nav/Navigation.vue'
</script>
