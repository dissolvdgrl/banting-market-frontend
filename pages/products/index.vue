<template>
	<div class="container">
		<Hero
			pageTitle="Products"
			description="Curated Banting Market products, get yours now!"
			heroProductImage="sauce-mayo.png"
			action="#product-listing"
			callToAction="Start shopping"
		/>
		<div class="container grid grid-cols-1 md:grid-cols-3 gap-16" id="product-listing">
			<ProductCard
				v-for="product in products"
				:title="product.node.title"
				:productImage="product.node.image"
				:url="product.node.slug"
				:price="product.node.price"
			/>
		</div>
		<Pagination :pagination-item="products"/>
	</div>
	
</template>

<script setup>
const products = await useProducts();
</script>