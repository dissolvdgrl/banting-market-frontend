export const useRandomBrands = () => {
	// Don't use useFetchWithCache here, we want random brands fetched every time
	const { data } = useFetch('/api/brands/random');
	return data;
};