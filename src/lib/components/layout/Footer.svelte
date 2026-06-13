<script lang="ts">
	import { resolve } from '$app/paths';
	import { navLinks, site } from '$lib/data/site';
</script>

<footer class="border-t border-cream-dark bg-cream-dark/30 px-6 py-12 sm:px-8 md:py-14 lg:px-16">
	<div
		class="flex w-full flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
	>
		<div class="max-w-md">
			<p class="text-body leading-snug">{site.footer.note}</p>
			<p class="mt-2 font-serif text-base tracking-[0.08em] text-ink-muted lowercase">
				© {site.brandName}
			</p>
		</div>

		<nav aria-label="Footer navigation">
			<ul class="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6 lg:justify-start">
				{#each navLinks as link (link.href)}
					<li>
						<a href={resolve(link.href)} class="text-body link">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex flex-col items-center gap-2 lg:items-end">
			<a
				href={site.contact.instagramUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="group link flex items-center gap-3 lg:justify-end"
			>
				<span class="text-base text-ink-muted transition-colors group-hover:text-accent lg:text-right">
					{site.contact.instagram}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					aria-hidden="true"
				>
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
				</svg>
			</a>
			<a href="mailto:{site.contact.email}" class="group link flex items-center gap-3 lg:justify-end">
				<span class="text-base text-ink-muted transition-colors group-hover:text-accent lg:text-right">
					{site.contact.email}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					aria-hidden="true"
				>
					<rect x="2" y="4" width="20" height="16" rx="2" />
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
			</a>
		</div>
	</div>
</footer>
