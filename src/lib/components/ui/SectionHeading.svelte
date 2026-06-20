<script lang="ts">
	let {
		title,
		subtitle
	}: {
		title: string;
		subtitle?: string;
	} = $props();
</script>

<header class="mb-6 text-center md:mb-10">
	<h1 class="heading-page">{title}</h1>
	{#if subtitle}
		<p class="text-body-muted mx-auto mt-3 max-w-2xl md:mt-4">
			{subtitle}
		</p>
	{/if}
</header>
