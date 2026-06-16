<script lang="ts">
	import type { MediaAsset } from '$lib/types/media';
	import { isVideo } from '$lib/types/media';

	let {
		asset = null,
		onclose
	}: {
		asset: MediaAsset | null;
		onclose: () => void;
	} = $props();

	let dialog = $state<HTMLDialogElement | null>(null);
	let videoEl = $state<HTMLVideoElement | null>(null);

	$effect(() => {
		if (!dialog) return;
		if (asset) {
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
</script>

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	class="lightbox fixed inset-0 z-50 m-0 h-full w-full max-h-none max-w-none cursor-zoom-out border-0 bg-black/95 p-0 backdrop:bg-black/95"
	onclose={handleDialogClose}
	onclick={close}
>
	{#if asset}
		<button
			type="button"
			class="absolute top-4 right-4 z-10 text-3xl leading-none text-white/80 transition-colors hover:text-white"
			aria-label="Close"
			onclick={(e) => {
				e.stopPropagation();
				close();
			}}
		>
			×
		</button>
		<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
		<div class="flex h-full w-full items-center justify-center p-4 sm:p-8">
			{#if isVideo(asset)}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div onclick={(e) => e.stopPropagation()}>
					<video
						bind:this={videoEl}
						src={asset.fullSrc}
						class="max-h-[90vh] max-w-full"
						controls
						autoplay
						playsinline
						preload="metadata"
					>
						<track kind="captions" />
					</video>
				</div>
			{:else}
				<img
					src={asset.fullSrc}
					alt={asset.alt}
					class="max-h-[90vh] max-w-full object-contain"
					decoding="async"
					draggable="false"
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
