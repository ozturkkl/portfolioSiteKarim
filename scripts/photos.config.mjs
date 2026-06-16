import process from 'node:process';

try {
	process.loadEnvFile();
} catch {}

const host = process.env.NEXTCLOUD_HOST;
const shareToken = process.env.NEXTCLOUD_SHARE_TOKEN;

if (!host) throw new Error('Missing NEXTCLOUD_HOST');
if (!shareToken) throw new Error('Missing NEXTCLOUD_SHARE_TOKEN');

const base = host.replace(/\/$/, '');

export const nextcloud = {
	shareToken,
	shareUrl: `${base}/s/${shareToken}`,
	webdavBase: `${base}/public.php/webdav/`,
	publicFilesBase: `${base}/public.php/dav/files/${shareToken}`
};

/** Nextcloud folder/file paths (mirror share layout) */
export const contentPaths = {
	portfolio: '1-PORTFOLIO',
	homeGrid: '0-HOME/GRID',
	hero: '0-HOME/HERO.JPG',
	about: '0-HOME/ABOUT.JPG',
	homeAbout: '0-HOME/ABOUT.JPG',
	contact: '0-HOME/PORTFOLIO.JPG'
};

/** Max output width in px when optimizing JPEGs */
export const sizes = {
	hero: 2200,
	thumb: 1600,
	slider: 2000
};
