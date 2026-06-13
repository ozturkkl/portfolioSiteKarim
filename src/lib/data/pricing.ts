export type PricingPackage = {
	id: string;
	name: string;
	price: string;
	description: string;
	features: string[];
	highlighted?: boolean;
};

export const pricingPackages: PricingPackage[] = [
	{
		id: 'mini',
		name: 'Mini Session',
		price: '$350',
		description: 'Perfect for a quick refresh or milestone moment.',
		features: [
			'30-minute session',
			'1 location',
			'15 edited digital images',
			'Online gallery',
			'2-week delivery'
		]
	},
	{
		id: 'standard',
		name: 'Standard Session',
		price: '$650',
		description: 'Our most popular package for couples and families.',
		features: [
			'1-hour session',
			'Up to 2 locations',
			'40 edited digital images',
			'Online gallery',
			'Print release',
			'2-week delivery'
		],
		highlighted: true
	},
	{
		id: 'premium',
		name: 'Premium Experience',
		price: '$1,200',
		description: 'An immersive session with extra time and deliverables.',
		features: [
			'2-hour session',
			'Up to 3 locations',
			'75+ edited digital images',
			'Online gallery',
			'Print release',
			'10 fine-art prints',
			'1-week priority delivery'
		]
	}
];
