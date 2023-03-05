<template>
	<div class="my-32">
		<h2 class="mb-8 text-4xl font-bold">Latest Products</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
			<ProductCard
				v-for="product in props.products"
				:title="product.name"
				:productImage="product.image"
				:url="`/products/${product.slug}`"
				:price="product.price"
				:categories="product.productCategories.nodes"
			/>
		</div>
		<div class="flex items-center">
			<NuxtLink to="/products" class="button-center">Shop all products</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	products: Array
});
</script>