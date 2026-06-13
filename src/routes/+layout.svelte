<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import { site } from '$lib/data/site';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.cdnfonts.com/css/perandory" rel="stylesheet" />
	<meta name="description" content={site.tagline} />
	<title>{site.name}</title>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />
