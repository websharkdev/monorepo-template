import { siteConfig } from '@/lib/metadata.config';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/dashboard/',
		},
		sitemap: `${siteConfig.url}sitemap.xml`,
	};
}
