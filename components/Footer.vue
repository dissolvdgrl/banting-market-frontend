<template>
	<footer class="bg-white border-t p-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-8">
			<div>
				<h2 class="text-2xl font-bold mb-6">About</h2>
				<p>We started the official Pretoria Banting Market Online store to enable people from all over South Africa to buy locally-made banting, keto and low-carb products.</p>
			</div>
			<div>
				<h2 class="text-2xl font-bold mb-6">Shop</h2>
				<div class="flex flex-col items-start">
					<NuxtLink to="#" class="link-footer">All products</NuxtLink>
					<NuxtLink to="#" class="link-footer">Brands</NuxtLink>
				</div>
			</div>
			<div>
				<h2 class="text-2xl font-bold mb-6">Need help?</h2>
				<div class="flex flex-col items-start">
					<NuxtLink to="#" class="link-footer">Returns policy</NuxtLink>
					<NuxtLink to="#" class="link-footer">Contact us</NuxtLink>
				</div>
			</div>
		</div>
		<p class="text-center text-sm text-neutral-500">© Banting Market Online {{ year }}</p>
	</footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>