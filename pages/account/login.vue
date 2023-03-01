<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">My Account</h1>
		<div class="grid gap-16 lg:grid-cols-2">
			<div>
				<h2 class="mb-8 text-4xl font-bold">Login</h2>
				<form action="" class="form">
					<div class="form-group">
						<label for="username">Username or email address<span class="font-bold text-red-500">*</span></label>
						<input type="text" id="username" placeholder="Your username" required>
					</div>
					<div class="form-group">
						<label for="password">Password<span class="font-bold text-red-500">*</span></label>
						<input type="password" id="password" placeholder="" required>
					</div>
					<div class="flex items-center justify-end">
						<NuxtLink to="/password-reset" class="link-generic">Reset password</NuxtLink>
						<button class="button ml-4">Log in</button>
					</div>
				</form>
			</div>
			<div>
				<h2 class="mb-8 text-4xl font-bold">Sign up</h2>
				<form action="" class="form">
					<div class="form-group">
						<label for="email-address">Email address<span class="font-bold text-red-500">*</span></label>
						<input type="email" id="email-address" placeholder="Your email address" required>
					</div>
					<div class="flex items-center justify-end">
						<button class="button ml-4">Get started</button>
					</div>
					<p class="text-sm mt-6">
						A link to set a new password will be sent to your email address. Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
						<NuxtLink to="/privacy-policy" class="link-generic">privacy policy</NuxtLink>.
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>