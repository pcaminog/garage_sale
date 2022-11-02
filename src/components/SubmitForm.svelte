<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabaseClient';
	import { addGSales } from '../stores/saleStore';
	import { page } from '$app/stores';

	let loading: boolean = false;
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
			supabaseClient.auth.onAuthStateChange((event, session) => {
				if (event == 'SIGNED_IN') {
					console.log('SIGNED_IN', session);
					submitSale()
				}
				console.log('no if match')
			})
;
		}
	};

	let gSaleObj: any = {
		name: '',
		coordinates: '',
		house_number: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		date: '',
		start_time: '',
		end_time: '',
		desc:''
	};

	async function submitSale() {
		await buildCoordinates();
		//console.log(gSaleObj);
		addGSales(gSaleObj);
		goto('/');
	}

	// https://api.mapbox.com/geocoding/v5/mapbox.places/1701+Quynn+Lane+Leander+TX.json?limit=1&country=US&types=address&access_token=pk.eyJ1IjoicGNhbWlub2ciLCJhIjoiY2w5cms4ZHlvMDJoYjNvbXlqdDQ5NGEwYSJ9.THroavC6uRqB1YY8ebB_JQ
	async function buildCoordinates() {
		let a: string =
			gSaleObj.house_number + '+' + gSaleObj.address + '+' + gSaleObj.city + '+' + gSaleObj.state;
		let add = a.replace(/\s/g, '+');
		const response = await fetch(`https://location.buyed.workers.dev/`, {
			headers: {
				'x-add': add
			}
		});
		const data = await response.text();
		gSaleObj.coordinates = data;
	}
</script>

<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Name</label
			>
			<input
				bind:value={gSaleObj.name}
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
			<label for="end_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>End Time</label
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
			<select
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
				bind:value={gSaleObj.state}
			>
				<option value="AL">AL</option>
				<option value="AK">AK</option>
				<option value="AR">AR</option>
				<option value="AZ">AZ</option>
				<option value="CA">CA</option>
				<option value="CO">CO</option>
				<option value="CT">CT</option>
				<option value="DC">DC</option>
				<option value="DE">DE</option>
				<option value="FL">FL</option>
				<option value="GA">GA</option>
				<option value="HI">HI</option>
				<option value="IA">IA</option>
				<option value="ID">ID</option>
				<option value="IL">IL</option>
				<option value="IN">IN</option>
				<option value="KS">KS</option>
				<option value="KY">KY</option>
				<option value="LA">LA</option>
				<option value="MA">MA</option>
				<option value="MD">MD</option>
				<option value="ME">ME</option>
				<option value="MI">MI</option>
				<option value="MN">MN</option>
				<option value="MO">MO</option>
				<option value="MS">MS</option>
				<option value="MT">MT</option>
				<option value="NC">NC</option>
				<option value="NE">NE</option>
				<option value="NH">NH</option>
				<option value="NJ">NJ</option>
				<option value="NM">NM</option>
				<option value="NV">NV</option>
				<option value="NY">NY</option>
				<option value="ND">ND</option>
				<option value="OH">OH</option>
				<option value="OK">OK</option>
				<option value="OR">OR</option>
				<option value="PA">PA</option>
				<option value="RI">RI</option>
				<option value="SC">SC</option>
				<option value="SD">SD</option>
				<option value="TN">TN</option>
				<option value="TX">TX</option>
				<option value="UT">UT</option>
				<option value="VT">VT</option>
				<option value="VA">VA</option>
				<option value="WA">WA</option>
				<option value="WI">WI</option>
				<option value="WV">WV</option>
				<option value="WY">WY</option>
			</select>
			<!-- <input
					bind:value={gSaleObj.state}
					type="text"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
					required
				/> -->
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
				bind:value={gSaleObj.desc}
				type="text"
				id="first_name"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
			/>
		</div>
	</div>

	{#if !$page.data.session}
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
					class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
					required
				/>
			</div>
			<label
				for="terms and conditions"
				class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
				>I agree with the <a
					href="/terms"
					class="text-green-600 hover:underline dark:text-green-400">terms and conditions</a
				>.</label
			>
		</div>

		<button
			on:click={handleLogin}
			value={loading ? 'Loading' : 'Send magic link'}
			disabled={loading}
			class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
			>Submit</button
		>
	{:else}
		<button
			on:click={submitSale}
			class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
			>Submit</button
		>
	{/if}
</div>
