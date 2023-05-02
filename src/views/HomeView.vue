<template>
	<div class="home">
		<!--		<img alt="Vue logo" src="@/assets/dolphin.jpg" />-->
		<HelloWorld msg="플로버" />
	</div>
</template>
<style>
.home {
	background-image: url('@/assets/Flover.png');
	background-size: contain;
	/*background-repeat : no-repeat;*/
	height: 50rem;
}
p {
	color: coral;
	font-size: 2rem;
}

ul {
	list-style: none;
}
li {
	font-size: 2rem;
}
</style>
<script>
import HelloWorld from '@/components/common/header/HelloWorld.vue'

export default {
	components: {
		HelloWorld
	},
	data() {
		return {
			phtml:
				'<p>this community leaning to study for web skills</p>' +
				'<h2>and then next task describe</h2>',
			phtml2:
				'<ul>' +
				'<li>1.vue</li>' +
				'<li>2.es6</li>' +
				'<li>3.typescript</li>' +
				'<li>4.angular</li>' +
				'</ul>'
		}
	},
	methods: {}
}
</script>
