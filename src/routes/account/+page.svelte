<script>
	import Account from '../../components/Account.svelte';
	import { page } from '$app/stores';
	import AuthStandalone from '../../components/AuthStandalone.svelte';
</script>

{#if !$page.data.session}
	<AuthStandalone />
{:else}
	<Account session={$page.data.session} />
{/if}
