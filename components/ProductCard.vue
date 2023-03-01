<template>
	<NuxtLink :to="url">
		<div class="bg-white rounded-xl border border-gray-300 relative overflow-hidden w-full transition-shadow duration-300 hover:shadow-xl focus:shadow-xl">
			<img :src="productImage" :alt="`An image of ${title}`" class="max-h-64 mx-auto bg-gray-100">
			<div class="p-4">
				<h2 class="font-bold text-center">
					{{ title }}
				</h2>
				<p class="mb-4 text-center">{{ shortDesc }}</p>
				<p class="mb-4 text-center font-bold text-2xl ">R{{ price }}</p>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
import CartImage from "~/components/CartButton.vue";

const props = defineProps(['title', 'shortDesc', 'productImage', 'url', 'price']);
</script>