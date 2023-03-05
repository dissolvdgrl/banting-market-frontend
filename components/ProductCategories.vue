<template>
	<div class="my-32">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-16">
			<CategoryCard
				v-for="category in categories"
				:title="category.node.name"
				:url="category.node.slug"
			/>
		</div>
		<div class="flex items-center">
			<NuxtLink to="categories" class="button-center">Shop all categories</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const categories = await useFirstFourCategories();
</script>