<template>
	<div id="listview" class="index container">
		<div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
			<div class="card-content">
				<div class="actions">
					<i class="material-icons edit">
						<router-link :to="'/smoothie/edit/' + smoothie.slug"
							>edit</router-link
						>
					</i>
					<i
						class="material-icons delete"
						@click="deleteSmoothie(smoothie.id)"
						>delete</i
					>
				</div>
				<h2 class="indigo-text">
					<router-link :to="'/smoothie/view/' + smoothie.slug">{{
						smoothie.title
					}}</router-link>
				</h2>
				<ul class="ingredients">
					<li
						v-for="(ing, index) in smoothie.ingredients"
						:key="index"
					>
						<span class="chip">{{ ing }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import db from "@/firebase/init";

export default {
	name: "List",
	data() {
		return {
			smoothies: [],
		};
	},
	methods: {
		deleteSmoothie(id) {
			// this.smoothies.pop(smoothie => smoothie.id === id);
			// delete doc from firestore
			db.collection("smoothies")
				.doc(id)
				.delete()
				.then(() => {
					this.smoothies = this.smoothies.filter(
						(smoothie) => smoothie.id != id
					);
				});
		},
	},
	created() {
		// fetch data from firestore

		// get specific collection (aka table)
		db.collection("smoothies")
			.get()

			// resolve promise with snapshot - aka the current data at this moment in time
			.then((snapshot) => {
				// snapshot has an entry for each item in the table.
				// forEach over them to get the data and the id instead of the meta stuff.
				snapshot.forEach((doc) => {
					// console.log(doc.data(), doc.id);
					let smoothie = doc.data();
					smoothie.id = doc.id;
					this.smoothies.push(smoothie);
				});
			});
	},
};
</script>

<style scoped>
#listview {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 30px;
	margin-top: 60px;
}

h2 {
	font-size: 20px;
}

li {
	list-style: none;
	display: inline-block;
}

.actions {
	position: absolute;
	top: 9px;
	right: 9px;
	cursor: pointer;
	color: #aaa;
	font-size: 2em;
}

.actions *:hover {
	color: #999;
}
</style>
