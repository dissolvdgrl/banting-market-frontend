<template>
	<NuxtLink :to="url">
		<div class="bg-white rounded-xl border border-gray-300 relative overflow-hidden transition-shadow duration-300 hover:shadow-xl focus:shadow-xl">
			<img :src="brandLogo" :alt="`An image of ${title}`" class="h-[200] w-[400] bg-gray-100 mx-auto">
			<div class="p-4">
				<h2 class="font-bold text-2xl text-center">{{ title }}</h2>
				<p class="mb-4 text-center">{{ shortDesc }}</p>
				<div class="flex justify-center">
					<span class="text-gray-400 transition-all duration-200 hover:text-gray-800">View products</span>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
import CartImage from "~/components/CartButton.vue";

const props = defineProps(['title', 'shortDesc', 'brandLogo', 'url']);
</script>