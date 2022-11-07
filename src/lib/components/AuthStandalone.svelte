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

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img
				class="w-12 h-12 mr-1"
				src="https://pub-e258ac947ad34755ae66487725c77d71.r2.dev/logo-web.svg"
								alt="logo"
			/>
			Garage Sale Near Me
		</a>
		<div
			class="w-full flex flex-col items-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
		
			<div class="p-6 space-y-4 md:space-y-2 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Sign in with your just email.
				</h1>
				<h2
					class=" text-base font-bold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white underline decoration-green-600 decoration-2 "
				>
					No password required
				</h2>
				<form class="space-y-4 md:space-y-6" on:submit|preventDefault={handleLogin}>
					<div>
						<!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Your email</label
						> -->
						<input
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
							type="email"
							placeholder="Your email"
							bind:value={email}
						/>
					</div>
					<div class="flex items-start">
						<div class="flex items-center h-5">
							<input
								id="terms"
								aria-describedby="terms"
								type="checkbox"
								class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
							/>
						</div>
						<div class="ml-3 text-sm">
							<label for="terms" class="font-light text-gray-500 dark:text-gray-300"
								>I accept the <a
									class="font-medium text-green-600 hover:underline dark:text-green-500"
									href="/">Terms and Conditions</a
								></label
							>
						</div>
					</div>
					<button
						type="submit"
						class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						>Sign in</button
					>
				</form>
			</div>
		</div>
	</div>
</section>
