<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type Props = {
		href?: string;
		variant?: 'ghost' | 'solid' | 'tab';
		active?: boolean;
		block?: boolean;
		disabled?: boolean;
		class?: string;
		children: Snippet;
		type?: 'button' | 'submit' | 'reset';
	} & HTMLAttributes<HTMLButtonElement> &
		HTMLAttributes<HTMLAnchorElement>;

	let {
		href,
		type = 'button',
		variant = 'solid',
		active = false,
		block = false,
		disabled = false,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const classes = $derived([
		variant === 'ghost' && 'btn-ghost',
		variant === 'solid' && 'btn-solid',
		variant === 'tab' && (active ? 'btn-tab-active' : 'btn-tab-inactive'),
		block && 'btn-block',
		className
	]);
</script>

{#if href}
	<a {href} class={classes} {...rest}>
		{@render children()}
	</a>
{:else}
	<button {type} class={classes} {disabled} {...rest}>
		{@render children()}
	</button>
{/if}
