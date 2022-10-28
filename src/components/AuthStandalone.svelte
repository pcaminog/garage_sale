<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient';

	let loading = false;
	let email: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>
<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Opps!! You need to Sign in first
    </h5>
<form  on:submit|preventDefault={handleLogin}>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Email address</label
        >
        <input
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
            type="email"
            placeholder="Your email"
            bind:value={email}
        />
    </div>
    
    <button
        type="submit"
        value={loading ? 'Loading' : 'Send magic link'}
        disabled={loading}
        class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
        >Submit</button
    >
</form>
</div>