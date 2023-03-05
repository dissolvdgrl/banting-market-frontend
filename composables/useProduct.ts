export const useProduct = (slug: string) => {
	const { data } = useFetch(`/api/products/${slug}`);
	return data;
}