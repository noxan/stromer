<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
>
	<!-- Subtle animated background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div
			class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20"
		></div>
		<div
			class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-100/30 to-pink-100/30 blur-3xl dark:from-purple-900/20 dark:to-pink-900/20"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-50/20 to-purple-50/20 blur-3xl dark:from-blue-950/30 dark:to-purple-950/30"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 w-full">
		{@render children()}
	</div>
</div>
