<script lang="ts">
	/**
	 * @type {any}
	 */

	export let stats_sale: any;
</script>

<div class="grid grid-rows-2 place-items-center">
	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3">
			<div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
				<!-- Pricing Card -->

				<button
					href="#"
					class="items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
					>I'll be there</button
				>
				<!-- Pricing Card -->

				<button
					href="#"
					class="items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400  rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600"
					>Maybe I'll pass around</button
				>
				<!-- Pricing Card -->

				<button
					href="#"
					class=" items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800"
					>Sorry I can't</button
				>
			</div>
		</div>
	</section>

	<ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
		<li class="pb-3 sm:pb-4">
			<div class="flex items-center space-x-4">
				<div class="svg-green">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
					</svg>
				</div>
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium text-gray-900 truncate dark:text-white">Going</p>
				</div>
				<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{stats_sale.confirmed}
				</div>
			</div>
		</li>
		<li class="py-3 sm:py-4">
			<div class="flex items-center space-x-4">
				<div class="svg-green">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" />
					</svg>
				</div>
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium text-gray-900 truncate dark:text-white">Maybe</p>
				</div>
				<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{stats_sale.maybe}
				</div>
			</div>
		</li>
		<li class="py-3 sm:py-4">
			<div class="flex items-center space-x-4">
				<div class="svg-red">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
					</svg>
				</div>
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium text-gray-900 truncate dark:text-white">Not Going</p>
				</div>
				<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{stats_sale.not_going}
				</div>
			</div>
		</li>
	</ul>
</div>

<style>
	.svg-green {
		filter: invert(14%) sepia(85%) saturate(7231%) hue-rotate(166deg) brightness(99%) contrast(96%);
	}
	.svg-yellow {
		filter: invert(73%) sepia(56%) saturate(6708%) hue-rotate(19deg) brightness(115%) contrast(94%);
	}
	.svg-red {
		filter: invert(14%) sepia(90%) saturate(4137%) hue-rotate(355deg) brightness(112%) contrast(79%);
	}
</style>
