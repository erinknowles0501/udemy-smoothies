<template>
	<div class="card">
		<div class="card-content">
			<h3>{{ $route.params.slug }}</h3>
			<ul class="ingredients">
				<li v-for="(ing, index) in ingredients" :key="index">
					<span class="chip">{{ ing }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import db from "@/firebase/init";

export default {
	data() {
		return {
			title: "",
			ingredients: "",
		};
	},
	created() {
		db.collection("smoothies")
			.where("slug", "==", this.$route.params.slug)
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					this.title = doc.data().title;
					this.ingredients = doc.data().ingredients;
				});
			});
	},
};
</script>

<style scoped>
li {
	list-style: none;
	display: inline-block;
}

.card {
	width: 50%;
	min-width: 400px;
	margin: 0 auto;
}
</style>
