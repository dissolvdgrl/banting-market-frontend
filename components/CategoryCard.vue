<template>
	<NuxtLink :to="url">
		<div class="bg-white rounded-xl border border-gray-300 relative p-4 w-full transition-shadow duration-300 hover:shadow-xl focus:shadow-xl">
			<h2 class="font-bold text-2xl text-center">{{ title }}</h2>
			<p class="mb-4 text-center">{{ shortDesc }}</p>
			<div class="flex justify-center">
				<NuxtLink :to="url" class="text-gray-400 transition-all duration-200 hover:text-gray-800 text-center">View all CategoryTitle products</NuxtLink>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps(['title', 'shortDesc', 'productImage', 'url']);
</script>