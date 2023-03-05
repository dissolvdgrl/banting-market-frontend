<template>
	<div class="container">
		<Hero
			pageTitle="Product categories"
			description="Banting, keto, low-carb products for any occasion"
			heroProductImage="sauce-mayo.png"
			action="#categories-listing"
			callToAction="Shop all categories"
		/>
		<div id="categories-listing" class="container grid grid-cols-1 md:grid-cols-3 gap-16">
			<CategoryCard
				v-for="category in allCategories"
				:title="category.node.name"
				:url="category.node.slug"
			/>
		</div>
		<Pagination :pagination-item="categories"/>
	</div>
</template>

<script setup>
const allCategories = await useCategories();
const categories = [
	{
		id: 1,
		title: "Category1",
		shortDesc: "Some awesome product!",
		slug: "/categories/category-1"
	},
	{
		id: 2,
		title: "Category2",
		shortDesc: "Some awesome product!",
		slug: "/categories/category-2"
	},
	{
		id: 3,
		title: "Category3",
		shortDesc: "Some awesome product!",
		slug: "/categories/category-3"
	},
	{
		id: 4,
		title: "Category4",
		shortDesc: "Some awesome product!",
		slug: "/categories/category-4"
	}
];
</script>