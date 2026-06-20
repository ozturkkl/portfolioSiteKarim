export const site = {
	name: 'Ilayda Turkmen',
	brandName: 'ilayda turkmen',
	headline: 'Your story captured with passion',
	about: {
		greeting: 'Hello, I am Ilayda',
		intro:
			"I'm a creative soul who loves everything about art — drawing, crafting, and most of all, photography. When I shoot, I aim to capture moments in a cinematic way, full of raw emotion. I genuinely love connecting with people, learning their stories, and capturing their essence through my lens.",
		paragraphs: [
			'Maybe that\'s why people often say I "see" them in a special way — because every session is a collaboration, a conversation, and a chance to tell a story that feels uniquely yours.',
			"When I'm not behind the camera, you'll find me exploring new places, collecting vintage finds, or curled up with a good book and too much coffee."
		],
		philosophy: {
			eyebrow: 'Philosophy',
			quote:
				'Photography is the art of freezing time — not to hold it still, but to remind us how beautifully fleeting every moment truly is.'
		}
	},
	contact: {
		email: '97ilaydaturkmen@gmail.com',
		instagram: '@ilaydashoots',
		instagramUrl: 'https://www.instagram.com/ilaydashoots/'
	},
	footer: {
		note: "Hi there — thanks for stopping by. I'm so glad you're here, and I'd love to hear from you anytime."
	}
} as const;

export const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/pricing', label: 'Pricing' },
	{ href: '/contact', label: 'Contact' }
] as const;

export function pageTitle(page: string): string {
	return `${page} — ${site.name}`;
}
