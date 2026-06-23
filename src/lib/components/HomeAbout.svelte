<script lang="ts">
	import Portrait from '$lib/components/ui/Portrait.svelte';
	import type { MediaAsset } from '$lib/types/media';
	import { site } from '$lib/data/site';

	let { asset }: { asset: MediaAsset } = $props();
</script>

<section class="bg-cream px-6 py-10 md:px-12 md:py-16 lg:px-20">
	<div class="container-narrow">
		<div
			class="flex flex-col items-center gap-6 text-center md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:text-left lg:gap-16"
		>
			<Portrait {asset} class="shrink-0" />
			<p class="text-lead max-w-prose md:max-w-none">
				{site.homeAbout.intro}
			</p>
		</div>
	</div>
</section>
