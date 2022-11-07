<script lang="ts">
	export let place: string;
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen ">
		<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img
				class="w-12 h-12 mr-1"
				src="https://pub-e258ac947ad34755ae66487725c77d71.r2.dev/logo-web.svg"
								alt="logo"
			/>
			Garage Sale Near Me
		</a>
		<div
			class="w-full flex flex-col bg-white rounded-lg shadow dark:border  items-center md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-2 sm:p-8 items-center flex flex-col">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white items-center lg:mb-5"
				>
					I see what you are doing... 😉😉😉😉
				</h1>
				<h2
					class=" text-base font-bold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white"
				>
					You will need <a
						href="/signin"
						class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						>Sign in</a
					>
					first {place}
				</h2>
				<form class="space-y-4 md:space-y-6" />
			</div>
		</div>
	</div>
</section>
