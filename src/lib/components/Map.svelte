<script lang="ts">
	import { getSaleCoord, sales_coord, user_zip } from '$lib/stores/saleStore';
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	import { subscribe } from 'svelte/internal';
	mapboxgl.accessToken =
		'pk.eyJ1IjoicGNhbWlub2ciLCJhIjoiY2w5cms4ZHlvMDJoYjNvbXlqdDQ5NGEwYSJ9.THroavC6uRqB1YY8ebB_JQ';

	getSaleCoord();

	let reg = /(.*),(.*)/;

	let z: string  = $user_zip

	console.log(z)

	async function getcoorszip() {
		const response = await fetch(`https://zip-geolocation.buyed.workers.dev/`, {
			headers: {
				'x-zip': '78741'
			}
		});

		let x = await response.text();
		console.log(x);
		let y = x.match(reg);
		if (y != null) {
			centerMap = [Number(y[1]), Number(y[2])];
			zoomMap = 11;
		}
	}

	let sdsa: any = $sales_coord;

	let arrayco: number[];
	let centerMap: number[];
	let zoomMap: number;
	if ($user_zip == '0') {
		centerMap = [-93.3894092, 40.3922944];
		zoomMap = 3;
	} else {
		getcoorszip();
	}

	onMount(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: centerMap,
			zoom: zoomMap
		});
		if (sdsa != undefined) {
		sdsa.forEach((single_coordinates: any) => {
			let sigle = single_coordinates.coordinates;
			let m = sigle.match(reg);
			if (m != null) {
				arrayco = [Number(m[1]), Number(m[2])];
				const marker = new mapboxgl.Marker({
					color: '#09bfb8'
				})
					.setLngLat(arrayco)
					.addTo(map);
			}
		});
		}
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
