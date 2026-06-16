<script lang="ts">
	import { resolve } from '$app/paths';
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
	import type { MediaAsset } from '$lib/types/media';

	let { media }: { media: MediaAsset[] } = $props();
</script>

<section class="bg-cream px-6 sm:px-8">
	<GalleryGrid {media} showCategory={false} lightbox />

	<div class="py-12 text-center">
		<a href={resolve('/portfolio')} class="btn-text">View portfolio</a>
	</div>
</section>
