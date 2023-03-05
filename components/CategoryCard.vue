<template>
	<NuxtLink :to="`categories/${url}`">
		<div class="bg-white rounded-xl border border-gray-300 relative p-4 w-full transition-shadow duration-300 hover:shadow-xl focus:shadow-xl">
			<h2 class="font-bold text-2xl text-center">{{ title }}</h2>
			<div class="flex justify-center">
				<span class="mt-4 text-gray-400 transition-all duration-200 hover:text-gray-800 text-center">View all</span>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps(['title', 'url']);
</script>