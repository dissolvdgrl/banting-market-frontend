<template>
	<div class="my-32">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-16">
			<CategoryCard
				v-for="category in categories"
				:title="category.title"
				:shortDesc="category.shortDesc"
				:url="category.slug"
			/>
		</div>
		<div class="flex items-center">
			<NuxtLink to="categories" class="button-center">Shop all categories</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const categories = [
	{
		id: 1,
		title: "Category1",
		shortDesc: "Some awesome product!",
		slug: "/product1"
	},
	{
		id: 2,
		title: "Category2",
		shortDesc: "Some awesome product!",
		slug: "/product2"
	},
	{
		id: 3,
		title: "Category3",
		shortDesc: "Some awesome product!",
		slug: "/product3"
	},
	{
		id: 4,
		title: "Category4",
		shortDesc: "Some awesome product!",
		slug: "/product4"
	}
];
</script>