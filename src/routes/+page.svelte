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
	let mx = $state('50%');
	let my = $state('50%');

	function tilt(event: PointerEvent) {
		if (event.pointerType === 'touch' || matchMedia('(prefers-reduced-motion: reduce)').matches)
			return;
		const x = event.clientX / innerWidth - 0.5;
		const y = event.clientY / innerHeight - 0.5;
		rx = `${y * 2}deg`;
		ry = `${-x * 2}deg`;
		mx = `${(x + 0.5) * 100}%`;
		my = `${(y + 0.5) * 100}%`;
	}

	function resetTilt() {
		rx = ry = '0deg';
	}
</script>

<svelte:window onpointermove={tilt} onblur={resetTilt} />

<svelte:head>
	<title>Richard Stromer</title>
	<meta name="description" content="Richard Stromer builds digital products." />
</svelte:head>

<main class:open>
	<article class="card" style:--rx={rx} style:--ry={ry} style:--mx={mx} style:--my={my}>
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
		--rx: 0deg;
		--ry: 0deg;
		--mx: 50%;
		--my: 50%;
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
			opacity 400ms ease,
			border-color 500ms,
			background 500ms,
			box-shadow 220ms,
			transform 220ms ease-out;
		animation: invite 5s 2s infinite;
		transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry));
		transform-style: preserve-3d;
	}

	@keyframes invite {
		0%,
		76%,
		100% {
			transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) rotate(0);
		}
		80% {
			transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) rotate(-0.7deg)
				translateX(-2px);
		}
		84% {
			transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) rotate(0.7deg)
				translateX(2px);
		}
		88% {
			transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) rotate(-0.35deg)
				translateX(-1px);
		}
		92% {
			transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) rotate(0);
		}
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

	.card::after {
		position: absolute;
		z-index: 2;
		inset: 0;
		border-radius: inherit;
		background: radial-gradient(circle at var(--mx) var(--my), #fff8, transparent 38%);
		content: '';
		opacity: 0.08;
		pointer-events: none;
	}

	main:not(.open):hover .card {
		animation: none;
		box-shadow: 0 1.5rem 4rem #0c17132b;
		transform: perspective(60rem) translateY(-6px) rotateX(calc(var(--rx) * 1.8))
			rotateY(calc(var(--ry) * 1.8)) scale(1.01);
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
		left: 68%;
		width: min(36vw, 58svh);
		margin: 0;
		padding: 0.55rem;
		color: #282823;
		background: #f4f1e8;
		box-shadow: 0 1rem 3rem #0c171318;
		transform: perspective(60rem) translate(-50%, -50%) rotate(2deg) rotateX(var(--rx))
			rotateY(var(--ry));
		transform-style: preserve-3d;
		transition: transform 180ms ease-out;
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
		padding: 0.8rem 0.35rem 0.45rem;
		font-size: 0.78rem;
		letter-spacing: 0.02em;
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
		position: relative;
		display: block;
		width: max-content;
	}

	h2 span:last-child {
		margin-left: 8vw;
		color: light-dark(#eef0ec, #111514);
		-webkit-text-stroke: 1px light-dark(#18201f, #e7ecea);
		paint-order: stroke fill;
	}

	.spread nav {
		position: absolute;
		right: clamp(1.5rem, 4vw, 4rem);
		bottom: clamp(1.5rem, 4vw, 3rem);
		display: flex;
		gap: clamp(1rem, 2vw, 2rem);
	}

	.facts {
		position: absolute;
		bottom: clamp(1.5rem, 4vw, 3rem);
		left: clamp(1.5rem, 4vw, 4rem);
		display: flex;
		gap: clamp(1.5rem, 4vw, 4rem);
		align-items: baseline;
		font-size: 0.72rem;
	}

	.facts > span {
		color: light-dark(#66716d, #9ba8a3);
		letter-spacing: 0.1em;
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
		padding: 0.65rem 0.5rem;
		color: inherit;
		font-size: 0.75rem;
		text-decoration: none;
		transition:
			color 180ms,
			transform 180ms;
	}

	.spread a::after {
		position: absolute;
		right: 0;
		bottom: 0.25rem;
		left: 0;
		height: 1px;
		background: currentColor;
		content: '';
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.spread a:hover,
	.spread a:focus-visible {
		color: #789188;
		transform: translateY(-3px);
	}

	.spread a:hover::after,
	.spread a:focus-visible::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.spread a:active {
		transform: translateY(0) scale(0.94);
		transition-duration: 60ms;
	}

	.spread a :global(svg) {
		width: 1rem;
	}

	.open .card {
		opacity: 0;
		transform: perspective(60rem) rotateX(var(--rx)) rotateY(var(--ry)) scale(0.97);
		pointer-events: none;
		animation: none;
	}

	.open .spread {
		visibility: visible;
		opacity: 1;
		pointer-events: auto;
		transform: scale(1);
	}

	.open .spread > figure:hover {
		box-shadow: 0 1.5rem 4rem #0c17132b;
		transform: perspective(60rem) translate(-50%, calc(-50% - 6px)) rotate(2deg)
			rotateX(calc(var(--rx) * 1.8)) rotateY(calc(var(--ry) * 1.8)) scale(1.01);
	}

	@media (max-width: 42rem) {
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
			font-size: 0.62rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.spread {
			transition: none;
		}
	}
</style>
