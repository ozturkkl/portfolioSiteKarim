<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<section id="hero" class="relative h-svh w-full overflow-hidden bg-black" aria-label="Landing">
	<img
		src={site.hero.image}
		alt=""
		class="hero-image absolute inset-0 h-full w-full object-cover"
		loading="eager"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-black/20"></div>

	<h1 class="hero-headline heading-hero absolute inset-0 flex items-center justify-center px-5 text-center sm:px-8">
		{site.heroHeadline}
	</h1>
</section>

<style>
	.hero-image {
		filter: grayscale(100%);
		transform: scale(1.08);
		animation: drift 18s ease-in-out infinite alternate;
	}

	.hero-headline {
		font-size: clamp(1.625rem, 5vw, 4rem);
		font-weight: 400;
		line-height: 1.15;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	@media (min-width: 640px) {
		.hero-headline {
			letter-spacing: 0.06em;
		}
	}

	@keyframes drift {
		from {
			transform: scale(1.08) translateX(-1%);
		}
		to {
			transform: scale(1.12) translateX(1%);
		}
	}
</style>
