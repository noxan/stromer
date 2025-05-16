<script lang="ts">
	import IconLinkedIn from '$lib/icons/linkedin.svelte';
	import IconGithub from '$lib/icons/github.svelte';
	import IconTwitter from '$lib/icons/twitter.svelte';
	import IconMedium from '$lib/icons/medium.svelte';

	const profiles = [
		{ url: 'https://www.linkedin.com/in/richard-stromer/', icon: IconLinkedIn },
		{ url: 'https://github.com/noxan', icon: IconGithub },
		{ url: 'https://twitter.com/richardstromer', icon: IconTwitter },
		{ url: 'https://medium.com/@richard.stromer', icon: IconMedium }
	];
</script>

<main
	class="mx-auto max-w-screen-md p-6 text-center sm:rounded-lg sm:bg-white sm:text-left sm:shadow-md sm:ring-1 sm:ring-gray-100 sm:dark:bg-gray-800 sm:dark:ring-gray-700"
>
	<div class="mb-3 flex flex-col items-center sm:flex-row sm:items-stretch">
		<picture class="mb-3 aspect-square h-32 w-32 rounded-full sm:mr-5">
			<source srcset="/me.webp" type="image/webp" />
			<source srcset="/me.jpg" type="image/jpeg" />
			<img
				src="/me.jpg"
				class="mb-3 aspect-square h-32 w-32 rounded-full sm:mr-5"
				alt="profile of richard stromer"
			/>
		</picture>
		<div class="flex flex-col justify-center">
			<h1 class="mb-1 text-4xl text-gray-900 dark:text-gray-100">Richard Stromer</h1>
			<h2 class="mb-2 text-xl text-gray-600 dark:text-gray-400">
				Entrepreneur and digital product manager.
			</h2>
		</div>
	</div>
	<p class="mb-6 text-lg text-gray-600 dark:text-gray-400">
		Enthusiastic about building excellent digital products 🧑‍💻=🚀
	</p>
	<div class="flex flex-row justify-center sm:justify-start">
		{#each profiles as profile}
			<a
				class="fill-current pr-4 text-gray-600 transition hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200"
				href={profile.url}
			>
				<profile.icon />
			</a>
		{/each}
	</div>
</main>
