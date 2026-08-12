<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="page">{@render children()}</div>
