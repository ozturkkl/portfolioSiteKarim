<script lang="ts">
	import CoupleSection from '$lib/components/CoupleSection.svelte';
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { media } from '$lib/data/media';
	import { site } from '$lib/data/site';

	let activeCategory = $state<string>('all');

	const nonCoupleCategories = $derived(
		media.portfolio.categories.filter((category) => category.id !== 'couples')
	);

	const filteredGalleryMedia = $derived(
		activeCategory === 'all'
			? media.portfolio.media
			: media.portfolio.media.filter((item) => item.category === activeCategory)
	);

	const showCouples = $derived(activeCategory === 'all' || activeCategory === 'couples');
	const showGallery = $derived(activeCategory === 'all' || activeCategory !== 'couples');
</script>

<svelte:head>
	<title>Portfolio — {site.name}</title>
</svelte:head>

<section class="page-section">
	<div class="container-wide">
		<SectionHeading
			eyebrow="Portfolio"
			title="A collection of stories"
			subtitle="Each image is a moment preserved — raw, honest, and full of feeling."
		/>

		<div class="mb-12 flex flex-wrap justify-center gap-4" role="tablist" aria-label="Filter gallery">
			<button
				type="button"
				role="tab"
				class={activeCategory === 'all' ? 'filter-tab-active' : 'filter-tab-inactive'}
				aria-selected={activeCategory === 'all'}
				onclick={() => (activeCategory = 'all')}
			>
				All
			</button>
			{#each media.portfolio.categories as category (category.id)}
				<button
					type="button"
					role="tab"
					class={activeCategory === category.id ? 'filter-tab-active' : 'filter-tab-inactive'}
					aria-selected={activeCategory === category.id}
					onclick={() => (activeCategory = category.id)}
				>
					{category.label}
				</button>
			{/each}
		</div>

		{#if showCouples}
			{#each media.portfolio.couples as couple (couple.id)}
				<CoupleSection {couple} />
			{/each}
		{/if}

		{#if showGallery}
			{#if activeCategory === 'all'}
				{#each nonCoupleCategories as category (category.id)}
					{@const categoryMedia = media.portfolio.media.filter(
						(item) => item.category === category.id
					)}
					{#if categoryMedia.length > 0}
						<section class="mb-20">
							<h2 class="heading-section mb-8 text-center">{category.label}</h2>
							<GalleryGrid media={categoryMedia} lightbox showCategory={false} />
						</section>
					{/if}
				{/each}
			{:else}
				<GalleryGrid media={filteredGalleryMedia} lightbox />
			{/if}
		{/if}
	</div>
</section>
