<template>
	<div class="bg-amber-50">
		<div class="bg-white px-4 lg:py-0 md:px-0">
			<div class="container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<a href="/">
					<div class="font-bold mx-auto md:mx-0 flex justify-center items-center md:justify-start">
							<img src="/images/logo.svg" alt="" class="w-16 mr-2">
							<span>Banting Market Online Store</span>
					</div>
				</a>
				<Search/>
				<div class="block md:hidden container mx-auto">
					<button class="mx-auto bg-neutral-900 p-4 rounded-xl w-full text-white font-bold cursor-pointer" @click="toggleMenu">Menu</button>
				</div>
				<MainNav/>
				<MobileNav v-if="showMenu" />
			</div>
			<StoreNav/>
		</div>
		<div class="p-16 w-full h-full min-h-screen flex flex-col items-center max-w-6xl mx-auto">
			<slot/>
		</div>
		<Footer />
	</div>
</template>

<script setup>
const showMenu = ref(false);
const toggleMenu = () => {
	showMenu.value = !showMenu.value;
}
</script>