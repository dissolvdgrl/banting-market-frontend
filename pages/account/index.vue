<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">My Account</h1>
		<div class="grid gap-16">
			<h2 class="text-2xl mb-4">Hello <span class="font-bold">username</span></h2>
			<p>From your account dashboard you can view your
				<NuxtLink to="/account/orders" class="link-generic">recent orders</NuxtLink>, manage your
				<NuxtLink to="/account/my-address" class="link-generic">shipping and billing addresses</NuxtLink>, and
				<NuxtLink to="/account/settings" class="link-generic">edit your password and account details</NuxtLink>.</p>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "dashboard",
});
</script>