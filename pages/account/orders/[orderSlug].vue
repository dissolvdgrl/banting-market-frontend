<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">Order # {{ orderUri }}</h1>
		<p class="text-2xl">Order <span class="font-bold">#{{ order.id }}</span> was placed on <span class="font-bold">{{  order.date }}</span> and is currently
			<span class="font-bold">{{ order.status }}</span>.</p>
		
		<h2 class="text-4xl mt-16 mb-8">Order details</h2>
		<div class="grid grid-cols-2 mt-4">
			<p class="font-bold">Product</p>
			<p class="font-bold">Total</p>
			<div class="col-span-2 grid grid-cols-2 py-4 last:border-b-2" v-for="item in order.items">
				<p>{{ item.item }} &times; {{ item.quantity }}</p>
				<p>R {{ item.total }}</p>
			</div>
			<div class="col-span-2 grid grid-cols-2 py-4 border-t-2">
				<p class="font-bold">Subtotal</p>
				<p class="font-bold">R {{ order.subtotal }}</p>
			</div>
			<div class="col-span-2 grid grid-cols-2 py-4">
				<p class="font-bold">Shipping</p>
				<p class="font-bold">R {{ order.shipping.cost }} ({{ order.shipping.method }})</p>
			</div>
			<div class="col-span-2 grid grid-cols-2 py-4">
				<p class="font-bold">Payment method</p>
				<p class="font-bold">{{ order.paymentMethod }}</p>
			</div>
			<div class="col-span-2 grid grid-cols-2 py-4 border-t-2">
				<p class="font-bold text-2xl">Total</p>
				<p class="font-bold text-2xl">R {{ order.total }}</p>
			</div>
		</div>
		
		<h2 class="text-4xl mt-16 mb-8 font-bold">Shipping & Billing Address</h2>
		<div class="grid gap-16 grid-cols-2">
			<div>
				<h3 class="text-3xl mt-4 mb-4">Billing address</h3>
				<p><span class="font-bold">Deliver to:</span> christie hill</p>
				<p>764 Lorna Street</p>
				<p>Pretoria</p>
				<p>Gauteng</p>
				<p>0167</p>
			</div>
			<div>
				<h3 class="text-3xl mt-4 mb-4">Shipping address</h3>
				<p><span class="font-bold">Deliver to:</span> christie hill</p>
				<p>764 Lorna Street</p>
				<p>Pretoria</p>
				<p>Gauteng</p>
				<p>0167</p>
			</div>
		</div>
		
	</div>
</template>

<script setup>
const route = useRoute();
const orderUri = route.params.orderSlug;

definePageMeta({
	layout: "dashboard",
});

const order = {
	id: "123",
	date: "23 February 2023",
	status: "Cancelled",
	total: "615.00",
	subtotal: "518.00",
	shipping: {
		method: "Flat rate",
		cost: "129.00"
	},
	paymentMethod: "PayFast",
	items: [
		{
			item: "Carb Smart Butterscotch Syrup",
			quantity: 2,
			total: "120.00"
		},
		{
			item: "Carb Smart Mayonnaise",
			quantity: 1,
			total: "68.00"
		},
		{
			item: "Himalayan Crystal Rock Salt ",
			quantity: 1,
			total: "37.00"
		},
		{
			item: "Sugar-Free Ice Cream - Chocolate",
			quantity: 8,
			total: "240.00"
		},
	],
};
</script>