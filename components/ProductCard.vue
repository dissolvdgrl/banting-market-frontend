<template>
	<NuxtLink :to="`/products/${url}`">
		<div class="h-full bg-white flex flex-col rounded-xl border border-gray-300 relative overflow-hidden w-full transition-shadow duration-300 hover:shadow-xl focus:shadow-xl">
			<img :src="productImage.sourceUrl" :alt="productImage.altText" class="max-h-64 mx-auto bg-gray-100">
			<div class="h-full p-4 flex flex-col justify-start">
				<p class="font-semibold text-lg">
					{{ title }}
				</p>
				<div class="" v-if="categories">
					<span
						class="text-sm mb-4 text-gray-400"
						v-for="(category, key) in categories"
						:key="category.id"
					>
						{{ category.name }}<span class="text-sm mb-4 text-gray-400" v-if="(key !== categories.length - 1) || (categories.length > 1)">, </span>
					</span>
				</div>
				<p class="mt-auto font-bold text-2xl">{{ price }}</p>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps(['title', 'productImage', 'url', 'price', 'categories']);
</script>