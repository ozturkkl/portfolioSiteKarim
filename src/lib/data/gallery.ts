export type GalleryImage = {
	id: string;
	src: string;
	alt: string;
	category: 'portraits' | 'couples' | 'families' | 'editorial';
	width: number;
	height: number;
};

export const galleryImages: GalleryImage[] = [
	{
		id: 'g-1',
		src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80&auto=format&fit=crop',
		alt: 'Couple laughing together outdoors',
		category: 'couples',
		width: 800,
		height: 1000
	},
	{
		id: 'g-2',
		src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop',
		alt: 'Portrait of a woman in natural light',
		category: 'portraits',
		width: 800,
		height: 1200
	},
	{
		id: 'g-3',
		src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80&auto=format&fit=crop',
		alt: 'Family portrait in a field',
		category: 'families',
		width: 800,
		height: 600
	},
	{
		id: 'g-4',
		src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80&auto=format&fit=crop',
		alt: 'Wedding couple holding hands',
		category: 'couples',
		width: 800,
		height: 1000
	},
	{
		id: 'g-5',
		src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
		alt: 'Editorial portrait of a man',
		category: 'editorial',
		width: 800,
		height: 1000
	},
	{
		id: 'g-6',
		src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop',
		alt: 'Soft portrait with warm tones',
		category: 'portraits',
		width: 800,
		height: 1200
	},
	{
		id: 'g-7',
		src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&auto=format&fit=crop',
		alt: 'Family moment at the beach',
		category: 'families',
		width: 800,
		height: 600
	},
	{
		id: 'g-8',
		src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop',
		alt: 'Fashion editorial portrait',
		category: 'editorial',
		width: 800,
		height: 1200
	},
	{
		id: 'g-9',
		src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80&auto=format&fit=crop',
		alt: 'Couple in an intimate embrace',
		category: 'couples',
		width: 800,
		height: 1000
	},
	{
		id: 'g-10',
		src: 'https://images.unsplash.com/photo-1469371670807-bfccdd3a06b5?w=800&q=80&auto=format&fit=crop',
		alt: 'Bride and groom walking in a vineyard',
		category: 'couples',
		width: 800,
		height: 1200
	},
	{
		id: 'g-11',
		src: 'https://images.unsplash.com/photo-1520854221256-17451cc791c3?w=800&q=80&auto=format&fit=crop',
		alt: 'Wedding couple portrait outdoors',
		category: 'couples',
		width: 800,
		height: 1000
	},
	{
		id: 'g-12',
		src: 'https://images.unsplash.com/photo-1583939003569-da37374f0146?w=800&q=80&auto=format&fit=crop',
		alt: 'Newlyweds sharing a quiet moment',
		category: 'couples',
		width: 800,
		height: 1200
	},
	{
		id: 'g-13',
		src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
		alt: 'Couple embracing in golden hour light',
		category: 'couples',
		width: 800,
		height: 1000
	},
	{
		id: 'g-14',
		src: 'https://images.unsplash.com/photo-1465495976277-8077dc9f5a9f?w=800&q=80&auto=format&fit=crop',
		alt: 'Bride portrait with soft natural lighting',
		category: 'portraits',
		width: 800,
		height: 1200
	},
	{
		id: 'g-15',
		src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80&auto=format&fit=crop',
		alt: 'Intimate wedding moment',
		category: 'couples',
		width: 800,
		height: 1000
	},
	{
		id: 'g-16',
		src: 'https://images.unsplash.com/photo-1606800052052-a08af8348e18?w=800&q=80&auto=format&fit=crop',
		alt: 'Wedding rings and bouquet detail',
		category: 'editorial',
		width: 800,
		height: 600
	},
	{
		id: 'g-17',
		src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop',
		alt: 'Family walking together outdoors',
		category: 'families',
		width: 800,
		height: 600
	},
	{
		id: 'g-18',
		src: 'https://images.unsplash.com/photo-1529636798458-92182e662988?w=800&q=80&auto=format&fit=crop',
		alt: 'Couple laughing on a city street',
		category: 'couples',
		width: 800,
		height: 1200
	}
];

export const galleryCategories = [
	{ id: 'all', label: 'All' },
	{ id: 'portraits', label: 'Portraits' },
	{ id: 'couples', label: 'Couples' },
	{ id: 'families', label: 'Families' },
	{ id: 'editorial', label: 'Editorial' }
] as const;
