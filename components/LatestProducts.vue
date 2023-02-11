<template>
	<div class="my-32">
		<h2 class="mb-8 text-4xl font-bold">Latest Products</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
			<ProductCard
				v-for="product in products"
				:title="product.title"
				:shortDesc="product.shortDesc"
				:productImage="product.productImage"
				:url="product.slug"
				:price="product.price"
			/>
		</div>
		<div class="flex items-center">
			<NuxtLink to="/products" class="button-center">Shop all products</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const products = [
	{
		id: 1,
		title: "Product1",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "products/product1",
		price: 39.99
	},
	{
		id: 2,
		title: "Product2",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "products/product2",
		price: 58.99
	},
	{
		id: 3,
		title: "Product3",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "products/product3",
		price: 45.99
	}
];
</script>