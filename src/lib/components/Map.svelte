<script lang="ts">
	import { getSaleCoord, sales_coord } from '$lib/stores/saleStore';
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	mapboxgl.accessToken =
		'pk.eyJ1IjoicGNhbWlub2ciLCJhIjoiY2w5cms4ZHlvMDJoYjNvbXlqdDQ5NGEwYSJ9.THroavC6uRqB1YY8ebB_JQ';

	getSaleCoord();

	// import { writable } from 'svelte/store';

	// let current_coort: any;

	// export const geolocation: any = writable();

	// if ('geolocation' in navigator) {
	// 	geolocation.update(() => ({ supported: true }));
	// 	navigator.geolocation.getCurrentPosition(({ coords }) => {
	// 		current_coort = coords;
	// 	});
	// }

	let sdsa: any = $sales_coord;

	let reg = /(.*),(.*)/;
	let arrayco: number[];

	onMount(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-97.73333, 30.266666],
			zoom: 11
		});

		sdsa.forEach((single_coordinates: any) => {
			let sigle = single_coordinates.coordinates;
			let m = sigle.match(reg);
			if (m != null) {
				arrayco = [Number(m[1]), Number(m[2])];
				console.log(arrayco);

				const marker = new mapboxgl.Marker({
					color: '#09bfb8'
				})
					.setLngLat(arrayco)
					.addTo(map);
			}
		});
	});

	let position: any;
</script>

<svelte:head>
	<script src="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js"></script>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<div
	class="shadow-md rounded-lg py-8 px-4 mx-auto max-w-screen-xl h-96 lg:py-16 lg:px-6"
	id="map"
/>
