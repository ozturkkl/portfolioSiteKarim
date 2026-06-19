<script lang="ts">
	import type { MediaAsset } from '$lib/types/media';
	import { staticSrc } from '$lib/utils/static-src';

	let {
		asset,
		class: className = ''
	}: {
		asset: MediaAsset;
		class?: string;
	} = $props();
</script>

<img
	src={staticSrc(asset.src)}
	alt={asset.alt}
	width={asset.width}
	height={asset.height}
	class={[
		'shrink-0 rounded-full object-cover',
		'size-48 sm:size-52 md:size-56 lg:size-64 xl:size-72',
		className
	]}
	loading="lazy"
/>
