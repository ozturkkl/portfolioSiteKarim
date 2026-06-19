<script lang="ts">
	let {
		title,
		subtitle
	}: {
		title: string;
		subtitle?: string;
	} = $props();
</script>

<header class="mb-8 text-center md:mb-10">
	<h1 class="heading-page">{title}</h1>
	{#if subtitle}
		<p class="text-body-muted mx-auto mt-4 max-w-2xl">
			{subtitle}
		</p>
	{/if}
</header>
