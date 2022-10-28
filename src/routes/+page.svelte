<script>
	import Map from '../components/Map.svelte';
	import Blog from '../components/Blog.svelte';
	import ButtonSale from '../components/ButtonSale.svelte';
	import Table from '../components/Table.svelte';
	import { gsales, loadGSales } from '../stores/saleStore';

	loadGSales();

	console.log($gsales);
</script>

<ButtonSale />
{#await $gsales then dataSales}
	<Table data={dataSales} />
{/await}
<Map />
<Blog />

