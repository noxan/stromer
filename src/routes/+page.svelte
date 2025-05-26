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

<div class="relative w-full">
	<!-- Floating decorative elements - minimal at start, fancy on hover -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<!-- Floating dots that appear on hover -->
		<div
			class="group-hover:animate-float absolute top-20 left-10 h-2 w-2 rounded-full bg-blue-400/20 opacity-0 transition-all duration-1000 group-hover:opacity-60 hover:opacity-60"
		></div>
		<div
			class="group-hover:animate-float absolute top-32 right-16 h-1 w-1 rounded-full bg-purple-400/30 opacity-0 transition-all delay-200 duration-1000 group-hover:opacity-70"
		></div>
		<div
			class="group-hover:animate-float absolute bottom-24 left-20 h-1.5 w-1.5 rounded-full bg-pink-400/25 opacity-0 transition-all delay-400 duration-1000 group-hover:opacity-50"
		></div>
		<div
			class="group-hover:animate-float absolute right-12 bottom-40 h-1 w-1 rounded-full bg-indigo-400/35 opacity-0 transition-all delay-600 duration-1000 group-hover:opacity-60"
		></div>
	</div>

	<main
		class="group relative mx-auto max-w-screen-md p-8 text-center transition-all duration-700 ease-out sm:rounded-3xl sm:text-left"
	>
		<!-- Multiple layered backgrounds for depth -->
		<!-- Base card -->
		<div
			class="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-sm transition-all duration-700 group-hover:bg-white/60 dark:bg-gray-800/40 dark:group-hover:bg-gray-800/60"
		></div>

		<!-- Secondary layer with border -->
		<div
			class="absolute inset-0 rounded-3xl border border-gray-200/50 transition-all duration-700 group-hover:border-gray-300/70 dark:border-gray-700/50 dark:group-hover:border-gray-600/70"
		></div>

		<!-- Glow effect layer -->
		<div
			class="absolute inset-0 rounded-3xl shadow-lg shadow-gray-200/30 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gray-300/40 dark:shadow-gray-900/30 dark:group-hover:shadow-gray-900/60"
		></div>

		<!-- Gradient overlay - hidden initially, reveals on hover -->
		<div
			class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 opacity-0 transition-all duration-1000 group-hover:from-blue-50/40 group-hover:to-purple-50/40 group-hover:opacity-100 dark:group-hover:from-blue-950/30 dark:group-hover:to-purple-950/30"
		></div>

		<!-- Fancy border shimmer effect -->
		<div
			class="absolute inset-0 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
		>
			<div
				class="group-hover:animate-shimmer absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-all duration-2000 group-hover:opacity-100"
			></div>
		</div>

		<div class="relative z-10">
			<div class="mb-8 flex flex-col items-center sm:flex-row sm:items-stretch">
				<div class="relative mb-6 sm:mr-8 sm:mb-0">
					<!-- Profile image with multiple effect layers -->
					<div class="relative">
						<!-- Outer ring that grows on hover -->
						<div
							class="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 transition-all duration-700 group-hover:animate-pulse group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:opacity-100"
						></div>

						<!-- Main image container -->
						<picture
							class="relative block aspect-square h-40 w-40 overflow-hidden rounded-full ring-4 ring-gray-100/80 transition-all duration-500 group-hover:shadow-xl group-hover:ring-8 group-hover:shadow-blue-200/30 group-hover:ring-blue-100/60 dark:ring-gray-700/80 dark:group-hover:ring-blue-900/50"
						>
							<source srcset="/me.webp" type="image/webp" />
							<source srcset="/me.jpg" type="image/jpeg" />
							<img
								src="/me.jpg"
								class="aspect-square h-40 w-40 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
								alt="profile of richard stromer"
							/>
						</picture>

						<!-- Floating glow effect -->
						<div
							class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/0 to-purple-400/0 opacity-0 transition-all duration-1000 group-hover:animate-pulse group-hover:from-blue-400/20 group-hover:to-purple-400/20 group-hover:opacity-100"
						></div>

						<!-- Particle effect around image -->
						<div
							class="absolute -inset-4 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
						>
							<div
								class="absolute top-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-400 opacity-0 transition-all duration-1000 group-hover:animate-ping group-hover:opacity-60"
							></div>
							<div
								class="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400 opacity-0 transition-all delay-300 duration-1000 group-hover:animate-ping group-hover:opacity-60"
							></div>
						</div>
					</div>
				</div>

				<div class="flex flex-1 flex-col justify-center space-y-3">
					<!-- Name with sophisticated gradient -->
					<h1
						class="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent transition-all duration-500 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 dark:group-hover:from-blue-400 dark:group-hover:via-purple-400 dark:group-hover:to-blue-400"
					>
						Richard Stromer
						<!-- Text shadow effect -->
						<div
							class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30"
						></div>
					</h1>

					<!-- Subtitle with enhanced styling -->
					<h2
						class="text-xl font-medium text-gray-600 transition-all duration-500 group-hover:tracking-wide group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-200"
					>
						Builds digital products.
					</h2>

					<!-- Animated underline with gradient -->
					<div class="relative h-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
						<div
							class="h-full w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out group-hover:w-full"
						></div>
					</div>
				</div>
			</div>

			<!-- Animated emoji section with enhanced effects -->
			<div class="mb-10 space-y-3">
				<div class="flex items-center justify-center space-x-3 sm:justify-start">
					<div class="relative">
						<span
							class="text-3xl transition-all duration-300 group-hover:scale-125 group-hover:animate-pulse"
							>🧑‍💻</span
						>
						<div
							class="absolute -inset-2 rounded-full bg-blue-400/0 transition-all duration-500 group-hover:animate-ping group-hover:bg-blue-400/20"
						></div>
					</div>
					<span class="text-xl text-gray-400 transition-all duration-300 group-hover:text-gray-600"
						>=</span
					>
					<div class="relative">
						<span
							class="text-3xl transition-all duration-300 group-hover:scale-125 group-hover:animate-bounce"
							>🚀</span
						>
						<div
							class="absolute -inset-2 rounded-full bg-purple-400/0 transition-all duration-700 group-hover:animate-ping group-hover:bg-purple-400/20"
						></div>
					</div>
				</div>
			</div>

			<!-- Enhanced social links -->
			<div class="flex flex-row justify-center space-x-8 sm:justify-start">
				{#each profiles as profile, index}
					<a
						class="group/icon relative transform transition-all duration-500 hover:scale-125"
						href={profile.url}
						title={profile.name}
						style="animation-delay: {index * 150}ms"
					>
						<!-- Background circle with gradient -->
						<div
							class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 transition-all duration-500 group-hover/icon:scale-150 group-hover/icon:opacity-100 dark:from-gray-700 dark:to-gray-600"
						></div>

						<!-- Icon container -->
						<div
							class="relative rounded-full p-4 text-gray-500 transition-all duration-500 group-hover/icon:text-blue-600 dark:text-gray-400 dark:group-hover/icon:text-blue-400"
						>
							<profile.icon />

							<!-- Glow effect -->
							<div
								class="absolute inset-0 rounded-full bg-blue-400/0 opacity-0 transition-all duration-500 group-hover/icon:animate-pulse group-hover/icon:bg-blue-400/20 group-hover/icon:opacity-100"
							></div>
						</div>

						<!-- Enhanced tooltip -->
						<div
							class="absolute -top-16 left-1/2 -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover/icon:opacity-100"
						>
							<div
								class="rounded-xl bg-gray-900/90 px-3 py-2 text-sm text-white shadow-xl backdrop-blur-sm dark:bg-gray-100/90 dark:text-gray-900"
							>
								{profile.name}
								<div
									class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-gray-900/90 dark:bg-gray-100/90"
								></div>
							</div>
						</div>

						<!-- Floating particles on hover -->
						<div
							class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/icon:opacity-100"
						>
							<div
								class="absolute -top-1 -right-1 h-1 w-1 animate-ping rounded-full bg-blue-400"
							></div>
							<div
								class="absolute -bottom-1 -left-1 h-1 w-1 animate-ping rounded-full bg-purple-400"
								style="animation-delay: 200ms"
							></div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</main>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(200%);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	main {
		animation: fadeInUp 1s ease-out;
	}

	.animate-shimmer {
		animation: shimmer 3s ease-in-out infinite;
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}

	/* Progressive enhancement - fancy effects only show on capable devices */
	@media (prefers-reduced-motion: no-preference) {
		.group:hover .animate-pulse {
			animation-duration: 2s;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}
</style>
