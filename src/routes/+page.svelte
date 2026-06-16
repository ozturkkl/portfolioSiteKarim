<script lang="ts">
	import HeroLanding from '$lib/components/HeroLanding.svelte';
	import HomeAbout from '$lib/components/HomeAbout.svelte';
	import HomeAlbum from '$lib/components/HomeAlbum.svelte';
	import { media } from '$lib/data/media';
</script>

<HeroLanding media={media.hero} />
<HomeAbout portrait={media.homeAbout} />
<HomeAlbum media={media.homeGrid} />
