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

	const brands = data.productCategories.nodes;

	// TODO: return as an array instead, cleaner client data access
	return {
		brands
	}
});