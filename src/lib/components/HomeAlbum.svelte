<script lang="ts">
	import { resolve } from '$app/paths';
	import type { GalleryImage } from '$lib/data/gallery';

	let { images }: { images: GalleryImage[] } = $props();
</script>

<section class="bg-cream px-6 sm:px-8">
	<div class="w-full">
		<div class="columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-5 sm:space-y-5 lg:columns-3">
			{#each images as image (image.id)}
				<figure class="photo-frame break-inside-avoid">
					<img
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
						class="w-full object-cover"
						loading="lazy"
					/>
				</figure>
			{/each}
		</div>

		<div class="py-12 text-center">
			<a href={resolve('/portfolio')} class="btn-text">
				View portfolio
			</a>
		</div>
	</div>
</section>
