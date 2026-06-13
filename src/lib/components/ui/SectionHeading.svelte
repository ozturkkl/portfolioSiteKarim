<script lang="ts">
	let {
		eyebrow,
		title,
		subtitle
	}: {
		eyebrow: string;
		title: string;
		subtitle?: string;
	} = $props();
</script>

<div class="mb-12 text-center md:mb-16">
	<p class="eyebrow">{eyebrow}</p>
	<h2 class="heading-page mt-4">{title}</h2>
	{#if subtitle}
		<p class="text-body-muted mx-auto mt-4 max-w-2xl">
			{subtitle}
		</p>
	{/if}
</div>
