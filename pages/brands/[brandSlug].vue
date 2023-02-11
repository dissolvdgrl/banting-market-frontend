<template>
	<div class="container">
		<Hero
			pageTitle="Brand Name"
			description="Brand products found at the market"
			heroProductImage="cropped-logo-top.png"
		/>
		<div class="container grid grid-cols-1 md:grid-cols-3 gap-16">
			<ProductCard
				v-for="product in products"
				:title="product.title"
				:shortDesc="product.shortDesc"
				:productImage="product.productImage"
				:url="product.slug"
				:price="product.price"
			/>
		</div>
		<Pagination :pagination-item="products"/>
	</div>
</template>

<script setup>
const products = [
	{
		id: 1,
		title: "Product1",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product1",
		price: 39.99
	},
	{
		id: 2,
		title: "Product2",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product2",
		price: 58.99
	},
	{
		id: 3,
		title: "Product3",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product3",
		price: 45.99
	},
	{
		id: 4,
		title: "Product4",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product4",
		price: 65.99
	}
];
</script>
