<template>
	<nav class="border-b py-4 hidden md:block" id="dashNav">
		<div class="container flex flex-col md:flex-row justify-between container mx-auto items-center gap-y-2 max-w-6xl">
			<NuxtLink to="/account" class="link-main-nav">Dashboard</NuxtLink>
			<NuxtLink to="/account/orders" class="link-main-nav">Orders</NuxtLink>
			<NuxtLink to="/account/settings" class="link-main-nav">Account Details</NuxtLink>
			<NuxtLink to="" class="link-main-nav">Logout</NuxtLink>
		</div>
	</nav>
</template>

<script setup>
</script>