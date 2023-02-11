<template>
	<nav class="border-b py-4 hidden md:block">
		<div class="container flex flex-col md:flex-row justify-between container mx-auto items-center gap-y-2 max-w-6xl">
			<NuxtLink to="/products" class="link-main-nav">All products</NuxtLink>
			<NuxtLink to="/brands" class="link-main-nav">Brands</NuxtLink>
			<NuxtLink to="" class="link-main-nav">Sauces</NuxtLink>
			<NuxtLink to="" class="link-main-nav">Sweet stuff</NuxtLink>
			<NuxtLink to="" class="link-main-nav">Baked Goods</NuxtLink>
			<NuxtLink to="" class="link-main-nav">Skin care</NuxtLink>
			<NuxtLink to="" class="bg-red-400 rounded-xl px-4 py-2 font-bold uppercase text-white transition-all duration-200 hover:bg-red-500">Sale</NuxtLink>
		</div>
	</nav>
</template>

<script setup>
</script>