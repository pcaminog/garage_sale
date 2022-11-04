<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import SubmitForm from '$lib/components/SubmitForm.svelte';
	import { page } from '$app/stores';
	import RedirectPage from '$lib/components/RedirectPage.svelte';
</script>

{#if !$page.data.session}
	<RedirectPage place="to submit a garage sale" />
	/>
{:else}
	<Navbar />

	<SubmitForm session={$page.data.session} />
{/if}
