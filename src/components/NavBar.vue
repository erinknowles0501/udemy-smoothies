<template>
	<nav>
		<ul>
			<li class="brand">
				<router-link :to="{ name: 'List' }">Home</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Create' }">
					<i class="material-icons">add</i>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {};
	},
};
</script>

<style scoped>
nav {
	width: 80%;
	margin: 0 auto;
}

ul {
	width: 100%;
	display: flex;
	list-style: none;
}

.brand {
	background: red;
}
</style>
