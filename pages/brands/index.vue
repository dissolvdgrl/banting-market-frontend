<template>
	<div class="container">
		<Hero
			pageTitle="Our Brands"
			description="Product brands found at the market"
			heroProductImage="/images/sauce-mayo.png"
			action="#brands-listing"
			callToAction="Shop all brands"
		/>
		<div id="brands-listing" class="container grid grid-cols-1 md:grid-cols-3 gap-16">
			<BrandCard
				v-for="brand in brands.brands"
				:name="brand.name"
				:image="brand.image"
				:slug="brand.slug"
			/>
		</div>
		<Pagination :pagination-item="brands"/>
	</div>
</template>

<script setup>
const brands = await useBrands();
</script>