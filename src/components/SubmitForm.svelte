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

	let gSaleObj = {
		house_number:'',
		address: '',
		city: '',
		state: '',
		zip: '',
		coordinates: '',
		date: '',
		start_time: '',
		end_time: ''
	};


	// https://api.mapbox.com/geocoding/v5/mapbox.places/1701%20Quynn%20Ln%20Leander%20TX.json?limit=1&country=US&types=address&access_token=pk.eyJ1IjoicGNhbWlub2ciLCJhIjoiY2w5cms4ZHlvMDJoYjNvbXlqdDQ5NGEwYSJ9.THroavC6uRqB1YY8ebB_JQ
	function getCoordinates() {
		fetch(
			'https://api.mapbox.com/geocoding/v5/mapbox.places/${gSaleObj.house_number}%20${gSaleObj.address}%20${gSaleObj.street}%20${gSaleObj.city}%20${gSaleObj.state}%20${gSaleObj.zip}&access_token=pk.eyJ1IjoicGNhbWlub2ciLCJhIjoiY2w5cms4ZHlvMDJoYjNvbXlqdDQ5NGEwYSJ9.THroavC6uRqB1YY8ebB_JQ'
		);
	}
</script>

<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
	<form on:submit|preventDefault={handleLogin}>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Name</label
				>
				<input
					type="text"
					id="name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>

			<div>
				<label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Date</label
				>
				<input
					bind:value={gSaleObj.date}
					type="date"
					id="date"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>

			<div>
				<label
					for="start_time"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start Time</label
				>
				<input
					bind:value={gSaleObj.start_time}
					type="time"
					id="start_time"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
			<div>
				<label
					for="end_time"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End Time</label
				>
				<input
					bind:value={gSaleObj.end_time}
					type="time"
					id="end_time"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
			<div>
				<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>House Number</label
				>
				<input
					bind:value={gSaleObj.house_number}
					type="text"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
			<div>
				<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Address</label
				>
				<input
					bind:value={gSaleObj.address}
					type="text"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
			<div>
				<label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>City</label
				>
				<input
					bind:value={gSaleObj.city}
					type="text"
					id="website"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
			<div>
				<label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>State</label
				>
				<input
					bind:value={gSaleObj.state}
					type="text"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
			<div>
				<label for="zip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>ZIP</label
				>
				<input
					bind:value={gSaleObj.zip}
					type="number"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/>
			</div>
		</div>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<label
					for="description"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Description - What are you selling? (Optional)</label
				>
				<input
					type="text"
					id="first_name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
				/>
			</div>
		</div>
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
			<label
				for="terms and conditions"
				class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
				>I agree with the <a href="/terms" class="text-blue-600 hover:underline dark:text-green-400"
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
</div>



