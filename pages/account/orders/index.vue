<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">My Orders</h1>
		<table id="orders-table" class="w-full">
			<thead class="bg-gray-700">
				<tr>
					<th>Order ID</th>
					<th>Date</th>
					<th>Status</th>
					<th>Total</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="order in orders" :key="order.id">
					<td>#{{ order.id }}</td>
					<td>{{ order.date }}</td>
					<td>{{ order.status }}</td>
					<td>R {{ order.price }}</td>
					<td class="flex flex-col">
						<NuxtLink
							v-for="action in order.actions"
							:href="`${action.url}${order.id}`"
							class="link-generic"
						>
							{{ action.label }}
						</NuxtLink>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "dashboard",
});

const orders = [
	{
		id: "123",
		date: "23 February 2023",
		status: "Cancelled",
		price: "615.00",
		actions: [
			{ label: "Pay Now", url: '/checkout/pay/'},
			{ label: "View", url: '/account/orders/'},
		]
	},
	{
		id: "456",
		date: "24 February 2023",
		status: "Processing",
		price: "200.00",
		actions: [
			{ label: "View", url: '/account/orders/'}
		]
	},
]
</script>