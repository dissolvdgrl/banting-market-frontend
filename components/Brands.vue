<template>
	<div class="my-32 grid">
		<h2 class="mb-8 text-4xl font-bold">Our Brands</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
			<BrandCard
				v-for="brand in brands"
				:title="brand.title"
				:shortDesc="brand.shortDesc"
				:brandLogo="brand.brandLogo"
				:url="brand.slug"
			/>
		</div>
		<NuxtLink to="/brands" class="button-center">View all brands</NuxtLink>
	</div>
</template>

<script setup>
const brands = [
	{
		id: 1,
		title: "Brand1",
		shortDesc: "Some awesome brand",
		brandLogo: "/images/cropped-logo-top.png",
		slug: "brand1"
	},
	{
		id: 2,
		title: "Brand2",
		shortDesc: "Some awesome brand",
		brandLogo: "/images/cropped-logo-top.png",
		slug: "brand2"
	},
	{
		id: 3,
		title: "Brand3",
		shortDesc: "Some awesome brand!",
		brandLogo: "/images/cropped-logo-top.png",
		slug: "brand"
	}
];
</script>