<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-start">
		<div class="py-16 flex flex-col items-start">
			<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">{{ pageTitle }}</h1>
			<p class="text-3xl text-gray-500 mb-16">{{ description }}</p>
			<NuxtLink :to="action" class="button" v-if="action">{{ callToAction }}</NuxtLink>
		</div>
		<div class="bg-white rounded-xl overflow-hidden border border-gray-300 hidden md:block shadow-xl" v-if="heroProductImage">
			<img :src="`/images/${heroProductImage}`" alt="heroProductImage" class="mx-auto">
		</div>
	</div>	
</template>

<script setup>
const props = defineProps(['pageTitle', 'description', 'heroProductImage', 'action', 'callToAction']);
</script>
