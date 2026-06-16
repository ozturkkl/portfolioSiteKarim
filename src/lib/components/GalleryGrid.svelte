<script lang="ts">
	import Lightbox from '$lib/components/Lightbox.svelte';
	import MediaThumb from '$lib/components/MediaThumb.svelte';
	import type { GalleryMedia, MediaAsset } from '$lib/types/media';
	import { isVideo } from '$lib/types/media';

	let {
		media,
		showCategory = true,
		lightbox = false
	}: {
		media: Array<GalleryMedia | MediaAsset>;
		showCategory?: boolean;
		lightbox?: boolean;
	} = $props();

	let activeAsset = $state<MediaAsset | null>(null);

	function mediaKey(item: GalleryMedia | MediaAsset, index: number): string {
		return 'id' in item ? item.id : `${item.src}-${index}`;
	}

	function categoryLabel(item: GalleryMedia | MediaAsset): string | undefined {
		return 'categoryLabel' in item ? item.categoryLabel : undefined;
	}

	function openLightbox(item: GalleryMedia | MediaAsset) {
		if (!lightbox) return;
		activeAsset = item;
	}

	function viewLabel(item: GalleryMedia | MediaAsset): string {
		return isVideo(item) ? `Play video: ${item.alt}` : `View full size: ${item.alt}`;
	}
</script>

<div class="columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-5 sm:space-y-5 lg:columns-3">
	{#each media as item, index (mediaKey(item, index))}
		{@const label = categoryLabel(item)}
		<figure class={['photo-frame break-inside-avoid', showCategory && label && 'group relative']}>
			{#if lightbox}
				<button
					type="button"
					class={[
						'block w-full text-left',
						isVideo(item) ? 'cursor-pointer' : 'cursor-zoom-in'
					]}
					onclick={() => openLightbox(item)}
					aria-label={viewLabel(item)}
				>
					<MediaThumb
						asset={item}
						class={showCategory && label
							? 'transition-transform duration-700 group-hover:scale-105'
							: undefined}
					/>
				</button>
			{:else}
				<MediaThumb
					asset={item}
					class={showCategory && label
						? 'transition-transform duration-700 group-hover:scale-105'
						: undefined}
				/>
			{/if}
			{#if showCategory && label}
				<figcaption
					class="pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<span class="text-overlay">{label}</span>
				</figcaption>
			{/if}
		</figure>
	{/each}
</div>

<Lightbox asset={activeAsset} onclose={() => (activeAsset = null)} />
