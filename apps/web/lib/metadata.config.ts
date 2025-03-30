import { Metadata } from 'next';

export const siteConfig = {
	name: 'TurboRepo Template',
	url: 'http://localhost:3000/',
	ogImage: '',
	description: 'This is cool template (turborepo) made by webshark.dev.',
	links: {},
};

const metadataKeyWords = ['Turbo-Repo'];

export const defaultMetadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: metadataKeyWords,
	authors: [
		{
			name: 'webshark.dev',
			url: 'https://github.com/websharkdev',
		},
	],
	creator: 'webshark.dev',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteConfig.url}manifest.webmanifest`,
};
