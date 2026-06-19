<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		width = 'wide',
		children
	}: {
		width?: 'wide' | 'narrow';
		children: Snippet;
	} = $props();
</script>

<div class={width === 'narrow' ? 'container-narrow' : 'container-wide'}>
	{@render children()}
</div>
