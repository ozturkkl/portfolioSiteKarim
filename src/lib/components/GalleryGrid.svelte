<script lang="ts">
	import type { GalleryImage } from '$lib/data/gallery';

	let { images }: { images: GalleryImage[] } = $props();
</script>

<div class="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
	{#each images as image (image.id)}
		<figure class="photo-frame group relative break-inside-avoid">
			<img
				src={image.src}
				alt={image.alt}
				width={image.width}
				height={image.height}
				class="w-full object-cover transition-transform duration-700 group-hover:scale-105"
				loading="lazy"
			/>
			<figcaption
				class="absolute inset-0 flex items-end bg-linear-to-t from-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<span class="text-overlay">{image.category}</span>
			</figcaption>
		</figure>
	{/each}
</div>
