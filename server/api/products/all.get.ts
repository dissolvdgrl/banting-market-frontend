export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const query = `query GetProducts {
					  products {
						edges {
						  node {
							title(format: RENDERED)
							slug
							image {
							  altText
							  sourceUrl
							}
							... on SimpleProduct {
							  price
							}
							... on VariableProduct {
							  price
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

	return data.products.edges;
});