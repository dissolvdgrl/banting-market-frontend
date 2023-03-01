<template>
	<div class="container">
		<h1 class="text-6xl mb-2 text-gray-800 mb-12 font-bold">Account Settings</h1>
		<form action="" class="form grid lg:grid-cols-2 gap-8">
			<div class="form-group">
				<label for="firstname">First name<span class="font-bold text-red-500">*</span></label>
				<input type="text" id="firstname" placeholder="Your email address" required>
			</div>
			<div class="form-group">
				<label for="surname">Surname<span class="font-bold text-red-500">*</span></label>
				<input type="text" id="surname" placeholder="Your email address" required>
			</div>
			<div class="form-group">
				<label for="email-address">Email address<span class="font-bold text-red-500">*</span></label>
				<input type="email" id="email-address" placeholder="Your email address" required>
			</div>
			<div class="form-group">
				<label for="displayname">Display name<span class="font-bold text-red-500">*</span></label>
				<input type="text" id="displayname" placeholder="Your email address" required>
				<span class="text-sm text-gray-500 mt-2"> This will be how your name will be displayed in the account section and in reviews </span>
			</div>
			<div class="form-group lg:col-span-2">
				<h2 class="mb-8 text-4xl font-bold">Password change</h2>
				<label for="currentpassword">Current password (leave blank to leave unchanged)<span class="font-bold text-red-500">*</span></label>
				<input type="password" id="currentpassword" >
			</div>
			<div class="form-group lg:col-span-2">
				<label for="newpassword">New password (leave blank to leave unchanged)<span class="font-bold text-red-500">*</span></label>
				<input type="password" id="newpassword">
			</div>
			<div class="form-group lg:col-span-2">
				<label for="newpasswordconfirm">Confirm new password<span class="font-bold text-red-500">*</span></label>
				<input type="password" id="newpasswordconfirm">
			</div>
			<div class="flex items-center lg:col-span-2">
				<button class="button">Save</button>
			</div>
		</form>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'dashboard',
})
</script>