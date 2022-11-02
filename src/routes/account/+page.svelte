<script>
	import Account from '$lib/components/Account.svelte';
	import { page } from '$app/stores';
	import AuthStandalone from '$lib/components/AuthStandalone.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
{#if !$page.data.session}
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<h1
			class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-2xl dark:text-white"
		>
			I see that you are trying to access to your account.
		</h1>
		<p
			class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
		>
			You will need to Sign in first.
		</p>
		<a
			href="/signin"
			class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
		>
			Sign in
			<svg
				class="ml-2 -mr-1 w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</a>
	</div>
{:else}
	<Account session={$page.data.session} />
{/if}
