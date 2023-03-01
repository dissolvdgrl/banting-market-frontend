<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">My Cart</h1>
		<div v-if="cartItems.length > 0">
			<div class="py-4 grid gap-8 lg:grid-cols-7 border-b">
				<p class="font-bold col-span-3">Product</p>
				<p class="font-bold">Price</p>
				<p class="font-bold">Quantity</p>
				<p class="font-bold">Subtotal</p>
			</div>
			<div class="grid divide-y">
				<div v-for="item in cartItems" ref="cartItemRefs" class="py-4 grid gap-8 lg:grid-cols-7 items-center">
					<div class="flex gap-4 col-span-3 items-center">
						<img :src="item.productImage" :alt="`${item.title} product shot`" class="w-24">
						<div>
							<p class="font-bold text-xl mb-2">{{ item.title }}</p>
							<p class="text-gray-500 text-sm">{{ item.shortDesc }}</p>
						</div>
					</div>
					<p>R {{ item.price }}</p>
					<p>{{ item.quantity }}</p>
					<p>R {{ item.price * item.quantity }}</p>
					<DeleteIcon @click="removeItem" class="justify-self-end	"/>
				</div>
			</div>
			<div class="border-t py-4 flex flex-col items-end">
				<p class="text-3xl text-right">Cart Total: <strong>R {{ cartTotal.toFixed(2) }}</strong></p>
				<p class="text-right text-sm text-gray-400 italic">All prices inclusive of VAT</p>
				<p class="text-right text-sm text-gray-400 italic mb-6">Shipping will be calculated on Checkout</p>
				<div class="flex items-center">
					<span class="link-generic mr-4 text-red-400 cursor-pointer" @click="clearCart">Clear cart</span>
					<NuxtLink class="button" to="/checkout">Proceed to checkout</NuxtLink>
				</div>
			</div>
		</div>
		<div v-else>
			<p>No items in your cart, <NuxtLink to="products" class="link-generic">why not add some</NuxtLink>?</p>
		</div>
	</div>
</template>

<script setup>

let cartItems = ref([
	{
		productID: 12345,
		title: "Product1",
		shortDesc: "Some awesome product with a rather long description",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product1",
		price: 39.99,
		quantity: 3,
	},
	{
		productID: 6789,
		title: "Product2",
		shortDesc: "Another cool product",
		productImage: "/images/sauce-mayo.png",
		slug: "/products/product2",
		price: 50.00,
		quantity: 1,
	}
]);
const cartItemRefs = ref([]);
const cartTotal = cartItemRefs.value.reduce((counter, cartItem) => counter + cartItem.price, 0);

const removeItem = () => {
	alert('delete item');
};

const clearCart = () => {
	cartItems.value = [];
}
</script>