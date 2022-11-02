<script>
	import Map from '$lib/components/Map.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import ButtonSale from '$lib/components/ButtonSale.svelte';
	import Table from '$lib/components/Table.svelte';
	import { gsales, loadGSales } from '../lib/stores/saleStore';
	import Navbar from '$lib/components/Navbar.svelte';

	loadGSales();

</script>
<Navbar />

<ButtonSale />
{#await $gsales then dataSales}
	<Table data={dataSales} />
{/await}
<Map />
<Blog />

