<script lang="ts">
	import type { Action } from 'svelte/action';
	import { staticSrc } from '$lib/utils/static-src';

	let {
		src,
		fullSrc,
		alt,
		width,
		height,
		loadFull = false,
		class: className = '',
		fullFailed = false,
		onfullerror
	}: {
		src: string;
		fullSrc: string;
		alt: string;
		width: number;
		height: number;
		loadFull?: boolean;
		class?: string;
		fullFailed?: boolean;
		onfullerror?: () => void;
	} = $props();

	const imageClass =
		'absolute inset-0 size-full cursor-pointer object-contain transition-opacity duration-200';

	let paintReady = $state(false);

	const showSpinner = $derived(loadFull && !fullFailed && !paintReady);

	$effect.pre(() => {
		fullSrc;
		loadFull;
		paintReady = false;
	});

	const fullImgAction: Action<HTMLImageElement> = (img) => {
		let cancelled = false;

		const markReady = () => {
			if (cancelled) return;
			paintReady = true;
		};

		const reveal = () => {
			if (cancelled) return;
			if (img.decode) {
				img.decode().then(markReady).catch(markReady);
				return;
			}

			markReady();
		};

		if (img.complete && img.naturalWidth > 0) {
			reveal();
			return {
				destroy() {
					cancelled = true;
				}
			};
		}

		const onLoad = () => {
			img.removeEventListener('load', onLoad);
			reveal();
		};

		img.addEventListener('load', onLoad);

		return {
			destroy() {
				cancelled = true;
				img.removeEventListener('load', onLoad);
			}
		};
	};
</script>

<!-- Both images share a viewport-sized aspect-ratio frame. -->
<div
	class={['flex h-full min-h-0 w-full items-center justify-center', className]}
	aria-busy={showSpinner}
>
	<div
		class="relative h-full w-auto max-h-full max-w-full"
		style:aspect-ratio="{width} / {height}"
	>
		{#key src}
			<img
				src={staticSrc(src)}
				{alt}
				class={[imageClass, 'opacity-100']}
				decoding="async"
				draggable="false"
			/>
		{/key}

		{#if loadFull && !fullFailed}
			{#key fullSrc}
				<img
					use:fullImgAction
					src={fullSrc}
					alt=""
					aria-hidden="true"
					class={[imageClass, paintReady ? 'opacity-100' : 'opacity-0']}
					decoding="async"
					fetchpriority="high"
					draggable="false"
					onerror={onfullerror}
				/>
			{/key}
		{/if}

		{#if showSpinner}
			<div
				class="pointer-events-none absolute inset-0 grid place-items-center"
				role="status"
				aria-label="Loading full resolution image"
			>
				<svg
					class="size-8 animate-spin text-white/80"
					viewBox="0 0 24 24"
					fill="none"
					aria-hidden="true"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
					<path
						class="opacity-90"
						fill="currentColor"
						d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
					/>
				</svg>
			</div>
		{/if}
	</div>
</div>
