<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PricingPackage } from '$lib/data/pricing';

	let { pkg }: { pkg: PricingPackage } = $props();
</script>

<article
	class={[
		'rounded-site flex flex-col border p-8 transition-shadow hover:shadow-lg md:p-10',
		pkg.highlighted
			? 'border-accent bg-white shadow-md'
			: 'border-cream-dark bg-cream/50'
	]}
>
	{#if pkg.highlighted}
		<p class="eyebrow mb-4">Most popular</p>
	{/if}

	<h3 class="heading-card">{pkg.name}</h3>
	<p class="text-price mt-2">{pkg.price}</p>
	<p class="text-body-muted mt-4 text-base">{pkg.description}</p>

	<ul class="mt-8 flex-1 space-y-3">
		{#each pkg.features as feature (feature)}
			<li class="text-body-muted flex items-start gap-3 text-base">
				<span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"></span>
				{feature}
			</li>
		{/each}
	</ul>

	<a
		href={resolve('/contact')}
		class={[pkg.highlighted ? 'btn-primary' : 'btn-outline', 'btn-block mt-10']}
	>
		Inquire
	</a>
</article>
