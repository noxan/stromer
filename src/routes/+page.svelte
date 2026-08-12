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

	let open = $state(false);
</script>

<svelte:head>
	<title>Richard Stromer</title>
	<meta name="description" content="Richard Stromer builds digital products." />
</svelte:head>

<main class:open>
	<article class="card">
		<button class="expand" onclick={() => (open = true)} aria-label="Open profile"></button>
		<picture>
			<source srcset="/me.webp" type="image/webp" />
			<img src="/me.jpg" width="160" height="160" alt="Richard Stromer" fetchpriority="high" />
		</picture>

		<section>
			<div class="card-identity">
				<h1><span>Richard</span> <span>Stromer</span></h1>
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
	</article>

	<div class="spread" aria-hidden={!open}>
		<picture>
			<source srcset="/me.webp" type="image/webp" />
			<img src="/me.jpg" width="480" height="480" alt="" />
		</picture>
		<div class="spread-identity">
			<h2><span>Richard</span><span>Stromer</span></h2>
			<p>Builds digital products.</p>
		</div>
		<nav aria-label="Social profiles">
			{#each profiles as profile}
				<a href={profile.url} tabindex={open ? 0 : -1}>
					<profile.icon /><span>{profile.name}</span>
				</a>
			{/each}
		</nav>
	</div>
</main>

<style>
	:global(.page) {
		display: grid;
		padding: 2rem;
	}

	main {
		position: relative;
		width: min(24rem, 100%, calc((100svh - 4rem) * 0.63));
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(2rem, 6vw, 3rem);
		width: 100%;
		aspect-ratio: 54 / 85.6;
		padding: clamp(2rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 2.5rem);
		border: 1px solid light-dark(#d8ddd7, #2d3734);
		border-radius: 0.25rem;
		background: light-dark(#f8f9f6e8, #171d1be8);
		box-shadow: 0 1.5rem 4rem #0c17130b;
		container-type: inline-size;
		text-align: center;
		transition:
			border-color 500ms,
			background 500ms,
			box-shadow 500ms;
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
		transition: opacity 250ms;
	}

	.expand {
		position: absolute;
		z-index: 1;
		inset: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	img {
		display: block;
		border-radius: 0.25rem;
		filter: saturate(0.8) contrast(1.03);
		object-fit: cover;
	}

	.card > picture,
	.card > section {
		position: relative;
		z-index: 2;
	}

	.card > picture,
	.card h1 span,
	.card p,
	.card nav {
		transition:
			opacity 400ms,
			filter 500ms,
			transform 700ms cubic-bezier(0.76, 0, 0.24, 1);
	}

	.card section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card h1 {
		margin: 0;
		font-size: clamp(1.4rem, 9cqw, 2.25rem);
		font-weight: 500;
		line-height: 1.05;
		letter-spacing: -0.02em;
		white-space: nowrap;
	}

	.card h1 span {
		display: inline-block;
	}

	.card p {
		margin: 0.65rem 0 0;
		color: light-dark(#66716d, #9ba8a3);
		font-size: 1rem;
		letter-spacing: 0.015em;
	}

	.card nav {
		position: relative;
		z-index: 3;
		display: flex;
		gap: 1.75rem;
		justify-content: center;
		margin-top: 2.5rem;
	}

	.card a {
		display: block;
		width: 1.5rem;
		color: light-dark(#66716d, #9ba8a3);
		transition:
			color 150ms,
			transform 150ms;
	}

	.card a:hover,
	.card a:focus-visible {
		color: light-dark(#18201f, #e7ecea);
		transform: translateY(-2px);
	}

	.spread {
		position: fixed;
		z-index: 4;
		inset: 0;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	.spread > picture {
		position: absolute;
		top: 50%;
		left: 68%;
		width: min(36vw, 58svh);
		aspect-ratio: 1;
		transform: translate(-50%, -50%) rotate(2deg);
	}

	.spread img {
		width: 100%;
		height: 100%;
	}

	.spread-identity {
		position: absolute;
		top: 50%;
		left: clamp(2rem, 7vw, 8rem);
		max-width: calc(100vw - clamp(4rem, 14vw, 16rem));
		transform: translateY(-50%);
	}

	h2 {
		margin: 0;
		font-size: clamp(4rem, 12vw, 11rem);
		font-weight: 500;
		line-height: 0.78;
		letter-spacing: -0.065em;
	}

	h2 span {
		display: block;
	}

	h2 span:last-child {
		margin-left: 8vw;
		color: light-dark(#eef0ec, #111514);
		-webkit-text-stroke: 1px light-dark(#18201f, #e7ecea);
		paint-order: stroke fill;
	}

	.spread-identity p {
		margin: clamp(2rem, 5vw, 4rem) 0 0;
		font-size: clamp(1rem, 1.5vw, 1.25rem);
	}

	.spread nav {
		position: absolute;
		right: clamp(1.5rem, 4vw, 4rem);
		bottom: clamp(1.5rem, 4vw, 3rem);
		display: flex;
		gap: clamp(1rem, 2vw, 2rem);
	}

	.spread a {
		display: flex;
		gap: 0.45rem;
		align-items: center;
		color: inherit;
		font-size: 0.75rem;
		text-decoration: none;
	}

	.spread a :global(svg) {
		width: 1rem;
	}

	.open .card {
		border-color: transparent;
		background: transparent;
		box-shadow: none;
		pointer-events: none;
	}

	.open .card::before {
		opacity: 0;
	}
	.open .card > picture {
		opacity: 0;
		filter: blur(8px);
		transform: translate(38vw, -32vh) rotate(14deg) scale(0.7);
	}
	.open .card h1 span:first-child {
		opacity: 0;
		filter: blur(6px);
		transform: translate(-38vw, 12vh) rotate(-8deg);
	}
	.open .card h1 span:last-child {
		opacity: 0;
		filter: blur(6px);
		transform: translate(34vw, 20vh) rotate(7deg);
	}
	.open .card p {
		opacity: 0;
		filter: blur(4px);
		transform: translateY(28vh);
	}
	.open .card nav {
		opacity: 0;
		filter: blur(4px);
		transform: translate(30vw, 34vh);
	}

	.open .spread {
		visibility: visible;
		opacity: 1;
		pointer-events: auto;
	}

	.open .spread > picture {
		animation: rebuild-image 900ms 300ms both cubic-bezier(0.22, 1, 0.36, 1);
	}
	.open h2 span:first-child {
		animation: rebuild-left 750ms 450ms both cubic-bezier(0.22, 1, 0.36, 1);
	}
	.open h2 span:last-child {
		animation: rebuild-right 750ms 560ms both cubic-bezier(0.22, 1, 0.36, 1);
	}
	.open .spread-identity p,
	.open .spread nav {
		animation: rebuild-up 600ms 700ms both cubic-bezier(0.22, 1, 0.36, 1);
	}

	@keyframes rebuild-image {
		from {
			opacity: 0;
			filter: blur(12px);
			transform: translate(-5%, -85%) rotate(14deg) scale(0.6);
		}
	}

	@keyframes rebuild-left {
		from {
			opacity: 0;
			filter: blur(10px);
			transform: translateX(-30vw) rotate(-6deg);
		}
	}

	@keyframes rebuild-right {
		from {
			opacity: 0;
			filter: blur(10px);
			transform: translateX(30vw) rotate(6deg);
		}
	}

	@keyframes rebuild-up {
		from {
			opacity: 0;
			filter: blur(6px);
			transform: translateY(4rem);
		}
	}

	@media (max-width: 42rem) {
		.spread > picture {
			top: 34%;
			left: 68%;
			width: 58vw;
		}
		.spread-identity {
			top: 59%;
			left: 1.25rem;
			max-width: calc(100vw - 2.5rem);
		}
		h2 {
			font-size: clamp(4rem, 20vw, 6.5rem);
		}
		h2 span:last-child {
			margin: 0.12em 0 0 4vw;
		}
		.spread nav {
			right: 1.25rem;
			bottom: 1.25rem;
			gap: 1rem;
		}
		.spread a {
			font-size: 0.65rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.spread {
			transition: none;
		}

		.open .spread > picture,
		.open h2 span,
		.open .spread-identity p,
		.open .spread nav {
			animation: none;
		}
	}
</style>
