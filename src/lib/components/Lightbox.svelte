<script lang="ts">
	import type { MediaAsset } from '$lib/types/media';
	import { isVideo } from '$lib/types/media';
	import { staticSrc } from '$lib/utils/static-src';

	let {
		asset = null,
		onclose
	}: {
		asset: MediaAsset | null;
		onclose: () => void;
	} = $props();

	let dialog = $state<HTMLDialogElement | null>(null);
	let videoEl = $state<HTMLVideoElement | null>(null);
	let imageFailed = $state(false);

	$effect(() => {
		if (!dialog) return;
		if (asset) {
			imageFailed = false;
			if (!dialog.open) dialog.showModal();
		} else if (dialog.open) {
			dialog.close();
		}
	});

	$effect(() => {
		if (!asset) videoEl?.pause();
	});

	$effect(() => {
		if (!asset) return;
		const html = document.documentElement;
		const prevHtmlOverflow = html.style.overflow;
		const prevBodyOverflow = document.body.style.overflow;
		html.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
		return () => {
			html.style.overflow = prevHtmlOverflow;
			document.body.style.overflow = prevBodyOverflow;
		};
	});

	function handleDialogClose() {
		videoEl?.pause();
		onclose();
	}

	function close() {
		dialog?.close();
	}

	function handleImageError() {
		imageFailed = true;
	}
</script>

<dialog
	bind:this={dialog}
	class="lightbox fixed inset-0 z-50 m-0 h-full w-full max-h-none max-w-none cursor-zoom-out border-0 bg-black/95 p-0 backdrop:bg-black/95"
	aria-label="Media viewer"
	onclose={handleDialogClose}
	onclick={close}
>
	{#if asset}
		<button
			type="button"
			class="absolute top-4 right-4 z-10 cursor-pointer text-3xl leading-none text-white/80 transition-colors hover:text-white"
			aria-label="Close"
			onclick={(e) => {
				e.stopPropagation();
				close();
			}}
		>
			×
		</button>
		<div class="flex h-full w-full items-center justify-center p-4 sm:p-8">
			{#if isVideo(asset)}
				<div
					role="presentation"
					onclick={(e) => e.stopPropagation()}
					onkeydown={(e) => e.stopPropagation()}
				>
					{#if imageFailed}
						<img
							src={staticSrc(asset.src)}
							alt={asset.alt}
							class="max-h-[90vh] max-w-full object-contain"
							decoding="async"
							draggable="false"
						/>
					{:else}
						<!-- Portfolio clips have no caption track; alt is exposed via aria-label -->
						<!-- svelte-ignore a11y_media_has_caption -->
						<video
							bind:this={videoEl}
							src={asset.fullSrc}
							class="max-h-[90vh] max-w-full"
							controls
							autoplay
							playsinline
							preload="metadata"
							aria-label={asset.alt}
							onerror={handleImageError}
						></video>
					{/if}
				</div>
			{:else}
				<img
					src={imageFailed ? staticSrc(asset.src) : asset.fullSrc}
					alt={asset.alt}
					class="max-h-[90vh] max-w-full object-contain"
					decoding="async"
					draggable="false"
					onerror={handleImageError}
				/>
			{/if}
		</div>
	{/if}
</dialog>

<style>
	.lightbox::backdrop {
		background: rgb(0 0 0 / 0.95);
	}
</style>
