<template>
	<div class="container">
		<div>
			<NuxtLink to="/" class="link-generic">Home</NuxtLink> /
			<NuxtLink to="/brands" class="link-generic">Brands</NuxtLink> /
			<NuxtLink to="/brands/brandname" class="link-generic">BrandName</NuxtLink>
		</div>
		<h1 class="text-4xl font-bold my-4">My Product</h1>
		<div class="flex flex-col xl:flex-row justify-between xl:w-2/6">
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
				</svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
			</svg>
			</div>
			<NuxtLink to="#" class="link-generic">5 Reviews</NuxtLink>
			<NuxtLink to="#" class="link-generic">Review this item</NuxtLink>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
			<div class="bg-white rounded-xl overflow-hidden border border-gray-800">
				<img src="/images/sauce-mayo.png" alt="heroProductImage" class="mx-auto">
			</div>
			<!-- Product Info -->
			<div class="grid items-start justify-items-start">
				<h3 class="text-4xl font-bold mb-4">R 39.99</h3>
				<p class="text-xs mt-4">Product Code: 12345</p>
				
				<div class="bg-dark-green rounded-xl flex pl-2 pr-4 py-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span class="ml-2 text-white font-bold">3 in stock</span>
				</div>
				
				<form action="">
					<div class="my-8 flex items-center">
						<input type="number" min="1" id="product-qty" name="product-qty" value="1" class="border border-gray-800 rounded w-16 mr-2 p-2 bg-white">
						<span>&times; 39.99</span>
					</div>
					<div>
						<button class="button">
							<CartImage />
							Add to cart
						</button>
					</div>
				</form>
				<div class="flex flex-col mt-6">
					<NuxtLink to="#" class="link-generic">Exchange & Returns Policy</NuxtLink>
					<NuxtLink to="#" class="link-generic">How long will it take to arrive?</NuxtLink>
				</div>
				
			</div>
		</div>
		<!-- Product details -->
		<div class="grid md:grid-cols-2 gap-16 mt-16">
			<div class="product-info">
				<h2 class="text-3xl mb-8 font-bold">Product Info</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias architecto atque consequuntur culpa cupiditate deleniti dolore dolores error eveniet facilis illo magni non, obcaecati optio quibusdam ratione repellendus.</p>
				<h3 class="text-xl mt-16 mb-4 font-bold">Nutritional Information</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias architecto atque consequuntur culpa cupiditate deleniti dolore dolores error eveniet facilis illo magni non, obcaecati optio quibusdam ratione repellendus.</p>
				<h3 class="text-xl mt-16 mb-4 font-bold">Usage Instructions</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias architecto atque consequuntur culpa cupiditate deleniti dolore dolores error eveniet facilis illo magni non, obcaecati optio quibusdam ratione repellendus.</p>
			</div>
		</div>
	</div>
	<div class="container border-dashed border-t-2 border-gray-300 mt-8 py-16">
		<h2 class="text-center text-2xl font-bold">You might also like...</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
			<ProductCard
				v-for="product in products"
				:title="product.title"
				:shortDesc="product.shortDesc"
				:productImage="product.productImage"
				:url="product.slug"
				:price="product.price"
			/>
		</div>
	</div>
</template>

<script setup>
const route = useRoute();
const product = useProduct(route.params.productSlug);
const products = [
	{
		id: 1,
		title: "Product1",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product1",
		price: 39.99
	},
	{
		id: 2,
		title: "Product2",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product2",
		price: 58.99
	},
	{
		id: 3,
		title: "Product3",
		shortDesc: "Some awesome product!",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product3",
		price: 45.99
	}
];
</script>