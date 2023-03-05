export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const query = `query NewQuery {
					  productCategories(where: {parent: 31}) {
						nodes {
						  name
						  slug
						  image {
							altText
							sourceUrl
						  }
						}
					  }
					}`;

	const { data } = await $fetch(config.wpGraphQlEndpoint, {
		method: 'POST',
		body: JSON.stringify({
			query: query
		})
	});

	const brands = data.productCategories.nodes.sort((a, b) => 0.5 - Math.random()).slice(0,3);

	return brands;
});