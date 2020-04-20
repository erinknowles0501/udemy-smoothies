<template>
	<div>
		<div class="card" v-if="!id">
			<h3>No record exists here.</h3>
		</div>
		<div class="container" v-if="id">
			<h3 v-if="!isEdit">{{ title ? title : "New smoothie" }}</h3>
			<h3 v-if="isEdit">Edit smoothie "{{ title }}"</h3>

			<div class="card field">
				<div class="card-content">
					<h5>Title</h5>
					<input type="text" v-model="title" id="title" />
				</div>
			</div>

			<div class="card field">
				<div class="card-content">
					<h5>Ingredients:</h5>
					<div
						class="chip"
						v-for="(ing, index) in ingredients"
						:key="index"
					>
						{{ ing }}
						<i class="close material-icons" @click="removeIng(ing)"
							>close</i
						>
					</div>
					<input type="text" @keyup.enter="addIng" />
				</div>
			</div>

			<div>
				<button class="btn" @click="editSmoothie" v-if="isEdit">
					"Edit smoothie"
				</button>
				<button class="btn" @click="createSmoothie" v-if="!isEdit">
					"Add new smoothie"
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import db from "@/firebase/init";

export default {
	data() {
		return {
			title: "",
			slug: "",
			ingredients: [],
			id: null,
		};
	},
	computed: {
		isEdit() {
			return this.$route.params.slug ? true : false;
		},
	},
	methods: {
		addIng(v) {
			this.ingredients.push(v.target.value);
			v.target.value = "";
		},
		removeIng(ing) {
			this.ingredients = this.ingredients.filter((item) => item != ing);
		},
		slugify(title) {
			let slug = title.replace(" ", "-");
			slug = slug.toLowerCase();
			return slug;
		},
		createSmoothie() {
			this.slug = this.slugify(this.title);

			db.collection("smoothies")
				.add({
					title: this.title,
					slug: this.slug,
					ingredients: this.ingredients,
				})
				.then((docRef) => {
					console.log("Successfully created: ", docRef.id);
					this.$router.push({ name: "List" });
				})
				.catch((error) => console.error("Error: ", error));
		},
		editSmoothie() {
			this.slug = this.slugify(this.title);

			db.collection("smoothies")
				.doc(this.id)
				.set({
					title: this.title,
					slug: this.slug,
					ingredients: this.ingredients,
				})
				.then(() => {
					console.log("Successfully updated!");
					this.$router.push({ name: "List" });
				})
				.catch((error) => console.error("Error: ", error));
		},
	},
	created() {
		if (this.isEdit) {
			const smoothieSlug = this.$route.params.slug;

			db.collection("smoothies")
				.where("slug", "==", smoothieSlug)
				.limit(1)
				.get()
				.then((snapshot) => {
					snapshot.forEach((doc) => {
						this.id = doc.id;
						this.title = doc.data().title;
						this.ingredients = doc.data().ingredients;
					});
				});
		}
	},
};
</script>

<style scoped>
.field {
	width: 50%;
	min-width: 400px;
	margin: 0 auto;
	margin-bottom: 30px;
}
</style>
