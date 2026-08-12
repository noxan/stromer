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
	let rx = $state('0deg');
	let ry = $state('0deg');
	let socialHover = false;

	function tilt(event: PointerEvent) {
		if (socialHover) return;
		if (event.pointerType === 'touch' || matchMedia('(prefers-reduced-motion: reduce)').matches)
			return;
		rx = `${(event.clientY / innerHeight - 0.5) * 2}deg`;
		ry = `${-(event.clientX / innerWidth - 0.5) * 2}deg`;
	}
</script>

<svelte:window onpointermove={tilt} onblur={() => (rx = ry = '0deg')} />

<svelte:head>
	<title>Richard Stromer</title>
	<meta name="description" content="Richard Stromer builds digital products." />
</svelte:head>

<main class:open>
	<article class="card" style:--rx={rx} style:--ry={ry}>
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
			<nav
				aria-label="Social profiles"
				onpointerenter={() => (socialHover = true)}
				onpointerleave={() => (socialHover = false)}
			>
				{#each profiles as profile (profile.url)}
					<a href={profile.url} aria-label={profile.name} title={profile.name}>
						<profile.icon />
					</a>
				{/each}
			</nav>
		</section>
	</article>

	<div class="spread" aria-hidden={!open}>
		<figure style:--rx={rx} style:--ry={ry}>
			<button class="close" onclick={() => (open = false)} aria-label="Close profile"></button>
			<picture>
				<source srcset="/me.webp" type="image/webp" />
				<img src="/me.jpg" width="480" height="480" alt="" />
			</picture>
			<figcaption>Builds digital products.</figcaption>
		</figure>
		<div class="spread-identity">
			<h2><span>Richard</span><span>Stromer</span></h2>
		</div>
		<aside class="facts">
			<span>About</span>
			<ul>
				<li>Applied AI systems</li>
				<li>Product & engineering leadership</li>
				<li>Founder <small>(Forbes U30)</small></li>
			</ul>
		</aside>
		<nav
			aria-label="Social profiles"
			onpointerenter={() => (socialHover = true)}
			onpointerleave={() => (socialHover = false)}
		>
			{#each profiles as profile (profile.url)}
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
		--text-body: 0.75rem;
		--text-title: clamp(1.4rem, 9cqw, 2.25rem);
		--text-display: clamp(4rem, 10vw, 9rem);
		position: relative;
		width: min(24rem, 100%, calc((100svh - 4rem) * 0.63));
		font-size: var(--text-body);
		font-weight: 400;
	}

	.card {
		--rx: 0deg;
		--ry: 0deg;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
		width: 100%;
		aspect-ratio: 54 / 85.6;
		padding: 0;
		border: 0;
		border-radius: 0.4rem;
		background: var(--surface);
		box-shadow: 0 2.5rem 5rem var(--shadow);
		overflow: hidden;
		container-type: inline-size;
		text-align: left;
		transition:
			opacity 400ms ease,
			box-shadow 220ms,
			transform 220ms ease-out;
		transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry));
		transform-style: preserve-3d;
	}

	.card::after {
		position: absolute;
		inset: 0;
		background: linear-gradient(115deg, transparent 35%, rgb(255 255 255 / 8%), transparent 65%);
		content: '';
		pointer-events: none;
	}

	main:not(.open):hover .card {
		box-shadow: 0 1.25rem 3rem var(--shadow);
		transform: perspective(60rem) translateY(-2px) rotateX(calc(var(--rx) * 1.35))
			rotateY(calc(var(--ry) * 1.35));
	}

	.expand {
		position: absolute;
		z-index: 3;
		inset: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	img {
		display: block;
		border-radius: 0.2rem;
		filter: saturate(0.82) contrast(1.02) brightness(0.98);
		object-fit: cover;
	}

	.card > picture {
		flex: 1;
		overflow: hidden;
	}

	.card > picture img {
		width: 100%;
		height: 100%;
		border-radius: 0;
		object-position: center 35%;
	}

	.card > picture,
	.card > section {
		position: relative;
		z-index: 2;
	}

	.card section {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: flex-start;
		padding: clamp(1.5rem, 8cqw, 2.75rem);
		color: #f5f5f2;
		background: #242424;
	}

	.card h1 {
		margin: 0;
		font-size: var(--text-title);
		font-weight: 500;
		line-height: 1.05;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.card h1 span {
		display: block;
	}

	.card p {
		margin: 0.8rem 0 0;
		color: #aaa;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.card nav {
		position: relative;
		z-index: 4;
		display: flex;
		gap: 1.4rem;
		justify-content: flex-start;
		margin-top: 2rem;
	}

	.card a {
		display: block;
		width: 1.5rem;
		color: #aaa;
		transition:
			color 150ms,
			transform 150ms ease;
	}

	.card a:hover,
	.card a:focus-visible {
		color: #fff;
		transform: scale(1.05);
	}

	.card a:active {
		transform: scale(0.96);
	}

	.spread {
		position: fixed;
		z-index: 4;
		inset: 0;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transform: scale(0.98);
		transition:
			opacity 400ms ease,
			transform 400ms ease,
			visibility 400ms;
	}

	.spread > figure {
		--rx: 0deg;
		--ry: 0deg;
		position: absolute;
		top: 50%;
		left: 74%;
		width: min(32vw, 58svh);
		margin: 0;
		padding: 0;
		border: 0;
		border-radius: 0.4rem;
		color: #f5f5f2;
		background: var(--surface);
		box-shadow: 0 1rem 3rem var(--shadow);
		overflow: hidden;
		transform: perspective(60rem) translate(-50%, -50%) rotateX(var(--rx)) rotateY(var(--ry));
		transform-style: preserve-3d;
		transition:
			box-shadow 180ms,
			transform 180ms ease-out;
	}

	.close {
		position: absolute;
		z-index: 3;
		inset: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.spread figure picture {
		display: block;
	}

	.spread figure img {
		width: 100%;
		height: auto;
		border-radius: 0;
		object-fit: contain;
	}

	figcaption {
		padding: 1.2rem 1.4rem;
		background: #242424;
		letter-spacing: 0.14em;
		text-transform: uppercase;
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
		font-size: var(--text-display);
		font-weight: 500;
		line-height: 0.85;
		letter-spacing: -0.04em;
	}

	h2 span {
		position: relative;
		display: block;
		width: max-content;
	}

	h2 span:last-child {
		margin-left: 8vw;
		color: var(--accent);
	}

	.spread nav {
		position: absolute;
		right: clamp(1.5rem, 4vw, 4rem);
		bottom: clamp(1rem, 2.5vw, 2rem);
		display: flex;
		gap: clamp(1rem, 2vw, 2rem);
		align-items: center;
	}

	.facts {
		position: absolute;
		bottom: clamp(1rem, 2.5vw, 2rem);
		left: clamp(1.5rem, 4vw, 4rem);
		display: flex;
		gap: clamp(1.5rem, 4vw, 4rem);
		min-height: 2.3rem;
		align-items: center;
	}

	.facts > span {
		color: var(--muted);
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.facts ul {
		display: flex;
		gap: clamp(1rem, 2vw, 2rem);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.spread a {
		position: relative;
		display: flex;
		gap: 0.45rem;
		align-items: center;
		height: 2.3rem;
		padding: 0 0.5rem;
		color: inherit;
		text-decoration: none;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition:
			color 150ms,
			transform 150ms ease;
	}

	.spread a:hover,
	.spread a:focus-visible {
		color: var(--accent);
		transform: scale(1.03);
	}

	.spread a:active {
		transform: scale(0.97);
	}

	.spread a :global(svg) {
		width: 1rem;
	}

	small {
		font-size: inherit;
	}

	.open .card {
		opacity: 0;
		transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) scale(0.98);
		pointer-events: none;
	}

	.open .spread {
		visibility: visible;
		opacity: 1;
		pointer-events: auto;
		transform: scale(1);
	}

	.open .spread > figure:hover {
		box-shadow: 0 1.25rem 3rem var(--shadow);
		transform: perspective(60rem) translate(-50%, calc(-50% - 2px)) rotateX(calc(var(--rx) * 1.35))
			rotateY(calc(var(--ry) * 1.35));
	}

	@media (max-width: 42rem) {
		main {
			--text-display: clamp(4rem, 20vw, 6.5rem);
		}
		.spread > figure {
			top: 34%;
			left: 68%;
			width: 58vw;
		}
		.spread-identity {
			top: 59%;
			left: 1.25rem;
			max-width: calc(100vw - 2.5rem);
		}
		h2 span:last-child {
			margin: 0.12em 0 0 4vw;
		}
		.spread nav {
			right: 1.25rem;
			bottom: 1.25rem;
			gap: 1rem;
		}
		.facts {
			bottom: 4.5rem;
			left: 1.25rem;
			display: block;
		}
		.facts > span {
			display: block;
			margin-bottom: 0.5rem;
		}
		.facts ul {
			gap: 0.8rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.spread {
			transition: none;
		}
	}
</style>
