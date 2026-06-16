export type MediaKind = 'image' | 'video';

export type MediaAsset = {
	src: string;
	fullSrc: string;
	alt: string;
	width: number;
	height: number;
	kind: MediaKind;
};

export type GalleryCategory = {
	id: string;
	label: string;
};

export type GalleryMedia = MediaAsset & {
	id: string;
	category: string;
	categoryLabel: string;
};

export type CoupleSection = {
	id: string;
	label: string;
	media: GalleryMedia[];
	slider?: MediaAsset[];
};

export type PortfolioContent = {
	categories: GalleryCategory[];
	media: GalleryMedia[];
	couples: CoupleSection[];
};

export type SiteManifest = {
	syncedAt: string;
	hero: MediaAsset;
	about: MediaAsset;
	homeAbout: MediaAsset;
	contact: MediaAsset;
	homeGrid: MediaAsset[];
	portfolio: PortfolioContent;
};

export function isVideo(asset: MediaAsset): boolean {
	return asset.kind === 'video';
}
