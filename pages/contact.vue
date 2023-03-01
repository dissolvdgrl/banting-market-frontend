<template>
	<div class="container">
		<Hero
			pageTitle="Contact"
			description="Need help? Let us know below"
			heroProductImage="brooke-cagle-eL4xIEuHzzk-unsplash.jpg"
		/>
		<div class="container grid gap-16 grid-cols-1 lg:grid-ctextbook-chapteols-3">
			<div>
				<h2 class="mb-8 text-4xl font-bold w-2/3">Help & support</h2>
				<p>
					<span class="font-bold mr-2">Email:</span>
					<NuxtLink to="mailto:help@example.com" class="link-generic">help@example.com</NuxtLink>
				</p>
				<p class="my-4">
					<span class="font-bold mr-2">Phone:</span>
					<NuxtLink to="tel:0123456789" class="link-generic">0123456789</NuxtLink>
					<br>
					<span class="italic">Our office hours are from Monday to Friday 08h00 to 17h00</span>
				</p>
				<p class="my-4">
					Visit our <NuxtLink to="/customer-support" class="link-generic">Frequently Asked Questions page</NuxtLink> for online solutions.
				</p>
				<p class="my-4">
					<span class="font-bold">Looking for the physical market?</span>
					Visit <NuxtLink to="https://realfoodmarket.info/" target="_blank" class="link-generic">the banting market website</NuxtLink> if you are looking for the Brooklyn's Banting Market website, the market that runs every 1<sup>st</sup> Saturday of the month from 09h00 to 14h00 at Brooklyn Mall, Pretoria.
				</p>
			</div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script setup>

</script>