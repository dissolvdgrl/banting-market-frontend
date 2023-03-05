export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const query = `query NewQuery {
					  products(first: 3) {
						nodes {
						  ... on SimpleProduct {
							id
							name
							price
							slug
							image {
							  altText
							  sourceUrl
							}
							productCategories {
							  nodes {
							  	id
								name
							  }
							}
						  }
						  ... on VariableProduct {
							id
							name
							price
							slug
							image {
							  altText
							  sourceUrl
							}
							productCategories {
							  nodes {
							  	id
								name
							  }
							}
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

	return data.products.nodes;
});