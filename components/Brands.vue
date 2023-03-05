<template>
	<div class="my-32 grid">
		<h2 class="mb-8 text-4xl font-bold">Our Brands</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-stretch">
			<BrandCard
				v-for="brand in props.brands"
				:name="brand.name"
				:image="brand.image"
				:slug="brand.slug"
			/>
		</div>
		<NuxtLink to="/brands" class="button-center">View all brands</NuxtLink>
	</div>
</template>

<script setup>
const props = defineProps({
	brands: Array
});
</script>