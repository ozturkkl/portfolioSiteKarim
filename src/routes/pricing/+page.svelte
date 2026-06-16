<script lang="ts">
	import { resolve } from '$app/paths';
	import PricingCard from '$lib/components/PricingCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { pricingPackages } from '$lib/data/pricing';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>Pricing — {site.name}</title>
</svelte:head>

<section class="page-section">
	<div class="container-wide">
		<SectionHeading
			eyebrow="Pricing"
			title="Packages & pricing"
			subtitle="Every session is tailored to you. Choose a starting point, and we'll craft something beautiful together."
		/>

		<div class="grid gap-6 md:grid-cols-3">
			{#each pricingPackages as pkg (pkg.id)}
				<PricingCard {pkg} />
			{/each}
		</div>

		<div class="mx-auto mt-16 max-w-3xl text-center">
			<p class="text-body-muted">
				Custom packages available for weddings, elopements, and commercial work.
				<a href={resolve('/contact')} class="link-accent">Get in touch</a>
				to discuss your vision.
			</p>
		</div>
	</div>
</section>
