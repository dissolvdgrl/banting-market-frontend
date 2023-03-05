<template>
	<div class="container">
		<Hero
			:pageTitle="brand.name"
			description="Brand products found at the market"
			:heroProductImage="brand.image.sourceUrl"
		/>
		<div class="container grid grid-cols-1 md:grid-cols-3 gap-16">
			<ProductCard
				v-for="product in brand.products.edges"
				:title="product.node.name"
				:productImage="product.node.image"
				:url="product.node.slug"
				:price="product.node.price"
			/>
		</div>
		<Pagination :pagination-item="brand.products"/>
	</div>
</template>

<script setup>
const route = useRoute();
const { brandSlug } = route.params;
const brand = await useBrand(brandSlug);
</script>
