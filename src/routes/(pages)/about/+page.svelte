<script lang="ts">
	import { resolve } from '$app/paths';
	import PageContainer from '$lib/components/ui/PageContainer.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { media } from '$lib/data/media';
	import { pageTitle, site } from '$lib/data/site';
	import { staticSrc } from '$lib/utils/static-src';

	const lastParagraphIndex = site.about.paragraphs.length - 1;
</script>

<svelte:head>
	<title>{pageTitle('About')}</title>
</svelte:head>

<PageContainer>
	<SectionHeading title={site.about.greeting} />

	<div class="grid items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="photo-frame mx-auto w-full max-w-52 sm:max-w-80 lg:mx-0 lg:max-w-none">
			<img
				src={staticSrc(media.about.src)}
				alt={media.about.alt}
				width={media.about.width}
				height={media.about.height}
				class="aspect-1/1 w-full object-cover"
				loading="eager"
			/>
		</div>

		<div>
			<div class="text-body-muted space-y-4">
				<p>{site.about.intro}</p>
				{#each site.about.paragraphs as paragraph, i (i)}
					<p>
						{#if i === lastParagraphIndex}
							{paragraph}
							<a href={resolve('/contact')} class="link-accent">{site.about.cta}</a>
						{:else}
							{paragraph}
						{/if}
					</p>
				{/each}
			</div>

			<blockquote class="mt-8 border-l-2 border-accent pl-6">
				<p class="font-serif text-xl font-light italic leading-relaxed tracking-wide text-ink md:text-2xl">
					{site.about.quote}
				</p>
			</blockquote>
		</div>
	</div>
</PageContainer>
