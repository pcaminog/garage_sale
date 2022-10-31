import { writable } from 'svelte/store';
import { supabaseClient } from '$lib/supabaseClient.js';
export const gsales = writable();
export const zip_cod = writable(0);

export async function loadGSales() {
	const { data, error } = await supabaseClient.from('sales').select();
	if (error) {
		return console.error(error);
	}
	gsales.set(data);
}

export async function loadZipSales(zip: number) {
	const { data, error } = await supabaseClient.from('sales').select().eq('zip', zip);
	if (error) {
		return console.error(error);
	}
	gsales.set(data);
}

export async function addGSales(gsale: any) {
	const { data, error } = await supabaseClient.from('recipes').insert(gsale);

	if (error) {
		return console.error(error);
	}

	gsales.update((cur: any) => [...cur, data[0]]);
}
