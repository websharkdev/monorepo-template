import '@repo/ui/globals.css';
import { Metadata } from 'next';
import { defaultMetadata } from '@/lib/metadata.config';
import { Geist } from 'next/font/google';
import { PMain } from '@/components/providers';

export const metadata: Metadata = defaultMetadata;

const geist = Geist({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-sans',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressContentEditableWarning suppressHydrationWarning>
			<body className={geist.className} suppressContentEditableWarning suppressHydrationWarning>
				<PMain>{children}</PMain>
			</body>
		</html>
	);
}
