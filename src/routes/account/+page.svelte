<script>
	import Account from '$lib/components/Account.svelte';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import RedirectPage from '$lib/components/RedirectPage.svelte';
</script>

{#if !$page.data.session}
	<RedirectPage place="for check your account" />
{:else}
	<Navbar />

	<Account session={$page.data.session} />
{/if}
