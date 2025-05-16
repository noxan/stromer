<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen items-center justify-center bg-gray-50">
	{@render children()}
</div>
