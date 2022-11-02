<script lang='ts'>
	/**
	 * @type {any}
	 */
	export let data: any;

	import { page } from '$app/stores';


	$: (console.log($page.params.slug))



</script>

<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
	<h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
		Garage sales near me
	</h2>
	<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="py-3 px-6"> Location </th>
					<th scope="col" class="py-3 px-6"> City </th>
					<th scope="col" class="py-3 px-6"> Date </th>
					<th scope="col" class="py-3 px-6"> Time </th>
					<th scope="col" class="py-3 px-6">
						<span class="sr-only">View</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each data || [] as e}
					<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th
							scope="row"
							class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{e.address}
						</th>
						<td class="py-4 px-6"> {e.city} </td>

						<td class="py-4 px-6"> {e.date} </td>
						<td class="py-4 px-6"> {e.start_time} </td>
						<td class="py-4 px-6 text-right">{e.name}</td>
					</tr>
				{:else}
					<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th
							scope="row"
							class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							Loading...
						</th>
						<td class="py-4 px-6"> Loading... </td>
						<td class="py-4 px-6"> Loading... </td>
						<td class="py-4 px-6"> Loading... </td>
						<td class="py-4 px-6"> Loading... </td>
						<td class="py-4 px-6"> Loading...</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
