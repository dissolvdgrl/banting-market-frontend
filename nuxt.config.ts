// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			title: "Pretoria Banting Market Online",
			meta: [
				{
					name: "description",
					content: "The official Pretoria Banting Market online store"
				}
			]
		}
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
