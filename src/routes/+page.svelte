<script lang="ts">
	import IconLinkedIn from '$lib/icons/linkedin.svelte';
	import IconGithub from '$lib/icons/github.svelte';
	import IconTwitter from '$lib/icons/twitter.svelte';
	import IconMedium from '$lib/icons/medium.svelte';

	const profiles = [
		{ url: 'https://www.linkedin.com/in/richard-stromer/', icon: IconLinkedIn, name: 'LinkedIn' },
		{ url: 'https://github.com/noxan', icon: IconGithub, name: 'GitHub' },
		{ url: 'https://twitter.com/richardstromer', icon: IconTwitter, name: 'Twitter' },
		{ url: 'https://medium.com/@richard.stromer', icon: IconMedium, name: 'Medium' }
	];
</script>

<main
	class="group mx-auto max-w-screen-md p-8 text-center transition-all duration-700 ease-out sm:rounded-2xl sm:bg-white/80 sm:text-left sm:shadow-xl sm:ring-1 sm:shadow-gray-200/50 sm:ring-gray-200/50 sm:backdrop-blur-sm sm:hover:shadow-2xl sm:hover:shadow-gray-300/30 sm:dark:bg-gray-800/80 sm:dark:shadow-gray-900/30 sm:dark:ring-gray-700/50 sm:dark:hover:shadow-gray-900/50"
>
	<!-- Subtle gradient overlay -->
	<div
		class="absolute inset-0 hidden rounded-2xl bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:block dark:from-blue-950/20 dark:to-purple-950/20"
	></div>

	<div class="relative z-10">
		<div class="mb-6 flex flex-col items-center sm:flex-row sm:items-stretch">
			<div class="relative mb-4 sm:mr-6 sm:mb-0">
				<picture
					class="block aspect-square h-36 w-36 overflow-hidden rounded-full ring-4 ring-gray-100 transition-all duration-500 hover:ring-8 hover:ring-blue-100 dark:ring-gray-700 dark:hover:ring-blue-900/50"
				>
					<source srcset="/me.webp" type="image/webp" />
					<source srcset="/me.jpg" type="image/jpeg" />
					<img
						src="/me.jpg"
						class="aspect-square h-36 w-36 object-cover transition-transform duration-500 hover:scale-105"
						alt="profile of richard stromer"
					/>
				</picture>
				<!-- Subtle glow effect -->
				<div
					class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 transition-opacity duration-500 hover:opacity-100"
				></div>
			</div>

			<div class="flex flex-col justify-center space-y-2">
				<h1
					class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent transition-all duration-300 hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 dark:hover:from-blue-400 dark:hover:via-purple-400 dark:hover:to-blue-400"
				>
					Richard Stromer
				</h1>
				<h2
					class="text-xl font-medium text-gray-600 transition-colors duration-300 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
				>
					Builds digital products.
				</h2>
				<!-- Animated underline -->
				<div
					class="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"
				></div>
			</div>
		</div>

		<div class="mb-8 space-y-2">
			<div class="flex items-center justify-center space-x-2 sm:justify-start">
				<span class="animate-pulse text-2xl">🧑‍💻</span>
				<span class="text-gray-400">=</span>
				<span class="animate-bounce text-2xl">🚀</span>
			</div>
		</div>

		<div class="flex flex-row justify-center space-x-6 sm:justify-start">
			{#each profiles as profile, index}
				<a
					class="group/icon relative transform fill-current text-gray-500 transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
					href={profile.url}
					title={profile.name}
					style="animation-delay: {index * 100}ms"
				>
					<div
						class="rounded-full p-3 transition-all duration-300 group-hover/icon:bg-blue-50 group-hover/icon:shadow-lg dark:group-hover/icon:bg-blue-950/30"
					>
						<profile.icon />
					</div>
					<!-- Tooltip -->
					<div
						class="absolute -top-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover/icon:opacity-100 dark:bg-gray-100 dark:text-gray-900"
					>
						{profile.name}
						<div
							class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-gray-900 dark:bg-gray-100"
						></div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	main {
		animation: fadeInUp 0.8s ease-out;
	}
</style>
