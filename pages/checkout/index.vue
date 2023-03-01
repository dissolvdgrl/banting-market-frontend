<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">Checkout</h1>
		<div class="grid lg:grid-cols-3 gap-16">
			<!-- Order Form -->
			<div class="col-span-2">
				<h2 class="mb-8 text-4xl font-bold">Billing Details</h2>
				<form id="checkout-shipping" class="form">
					<div class="form-group">
						<label for="name">Name<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="name" placeholder="Your name" required>
					</div>
					<div class="form-group">
						<label for="surname">Surname<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="surname" placeholder="Your surname" required>
					</div>
					<div class="form-group">
						<label for="street-address">Street Address<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="street-address-1" placeholder="House number and street name" required>
						<input type="text" id="street-address-2" placeholder="(Optional) Aparment, suite, unit, ect." class="mt-2">
					</div>
					<div class="form-group">
						<label for="town-city">Town/City<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="town-city" placeholder="Your town or city" required>
					</div>
					<div class="form-group">
						<ProvinceSelect :selected="selected"></ProvinceSelect>
					</div>
					<div class="form-group">
						<label for="postcode">Postcode<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="postcode" placeholder="Enter your postcode" required>
					</div>
					<div class="form-group">
						<label for="postcode">Phone<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="phone" placeholder="Enter your phone number" required>
					</div>
					<div class="form-group">
						<label for="email">Email address<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="email" placeholder="Enter your email address" required>
					</div>
					<div class="flex items-center my-4">
						<span class="mr-2 font-bold">Deliver to a different address?</span>
						<div
							class="w-14 h-8 flex items-center rounded-full p-1 duration-300 cursor-pointer"
							:class="[ differentAddress ? 'bg-dark-green' : 'bg-gray-300' ]"
							@click="differentAddress = !differentAddress"
						>
							<div
								class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300"
								:class="{ 'translate-x-6': differentAddress }"
							></div>
						</div>
					</div>
					<div v-if="differentAddress">
						<div class="form-group">
							<label for="shipping_name">Name<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_name" placeholder="Your name" required>
						</div>
						<div class="form-group">
							<label for="shipping_surname">Surname<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_surname" placeholder="Your surname" required>
						</div>
						<div class="form-group">
							<label for="shipping_street-address">Street Address<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_street-address-1" placeholder="House number and street name" required>
							<input type="text" id="shipping_street-address-2" placeholder="(Optional) Aparment, suite, unit, ect." class="mt-2">
						</div>
						<div class="form-group">
							<label for="shipping_town-city">Town/City<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_town-city" placeholder="Your town or city" required>
						</div>
						<div class="form-group">
							<ProvinceSelect :selected="selected"></ProvinceSelect>
						</div>
						<div class="form-group">
							<label for="shipping_postcode">Postcode<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_postcode" placeholder="Enter your postcode" required>
						</div>
						<div class="form-group">
							<label for="shipping_phone">Phone<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_phone" placeholder="Enter your phone number" required>
						</div>
						<div class="form-group">
							<label for="shipping_email">Email address<span class="font-bold text-red-500">*</span></label>
							<input type="text" id="shipping_email" placeholder="Enter your email address" required>
						</div>
					</div>
					<div>
						<button class="button">Place order</button>
					</div>
				</form>
			</div>
			<!-- Order Details -->
			<div class="col-span-1">
				<h2 class="mb-8 text-4xl font-bold">Your order</h2>
				<div>
					<div v-for="item in cartItems" ref="cartItemRefs" class="py-2 grid gap-4 grid-cols-2">
						<span>{{ item.title }} &times; {{ item.quantity }}</span>
						<span class="font-bold justify-self-end">R {{ item.price.toFixed(2) }}</span>
					</div>
					<div class="py-4 grid gap-4 grid-cols-2 border-y">
						<p class="font-bold">Subtotal</p>
						<p class="justify-self-end font-bold">{{ cartTotal }}</p>
						<p class="font-bold">Shipping</p>
						<p class="justify-self-end font-bold">{{ shippingPrice.toFixed(2) }}</p>
					</div>
					<div class="py-2 grid gap-4 grid-cols-2">
						<p class="font-bold">Total</p>
						<p class="justify-self-end font-bold">{{ totalPrice }}</p>
					</div>
				</div>
				<div class="my-4 border-y py-4">
					<h3 class="mb-8 text-2xl font-bold">Payment methods</h3>
					<div class="flex justify-start">
						<input type="checkbox" checked id="payment-method" name="payment-method">
						<label for="payment-method" class="ml-4">
							PayFast
						</label>
						<img src="/images/payfast-logo.png" class="ml-auto">
					</div>
				</div>
				<p class="mt-4 text-sm">
					Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
					<NuxtLink to="#" class="link-generic">privacy policy</NuxtLink>.
				</p>
				
			</div>
		</div>
	</div>
</template>

<script setup>
let differentAddress = ref(false);
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
const selected = "Select your province";

const cartTotal = cartItems.value.reduce((counter, cartItem) => counter + cartItem.price, 0).toFixed(2);
const shippingPrice = 129.00;
let totalPrice = cartTotal + shippingPrice;
totalPrice = parseFloat(totalPrice).toFixed(2);

</script>