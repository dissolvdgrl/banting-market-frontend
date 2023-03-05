export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const { brandSlug } = event.context.params;
	const query = `query NewQuery {
						  productCategories(where: {slug: "${brandSlug}"}) {
							nodes {
							  id
							  name
							  slug
							  image {
								altText
								sourceUrl
							  }
							  products {
								edges {
								  node {
									... on VariableProduct {
									  id
									  name
									  price
									  slug
									  image {
										altText
										sourceUrl
									  }
									}
								  }
								}
							  }
							}
						  }
						}`;

	const { data:brandWithProducts } = await $fetch(config.wpGraphQlEndpoint, {
		method: 'POST',
		body: JSON.stringify({
			query: query
		})
	});

	return brandWithProducts.productCategories.nodes[0];
});