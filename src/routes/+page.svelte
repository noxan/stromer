<script lang="ts">
	import IconGithub from '$lib/icons/github.svelte';
	import IconLinkedIn from '$lib/icons/linkedin.svelte';
	import IconMedium from '$lib/icons/medium.svelte';
	import IconTwitter from '$lib/icons/twitter.svelte';

	const profiles = [
		{ url: 'https://www.linkedin.com/in/richard-stromer/', icon: IconLinkedIn, name: 'LinkedIn' },
		{ url: 'https://github.com/noxan', icon: IconGithub, name: 'GitHub' },
		{ url: 'https://twitter.com/richardstromer', icon: IconTwitter, name: 'Twitter' },
		{ url: 'https://medium.com/@richard.stromer', icon: IconMedium, name: 'Medium' }
	];
</script>

<svelte:head>
	<title>Richard Stromer</title>
	<meta name="description" content="Richard Stromer builds digital products." />
</svelte:head>

<main class="card">
	<picture>
		<source srcset="/me.webp" type="image/webp" />
		<img src="/me.jpg" width="160" height="160" alt="Richard Stromer" fetchpriority="high" />
	</picture>

	<section>
		<div class="identity">
			<h1>Richard Stromer</h1>
			<p>Builds digital products.</p>
		</div>
		<nav aria-label="Social profiles">
			{#each profiles as profile}
				<a href={profile.url} aria-label={profile.name} title={profile.name}>
					<profile.icon />
				</a>
			{/each}
		</nav>
	</section>
</main>

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(2rem, 6vw, 3rem);
		width: min(24rem, 100%, calc((100svh - 4rem) * 0.63));
		aspect-ratio: 54 / 85.6;
		padding: clamp(2rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 2.5rem);
		border: 1px solid light-dark(#d8ddd7, #2d3734);
		border-radius: 0.25rem;
		background: light-dark(#f8f9f6e8, #171d1be8);
		box-shadow: 0 1.5rem 4rem #0c17130b;
		container-type: inline-size;
		text-align: center;
	}

	.card::before {
		position: absolute;
		bottom: -1px;
		left: 50%;
		width: 4.5rem;
		height: 2px;
		background: #789188;
		content: '';
		transform: translateX(-50%);
	}

	img {
		display: block;
		border-radius: 0.25rem;
		filter: saturate(0.72) contrast(1.04);
		object-fit: cover;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.4rem, 9cqw, 2.25rem);
		font-weight: 500;
		line-height: 1.05;
		letter-spacing: -0.02em;
		white-space: nowrap;
	}

	p {
		margin: 0.65rem 0 0;
		color: light-dark(#66716d, #9ba8a3);
		font-size: 1rem;
		letter-spacing: 0.015em;
	}

	nav {
		display: flex;
		gap: 1.75rem;
		justify-content: center;
		margin-top: 2.5rem;
	}

	a {
		width: 1.5rem;
		color: light-dark(#66716d, #9ba8a3);
		transition: color 150ms, transform 150ms;
	}

	a:hover,
	a:focus-visible {
		color: light-dark(#18201f, #e7ecea);
		transform: translateY(-2px);
	}

	@media (max-width: 36rem) {
		.card {
			padding-block: 3rem;
		}
	}
</style>
