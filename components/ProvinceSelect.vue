<template>
	<Listbox as="div" v-model="selected">
		<ListboxLabel>Province</ListboxLabel>
		<div class="relative">
			<ListboxButton class="relative w-full cursor-default rounded-xl border border-gray-300 bg-white py-2 text-left shadow-sm focus:border-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green sm:text-sm">
									<span class="flex items-center">
									  <span class="ml-3 block truncate">{{ selected }}</span>
									</span>
				<span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          								<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
									</span>
			</ListboxButton>
			
			<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
				<ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					<ListboxOption as="template" v-for="province in provinces" :key="province.key" :value="province.value" v-slot="{ active, selected }">
						<li :class="[active ? 'text-white bg-gray-300' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
							<div class="flex items-center">
								<span :class="[selected ? 'font-bold' : 'font-normal', 'ml-3 block truncate']">{{ province.value }}</span>
							</div>
							
							<span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
								<CheckIcon class="h-5 w-5" aria-hidden="true" />
							</span>
						</li>
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>

<script setup>
const props = defineProps(['selected']);
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
const selected = props.selected;
const provinces = [
	{ key: "EC", value: "Eastern Cape"},
	{ key: "FS", value: "Free State"},
	{ key: "GP", value: "Gauteng"},
	{ key: "KZN", value: "KwaZulu-Natal"},
	{ key: "LP", value: "Limpopo"},
	{ key: "MP", value: "Mpumalanga"},
	{ key: "NC", value: "Northern Cape"},
	{ key: "NW", value: "North West"},
	{ key: "WC", value: "Western Cape"},
];
</script>