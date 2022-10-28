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
    
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
            <input
                id="remember"
                type="checkbox"
                value
                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
            />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-green-400"
                >terms and conditions</a
            >.</label
        >
    </div>
    <button
        type="submit"
        value={loading ? 'Loading' : 'Send magic link'}
        disabled={loading}
        class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
        >Submit</button
    >
</form>
