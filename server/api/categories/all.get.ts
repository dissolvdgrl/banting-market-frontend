export default defineEventHandler(async(event) => {
	const config = useRuntimeConfig();

	const query =`query NewQuery($exclude: [ID] = [15, 31, 32, 33, 34, 39, 43, 47]) {
					  productCategories(where: {exclude: $exclude}) {
						edges {
						  node {
							name
							slug
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

	return data.productCategories.edges;
});