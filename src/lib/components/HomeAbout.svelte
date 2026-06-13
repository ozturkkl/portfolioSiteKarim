<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<section class="bg-cream section-padding">
	<div class="container-narrow">
		<div
			class="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-12 lg:gap-16"
		>
			<img
				src={site.about.portrait}
				alt="Portrait of Ilayda"
				class="mx-auto size-48 shrink-0 rounded-full object-cover sm:size-52 md:mx-0 md:size-56 lg:size-64 xl:size-72"
				loading="lazy"
			/>
			<div class="max-w-xl md:max-w-none">
				<h2 class="heading-section">{site.about.greeting}</h2>
				<p class="text-lead mt-6">
					{site.about.intro}
				</p>
			</div>
		</div>
	</div>
</section>
