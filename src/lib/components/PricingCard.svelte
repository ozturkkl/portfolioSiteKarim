<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';
	import type { PricingPackage } from '$lib/data/pricing';

	let {
		pkg,
		active = false
	}: {
		pkg: PricingPackage;
		active?: boolean;
	} = $props();
</script>

<article
	class={[
		'rounded-site flex h-full flex-col border bg-white p-6 transition-[border-color,box-shadow] duration-300 md:p-8 xl:p-12',
		active ? 'border-accent shadow-md' : 'border-ink/20'
	]}
>
	<h3 class="heading-card xl:text-5xl">{pkg.name}</h3>
	<p class="text-price mt-2 xl:mt-3 xl:text-6xl">{pkg.price}</p>
	<p class="text-body-muted mt-3 text-base md:mt-4 xl:mt-5 xl:text-lg">{pkg.description}</p>

	<ul class="mt-6 flex-1 space-y-2.5 md:mt-8 md:space-y-3 xl:mt-10 xl:space-y-4">
		{#each pkg.features as feature (feature)}
			<li class="text-body-muted flex items-start gap-2.5 text-base md:gap-3 xl:gap-4 xl:text-lg">
				<span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent xl:mt-2"></span>
				{feature}
			</li>
		{/each}
	</ul>

	<Button href={`${resolve('/contact')}?package=${pkg.id}`} block class="mt-8 md:mt-10 xl:mt-12">Inquire</Button>
</article>
