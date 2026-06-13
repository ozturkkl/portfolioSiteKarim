<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { navLinks, site } from '$lib/data/site';

	let menuOpen = $state(false);
	let heroVisible = $state(true);

	const isHome = $derived($page.url.pathname === '/');
	const useLightHeader = $derived(isHome && heroVisible && !menuOpen);

	function closeMenu() {
		menuOpen = false;
	}

	function isActive(href: string) {
		return $page.url.pathname === href;
	}

	$effect(() => {
		if (!isHome) {
			heroVisible = false;
			return;
		}

		heroVisible = true;
		const hero = document.getElementById('hero');
		if (!hero) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				heroVisible = entry.isIntersecting;
			},
			{ threshold: 0.15 }
		);

		observer.observe(hero);
		return () => observer.disconnect();
	});
</script>

<header class="fixed inset-x-0 top-0 z-50">
	<div
		class={[
			'transition-colors duration-300',
			useLightHeader
				? 'border-transparent bg-transparent'
				: 'border-b border-cream-dark/30 bg-cream/90 backdrop-blur-md'
		]}
	>
		<div
			class="flex min-h-14 items-center justify-between gap-4 px-6 py-2 md:min-h-16 md:items-baseline md:px-10 md:py-2.5"
		>
			<a
				href={resolve('/')}
				class={[
					'nav-link -ml-3 shrink-0 whitespace-nowrap font-serif tracking-[0.08em] lowercase',
					useLightHeader ? 'text-2xl text-white lg:text-3xl' : 'text-2xl text-ink lg:text-3xl'
				]}
			>
				{site.brandName}
			</a>

			<nav class="hidden items-baseline md:flex" aria-label="Main navigation">
				{#each navLinks as link (link.href)}
					<a
						href={resolve(link.href)}
						class={[
							'nav-link text-nav',
							useLightHeader
								? isActive(link.href)
									? 'text-white'
									: 'text-white/85 hover:text-white'
								: isActive(link.href)
									? 'text-accent'
									: 'text-ink-muted hover:text-accent'
						]}
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<button
				type="button"
				class="flex h-10 w-10 shrink-0 items-center justify-center md:hidden"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
				<div class="flex w-5 flex-col gap-1.5">
					<span
						class={[
							'block h-px w-full transition-transform duration-300',
							useLightHeader ? 'bg-white' : 'bg-ink',
							menuOpen && 'translate-y-[7px] rotate-45'
						]}
					></span>
					<span
						class={[
							'block h-px w-full transition-opacity duration-300',
							useLightHeader ? 'bg-white' : 'bg-ink',
							menuOpen && 'opacity-0'
						]}
					></span>
					<span
						class={[
							'block h-px w-full transition-transform duration-300',
							useLightHeader ? 'bg-white' : 'bg-ink',
							menuOpen && '-translate-y-[7px] -rotate-45'
						]}
					></span>
				</div>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav
			class={[
				'border-b px-6 py-8 backdrop-blur-md md:hidden',
				useLightHeader ? 'border-white/10 bg-black/80' : 'border-cream-dark/50 bg-cream/98'
			]}
			aria-label="Mobile navigation"
		>
			<ul class="flex flex-col gap-6">
				{#each navLinks as link (link.href)}
					<li>
						<a
							href={resolve(link.href)}
							class={[
								'nav-link-mobile text-nav-mobile',
								useLightHeader
									? isActive(link.href)
										? 'text-white'
										: 'text-white/85 hover:text-white'
									: isActive(link.href)
										? 'text-accent'
										: 'text-ink-muted hover:text-accent'
							]}
							onclick={closeMenu}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
