<template>
	<div class="container">
		<Hero
			pageTitle="Official Banting Market Online Shop"
			description="Buy Banting Market goods online, from anywhere in South Africa."
			heroProductImage="/images/sauce-mayo.png"
			action="/products"
			callToAction="Shop all products"
		/>
		<LatestProducts :products="products" />
		<Brands :brands="brands" />
		<ProductCategories />
	</div>
</template>

<script setup>
const products = await useLatestProducts();
const brands = await useRandomBrands();
</script>