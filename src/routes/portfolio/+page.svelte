<script lang="ts">
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { galleryCategories, galleryImages, type GalleryImage } from '$lib/data/gallery';
	import { site } from '$lib/data/site';

	let activeCategory = $state<string>('all');

	const filteredImages = $derived<GalleryImage[]>(
		activeCategory === 'all'
			? galleryImages
			: galleryImages.filter((img) => img.category === activeCategory)
	);
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
			{#each galleryCategories as category (category.id)}
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

		<GalleryGrid images={filteredImages} />
	</div>
</section>
