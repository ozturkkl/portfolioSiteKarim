<script lang="ts">
	import HeroLanding from '$lib/components/HeroLanding.svelte';
	import HomeAbout from '$lib/components/HomeAbout.svelte';
	import HomeAlbum from '$lib/components/HomeAlbum.svelte';
	import { galleryImages } from '$lib/data/gallery';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>{site.name}</title>
</svelte:head>

<HeroLanding />
<HomeAbout />
<HomeAlbum images={galleryImages} />
