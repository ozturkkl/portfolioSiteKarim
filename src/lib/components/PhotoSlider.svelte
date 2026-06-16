<script lang="ts">
	import Lightbox from '$lib/components/Lightbox.svelte';
	import MediaThumb from '$lib/components/MediaThumb.svelte';
	import type { MediaAsset } from '$lib/types/media';
	import { isVideo } from '$lib/types/media';

	let {
		media,
		class: className = ''
	}: {
		media: MediaAsset[];
		class?: string;
	} = $props();

	let index = $state(0);
	let activeAsset = $state<MediaAsset | null>(null);

	const current = $derived(media[index] ?? media[0]);

	function prev() {
		index = (index - 1 + media.length) % media.length;
	}

	function next() {
		index = (index + 1) % media.length;
	}

	function openLightbox() {
		if (current) activeAsset = current;
	}

	function viewLabel(asset: MediaAsset): string {
		return isVideo(asset) ? `Play video: ${asset.alt}` : `View full size: ${asset.alt}`;
	}
</script>

{#if media.length > 0}
	<div class={['relative', className]}>
		<div class="photo-frame aspect-3/2 overflow-hidden">
			<button
				type="button"
				class={['block h-full w-full', isVideo(current) ? 'cursor-pointer' : 'cursor-zoom-in']}
				onclick={openLightbox}
				aria-label={viewLabel(current)}
			>
				<MediaThumb asset={current} class="h-full transition-opacity duration-300" />
			</button>
		</div>

		{#if media.length > 1}
			<button
				type="button"
				class="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-site bg-black/40 px-2 py-3 text-2xl leading-none text-white transition-colors hover:bg-black/60"
				aria-label="Previous slide"
				onclick={(e) => {
					e.stopPropagation();
					prev();
				}}
			>
				‹
			</button>
			<button
				type="button"
				class="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-site bg-black/40 px-2 py-3 text-2xl leading-none text-white transition-colors hover:bg-black/60"
				aria-label="Next slide"
				onclick={(e) => {
					e.stopPropagation();
					next();
				}}
			>
				›
			</button>
			<p class="text-caption mt-3 text-center text-ink-muted">
				{index + 1} / {media.length}
			</p>
		{/if}
	</div>
{/if}

<Lightbox asset={activeAsset} onclose={() => (activeAsset = null)} />
