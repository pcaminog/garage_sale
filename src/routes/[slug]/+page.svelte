<script>
	import TableSingle from '$lib/components/TableSingle.svelte';
	import { gOsales, loadOneGSales, sale_stats } from '$lib/stores/saleStore';
	import { page } from '$app/stores';
	import SaleUserAction from '$lib/components/SaleUserAction.svelte';
	import AuthStandalone from '$lib/components/AuthStandalone.svelte';

	loadOneGSales($page.params.slug);
</script>

{#await $gOsales then dataSales}
	<TableSingle data={dataSales} />
{/await}
{#if !$page.data.session}
	<AuthStandalone />
{:else}
	<div class="mx-auto max-w-screen-md text-center mb-1 lg:mb-2">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
			Let them know you will be there
		</h2>
	</div>
	<!-- {#await $sale_stats then st}
		<SaleUserAction stats_sale={st} />
	{/await} -->
{/if}
