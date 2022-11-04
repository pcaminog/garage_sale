<script lang='ts'>
	import { getSaleCoord, sales_coord } from '$lib/stores/saleStore';
	import { json } from '@sveltejs/kit';
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	mapboxgl.accessToken =
		'pk.eyJ1IjoicGNhbWlub2ciLCJhIjoiY2w5cms4ZHlvMDJoYjNvbXlqdDQ5NGEwYSJ9.THroavC6uRqB1YY8ebB_JQ';

    getSaleCoord()
    console.log($sales_coord)

    let sdsa:any = $sales_coord

		const geojson = {
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-97.7436663, 30.295566]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-97.7336663, 30.265566]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
  ]
};
	onMount(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-97.73333, 30.266666],
			zoom: 11
		});

		for (const feature of geojson.features) {
      console.log('this is the original ' + typeof(feature.geometry.coordinates))
      console.log(typeof(sdsa[0].coordinates))

			const marker = new mapboxgl.Marker({
				color: '#09bfb8'
			})
				.setLngLat(feature.geometry.coordinates)
				.addTo(map)
		}
	});
</script>

<svelte:head>
	<script src='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js'></script>
	<link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />
</svelte:head>

<div class="shadow-md rounded-lg py-8 px-4 mx-auto max-w-screen-xl h-96 lg:py-16 lg:px-6" id="map" />
