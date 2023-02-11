<template>
	<div class="container">
		<Hero
			pageTitle="Our Brands"
			description="Product brands found at the market"
			heroProductImage="sauce-mayo.png"
			action="#brands-listing"
			callToAction="Shop all brands"
		/>
		<div id="brands-listing" class="container grid grid-cols-1 md:grid-cols-3 gap-16">
			<BrandCard
				v-for="brand in brands"
				:title="brand.title"
				:shortDesc="brand.shortDesc"
				:brandLogo="brand.brandLogo"
				:url="brand.slug"
			/>
		</div>
		<Pagination :pagination-item="brands"/>
	</div>
</template>

<script setup>
const brands = [
	{
		id: 1,
		title: "Brand1",
		shortDesc: "Some awesome brand",
		brandLogo: "/images/cropped-logo-top.png",
		slug: "/brands/brand1"
	},
	{
		id: 2,
		title: "Brand2",
		shortDesc: "Some awesome brand",
		brandLogo: "/images/cropped-logo-top.png",
		slug: "/brands/brand2"
	},
	{
		id: 3,
		title: "Brand3",
		shortDesc: "Some awesome brand!",
		brandLogo: "/images/cropped-logo-top.png",
		slug: "/brands/brand"
	}
];
</script>