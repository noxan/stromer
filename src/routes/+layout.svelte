<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
>
	<!-- Multiple layered background effects -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Primary ambient orbs -->
		<div
			class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-3xl transition-all duration-[10s] ease-in-out hover:scale-110 dark:from-blue-900/10 dark:to-purple-900/10"
		></div>
		<div
			class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-100/20 to-pink-100/20 blur-3xl transition-all duration-[12s] ease-in-out hover:scale-110 dark:from-purple-900/10 dark:to-pink-900/10"
		></div>

		<!-- Central floating orb -->
		<div
			class="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-50/15 to-purple-50/15 blur-3xl transition-all duration-[15s] ease-in-out hover:scale-125 dark:from-blue-950/20 dark:to-purple-950/20"
		></div>

		<!-- Secondary smaller orbs that move on page hover -->
		<div
			class="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-100/25 to-blue-100/25 opacity-0 blur-2xl transition-all duration-[8s] ease-out hover:opacity-100 dark:from-cyan-900/15 dark:to-blue-900/15"
		></div>
		<div
			class="absolute right-20 bottom-32 h-24 w-24 rounded-full bg-gradient-to-tr from-pink-100/30 to-rose-100/30 opacity-0 blur-2xl transition-all duration-[6s] ease-out hover:opacity-100 dark:from-pink-900/15 dark:to-rose-900/15"
		></div>
		<div
			class="absolute top-32 right-32 h-20 w-20 rounded-full bg-gradient-to-bl from-violet-100/35 to-purple-100/35 opacity-0 blur-xl transition-all duration-[7s] ease-out hover:opacity-100 dark:from-violet-900/20 dark:to-purple-900/20"
		></div>

		<!-- Animated gradient mesh -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/5 to-transparent opacity-0 transition-opacity duration-[20s] ease-in-out hover:opacity-100 dark:via-blue-950/10"
		></div>

		<!-- Floating particles -->
		<div
			class="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-blue-400/40 opacity-0 transition-all duration-[5s] ease-in-out hover:animate-pulse hover:opacity-60"
		></div>
		<div
			class="absolute top-3/4 right-1/4 h-1 w-1 rounded-full bg-purple-400/40 opacity-0 transition-all duration-[6s] ease-in-out hover:animate-pulse hover:opacity-60"
		></div>
		<div
			class="absolute top-1/2 right-1/3 h-0.5 w-0.5 rounded-full bg-pink-400/50 opacity-0 transition-all duration-[7s] ease-in-out hover:animate-pulse hover:opacity-70"
		></div>
	</div>

	<!-- Interactive overlay that responds to mouse proximity -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-all duration-1000 hover:from-blue-50/10 hover:via-purple-50/5 hover:to-pink-50/10 hover:opacity-100 dark:hover:from-blue-950/10 dark:hover:via-purple-950/5 dark:hover:to-pink-950/10"
	></div>

	<!-- Content wrapper with enhanced backdrop -->
	<div
		class="relative z-10 w-full backdrop-blur-[0.5px] transition-all duration-1000 hover:backdrop-blur-sm"
	>
		{@render children()}
	</div>
</div>

<style>
	/* Ambient animations for background elements */
	@keyframes ambientFloat {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.3;
		}
		25% {
			transform: translate(10px, -10px) scale(1.05);
			opacity: 0.4;
		}
		50% {
			transform: translate(-5px, -20px) scale(0.95);
			opacity: 0.5;
		}
		75% {
			transform: translate(-10px, 10px) scale(1.02);
			opacity: 0.4;
		}
	}

	@keyframes ambientPulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.2;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.4;
		}
	}

	/* Apply ambient animations to background elements */
	div:hover .absolute:nth-child(1) {
		animation: ambientFloat 20s ease-in-out infinite;
	}

	div:hover .absolute:nth-child(2) {
		animation: ambientFloat 25s ease-in-out infinite reverse;
	}

	div:hover .absolute:nth-child(3) {
		animation: ambientPulse 15s ease-in-out infinite;
	}

	/* Subtle background breathing effect */
	@media (prefers-reduced-motion: no-preference) {
		div {
			animation: backgroundBreathe 30s ease-in-out infinite;
		}
	}

	@keyframes backgroundBreathe {
		0%,
		100% {
			background-size: 100% 100%;
		}
		50% {
			background-size: 110% 110%;
		}
	}
</style>
