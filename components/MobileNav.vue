<template>
	<nav>
		<div class="container grid grid-cols-1 gap-6 mx-auto border-b py-4 mb-4">
			<div class="grid gap-6 grid-cols-1 lg:grid-cols-3">
				<div class="flex justify-between">
					<a href="#" class="mr-4 flex items-center">
						<UserImage/>
					</a>
					<a href="#" class="mr-4 flex items-center">
						<CartImage/>
					</a>
					<a href="/" class="mr-4 main-nav-link">Home</a>
					<a href="#" class="mr-4 main-nav-link">About</a>
					<a href="#" class="main-nav-link">Contact</a>
				</div>
			</div>
		</div>
		<div>
			<div class="container flex flex-col md:flex-row justify-between container mx-auto items-center gap-y-2">
				<a href="/products" class="main-nav-link">All products</a>
				<a href="/brands" class="main-nav-link">Brands</a>
				<a href="" class="main-nav-link">Sauces</a>
				<a href="" class="main-nav-link">Sweet stuff</a>
				<a href="" class="main-nav-link">Baked Goods</a>
				<a href="" class="main-nav-link">Skin care</a>
				<a href="" class="bg-red-400 rounded-xl px-4 py-2 font-bold uppercase text-white transition-all duration-200 hover:bg-red-500">Sale</a>
			</div>
		</div>
	</nav>
</template>

<script setup>

</script>