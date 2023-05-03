<template>
	<div class="home">
		<div class="map-wrapper">
			<div id="map"></div>
		</div>
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
window.jQuery = require('jquery')
require('jvectormap')

export default {
	data() {},
	methods: {
		initMap() {
			$('#map').vectorMap({ map: 'asia_merc' })
		}
	},
	mounted() {
		this.initMap()
	}
}
</script>
