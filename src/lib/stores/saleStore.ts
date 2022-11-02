import { writable } from 'svelte/store';
import { supabaseClient } from '$lib/supabaseClient.js';
export const gsales = writable();
export const gOsales = writable();
export const sale_stats = writable();

export async function loadGSales() {
	const { data, error } = await supabaseClient.from('sales').select();
	if (error) {
		return console.error(error);
	}
	gsales.set(data);
}

export async function loadOneGSales(id: string) {
	const { data, error } = await supabaseClient.from('sales').select().eq('id', id);
	if (error) {
		return console.error(error);
	}
	gOsales.set(data);
}

export async function loadZipSales(zip: number) {
	const { data, error } = await supabaseClient.from('sales').select().eq('zip', zip);
	if (error) {
		return console.error(error);
	}
	gsales.set(data);
}

export async function addGSales(gsale: any) {
	const { error } = await supabaseClient.from('sales').insert(gsale);

	if (error) {
		return console.error(error);
	}
}

export async function getSaleInfo(gsale: any) {
	const { data, error } = await supabaseClient.from('sale_info').select().eq('sale_id', gsale);

	if (error) {
		return console.error(error);
	}

	sale_stats.set(data);
}
