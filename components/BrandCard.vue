<template>
	<NuxtLink :to="`/brands/${slug}`">
		<div class="bg-white rounded-xl border border-gray-300 relative overflow-hidden transition-shadow duration-300 hover:shadow-xl focus:shadow-xl h-full flex flex-col justify-start">
			<img :src="image.sourceUrl" :alt="image.altText" class="h-[200] w-[400] mx-auto">
			<div class="p-4 mt-auto">
				<h2 class="font-bold text-2xl text-center">{{ name }}</h2>
				<div class="flex justify-center">
					<span class="text-gray-400 transition-all duration-200 hover:text-gray-800">View products</span>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps(['name', 'slug', 'image']);
</script>