<template>
	<div class="container flex flex-col items-center">
		<button class="button-center" @click="fetchProducts">Load more</button>
		<p class="italic text-center mt-4">Showing {{ productCount }} of {{ productCount }} items</p>
	</div>
</template>

<script setup>
const props = defineProps(['paginationItem']);
const productCount = props.paginationItem.length;

const fetchProducts = () => {
	console.log("fetching more products");
}
</script>