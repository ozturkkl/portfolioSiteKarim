<script lang="ts">
	import HeroLanding from '$lib/components/HeroLanding.svelte';
	import HomeAbout from '$lib/components/HomeAbout.svelte';
	import HomeAlbum from '$lib/components/HomeAlbum.svelte';
	import { media } from '$lib/data/media';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>{site.name}</title>
</svelte:head>

<HeroLanding asset={media.hero} />
<HomeAbout asset={media.homeAbout} />
<HomeAlbum assets={media.homeGrid} />
