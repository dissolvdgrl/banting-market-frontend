import {StorageSerializers, useSessionStorage} from "@vueuse/core";

export default async<T>(url?: string) => {
	// Use session storage to cache data
	const cachedData = useSessionStorage<T>(url, null, {
		serializer: StorageSerializers.object,
	});

	if (!cachedData.value) {
		const { data, error } = await useFetch<T>(url, {
			headers: useRequestHeaders(['cookie']),
		});

		if (error.value) {
			throw createError({
				...error.value,
				statusMessage: `Could not fetch data from ${url}`,
			});
		}

		cachedData.value = data.value as T;
	}

	return cachedData;
}