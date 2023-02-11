<template>
	<nav class="border-b lg:border-none py-4 hidden md:flex md:col-span-2 lg:col-span-1">
		<div class="container grid grid-cols-1 gap-6 mx-auto">
			<div class="flex justify-between lg:justify-end">
				<a href="#" class="mr-4 flex items-center">
					<UserImage/>
				</a>
				<a href="#" class="mr-4 flex items-center">
					<CartImage/>
				</a>
				<NuxtLink to="/" class="mr-4 link-main-nav">Home</NuxtLink>
				<NuxtLink to="/about" class="mr-4 link-main-nav">About</NuxtLink>
				<NuxtLink to="/contact" class="link-main-nav">Contact</NuxtLink>
			</div>
		</div>
	</nav>
</template>

<script setup>

</script>