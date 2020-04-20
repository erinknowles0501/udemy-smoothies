import Vue from "vue";
import Router from "vue-router";
import List from "@/components/List";
import Create from "@/components/Create";
import View from "@/components/View";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "List",
			component: List,
		},
		{
			path: "/smoothie/view/:slug",
			name: "View",
			component: View,
		},
		{
			path: "/smoothie/create",
			name: "Create",
			component: Create,
		},
		{
			path: "/smoothie/edit/:slug",
			name: "Create",
			component: Create,
		},
	],
});
