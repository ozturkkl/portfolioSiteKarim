<script lang="ts">
	import { resolve } from '$app/paths';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>About — {site.name}</title>
</svelte:head>

<section class="page-section">
	<div class="container-wide">
		<SectionHeading eyebrow="About me" title="Meet the artist behind the lens" />

		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
			<div class="photo-frame">
				<img
					src={site.about.portrait}
					alt="Portrait of the photographer"
					class="aspect-3/4 w-full object-cover"
					loading="eager"
				/>
			</div>

			<div>
				<h3 class="heading-section">{site.about.greeting}</h3>
				<div class="text-body-muted mt-6 space-y-4">
					<p>{site.about.intro}</p>
					{#each site.about.paragraphs as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</div>

				<a href={resolve('/contact')} class="btn-outline mt-10">
					Let's work together
				</a>
			</div>
		</div>
	</div>
</section>

<section class="section-padding section-surface">
	<div class="container-narrow text-center">
		<p class="eyebrow">{site.about.philosophy.eyebrow}</p>
		<blockquote class="heading-quote mt-6">
			"{site.about.philosophy.quote}"
		</blockquote>
	</div>
</section>
