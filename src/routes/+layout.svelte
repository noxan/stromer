<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
	{@render children()}
</div>
